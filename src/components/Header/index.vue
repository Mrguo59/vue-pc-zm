<template>
  <header class="header">
    <div class="top">
      <div class="container">
        <div class="top-left">
          <span>尚品汇欢迎您!</span>
          请<router-link to="/login">登录</router-link>
          <router-link to="/register">免费注册</router-link>
        </div>
        <div class="top-right">
          <ul>
            <li class="active"><a href="#">我的订单</a></li>
            <li><a href="#">我的购物车</a></li>
            <li><a href="#">我的尚品汇</a></li>
            <li><a href="#">尚品汇会员</a></li>
            <li><a href="#">企业采购</a></li>
            <li><a href="#">关注尚品汇</a></li>
            <li><a href="#">合作招商</a></li>
            <li><a href="#">商家后台</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <router-link to="/"
          ><img src="./images/logo.png" alt="logo"
        /></router-link>
      </div>
      <div class="bottom-right">
        <input type="text" />
        <button @click="search">搜索</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    search() {
      this.$router.push("/search");
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  background-color: #eaeaea;
  a:hover {
    color: #007aff;
  }
  .container {
    width: 1200px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .top-left {
      color: #333;
      span {
        color: #333;
        margin-right: 12px;
      }
      a {
        padding: 0 3px;
        text-decoration: none;
        & + a {
          border-left: 1px solid #b3aeae;
        }
      }
    }
    .top-right {
      ul {
        display: flex;
        li {
          padding: 0 10px;
          border-left: 1px solid #b3aeae;
          a {
            text-decoration: none;
          }
        }
        .active {
          border: none;
        }
      }
    }
  }
}
.bottom {
  width: 1200px;
  height: 106px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bottom-left {
    width: 265px;
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom-right {
    display: flex;
    align-items: center;
    input {
      width: 490px;
      height: 32px;
      box-sizing: border-box;
      padding: 0 5px;
      border: 2px solid #ea4a36;
      outline: none;
    }
    button {
      width: 68px;
      height: 32px;
      background-color: #ea4a36;
      border: none;
      color: #fff;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
