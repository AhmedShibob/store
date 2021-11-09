<template>
  <div class="flex justify-center items-center flex-col">
    <ul class="m-20">
      <li v-for="dataRow in list()" :key="dataRow.id">{{ dataRow.title }}</li>
    </ul>

    <div class="flex mb-20">
      <form>
        <div>
          <input v-model="input" type="text" placeholder="enter text" />

          <button @click.prevent="addNewData">add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      input: '',
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapState(['list']),
    ...mapActions(['Savelist']),
    getData() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => this.Savelist(json))
    },
    addNewData() {
      if (this.input) {
        const payload = {
          title: this.input,
          id: this.list().length,
        }

        const newData = [...this.list(), payload]

        this.Savelist(newData)

        this.input = ''
      }
    },
  },
}
</script>
