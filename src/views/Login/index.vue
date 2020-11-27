<template>
  <div class="container">
    <div class="login">
      <div class="login-form">
        <div class="login-form-con">
          <ul>
            <li><a href="#">扫码登录</a></li>
            <li class="effect"><a href="#">账户登录</a></li>
          </ul>
          <form>
            <div class="input-text">
              <i></i>
              <input type="text" placeholder="手机号" />
            </div>
            <div class="input-text">
              <i class="icon"></i>
              <input type="text" placeholder="请输入密码" />
            </div>
            <div class="input-check">
              <label><input type="checkbox" /> 自动登录 </label>
              <span>忘记密码?</span>
            </div>
            <button>登 录</button>
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
export default {
  name: "Login",
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
