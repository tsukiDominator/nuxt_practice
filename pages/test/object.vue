<template>
  <button @click="axiosTest">测试</button>
</template>

<script>
class User {
  constructor(data) {
    for (let key in data) {
      this[key] = data[key];
    }
  }
}
import axios from "axios";
export default {
  methods: {
    myFunc() {
      var obj1 = {
        filed1: "",
        filed2: "",
        filed3: ""
      };
      var obj2 = {
        filed1: 1,
        filed2: 2,
        filed3: 3,
        filed4: 4
      };
      console.log(new User(obj2));
    },
    axiosTest() {}
  }
};
</script>