<template>
    <div class="work-order-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item>工单管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="page-main">
            <div class="page-main-hd">
                <div class="button-left">
<!--                    <el-button type="primary" plain>全部</el-button>-->
                    <el-button type="primary" plain>未分配</el-button>
                    <el-button type="primary" plain>待处理</el-button>
                    <el-button type="primary" plain>处理中</el-button>
                    <el-button type="primary" plain>已处理</el-button>
                    <el-button type="primary" plain>暂缓处理</el-button>
                    <el-button type="primary" plain>已关闭</el-button>
                </div>
                <div class="button-right">
                    <el-button type="primary">新增维修</el-button>
                    <el-button type="primary">新增托管</el-button>
                </div>
            </div>
            <div class="page-main-content">
                <el-table stripe style="width: 100%;" height="calc(100% - 30px)" :data="tableData.slice((pageData.pageNo-1)*pageData.pageSize,pageData.pageNo*pageData.pageSize)">
                    <el-table-column v-for="(item) in list"  :key="item.id" :prop="item.label" :label="item.head" :show-overflow-tooltip="true" min-width="7%" align="center"></el-table-column>
                    <el-table-column fixed="right" label="操作" min-width="7%" align="center">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button type="text" size="small" style="color: #ff1211" @click="deleteClick(scope.row)">删除</el-button>
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
    </div>
</template>
<script>
    export default {
        data () {
            return {
                list:[
                    {
                        head:'工单编号',
                        label:'username'
                    },
                    {
                        head:'优先级',
                        label:'minertype'
                    },
                    {
                        head:'服务类型',
                        label:'location'
                    },
                    {
                        head:'工单状态',
                        label:'link'
                    },
                    {
                        head:'标题',
                        label:'pooltype'
                    },
                    {
                        head:'附件',
                        label:'active'
                    },
                    {
                        head:'托管方',
                        label:'total'
                    },
                    {
                        head:'负责人',
                        label:'inactive'
                    },
                    {
                        head:'最后更新',
                        label:'dead'
                    }
                ],
                tableData:[],
                pageData:{
                    pageSize:15,
                    pageNo:1
                },
                total:'',
            }
        },
        mounted () {

        },
        methods:{
            //分页
            handleSizeChange(val) {
                this.pageData.pageSize = val
            },
            handleCurrentChange (val) {
                this.pageData.pageNo = val
            },
            handleClick() {

            },
            deleteClick () {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .work-order-content{
        width: 100%;
        height: 100%;
        .page-main-hd{
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            margin-top: 20px;
            .el-button{
                margin-bottom: 10px;

            }
        }
    }
</style>