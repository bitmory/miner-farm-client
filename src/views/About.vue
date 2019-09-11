<template>
  <div class="about">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置</el-breadcrumb-item>
      <el-breadcrumb-item>矿场管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <el-form inline>
        <el-form-item label="矿池：">
          <el-select v-model="orePool" clearable filterable placeholder="请选择">
            <el-option
                    v-for="item in orePoolList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="矿机：">
          <el-select v-model="orePool" clearable filterable placeholder="请选择">
            <el-option
                    v-for="item in orePoolList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="矿机状态：">
          <el-radio-group v-model="type">
            <el-radio :label="0">全部</el-radio>
            <el-radio :label="1">在线</el-radio>
            <el-radio :label="2">掉线</el-radio>
            <el-radio :label="3">故障</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="page-main">
      <h3>矿机统计</h3>
      <div class="total_wraper">
        <div class="total-item border-right" v-for="(item,id) in millStatistic" :key="id">
          <h4>{{item.value}}</h4>
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="page-type">
        <el-table stripe style="width: 100%" :data="tableData">
          <el-table-column prop="name" label="托管方" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="ip" label="ip" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="status" label="状态" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="type" label="矿机类型" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="location" label="位置" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="hashrate" label="算力" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="energy" label="能耗" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="temperature" label="温度" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column label="操作" :show-overflow-tooltip="true" min-width="11%" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="checkDetail(scope.$index, scope.row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        millStatistic:[
        {
          value:'3',
          name:'WORKERS'
        },
        {
          value:'0',
          name:'CPU'
        },
        {
          value:'3',
          name:'BOARDS'
        },
        {
          value:'3.56KW',
          name:'CONSUMPTION'
        },
        {
          value:'40TH/S',
          name:'SHA256'
        },
        {
          value:'$0',
          name:'余额'
        },
        {
          value:'免费',
          name:'每日支出'
        },
        ],
        orePool:'',
        orePoolList:[{
          value:1,
          label:'一期'
        },
        {
          value:2,
          label:'二期'
        }],
        type:0,
        tableData:[
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          }
        ]
      }
    },
    mounted () {

    },
    methods:{
      checkDetail () {
        this.$router.push({path:'/mileDetail'})
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
      .page-type{
        margin-top: 20px;
      }
    }
  }
</style>
