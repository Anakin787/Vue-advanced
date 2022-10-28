<template>
    <div>
        <table>
            <thead class="head">
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
            <thead class="head">
                <tr>
                    <th class="writer rightline">작성자</th>
                    <th class="content">내용</th>
                </tr>
            </thead>
            <tbody v-for="(item, index) in matchid()" :key="index">
                <tr>
                    <th class="rightline
                    ">{{ item.author }}</th>
                    <th>{{ item.content }}</th>
                </tr>
            </tbody>
        </table>

        <div class="container" v-if="state == 1">
            <p style="font-size: 1.5rem; color: green;">Comment</p>
            <form @keyup.enter="upload">
                <p class="inline">Author : </p><input class="text" type="text" v-model="list.author"
                    placeholder="작성자를 입력하세요">
                <p class="inline mg">Content : </p><input class="text" v-model="list.content" placeholder="댓글을 입력하세요">
                <router-link class="inline margin" :to="`/${$route.params.id}`"><button style="height: 30px;"
                        @click="uploadComment(list); state = 0">등록</button>
                </router-link>
            </form>
        </div>

        <router-link class="margin" :to="`/mod/${$route.params.id}`"><button>수정</button></router-link>
        <router-link class="margin" to="/"><button style="background: burlywood;" @click="del">삭제</button></router-link>
        <button style="background: forestgreen;" class="margin" @click="state = 1">댓글달기</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    mounted() {
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
            axios.delete(`http://192.168.70.212/posts/${this.$route.params.id}`)
        },
        uploadComment(list) {
            axios.post('http://192.168.70.212/comments', list).then(() => this.$router.go(0))
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
    width: 90%;
    border: 2px solid #42b983;
    border-collapse: collapse;
    margin: auto;
    margin-bottom: 20px;
}

.margin {
    margin-left: 10px;
    margin-right: 10px;
}

p {
    margin-top: 30px;
    margin-bottom: 10px;
}

.head {
    color: burlywood;
    border-bottom: 3px double black;
}

.rightline {
    border-right: 2px groove #42b983;
}

.writer {
    width: 400px;
}

.inline {
    display: inline;
}


button {
    width: 100px;
    height: 40px;
    background: #42b983;
    font-size: large;
    cursor: pointer;
    transition: all 0.5s;
    border: none;
}

button:hover {
    width: 150px;
    color: ivory;
    background: blueviolet;
}

th,
td {
    border: 1px dotted #444444;
    padding: 10px;
}
</style>