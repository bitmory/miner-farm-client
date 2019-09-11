<template>
  <el-container>
    <el-header>
      <div class="logo">
        <img src="../assets/img/logo.png">
      </div>
      <div class="user-page">
        <p>欢迎您，{{username}}</p>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
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
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
<!--  <div class="home">-->
<!--    <div class="page-header">-->
<!--    </div>-->
<!--    <div class="page-menu">-->
<!--      -->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      username:''
    }
  },
  components: {
    // HelloWorld
  },
  created () {
    this.username = localStorage.getItem('username')
  },
  mounted() {
  },
  methods:{

  }
}
</script>
<style scoped lang="scss">
  .el-container.is-vertical {
    width: 100%;
    height: 100%;
    .el-header {
      width: 100%;
      height: 60px;
      box-shadow: 0 1px 3px 0 #2a3542;
      padding-left: 30px;
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
          line-height: 60px;
          color: #fff;
          font-weight: bold;
        }
      }
    }
    .el-aside{
      background: #2a3542;
      box-shadow: 0 1px 3px 0 #2a3542;
    }
    .el-main{
      background: #f2f2f2;
    }
    .el-menu {
      height: 100%;
    }
    .one-item{
      margin-top: 20px;
    }
  }

</style>
