import axios from 'axios'

export default {
  props: {
    url: {
      type: String,
      default: "",
      required: true
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      pending: true,
      error: false,
      data: null
    }
  },

  watch: {
    url () {
      this.requestData
    },
    params: {
      deep: true,
      handler () {
        this.requestData()
      }
    }
  },

  mounted () {
    this.requestData()
  },

  methods: {
    async requestData () {
      this.pending = true
      
      try {
        // make request
        const { data } = await axios.get(this.url, {
          params: this.params
        })
        
        // set data
        this.data = data
        this.error = false
      } catch (e) {
        // handle errors, set data
        this.data = null
        this.error = e
      }

      this.pending = false
    }
  },

  render () {
    return this.$scopedSlots.default({
      pending: this.pending,
      error: this.error,
      data: this.data
    })
  }
}
