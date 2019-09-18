<template>
  <div class="about">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置</el-breadcrumb-item>
      <el-breadcrumb-item>矿场管理</el-breadcrumb-item>
    </el-breadcrumb>
<!--    <div class="search">-->
<!--      <el-form inline>-->
<!--        <el-form-item label="矿池：">-->
<!--          <el-select @change="changePool" v-model="orePool" clearable filterable placeholder="请选择">-->
<!--            <el-option-->
<!--                    v-for="item in orePoolList"-->
<!--                    :key="item"-->
<!--                    :label="item"-->
<!--                    :value="item">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--&lt;!&ndash;        <el-form-item label="矿机：">&ndash;&gt;-->
<!--&lt;!&ndash;          <el-select v-model="orePool" clearable filterable placeholder="请选择">&ndash;&gt;-->
<!--&lt;!&ndash;            <el-option&ndash;&gt;-->
<!--&lt;!&ndash;                    v-for="item in orePoolList"&ndash;&gt;-->
<!--&lt;!&ndash;                    :key="item.value"&ndash;&gt;-->
<!--&lt;!&ndash;                    :label="item.label"&ndash;&gt;-->
<!--&lt;!&ndash;                    :value="item.value">&ndash;&gt;-->
<!--&lt;!&ndash;            </el-option>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-select>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-form-item>&ndash;&gt;-->
<!--        <el-form-item label="矿机状态：">-->
<!--          <el-radio-group v-model="type">-->
<!--            <el-radio :label="0">全部</el-radio>-->
<!--            <el-radio :label="1">在线</el-radio>-->
<!--            <el-radio :label="2">掉线</el-radio>-->
<!--            <el-radio :label="3">故障</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item>-->
<!--          <el-button type="primary">筛选</el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--    </div>-->
    <div class="page-main">
      <h3>矿池统计</h3>
      <div class="total_wraper">
        <div class="total-item border-right" v-for="(item,id) in millStatistic" :key="id">
          <h4>{{item.value}}</h4>
          <p>{{item.name}}</p>
        </div>
      </div>
      <el-row  style="margin-top: 20px" :gutter="12">
        <el-col  :span="6" v-for="(item,id) in locationList" :key="id">
          <div class="box-shaow" @click="goMileDetail">
            <div class="location-hd">
              <h4  class="title">{{item.title}}</h4>
              <div class="check">
                <span @click="activeClick(0)" :class="[isActive ==0?'active':'']" class="time">实时</span>
                <span @click="activeClick(1)" :class="[isActive ==1?'active':'']">历史</span>
              </div>
            </div>
            <div class="location-main">
              <div class="item" v-for="(items,id) in item.itemList" :key="id">
                <h4>{{items.value}}</h4>
                <p>{{items.name}}</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import * as API_miner from '@/api/miner'
  export default {
    data () {
      return {
        millStatistic:[
        {
          value:'3',
          name:'矿场数'
        },
        {
          value:'1200',
          name:'矿机数'
        },
        {
          value:'120P',
          name:'总算力'
        },
        {
          value:'3.56KW',
          name:'能耗'
        },
        {
          value:'40',
          name:'待处理'
        },
        {
          value:'35',
          name:'处理中'
        }
        ],
        locationList:[
          {
            title:'普洱一期',
            itemList:[
              {
                value:'10000',
                name:'矿机数'
              },
              {
                value:'60P',
                name:'总算力'
              },
              {
                value:'2MW',
                name:'能耗'
              },
              {
                value:'9900',
                name:'正常'
              },
              {
                value:'12',
                name:'低算力'
              },
              {
                value:'5',
                name:'掉线'
              },
              {
                value:'30',
                name:'过热'
              },
              {
                value:'5',
                name:'待处理'
              },
              {
                value:'30',
                name:'处理中'
              }
            ],
          },
          {
            title:'普洱二期',
            itemList:[
              {
                value:'10000',
                name:'矿机数'
              },
              {
                value:'60P',
                name:'总算力'
              },
              {
                value:'2MW',
                name:'能耗'
              },
              {
                value:'9900',
                name:'正常'
              },
              {
                value:'12',
                name:'低算力'
              },
              {
                value:'5',
                name:'掉线'
              },
              {
                value:'30',
                name:'过热'
              },
              {
                value:'5',
                name:'待处理'
              },
              {
                value:'30',
                name:'处理中'
              }
            ],
          },
          {
            title:'普洱三期',
            itemList:[
              {
                value:'10000',
                name:'矿机数'
              },
              {
                value:'60P',
                name:'总算力'
              },
              {
                value:'2MW',
                name:'能耗'
              },
              {
                value:'9900',
                name:'正常'
              },
              {
                value:'12',
                name:'低算力'
              },
              {
                value:'5',
                name:'掉线'
              },
              {
                value:'30',
                name:'过热'
              },
              {
                value:'5',
                name:'待处理'
              },
              {
                value:'30',
                name:'处理中'
              }
            ],
          },
          {
            title:'普洱三期',
            itemList:[
              {
                value:'10000',
                name:'矿机数'
              },
              {
                value:'60P',
                name:'总算力'
              },
              {
                value:'2MW',
                name:'能耗'
              },
              {
                value:'9900',
                name:'正常'
              },
              {
                value:'12',
                name:'低算力'
              },
              {
                value:'5',
                name:'掉线'
              },
              {
                value:'30',
                name:'过热'
              },
              {
                value:'5',
                name:'待处理'
              },
              {
                value:'30',
                name:'处理中'
              }
            ],
          }
        ],
        isActive:0,
        orePool:'',
        orePoolList:[],
        type:0,
      }
    },
    mounted () {
        this.getPoolList()
    },
    methods:{
      getPoolList () {
        API_miner.getLocation().then(res => {
          this.orePoolList = res
        })
      },
      changePool (val) {
        this.getMiningList(val)
      },
      activeClick(isActive) {
        this.isActive = isActive
      },
      goMileDetail() {
        this.$router.push('/mileDetail')
      }
    }
  }
</script>
<style scoped lang="scss">
  .about{
    width: 100%;
    height: 100%;
    .search {
      width: 100%;
      text-align: left;
      margin-top: 20px;
      background: #fff;
      .el-form-item{
        padding: 20px;
        margin-bottom: 0;
      }
    }
    .page-main{
      width: 100%;
      height: calc(100% - 120px);
      /*background: #fff;*/
      margin-top: 10px;
      h3{
        font-weight: 500;
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #f2f2f2;
      }
      .total_wraper{
      width: 100%;
      height: 116px;
      background: #fff;
      box-shadow: 0 1px 3px 0 #ddd;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .total-item {
        margin: 20px 0;
        width: 16%;
        text-align: center;
        h4{
          padding: 10px;
        }
      }
      .border-right{
        border-right: 1px solid #e8e8e8;
      }
    }
      .box-shaow{
        background: #fff;
        padding: 10px 10px 0 10px;
      }
      .box-shaow:hover{
        box-shadow: 0 1px 3px 0 #ddd;
      }
      .location-hd{
        display: flex;
        justify-content: space-between;
        .title{
          padding-left: 5px;
          border-left: 5px solid #399bff;
        }
        .time{
          border-right: 2px solid #aaa
        }
        .active{
          color: #f4ad0d;
        }
        span {
          padding: 0 5px;
        }
      }
      .location-main{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 20px;
        .item{
          width: 33%;
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
