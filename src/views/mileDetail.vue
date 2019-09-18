<template>
    <div class="page-detail">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item to="/about">矿场管理</el-breadcrumb-item>
            <el-breadcrumb-item>矿池详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="page-main">
            <h1>普洱一期</h1>
            <div class="filter-hd">
                <el-radio-group v-model="radio">
                    <el-radio-button v-for="item in filter" :label="item" :key="item"></el-radio-button>
                </el-radio-group>
            </div>
          <el-row :gutter="12" class="page-type">
            <el-col :span="4" class="page-table-item"  v-for="(item,id) in tableData" :key="id">
                <div class="item" @click="checkDetail">
                    <p>托管方：{{item.name}}</p>
                    <p>ip：{{item.ip}}</p>
                    <p>状态：{{item.status}}</p>
                    <p>矿机类型：{{item.type}}</p>
                    <p>位置：{{item.location}}</p>
                    <p>算力：{{item.hashrate}}</p>
                    <p>能耗：{{item.energy}}</p>
                    <p>温度：{{item.temperature}}</p>
                </div>
            </el-col>
          </el-row>
        </div>
        <el-dialog
                center
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
        </el-dialog>    </div>
</template>
<script>
    import * as API_miner from '@/api/miner'
    export default {
        data () {
            return {
                filter:['正常（9900）','低算力（5）','掉线（4）','过热（10）','待处理（35）','处理中（12）'],
                radio:'正常（9900）',
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
            }
        },
        mounted() {
        },
        methods:{
            checkDetail () {
                this.dialogVisible = true
            },
            getWorkerList (id) {
                API_miner.workerDetail(id).then(res => {

                })
            },
        }
    }
</script>
<style scoped lang="scss">
.page-detail{
    text-align: left;
    .page-main{
        margin-top: 20px;
        h1{
            padding-bottom: 10px;
        }
        .page-type{
            .page-table-item{
                text-align: left;
                cursor: pointer;
                .item{
                    background: #fff;
                    margin-top: 10px;
                    padding: 10px;
                    border: 1px solid #ddd;
                }
            }
            .page-table-item:hover {
                background: #eee;
            }
        }
    }
}
</style>