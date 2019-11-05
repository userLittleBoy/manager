<template>
    <div>
        <div class="container">
            <div class="left">
                <el-container style=" border: 1px solid #eee">
                    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                        <el-menu :default-openeds="['1', '2']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>系统管理</template>
                            <el-menu-item index="1-1">用户管理</el-menu-item>
                            <el-menu-item index="1-2">角色管理</el-menu-item>
                            <el-menu-item index="1-3">学员管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>商品管理</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        </el-menu>
                    </el-aside>
                </el-container>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .container{
        display: flex;
        .left{
            left:200px;
        }
        .right{
            flex:1;
        }
    }
</style>