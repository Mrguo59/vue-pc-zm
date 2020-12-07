<template>
  <div class="container">
    <div class="login">
      <div class="login-form">
        <div class="login-form-con">
          <ul>
            <li><a href="#">扫码登录</a></li>
            <li class="effect"><a href="#">账户登录</a></li>
          </ul>
          <form @submit.prevent="submit">
            <ValidationProvider rules="requiredPhone|phone" v-slot="{ errors }">
              <div class="input-text">
                <i></i>
                <input type="text" placeholder="手机号" v-model="user.phone" />
              </div>
              <span style="color: red">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              rules="requiredPassword|password"
              v-slot="{ errors }"
            >
              <div class="input-text">
                <i class="icon"></i>
                <input
                  type="text"
                  placeholder="请输入密码"
                  v-model="user.password"
                />
              </div>
              <span style="color: red">{{ errors[0] }}</span>
            </ValidationProvider>
            <div class="input-check">
              <label
                ><input type="checkbox" v-model="isAutoLogin" /> 自动登录
              </label>
              <span>忘记密码?</span>
            </div>
            <button type="submit">登 录</button>
            <div class="form-register">
              <div>
                <img src="./images/ali.png" alt="" />
                <img src="./images/qq.png" alt="" />
                <img src="./images/sina.png" alt="" />
                <img src="./images/weixin.png" alt="" />
              </div>
              <a href="#">立即注册</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { mapState } from "vuex";
//手机号验证
extend("requiredPhone", {
  ...required,
  message: "手机号必须要填写",
});
//手机号验证
extend("phone", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不符合规范", // 错误信息
});
//密码验证
extend("requiredPassword", {
  ...required,
  message: "密码必须要填写", // 错误信息
});
extend("password", {
  validate(value) {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value);
  },
  message: "密码至少包含 数字和英文，长度6-20", // 错误信息
});
export default {
  name: "Login",
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
      isLogining: false, // 正在登录
      isAutoLogin: true, // 是否自动登录
    };
  },
  created() {
    /*
      自动登录：
        在login组件判断是否有token
        有就认为登录过，跳转到首页

        不够安全：token是可以伪造的
        解决：拿到token发送请求
          1. 验证token的合法性（正确，没有过期）
          2. 请求用户数据
    */
    if (this.token) {
      this.$router.replace("/");
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },
  methods: {
    async submit() {
      try {
        if (this.isLogining) return;
        this.isLogining = true;
        const { phone, password } = this.user;
        await this.$store.dispatch("login", { phone, password });
        // 登录成功
        //判断是否点击了自动登录按钮
        if (this.isAutoLogin) {
          localStorage.setItem("token", this.token);
          localStorage.setItem("name", this.name);
        }
        this.$router.replace("/");
      } catch {
        this.user.password = "";
        this.isLogin = false;
      }
    },
  },
  components: {
    ValidationProvider,
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 487px;
  background-color: #e93854;
  .login {
    width: 1200px;
    height: 487px;
    margin: 0 auto;
    background: url("./images/loginbg.png") no-repeat;
    .login-form {
      width: 420px;
      height: 406px;
      float: right;
      position: relative;
      top: 45px;
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;
    }
    .login-form-con {
      border: 1px solid #ddd;
      a:hover {
        color: #007aff;
      }
      ul {
        display: flex;
        li {
          width: 190px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border: 1px solid #ddd;
          a {
            font-size: 20px;
            color: #333;
            font-weight: 700;
            text-decoration: none;
          }
        }
        .effect {
          border-bottom: none;
          border-top-color: #28a3ef;
          a {
            color: #e1251b;
          }
        }
      }
      form {
        padding: 18px;
        margin-top: 20px;
        .input-text {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          input {
            width: 302px;
            height: 32px;
            box-sizing: border-box;
            outline: none;
            padding: 8px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 0 2px 2px 0;
          }
          i {
            display: inline-block;
            width: 37px;
            height: 32px;
            border: 1px solid #ddd;
            box-sizing: border-box;
            background: url("./images/icons.png") no-repeat -10px -201px;
          }
          .icon {
            background: url("./images/icons.png") no-repeat -72px -201px;
          }
        }
        .input-check {
          display: flex;
          justify-content: space-between;
          span {
            padding-right: 5px;
          }
        }
        button {
          width: 100%;
          height: 36px;
          background-color: #e1251b;
          border: 1px solid #e1251b;
          outline: none;
          color: #fff;
          font-size: 16px;
          margin-top: 25px;
          word-spacing: 5px;
        }
        .form-register {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
          align-items: center;
          a {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
