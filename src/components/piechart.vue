<template>
  <canvas ref="pieChart"></canvas>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      context: null
    };
  },
  mounted() {
      const temp =90;
    const startAngle=temp*Math.PI/180;
    const endAngle = (temp+180)*Math.PI/180;
    console.log("mounted");
    this.context = this.$refs["pieChart"].getContext("2d");
    this.context.beginPath();
    this.context.arc(100, 100, 50, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.fillStyle = "#FF00FF";
    this.context.fill();
    this.context.closePath();
    this.context.beginPath();
    this.context.translate(100, 100);
    this.context.moveTo(0, 0);
    this.context.arc(0, 0, 50, startAngle, endAngle ,false);
     this.context.fillStyle = "#FFFF00";
    this.context.fill();
    this.context.closePath();
  }
};
</script>
