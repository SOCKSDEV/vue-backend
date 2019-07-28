<template>
  <div class="use-flex">
    <SideBar class="left"></SideBar>
    <div class="right">
      <Navigator></Navigator>
      <div>
       <itemCard></itemCard>
      </div>
    </div>
  </div>
</template>
<script>

import SideBar from "./components/SideBar";
import Navigator from "./components/Navigator";
import itemCard from './components/CardItem/itemCard'
export default {
  components: { SideBar, Navigator,itemCard }
};
</script>

<style>
.use-flex {
  display: flex;
}

.left {
  flex: none;
  width: 200px;
  background-color: red;
}

.right {
  flex: 1;
  background-color: green;
}
</style>
