<template>
  <div id="parent">
    <h1>这是父组件</h1>
    <div class="chuanzhi">
      <h3>该部分测试传值（子to父，父to子）</h3>
      <p>你是谁？</p>
      <child :answer="answer" @changeAnswer="changeAnswer"></child>
    </div>
    <div class="vuex">
      <h3>这部分测试vueX</h3>
      柠檬2元一个，买{{lemonCount}}个
      <button @click="addLemon(Number(countLemon))">增加</button>
      <button @click="reduceLemon(Number(countLemon))">减少</button>
      <input type="number" placeholder="增加或减少的数量" v-model="countLemon" />
      <br />
      桃子3元一个，买{{peachCount}}个
      <button @click="addPeach(Number(countPeach))">增加</button>
      <button @click="reducePeach(Number(countPeach))">减少</button>
      <input type="number" placeholder="增加或减少的数量" v-model="countPeach" />
      <br />
      总价为:{{sumPrice}}元
    </div>
    <div class="interface">
      <h3>这部分测试表单，http请求和后台接口</h3>
    </div>
  </div>
</template>

<script>
import Child from "./child";
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      answer: "罗大佑",
      countLemon: 1,
      countPeach: 1
    };
  },
  components: {
    child: Child
  },
  methods: {
    changeAnswer(param) {
      this.answer = param;
    },
    ...mapActions("lemon", { addLemon: "add" }),
    ...mapActions("lemon", { reduceLemon: "reduce" }),
    ...mapActions("peach", { addPeach: "add" }),
    ...mapActions("peach", { reducePeach: "reduce" })
    /**
     * 以下两种写法都可行
     */
    // addLemon(param) {
    //   this.$store.commit("lemon/add", param);
    // },
    // ...mapMutations({
    //   addLemon: "lemon/add"
    // })
  },
  computed: {
    lemonCount() {
      return this.$store.state.lemon.lemonCount;
    },
    peachCount() {
      return this.$store.state.peach.peachCount;
    },
    sumPrice() {
      let sum = this.lemonCount * 2 + this.peachCount * 3;
      return sum;
    }
  }
};
</script>

<style scoped>
#parent {
  width: 500px;
  border-style: solid;
  border-width: 5px;
  margin: auto; /*使整个父组件居中 */
  text-align: center;
}
.chuanzhi {
  background-color: aqua;
}
.vuex {
  background-color: aquamarine;
}
.interface {
  background-color: antiquewhite;
}
h3 {
  color: crimson;
}
</style>


