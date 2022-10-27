<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>작성자</th>
                    <th>생성일자</th>
                    <th>수정일자</th>
                    <th>content</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{{ storeData.title }}</th>
                    <th>{{ storeData.author }}</th>
                    <th>{{ storeData.created_at }}</th>
                    <th>{{ storeData.modified_at }}</th>
                    <th>{{ storeData.content }}</th>
                </tr>
            </tbody>
        </table><br>
        <table>
            <thead>
                <tr>
                    <th>작성자</th>
                    <th>내용</th>
                </tr>
            </thead>
            <tbody v-for="(item, index) in arr" :key="index">
                <tr>
                    <th>{{ item.author }}</th>
                    <th>{{ item.content }}</th>
                </tr>
            </tbody>
        </table>

        <div v-if="state == 1">
            <p style="font-size: 1.5rem; color: green;">Comment</p>
            <form @keyup.enter="upload">
                <p>Author : </p><input type="text" v-model="list.author" placeholder="작성자를 입력하세요">
                <p>content : </p><textarea class="tarea" v-model="list.content" placeholder="댓글을 입력하세요"></textarea><br>
                <router-link :to="`/${$route.params.id}`"><button class="btn"
                        @click="uploadComment(list); state = 0">등록</button></router-link>
            </form>
        </div>

        <router-link :to="`/mod/${$route.params.id}`"><button>수정</button></router-link>
        <router-link to="/"><button @click="del">삭제</button></router-link>
        <button @click="state = 1">댓글추가</button>
        <!-- <router-link :to="`/comment/${$route.params.id}`"></router-link> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    //페이지 로딩시 전체데이터 말고 누른데이터만(parmas.id로) 가져오기
    //기존 : 전체데이터를 가져와서 그 중 몇번째인지를 params.id로했다. 따라서 id와 배열위치가 불일치 하는 현상 발생
    mounted() {
        this.$store.dispatch('getData')
        this.$store.dispatch('getCommentData')
    },
    data() {
        return {
            list: {
                post_id: this.$route.params.id,
                author: '',
                created_at: new Date().toLocaleString(),
                content: ''
            },
            state: 0,
            arr: matchid()
        }
    },
    name: 'detail',
    computed: {
        storeData() {
            return this.$store.state.data[this.$route.params.id - 1]
        },
        storeCommentData() {
            return this.$store.state.commentData
        }
    },
    methods: {
        del() {
            this.$store.dispatch('delData', this.$route.params.id)
        },
        uploadComment(list) {
            axios.post('http://192.168.70.212/comments', list)
        },
        matchid() {
            const arr = this.storeCommentData.filter(this.storeCommentData.post_id == this.storeData.id)
            return arr
        }
    },
}
</script>

<style>
table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
}

button {
    width: 100px;
    height: 40px;
    margin: 10px;
    background: #42b983;
    border-radius: 15px;
    font-size: large;
}

th,
td {
    border: 1px solid #444444;
    padding: 10px;
}
</style>