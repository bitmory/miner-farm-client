<template>
    <div class="staff-content">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item>员工管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="page-main">
            <div class="page-main-hd">
                <el-button type="primary">新增员工</el-button>
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
                    head:'员工编号',
                    label:'username'
                },
                {
                    head:'矿场',
                    label:'minertype'
                },
                {
                    head:'职位',
                    label:'location'
                },
                {
                    head:'服务类型',
                    label:'link'
                },
                {
                    head:'姓名',
                    label:'pooltype'
                },
                {
                    head:'电话号码',
                    label:'active'
                },
                {
                    head:'备用电话',
                    label:'total'
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
  .staff-content{
      width: 100%;
      height: 100%;
      .page-main-hd{
          text-align: right;
          .el-button{
              margin-bottom: 10px;

          }
      }
  }
</style>