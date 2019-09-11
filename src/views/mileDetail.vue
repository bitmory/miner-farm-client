<template>
    <div class="page-detail">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item to="/about">矿场管理</el-breadcrumb-item>
            <el-breadcrumb-item>矿机详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="page-content">
            <h4>192.169.0.102</h4>
            <p>
                <span class="text-hd">已启动</span><span class="text-inc">13 hours ago</span>
                <span class="text-hd">挖矿软件正常运行</span><span class="text-inc">18h 54m</span>
                <span class="text-hd">ip</span><span class="text-inc">192.169.0.102</span>
            </p>
        </div>
        <div class="page-type">
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

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData:[]
            }
        },
        mounted() {
        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">
.page-detail{
    text-align: left;
    .page-content{
        background: #fff;
        padding: 10px;
        margin-top: 20px;
        span{
            margin-right: 10px;
        }
        p{
            margin: 10px 0;
        }
        .text-hd{
            font-weight: bold;
        }
    }
    .page-type{
        margin-top: 10px;
    }
    .page-item{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        .item-static{
            height: 100px;
            width: 19%;
            text-align: center;
            background: #fff;
            h4{
                padding: 20px 0 10px 0;
            }
        }
    }
}
</style>