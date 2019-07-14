<template>
  <div id="app">
    <div>
      <Navigator
        class
        @aniSideBar="isOpenSideBar()"
       
      ></Navigator>
      <SideBar  v-bind:class="{isOpenSideBar: this.isOpenSideBar,isCloseSideBar: this.isCloseSideBar}"></SideBar>
    </div>
  </div>
</template>

<script>
import Navigator from "./components/Navigator";
import SideBar from "./components/SideBar";

export default {
  name: "app",
  data() {
    return {
      isActive1: false,
      isCloseSideBar: false
    };
  },
  methods: {
    sidebarIsOpen() {
      this.isActive1 = !this.isActive1;
    }
  },
  components: {
    Navigator,
    SideBar
  },
  methods: {
    isOpenSideBar() {
      if (this.isActive1 == false && this.isCloseSideBar == false) {
        this.isActive1 = true;
      } else {
        this.isActive1 = !this.isActive1;
        this.isCloseSideBar = !this.isCloseSideBar;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 300px;
  color: #2c3e50;
}
.isOpenSideBar {
  animation-name: aniOpenSideBar;
  animation-duration: 4s;
}
.isCloseSideBar{
   animation-name: aniCloseSideBar;
  animation-duration: 4s;
}
@keyframes aniOpenSideBar {
  from {
   width:0px
  }
  to {
    width:100%
  }
}
@keyframes aniCloseSideBar {
  from {
   width:100%
  }
  to {
     width:0px
  }
}
</style>
