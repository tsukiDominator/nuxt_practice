<template>
  <div id="parent">
    <h1>这是父组件</h1>
    <div class="chuanzhi">
      <h3>该部分测试传值（子to父，父to子）</h3>
      <p>你是谁？</p>
      <child :answer="answer" @changeAnswer="changeAnswer"></child>
    </div>
  </div>
</template>

<script>
import Child from "./child";
export default {
  data() {
    return {
      answer: "罗大佑"
    };
  },
  components: {
    child: Child
  },
  methods: {
    changeAnswer(param) {
      this.answer = param;
    }
  }
};
</script>

<style scoped>
.chuanzhi {
  background-color: aqua;
}
</style>


