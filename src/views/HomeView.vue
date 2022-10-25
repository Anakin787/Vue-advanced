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

    <router-link to="/new">
      <p class="new">Create</p>
    </router-link>

  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getData')
  },
  name: 'HomeView',
  components: {

  },
  //computed()사용해서 변수 사용 (집가서 해보는 걸로)
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

.new {
  display: inline-block;
  width: 100px;
  height: 20px;
  border: 1px solid black;
  border-radius: 15px;
  background: ivory;
  color: #42b983;
  font-size: medium;
  margin-top: 10px;
}
</style>
