<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>content</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in $store.state.data" :key="index">
          <th>
            <router-link :id="item.id" :to="`/${item.id}`">{{ $store.state.data[index].title }}</router-link>
          </th>
          <th>
            {{ $store.state.data[index].author }}
          </th>
          <th>
            {{ $store.state.data[index].content }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getData')
  },
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
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
