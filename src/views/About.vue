<template>
  <div class="about">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置</el-breadcrumb-item>
      <el-breadcrumb-item>矿场管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <el-form inline>
        <el-form-item label="矿池：">
          <el-select @change="changePool" v-model="orePool" clearable filterable placeholder="请选择">
            <el-option
                    v-for="item in orePoolList"
                    :key="item"
                    :label="item"
                    :value="item">
            </el-option>
          </el-select>
        </el-form-item>
<!--        <el-form-item label="矿机：">-->
<!--          <el-select v-model="orePool" clearable filterable placeholder="请选择">-->
<!--            <el-option-->
<!--                    v-for="item in orePoolList"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.value">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
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
        <div class="page-table-item" @click="checkDetail" v-for="(item,id) in tableData" :key="id">
            <p>托管方：{{item.name}}</p>
            <p>ip：{{item.ip}}</p>
            <p>状态：{{item.status}}</p>
            <p>矿机类型：{{item.type}}</p>
            <p>位置：{{item.location}}</p>
            <p>算力：{{item.hashrate}}</p>
            <p>能耗：{{item.energy}}</p>
            <p>温度：{{item.temperature}}</p>
        </div>
      </div>
    </div>
    <el-dialog
            title="矿机详情"
            :visible.sync="dialogVisible"
            width="60%">
      <div class="page-content">
        <h4>192.169.0.102</h4>
        <p>
          <span class="text-hd">已启动</span><span class="text-inc">13 hours ago</span>
          <span class="text-hd">挖矿软件正常运行</span><span class="text-inc">18h 54m</span>
          <span class="text-hd">ip</span><span class="text-inc">192.169.0.102</span>
        </p>
      </div>
      <div class="page-type-dig">
        <el-table stripe style="width: 100%" :data="tableData">
          <el-table-column prop="name" label="链" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="ip" label="ASIC" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="status" label="频率" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="type" label="瓦" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="location" label="硬件" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="hashrate" label="温度" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
          <el-table-column prop="energy" label="ASIC状态" :show-overflow-tooltip="true" min-width="11%" align="center"></el-table-column>
        </el-table>
        <div class="page-item">
          <div class="item-static">
            <h4>78% 4689 rpm</h4>
            <p>风扇4</p>
          </div>
          <div class="item-static">
            <h4>94% 4689 rpm</h4>
            <p>风扇5</p>
          </div>
          <div class="item-static ">
            <h4>1.41分钟 1.09分钟 1.07分钟</h4>
            <p>平均载入</p>
          </div>
          <div class="item-static">
            <h4>85.3Mb</h4>
            <p>剩余空间</p>
          </div>
          <div class="item-static">
            <h4>1.0.0</h4>
            <p>系统版本</p>
          </div>
        </div>
        <div class="page-intro">
          <div class="intro-item" v-for="(item,id) in introList" :key="id">
            <p>
              <span class="intro-hd">{{item.name}}：</span>
              <span class="intro-text">{{item.value}}</span>
            </p>
          </div>
        </div>
      </div>
<!--      <span slot="footer" class="dialog-footer">-->
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
<!--  </span>-->
    </el-dialog>
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
        introList:[
          {
            value:'2 × ARMv7 Processor rev 0 (v7l)',
            name:'CPU'
          },
          {
            value:'Antminer S9 Hiveon',
            name:'模组'
          },
          {
            value:'asic',
            name:'系统类型'
          },
          {
            value:'3.14.0-xilinx-ge8a2f71-dirty',
            name:'内核'
          },
          {
            value:'61.166.56.36',
            name:'远程IP'
          },
          {
            value:'10.91.1.193',
            name:'本地 IP'
          },
          {
            value:'00:35:99:2e:10:8e',
            name:'Mac地址'
          },
        ],
        orePool:'',
        orePoolList:[],
        type:0,
        dialogVisible:false,
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
          },
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          },
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          },
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          },
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          },
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          },
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          },
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          },
          {
            name:'123',
            ip:'192.168.0.101',
            status:'在线',
            type:'AMT',
            location:'一期',
            hashrate:'123',
            energy:'126',
            temperature:'23C',
          },
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
        this.getPoolList()
    },
    methods:{
      getPoolList () {
        API_miner.getLocation().then(res => {
          this.orePoolList = res
        })
      },
      getWorkerList (id) {
        API_miner.workerDetail(id).then(res => {

        })
      },
      changePool (val) {
        this.getMiningList(val)
      },
      checkDetail () {
        this.dialogVisible = true
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
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .page-table-item{
          width: 9%;
          background: #fff;
          margin-top: 5px;
          margin-right: 5px;
          padding:10px 0 10px 10px;
          text-align: left;
          box-shadow: 0 1px 3px 0 #2c3e50;
          cursor: pointer;
        }
        .page-table-item:hover {
          background: #eee;
        }
      }
    }
  }
</style>
