<template>
  <div class="home">
    <p>home</p>
    <button @click="toAbout">跳转关于</button>
  </div>
</template>
<script>
export default {
  setup() {},
  methods: {
    toAbout() {
      this.$router.push("/about");
    },
  },
};
</script>
