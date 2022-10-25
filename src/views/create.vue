<template>
    <div>
        <form v-on:submit="onSubmitForm">
            <p>Title : </p><input type="text" v-model="title">
            <p>Author : </p><input type="text" v-model="author">
            <!-- <p>created_at : </p><input> -->
            <!-- <p>modified_at : </p><input> -->
            <p>content : </p><input type="text" v-model="content"><br>
            <button v-on:submit="onSubmitForm">저장</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: '',
            author: '',
            create: new Date().toLocaleString(),
            modify: new Date().toLocaleString(),
            content: '',
            new: { "title": title, "author": author, "created_at": create, "modified_at": modify, "content": content }
        }
    },
    methods: {
        onSubmitForm(e) {
            e.preventDefault();
            commit('addData', this.new)
        }
    }
    //1. 입력한 값을 변수에 저장
    //2. object형식으로 가공
    //3. data에 push
}
</script>

<style>

</style>