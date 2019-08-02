<template>
  <div class="child">
    <h2>这是子组件</h2>
    <p>回答：{{ answer }}</p>
    <button @click="()=>{$emit('changeAnswer','看着我')}">你要我做什么？</button>
  </div>
</template>

<script>
export default {
  props: {
    answer: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.child {
  border-style: solid;
  border-width: 5px;
  width: 300px;
}
</style>



