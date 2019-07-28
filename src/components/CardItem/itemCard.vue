<template>
  <div class="itemCard">
    <pieChart></pieChart>
    <div class="itemCardDetail"></div>
  </div>
</template>
<script>
import pieChart from "../piechart";
import { itemCardModel } from "../../model";
export default {
  components: { pieChart },

  data() {
    return {
      modelData: new itemCardModel(),
      itemCardData: [],
      itemList: []
    };
  },
  mounted() {
    this.getItemList();
    this.getItemData();
  },
  methods: {
    getItemData() {
      this.modelData.getItemCarInfo().then(response => {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          this.itemCardData.push(response[i].id);
        }
        console.log(this.itemCardData);
      });
    },
    getItemList() {
      this.modelData.getItemList().then(response => {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          this.itemList.push(response[i].listId);
        }
        console.log(this.itemList);
      });
    }
  }
};
</script>
<style>
</style>
