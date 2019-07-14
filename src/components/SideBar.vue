<template>
    <div class="sidebar-container">
        <ul class="sidebar-list">
            <li ><b-button @click="sidebarIsOpen()"> 數據管理</b-button>
             <ul v-bind:class="{active: this.isActive1}"> 
                 <li><button>列表</button></li>
             </ul>
            </li>
            <li><button>增加數據</button></li>
            <li><button>顯示圖表</button></li>
            <li><button>顯示圖表</button></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive1:false
        }
        },methods:{

          sidebarIsOpen(){
          
            this.isActive1 = !this.isActive1
          }
            
        }
}
</script>
<style>
.active{display:none}

.sidebar-container ul{
    list-style: none;
    padding: 0px;
}.sidebar-list button{
   width:100%
}
.sidebar-container{
    width:40%
} 
</style>
