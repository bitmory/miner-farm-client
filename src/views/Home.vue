<template>
  <div class="home">
    <div class="page-header">
      <div class="logo">
        <img src="../assets/img/logo.png">
      </div>
      <div class="user-page">
        <p>欢迎您，admin</p>
      </div>
    </div>
    <div class="page-menu">
      <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
        <el-menu-item index="2" class="one-item">
          <i class="el-icon-menu"></i>
          <span slot="title">矿机管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang="scss">
  .home {
    width: 100%;
    height: 100%;
    .page-header {
      width: 100%;
      height: 60px;
      padding: 10px 30px;
      background: #2a3542;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      img{
        width: 150px;
        margin-top: -14px;
      }
      .user-page{
        p{
          color: #fff;
          font-weight: bold;
        }
      }
    }
    .page-menu{
      height:calc(100% - 80px) ;
      width: 200px;
      background: #2a3542;
    }
    .el-menu {
      height: 100%;
    }
    .one-item{
      margin-top: 20px;
    }
  }

</style>
