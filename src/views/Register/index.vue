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
      <form>
        <div class="bottom-text">
          <label>手机号: </label>
          <input type="text" placeholder="请输入手机号" />
          <p>错误提示信息</p>
        </div>
        <div class="bottom-text">
          <label>验证码: </label>
          <input type="text" placeholder="请输入验证码" />
          <p>错误提示信息</p>
          <img
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            alt="code"
          />
        </div>
        <div class="bottom-text">
          <label>登录密码: </label>
          <input type="text" placeholder="请输入你的登录密码" />
          <p>错误提示信息</p>
        </div>
        <div class="bottom-text">
          <label>确认密码: </label>
          <input type="text" placeholder="请输入确认密码" />
          <p>错误提示信息</p>
        </div>
        <div class="bottom-checkbox">
          <input type="checkbox" />同意协议并注册《尚品汇用户协议》
          <p>错误提示信息</p>
        </div>
        <button>完成注册</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
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
    form {
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
