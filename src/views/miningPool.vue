<template>
    <div class="about">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item>托官方管理</el-breadcrumb-item>
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
            </el-form>
        </div>
        <div class="page-main">
            <div class="page-main-hd">
                <h3>矿机统计</h3>
                <el-button type="primary" @click="addDiag">添加</el-button>
            </div>
            <div class="page-type">
                <el-table stripe style="width: 100%;" height="calc(100% - 30px)" :data="tableData.slice((pageData.pageNo-1)*pageData.pageSize,pageData.pageNo*pageData.pageSize)">
                  <el-table-column v-for="(item) in obj1"  :key="item.id" :prop="item.label" :label="item.head" :show-overflow-tooltip="true" min-width="7%" align="center"></el-table-column>
                  <el-table-column  prop="link" label="观察者链接" :show-overflow-tooltip="true" min-width="7%" align="center">
                      <template slot-scope="scope">
                        <a :href="scope.row.link" target="_blank">{{scope.row.link}}</a>
                      </template>
                  </el-table-column>
                  <el-table-column v-for="(item) in obj2"  :key="item.id" :prop="item.label" :label="item.head" :show-overflow-tooltip="true" min-width="7%" align="center"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button type="text" size="small" style="color: #ff1211">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        class="alRight"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageData.pageNo"
                        :page-sizes="[15, 30, 50]"
                        :page-size="pageData.pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="Number(total)">
                </el-pagination>
            </div>
        </div>
        <el-dialog  title="矿机详情" :visible.sync="dialogVisible" width="30%">
            <el-form label-position="left" label-width="110px" ref="fromData" :model="fromData" :rules="rules">
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="fromData.username"></el-input>
                </el-form-item>
                <el-form-item label="矿机类型：" prop="minertype">
                    <el-input v-model="fromData.minertype"></el-input>
                </el-form-item>
                <el-form-item label="地点：" prop="location">
                    <el-input v-model="fromData.location"></el-input>
                </el-form-item>
                <el-form-item label="观察者链接：" prop="link">
                    <el-input v-model="fromData.link"></el-input>
                </el-form-item>
                <el-form-item label="矿池类型：" prop="pooltype">
                    <el-input v-model="fromData.pooltype"></el-input>
                </el-form-item>
                <el-form-item label="上机台数：" prop="total">
                <el-input v-model="fromData.total"></el-input>
                </el-form-item>
                <el-form-item label="理论算力：" prop="standardcalculation">
                    <el-input v-model="fromData.standardcalculation"></el-input>
                </el-form-item>
                <el-form-item label="算力单位：" prop="unit">
                    <el-input v-model="fromData.unit"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addPool">确定</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
    import * as API_miner from '@/api/miner'
    export default {
        data () {
            return {
                orePool:'',
                orePoolList:[],
                type:0,
                list:[
                    {
                        head:'用户名',
                        label:'username'
                    },
                    {
                        head:'矿机类型',
                        label:'minertype'
                    },
                    {
                        head:'地点',
                        label:'location'
                    },
                    {
                        head:'观察者链接',
                        label:'link'
                    },
                    {
                        head:'矿池类型',
                        label:'pooltype'
                    },
                    {
                        head:'活跃台数',
                        label:'active'
                    },
                    {
                        head:'上机台数',
                        label:'total'
                    },
                    {
                        head:'不活跃台数',
                        label:'inactive'
                    },
                    {
                        head:'无效台数',
                        label:'dead'
                    },
                    {
                        head:'15分钟算力',
                        label:'currentcalculation'
                    },
                    {
                        head:'日算力',
                        label:'dailycalculation'
                    },
                    {
                        head:'理论算力',
                        label:'standardcalculation'
                    },
                    {
                        head:'算力单位',
                        label:'unit'
                    },
                    {
                        head:'更新日期',
                        label:'updatedate'
                    },
                ],
                tableData:[],
                pageData:{
                    pageSize:15,
                    pageNo:1
                },
                total:'',
                obj1:[],
                obj2:[],
                dialogVisible:false,
                fromData:{
                  username:'',
                  minertype:'',
                  location:'',
                  link:'',
                  pooltype:'',
                  total:'',
                  standardcalculation:'',
                  unit:''
                },
                rowId:'',
                rules:{
                    username:[
                        { required: true, message: "请输入用户名", trigger: "blur" }
                    ],
                    minertype:[
                        { required: true, message: "请输入矿机类型", trigger: "blur" }
                    ],
                    location:[
                        { required: true, message: "请输入地点", trigger: "blur" }
                    ],
                    link:[
                        { required: true, message: "请输入观察者链接", trigger: "blur" }
                    ],
                    pooltype:[
                        { required: true, message: "请输入矿池类型", trigger: "blur" }
                    ],
                    total:[
                        { required: true, message: "请输入上机台数", trigger: "blur" }
                    ],
                    standardcalculation:[
                        { required: true, message: "请输入理论算力", trigger: "blur" }
                    ],
                    unit:[
                        { required: true, message: "请输入算力单位", trigger: "blur" }
                    ]
                }
            }
        },
        computed : {

        },
        mounted () {
            this.obj1 = this.list.filter((e,i) => {
                return i<3
            })
            this.obj2 = this.list.filter((e,i) => {
                return i>4
            })
            this.getPoolList()
            this.getMiningList()
        },
        methods:{
            getPoolList () {
                API_miner.getLocation().then(res => {
                    this.orePoolList = res
                })
            },
            getMiningList (orePool) {
                let params = {
                    location:orePool
                }
                API_miner.MiningPool(params).then(res => {
                    this.tableData = res
                    this.total = this.tableData.length
                })
            },
            changePool (val) {
                this.getMiningList(val)
            },
            handleSizeChange(val) {
                this.pageData.pageSize = val
            },
            handleCurrentChange (val) {
                this.pageData.pageNo = val
            },
            handleClick() {

            },
            addDiag(row) {
                this.dialogVisible = true
                this.rowId = row.id
            },
            addPool() {
                this.$refs.fromData.validate(valid => {
                    if(valid) {
                        if(this.rowId) {
                            API_miner.editMiningPool(this.fromData,this.rowId).then(res => {
                                this.$message({
                                    type:'success',
                                    message:'编辑成功'
                                })
                                this.dialogVisible = false
                            })
                        }else {
                            API_miner.addMiningPool(this.fromData).then(res => {
                                this.$message({
                                    type:'success',
                                    message:'添加成功'
                                })
                                this.dialogVisible = false
                            })
                        }
                    }
                })
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
            .page-main-hd {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                padding-right: 20px;
                .el-button{
                    margin-bottom: 10px;

                }
            }
            .page-type{
                height: 90%;
            }
        }
    }
</style>
