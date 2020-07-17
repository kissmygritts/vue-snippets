export default {
  props: {
    page: {
      type: Number,
      default: 1
    }
  },

  methods: {
    paginate () {
      this.$emit('paginate', this.page++)
    }
  },

  render () {
    return this.$scopedSlots.default({
      page: this.page,
      paginate: this.paginate
    })
  }
}