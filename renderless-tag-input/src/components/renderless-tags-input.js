export default {
  props: ['value'],
  data () {
    return {
      newTag: ''
    }
  },
  methods: {
    addTag() {
      // trim whitespace from the new tag
      const addedTag = this.newTag.trim()
      console.log(addedTag)
      if (addedTag.length === 0 || this.value.includes(addedTag)) {
        // if the new tag is empty, or is already in the values prop don't do anything
        return
      }
      
      // emit input event with the new payload (all the tags including the new one)
      this.$emit('input', [...this.value, addedTag ])
      this.newTag = ''
    },
    removeTag(tag) {
      this.$emit('input', this.value.filter(t => t !== tag))
    }
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.value,
      addTag: this.addTag,
      removeTag: this.removeTag,
      inputAttrs: {
        value: this.newTag
      },
      inputEvents: {
        input: (e) => { this.newTag = e.target.value },
        keydown: (e) => {
          if (e.keyCode === 13) {
            e.preventDefault()
            this.addTag()
          }
        }
      }
    }) 
  }
}
