<template>
    <div>
        <div class="container">
            <p style="font-size: 1.7rem; color: green;">Modify</p>
            <form @keyup.enter="updateData(data)">
                <p>Title</p><input class="text" type="text" v-model="data.title" placeholder="제목을 입력하세요">
                <p>Author</p><input class="text" type="text" v-model="data.author" placeholder="작성자를 입력하세요">
                <p>Content</p><textarea class="text" v-model="data.content" placeholder="내용을 입력하세요"></textarea><br>
                <router-link :to="`/${$route.params.id}`"><button @click="updateData(data)">수정</button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'modify',
    mounted() {
        this.getData()
    },
    data() {
        return {
            data: [],
        }
    },
    methods: {
        updateData(payload) {
            axios.put(`http://192.168.70.212/posts/${this.$route.params.id}`, payload)
        },
        getData() {
            axios.get(`http://192.168.70.212/posts/${this.$route.params.id}`).then(a => { this.data = a.data })
        },
    }
}
</script>

<style>
.container {
    background: ivory;
    width: 70%;
    margin: auto;
    border: 2px solid black;
}

p {
    font-size: 1.5rem;
}

button {
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 15px;
}
</style>