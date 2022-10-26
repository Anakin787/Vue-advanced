<template>
    <div>
        <p style="font-size: 2rem; color: green;">Modify</p>
        <form @keyup.enter="updateData(list)">
            <p>Title : </p><input type="text" v-model="list.title" placeholder="제목을 입력하세요">
            <p>Author : </p><input type="text" v-model="list.author" placeholder="작성자를 입력하세요">
            <p>content : </p><input class="tarea" v-model="list.content" placeholder="내용을 입력하세요"><br>
            <router-link to="/"><button class="btn" @click="updateData(list)">수정</button></router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'modify',
    mounted() {
        this.$store.dispatch('getData')
    },
    data() {
        return {
            list: {
                title: this.$store.state.data[this.$route.params.id - 1].title,
                author: this.$store.state.data[this.$route.params.id - 1].author,
                created_at: this.$store.state.data[this.$route.params.id - 1].created_at,
                modified_at: new Date().toLocaleString(),
                content: this.$store.state.data[this.$route.params.id - 1].content
            },
        }
    },
    methods: {
        updateData(payload) {
            axios.put(`http://192.168.70.212/posts/${this.$route.params.id}`, payload)
        },
    }
}
</script>

<style>
input {
    text-align: center;
}
</style>