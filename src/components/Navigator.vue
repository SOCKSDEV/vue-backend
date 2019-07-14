<template>
  <div class="navigator-container">
    <b-nav pills>
      <b-nav-item active @click="aniSideBar()">右邊</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </div>
</template>
<style>
.navigator-container {
  width: 60%;
  float: right;
}
</style>
<script>
export default {
  methods: {
    aniSideBar() {
     
      this.$emit("aniSideBar");
    }
  }
};
</script>
