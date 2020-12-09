<template>
  <div class="container">
    <div class="Register-top">
      <h3>注册新用户</h3>
      <p>
        我有账号，去
        <a href="#">登录</a>
      </p>
    </div>
    <div class="Register-bottom">
      <div class="Register-input">
        <div class="bottom-text">
          <label>手机号: </label>
          <ValidationProvider rules="phone|requiredPhone" v-slot="{ errors }">
            <input
              type="text"
              placeholder="请输入手机号"
              v-model="user.phone"
            />
            <p>{{ errors[0] }}</p>
          </ValidationProvider>
          <!-- <p>错误提示信息</p> -->
        </div>
        <div class="bottom-text">
          <label>验证码: </label>
          <ValidationProvider rules="code|requiredCode" v-slot="{ errors }">
            <input type="text" placeholder="请输入验证码" v-model="user.code" />
            <p>{{ errors[0] }}</p>
          </ValidationProvider>
          <img
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            alt="code"
            @click="updataCode"
          />
        </div>
        <div class="bottom-text">
          <label>登录密码: </label>
          <ValidationProvider
            rules="password|requiredPassword"
            v-slot="{ errors }"
          >
            <input
              type="text"
              placeholder="请输入你的登录密码"
              v-model="user.password"
            />
            <p>{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
        <div class="bottom-text">
          <label>确认密码: </label>
          <ValidationProvider
            rules="rePassword|requiredRePassword"
            v-slot="{ errors }"
          >
            <input
              type="text"
              placeholder="请输入确认密码"
              v-model="user.rePassword"
            />
            <p>{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
        <div class="bottom-checkbox">
          <input
            type="checkbox"
            v-model="user.isChecked"
          />同意协议并注册《尚品汇用户协议》
          <!-- <p>错误提示信息</p> -->
        </div>
        <Button @click="submit">完成注册</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@comps/Button'
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
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
//验证码验证
extend("requiredCode", {
  ...required,
  message: "验证码必须要填写",
});
extend("code", {
  validate(value) {
    return /^\d{4}$/.test(value);
  },
  message: "验证码为4位数字", // 错误信息
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
//确认密码验证
extend("requiredRePassword", {
  ...required,
  message: "确认密码必须要填写",
});
extend("rePassword", {
  validate(value) {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value);
  },
  message: "密码至少包含 数字和英文，长度6-20", // 错误信息
});
// extend("length", {
//   validate(value) {
//     return value.length === 11;
//   },
//   message: "长度必须为11位", // 错误信息
// });
/*
  文档：https://vee-validate.logaretm.com/v3/guide/basics.html#validation-provider
  1. 下载 
    yarn add vee-validate
  2. 引入组件并注册
    局部注册
    全局注册
  3. 使用
    用 ValidationProvider 组件包裹要表单校验的 表单项  
  4. 使用检验规则
    - 自定义规则
      extend("length", {
        validate(value) {
          return value.length === 11;
        },
        message: "长度必须为11位", // 错误信息
      });
    - 内置规则
        import { required, email } from 'vee-validate/dist/rules';
        extend("required", {
          ...required,
          message: "手机号必须要填写", // 错误信息
        });

        <ValidationProvider rules="required"></ValidationProvider>  
*/
export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "", // 手机号
        password: "", // 密码
        rePassword: "", // 确认密码
        code: "", // 验证码
        isChecked: false, // 同意
      },
    };
  },
  methods: {
    async submit() {
      try {
        // 1. 收集表单数据
        const { phone, password, rePassword, code, isChecked } = this.user;
        // 2. 进行校验
        if (!isChecked) {
          this.$message.error("请同意用户协议~");
          return;
        }

        if (password !== rePassword) {
          this.$message.error("两次输入的密码不一致");
          return;
        }
        // 3. 发送请求注册
        await this.$store.dispatch("register", { phone, password, code });
        // 4. 注册成功跳转到登录
        this.$router.replace("/login");
      } catch {
        // 清空密码
        this.user.password = "";
        this.user.rePassword = "";
        // 刷新验证码
        this.updataCode();
      }
    },
    // 刷新验证码
    updataCode() {
      this.$refs.code.src = "http://182.92.128.115/api/user/passport/code";
    },
  },
  components: {
    ValidationProvider,
    Button
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
  .Register-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ececec;
    padding: 8px 15px;
    line-height: 30px;
    color: #333;
    font-weight: 700;
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
      a {
        color: #e1251b;
      }
    }
  }
  .Register-bottom {
    width: 500px;
    margin: 0 auto;
    .Register-input {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      position: relative;
    }
    .bottom-text {
      margin-bottom: 3px;
      label {
        width: 96px;
        font-size: 14px;
        display: inline-block;
        text-align: right;
      }
      input {
        width: 270px;
        height: 38px;
        box-sizing: border-box;
        margin-left: 8px;
      }
      p {
        margin-left: 105px;
        color: red;
      }
      img {
        position: absolute;
        right: 0;
        top: 58px;
      }
    }
    .bottom-checkbox {
      margin-left: 45px;
      margin-bottom: 3px;
      input {
        margin-right: 3px;
      }
      p {
        color: red;
      }
    }
    button {
      width: 270px;
      height: 36px;
      background-color: #e1251b;
      outline: none;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      margin-left: 100px;
      border: none;
    }
  }
}
</style>
