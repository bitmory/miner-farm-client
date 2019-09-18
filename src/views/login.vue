<template>
    <div class="page-login">
        <vue-particles
                color="#f4ad0d"
                :particleOpacity="0.5"
                :particlesNumber="60"
                shapeType="circle"
                :particleSize="4"
                linesColor="#f4ad0d"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="2"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
                class="canvas-page">
        </vue-particles>
    <div class="page-login-form">
        <el-card shadow="never">
            <el-form ref="loginForm" label-position="top" :rules="rules" :model="formLogin" size="default">
                <el-form-item prop="userName">
                    <el-input type="text" v-model="formLogin.userName " placeholder="用户名">
                        <!--                            <i slot="prepend" class="fa fa-user-circle-o"></i>-->
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="formLogin.password" placeholder="密码">
                        <!--                            <i slot="prepend" class="fa fa-keyboard-o"></i>-->
                    </el-input>
                </el-form-item>
<!--                <el-form-item prop="captchaCode">-->
<!--                    <el-input type="text" v-model="formLogin.captchaCode" placeholder="验证码">-->
<!--                        &lt;!&ndash;                            <template slot="prepend">验证码</template>&ndash;&gt;-->
<!--                        <template slot="append">-->
<!--                            <Verify width="83px" height="36px" fontSize="16px" :type="1" :codeLength="4" :showButton="false"></Verify>-->
<!--                        </template>-->
<!--                    </el-input>-->
<!--                </el-form-item>-->
                <el-button size="default" @click="submit" type="primary" class="button-login">登录</el-button>
            </el-form>
        </el-card>
        <p class="page-login--options" flex="main:justify cross:center">
              <span @click="forgetPasswd()">
<!--                <d2-icon name="question-circle" />-->
                  ?忘记密码
              </span>
            <span>注册用户</span>
        </p>
    </div>
    </div>
</template>
<script>
import Verify from "vue2-verify";
import * as API_login from '@/api/sys.login'
export default {
    data () {
        const checkCaptchaCode = (rule, value, callback)=>{
            let code = '';
            let obj = document.getElementsByClassName('verify-code')[0];
            for(let i = 0; i < obj.childElementCount; i++){
                code += obj.children[i].innerText.charAt(0);
            }
            let str1 = code.toLowerCase();
            let str2 = this.formLogin.captchaCode.toLowerCase();
            if(str1 !== str2){
                // this.$message.error("验证码错误");
                callback(new Error('验证码错误！'))
            }else{
                callback()
            }
        }
        return {
            // 表单
            formLogin: {
                userName: "",
                password: "",
                captchaCode: ""
            },
            // 校验
            rules: {
                userName: [
                    { required: true, message: "请输入用户名", trigger: "blur" }
                ],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }],
                captchaCode: [
                    { required: true, message: "请输入验证码", trigger: "blur" },
                    { validator: checkCaptchaCode, trigger: "blur"}
                ]
            }
        }
    },
    components:{Verify},
    mounted() {
    },
    methods:{
        // 提交登录信息
        submit() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    let params = {
                        username: this.formLogin.userName,
                        password: this.formLogin.password
                    }
                    API_login.AccountLogin(params).then(res=> {
                        console.log(res)
                        localStorage.setItem('username',res.username);
                        localStorage.setItem('role',res.role);
                        localStorage.setItem('token',res.token)
                        this.$router.push('/about')
                    })
                }else{
                    this.$message.error('表单校验失败')
                }
            });
        },
        forgetPasswd(){
            this.$router.push('forgetPassword')
        },
    }
}
</script>
<style scoped lang="scss">
.page-login{
    height: 100%;
    width: 100%;
    background-color: #222;
    /*display: flex;*/
    /*align-items: center;*/
    .canvas-page{
        width: 100%;
        height: 100%;
    }
    .page-login-form{
        width: 350px;
        position: absolute;
        top: 30%;
        left: 40%;
        .page-login--options {
            padding: 0px;
            font-size: 14px;
            color: #f4ad0d;
            margin-bottom: 15px;
            font-weight: bold;
            justify-content: space-between;
            display: flex
        }
        .button-login{
            width: 100%;
            background: #f4ad0d;
        }
    }
}
</style>