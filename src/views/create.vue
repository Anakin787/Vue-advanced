<template>
    <div>
        <p style="font-size: 2rem; color: green;">Create</p>
        <form @keyup.enter="upload">
            <p>Title : </p><input type="text" v-model="list.title" placeholder="제목을 입력하세요">
            <p>Author : </p><input type="text" v-model="list.author" placeholder="작성자를 입력하세요">
            <p>content : </p><input class="tarea" v-model="list.content" placeholder="내용을 입력하세요"><br>
            <router-link to="/"><button class="btn" @click="upload">등록</button></router-link>
        </form>
    </div>
</template>

<script>

export default {
    beforeMount() {
        this.$store.dispatch('getData')
    },
    data() {
        return {
            list: {
                title: '',
                author: '',
                created_at: new Date().toLocaleString(),
                modified_at: new Date().toLocaleString(),
                content: ''
            },
        }
    },
    methods: {
        upload() {
            this.$store.dispatch('postData', this.list)
        }
    }
}
</script>

<style>
body {
    margin: 0;
    text-align: center;
    box-sizing: border-box;
}

p {
    font-size: large;
    font-weight: 600;
}

.tarea {
    width: 500px;
    height: 200px;
}

.btn {
    background: aliceblue;
    border: 1px solid black;
    border-radius: 5px;
    font-size: large;

}
</style>