<template>
  <div class="loginPage">
    <div class="loginBlock">
      <h1>登录页面</h1>
      <div class="inputBlock">
        <el-form :model="loginForm" ref="loginForm">
          <el-form-item>
            <el-input
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
              v-model="loginForm.userName"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="loginForm.password"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="large" @click="submitLogin"
              >主要按钮</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import {getDzData} from '../api/data'
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitLogin() {
        this.$refs.loginForm.validate((valid)=>{
            if(valid){
                console.log('验证成功')
                this.$router.push('/homePage')
            }else{
                console('验证失败')
            }
        })
    },
  },
  created(){
        // getDzData().then(res => {
        //     console.log(res)
        // })
  }
};
</script>

<style lang="less" scoped>
.loginPage {
  height: 100vh;
  background-image: linear-gradient(0deg, #f3e7e9 0, #e3eeff 99%, #e3eeff);
  .loginBlock {
    position: absolute;
    left: 50%;
    top: 50%;
    h1 {
      text-align: center;
      margin-bottom: 40px;
    }
    transform: translate(-50%, -50%);
    .inputBlock {
      width: calc(100% - 60px);
      height: 240px;
      border-radius: 10px;
      background: white;
      padding: 30px;
      .el-form-item {
            margin-bottom: 8px;
        }
      .el-input {
        margin: 14px 0;
        width: 360px;
      }
      .el-button {
        width: 100%;
        margin-top: 18px;
      }
    }
  }
}
</style>