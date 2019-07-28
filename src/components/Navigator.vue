<template>
  <div class="navigator-container">
    <ul>
      <li>
        <button><</button>
      </li>
       <li>
       
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  methods: {
    aniSideBar() {
      this.$emit("aniSideBar");
    }
  }
};
</script>
<style>
.navigator-container {
  width: 100%;
}
.navigator-container ul {
  list-style: none;
  padding: 0px
}
</style>

