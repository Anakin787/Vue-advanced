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
                    <th>{{ $store.state.data[$route.params.id - 1].title }}</th>
                    <th>{{ $store.state.data[$route.params.id - 1].author }}</th>
                    <th>{{ $store.state.data[$route.params.id - 1].created_at }}</th>
                    <th>{{ $store.state.data[$route.params.id - 1].modified_at }}</th>
                    <th>{{ $store.state.data[$route.params.id - 1].content }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        id: Number
    }
}
</script>

<style>
table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #444444;
    padding: 10px;
}
</style>