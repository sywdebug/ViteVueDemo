<template>
  <div class="about">
    <p>about</p>
    <p>{{ test1 }}</p>
    <p>{{ test2 }}</p>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    return {
      test1: "",
      test2: "",
    };
  },
  created() {
    let a = {
      a1: "大大大",
      a2: "小小小",
      a3: "1234567",
    };
    
    let test1 = this.$qs.stringify(a);
    this.test1 = test1;
    console.log("test1：", test1);

    let test2 = this.$qs.parse(test1);
    this.test2 = test2;
    console.log("test2：", test2);
  },
};
</script>
