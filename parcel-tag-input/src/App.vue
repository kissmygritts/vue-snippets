<template>
    <renderless-tags-input class="container"
      v-model="tags"
      v-slot="{ tags, removeTag, inputAttrs, inputEvents }"
    >
      <div class="tags-input">
        <span v-for="tag in tags" class="tags-input-tag">
          <span>{{ tag }}</span>
          <button type="button" class="tags-input-remove"
            @click="removeTag(tag)">
            &times;
          </button>
        </span>
        <input class="tags-input-text" placeholder="add tag..." /
          v-bind="inputAttrs"
          v-on="inputEvents"
        >
      </div>
    </renderless-tags-input>
</template>

<script>
import RenderlessTagsInput from './components/renderless-tags-input.js'

export default {
  name: 'App',
  components: {
    RenderlessTagsInput
  },
  data() {
    return {
      tags: ['Testing', 'Design']
    };
  },
};
</script>

<style scoped>
  .container {
    width: 600px;
    margin: 50px auto;
    text-align: center;
  }
</style>
