<template>
  <header class="header">
    <div class="top">
      <div class="container">
        <div class="top-left">
          <span>尚品汇欢迎您!</span>
          <p v-if="$store.state.user.name">
            <span>{{ $store.state.user.name }}</span>
            <button @click="logOut">退出</button>
          </p>
          <p v-else>
            请<router-link to="/login">登录</router-link>
            <router-link to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="top-right">
          <ul>
            <li class="active"><a href="#">我的订单</a></li>
            <li><router-link to="/shopcart">我的购物车</router-link></li>
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
        <input type="text" v-model="searchText" />
        <button @click="search">搜索</button>
      </div>
    </div>
  </header>
</template>
          <!-- 
            知识点
            问题：点击搜索，路径出现问号（原因是提交了表单）
            1. button 按钮如果没有type 那么在表单中 默认type就是submit
              此时会提交表单，事件就绑定在form上
                @submit.prevent="search"
            2. 不用form表单
                @click="search"
           -->
<script>
// import {reqLogout} from '@api/user'

export default {
  name: "Header",
  data() {
    return {
      // 搜索的内容(用户输入的内容)
      searchText: "",
    };
  },
  methods: {
    /**
     * 搜索功能函数
     */
    // 第一种方式
    // search() {
    //   // 获取搜索的数据
    //   const { searchText } = this;
    //   // 判断是否要添加params参数
    //   const params = searchText ? `/${searchText}` : "";
    //   // 生成跳转的路径
    //   const location = "/search" + params;
    //   // 编程式导航：原因将来要做搜索功能（要发送请求）
    //   this.$router.push(location);
    // },

    /**
     * 搜索功能函数
     */
    // 第二种方式
    search() {
      /*
        $router.push(location)
          location 可以是字符串 path/:xxx?key=value
          location 可以是对象 
            {
              path: 路由路径,
              query: {} 查询字符串参数
            }

            {
              name: 命名路由名称,
              params: {} params参数
              query: {} 查询字符串参数
            }
              命名路由params可选
      */
      // 获取搜索的数据
      const { searchText } = this;
      // 生成跳转的路径
      const location = {
        name: "search", // 使用命名路由
        // path: "/search",
        // params: {
        //   searchText,
        // },
        // query: {
        //   name: "jack",
        // },
      };
      if (searchText) {
        location.params = {
          searchText,
        };
      }

      // 添加query参数
      const { categoryName } = this.$route.query;

      if (categoryName) {
        location.query = this.$route.query;
      }
      // 编程式导航：原因将来要做搜索功能（要发送请求）

      //退回主页功能，第一种方式
      // this.$route.path 路径路由
      // this.$route.name 命名路由名称
      // if (this.$route.path.indexOf("/search") > -1) {
      //   this.$router.replace(location);
      // } else {
      //   this.$router.push(location);
      // }
      //退回主页功能，第二种方式
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
    //退出登录
    async logOut(){
      if(confirm('您确定要退出登录吗?')){
        await this.$store.dispatch("Logout")
        //退出登录以后跳转到登录页面
        this.$router.push("/login")
      }
    }
  },
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      // 清空searchText
      this.searchText = "";
    });
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
      display: flex;
      align-items: center;
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
