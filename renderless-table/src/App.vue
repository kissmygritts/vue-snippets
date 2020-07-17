<template>
  <div class="container">
    <h1>{{ message }}</h1>

    <renderless-table
      url="http://localhost:8000/species/4b59a91b-a4c2-460a-9e32-9efddf7ac938/fish-entries"
      :params="params"
      v-slot="{ pending, error, data }"
    >
      <div v-if="pending">
        loading...
      </div>
      <div v-else-if="error">
        {{ error }}
      </div>
      <div v-else>
        <table style="width:100%">
          <thead>
            <tr>
              <th
                v-for="field in tableFields"
                :key="field.prop"
              >
                {{ field.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in data.data"
              :key="row.id"
            >
              <td
                v-for="(field, index) in tableFields"
                :key="index"
              >
                {{ row[field.prop] }}
              </td>
            </tr>
          </tbody>
        </table>
      
        <div>
          <p>Current Page: {{ page }}</p>
          <p>Rows: {{ recordRange[0] }} - {{ recordRange[1] }} of {{ data.totalRecords }}</p>
          <button @click="paginate(-1)">Previous Page</button>
          <button @click="paginate(1)">Next Page</button>
        </div>
      </div>
    </renderless-table>
  </div>
</template>

<script>
import RenderlessTable from './components/renderless-table.js'

export default {
  name: 'App',

  components: {
    RenderlessTable
  },

  data() {
    return {
      message: 'Using Parcel In A Vue.js App',
      tableFields: [
        {
          label: 'Angler Name',
          prop: 'angler_name'
        }, {
          label: 'Species',
          prop: 'species'
        }, {
          label: 'Water Name',
          prop: 'water_name'
        }
      ],
      page: 1,
      perPage: 15
    }
  },

  computed: {
    params () {
      return {
        page: this.page,
        per_page: this.perPage
      }
    },

    recordRange () {
      let max = this.perPage * this.page
      const min = max - (this.perPage - 1)

      if (max > this.totalRecords) {
        max = this.totalRecords
      }

      return [ min, max ]
    },

    totalRecords () {
      return this.$children[0].$data.data.totalRecords
    },

    hasNextPage () {
      return this.recordRange[1] < this.totalRecords
    }
  },

  methods: {
    paginate (n) {
      this.page = this.page + n
    }
  }
}
</script>

<style scoped>
  .container {
    width: 600px;
    margin: 50px auto;
    text-align: center;
  }
</style>
