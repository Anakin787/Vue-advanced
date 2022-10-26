<template>
    <div>
        <!-- comment입력하여 상세페이지에 뜨게 하는것
        상세페이지의 id(post_id)에 맞춰서 /comment페이지에 등록하고 /detail에 comment만 가져오기 -->
        <p style="font-size: 2rem; color: green;">Comment</p>
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

}
</script>

<style>

</style>