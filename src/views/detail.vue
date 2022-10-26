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
        </table>

        <router-link :to="`/mod/${$route.params.id}`"><button>수정</button></router-link>
        <router-link to="/"><button @click="del">삭제</button></router-link>
        <router-link to="/comment"><button>댓글</button></router-link>
    </div>
</template>

<script>
export default {
    beforeMount() {
        this.$store.dispatch('getData')
    },
    name: 'detail',
    computed: {
        storeData() {//내가 누른게 배열의 몇번째 인지
            return this.$store.state.data[this.$route.params.id - 1]
        }
    },
    methods: {
        del() {
            this.$store.dispatch('delData', this.$route.params.id)
        }
    }
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