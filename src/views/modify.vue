<template>
    <div>
        <p style="font-size: 2rem; color: green;">Modify</p>
        <form @keyup.enter="updateData(data)">
            <p>Title : </p><input type="text" v-model="data.title" placeholder="제목을 입력하세요">
            <p>Author : </p><input type="text" v-model="data.author" placeholder="작성자를 입력하세요">
            <p>content : </p><input class="tarea" v-model="data.content" placeholder="내용을 입력하세요"><br>
            <router-link to="/"><button class="btn" @click="updateData(data)">수정</button></router-link>
        </form>
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
            // list: {
            //     title: this.$store.state.data[this.$route.params.id - 1].title,
            //     author: this.$store.state.data[this.$route.params.id - 1].author,
            //     created_at: this.$store.state.data[this.$route.params.id - 1].created_at,
            //     modified_at: new Date().toLocaleString(),
            //     content: this.$store.state.data[this.$route.params.id - 1].content
            // },
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
input {
    text-align: center;
}
</style>