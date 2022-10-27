<template>
    <div>
        <div class="container">
            <p style="font-size: 2rem; color: green;">Create</p>
            <form @keyup.enter="upload">
                <p>Title</p><input class="text" type="text" v-model="list.title" placeholder="제목을 입력하세요">
                <p>Author</p><input class="text" type="text" v-model="list.author" placeholder="작성자를 입력하세요">
                <p>Content</p><input class="text" v-model="list.content" placeholder="내용을 입력하세요"><br>
                <router-link to="/"><button @click="upload">등록</button></router-link>
            </form>
        </div>
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
p {
    font-size: large;
    font-weight: 600;
}

.text {
    width: 200px;
    height: 20px;
    text-align: center;
}
</style>