<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>content</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in storeData" :key="index">
          <th>
            {{ storeData[index].id }}
          </th>
          <th>
            <router-link :to="`/${item.id}`">{{ storeData[index].title }}</router-link>
          </th>
          <th>
            {{ storeData[index].author }}
          </th>
          <th>
            {{ storeData[index].content }}
          </th>
        </tr>
      </tbody>
    </table>

    <router-link to="/new">
      <p class="new">등록</p>
    </router-link>

  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('getData')
  },
  name: 'HomeView',
  computed: {
    storeData() {
      return this.$store.state.data
    }
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
