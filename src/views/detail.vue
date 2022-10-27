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
                    <th>{{ data.title }}</th>
                    <th>{{ data.author }}</th>
                    <th>{{ data.created_at }}</th>
                    <th>{{ data.modified_at }}</th>
                    <th>{{ data.content }}</th>
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
            <tbody v-for="(item, index) in matchid()" :key="index">
                <tr>
                    <th>{{ item.author }}</th>
                    <th>{{ item.content }}</th>
                </tr>
            </tbody>
        </table>

        <div v-if="state == 1">
            <p style="font-size: 1.5rem; color: green;">Comment</p>
            <form @keyup.enter="upload">
                <p class="inline">Author : </p><input class="text" type="text" v-model="list.author"
                    placeholder="작성자를 입력하세요">
                <p class="inline mg">content : </p><input class="text" v-model="list.content" placeholder="댓글을 입력하세요">
                <router-link class="inline" :to="`/${$route.params.id}`"><button class="btn"
                        @click="uploadComment(list); state = 0">등록</button></router-link>
            </form>
        </div>

        <router-link :to="`/mod/${$route.params.id}`"><button>수정</button></router-link>
        <router-link to="/"><button @click="del">삭제</button></router-link>
        <button @click="state = 1">댓글달기</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    created() {
        this.getData()
        this.getCommentData()
    },
    data() {
        return {
            list: {
                post_id: this.$route.params.id,
                author: '',
                created_at: new Date().toLocaleString(),
                content: ''
            },
            data: [],
            commentData: [],
            state: 0,
        }
    },
    name: 'detail',
    methods: {
        del() {
            this.$store.dispatch('delData', this.$route.params.id)
        },
        uploadComment(list) {
            axios.post('http://192.168.70.212/comments', list)
        },
        matchid() {
            const arr = this.commentData.filter(id => id.post_id == this.data.id)
            return arr
        },
        getData() {
            axios.get(`http://192.168.70.212/posts/${this.$route.params.id}`).then(a => { this.data = a.data })
        },
        getCommentData() {
            axios.get('http://192.168.70.212/comments/').then(a => { this.commentData = a.data })
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

.inline {
    display: inline;
}

.mg {
    margin-left: 10px;
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