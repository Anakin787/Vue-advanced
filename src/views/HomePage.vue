<template>
  <div>
    <table>
      <thead class="head">
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
            <router-link class="hover" :to="`/${item.id}`">{{ storeData[index].title }}</router-link>
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
      <button style="border: 2px solid black;">등록</button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    storeData() {
      return this.$store.state.data
    }
  },
  beforeMount() {
    this.$store.dispatch('getData')
  },
}
</script>

<style scoped>
table {
  width: 90%;
  margin: auto;
  border: none;
  border-collapse: collapse;
}

body {
  margin: 0;
  text-align: center;
  box-sizing: border-box;
}

th,
td {
  border: 2px solid black;
  padding: 10px;
}

.head {
  color: burlywood;
}

.hover:hover {
  color: #42b983;
}

button {
  display: inline-block;
  width: 100px;
  height: 30px;
  color: #42b983;
  background: ivory;
  font-size: large;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.5s;
}

button:hover {
  color: ivory;
  background: #42b983;
}
</style>
