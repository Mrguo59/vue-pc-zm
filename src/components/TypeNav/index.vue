<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="isSearchShow = false">
      <h2 class="all" @mouseenter="isSearchShow = true">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="search">
        <div class="sort" v-show="isHomeShow || isSearchShow">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item bo"
              v-for="category in categoryList"
              :key="category.categoryId"
            >
              <h3>
                <!-- 一级分类名称 -->
                <!-- 第一种方式，不建议使用，因为会生成很多组件，性能不好 -->
                <!-- <router-link
                :to="`/search?categoryName=${category.categoryName}&category1Id=${category.categoryId}`"
                >{{ category.categoryName }}</router-link
              > -->
                <!-- 第二种方式,每个元素都会绑定点击事件，性能也不好，也不建议使用-->
                <!-- <a
                @click.prevent="
                  $router.push({
                    name: 'search',
                    query: {
                      categoryName: category.categoryName,
                      category1Id: category.categoryId,
                    },
                  })
                "
                >{{ category.categoryName }}</a
              > -->
                <!-- 第三种方式，用事件委托技术，冒泡原理，建议使用-->
                <a
                  :data-categoryName="category.categoryName"
                  :data-categoryId="category.categoryId"
                  :data-categoryType="1"
                  >{{ category.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="categoryChilds in category.categoryChild"
                    :key="categoryChilds.categoryId"
                  >
                    <dt>
                      <!-- 二级分类名称 -->
                      <!-- 第一种方式，不建议使用，因为会生成很多组件，性能不好 -->
                      <!-- <router-link
                      :to="`/search?categoryName=${categoryChilds.categoryName}&category2Id=${categoryChilds.categoryId}`"
                      >{{ categoryChilds.categoryName }}</router-link
                    > -->
                      <!-- 第二种方式,每个元素都会绑定点击事件，性能也不好，也不建议使用-->
                      <!-- <a
                      @click.prevent="
                        $router.push({
                          name: 'search',
                          query: {
                            categoryName: categoryChilds.categoryName,
                            category2Id: categoryChilds.categoryId,
                          },
                        })
                      "
                      >{{ categoryChilds.categoryName }}</a
                    > -->
                      <!-- 第三种方式，用事件委托技术，冒泡原理，建议使用-->
                      <a
                        :data-categoryName="categoryChilds.categoryName"
                        :data-categoryId="categoryChilds.categoryId"
                        :data-categoryType="2"
                        >{{ categoryChilds.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <!-- 三级分类名称 -->
                      <em
                        v-for="categorySons in categoryChilds.categoryChild"
                        :key="categorySons.categoryId"
                      >
                        <!-- 第一种方式，不建议使用，因为会生成很多组件，性能不好 -->
                        <!-- <router-link
                        :to="`/search?categoryName=${categorySons.categoryName}&category3Id=${categorySons.categoryId}`"
                        >{{ categorySons.categoryName }}</router-link
                      > -->
                        <!-- 第二种方式,每个元素都会绑定点击事件，性能也不好，也不建议使用-->
                        <!-- <a
                        @click.prevent="
                          $router.push({
                            name: 'search',
                            query: {
                              categoryName: categorySons.categoryName,
                              category3Id: categorySons.categoryId,
                            },
                          })
                        "
                        >{{ categorySons.categoryName }}</a
                      > -->
                        <!-- 第三种方式，用事件委托技术，冒泡原理，建议使用-->
                        <a
                          :data-categoryName="categorySons.categoryName"
                          :data-categoryId="categorySons.categoryId"
                          :data-categoryType="3"
                          >{{ categorySons.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypeNav",
  data() {
    return {
      isHomeShow: this.$route.path === "/",
      isSearchShow: false,
    };
  },
  computed: {
    // 当使用vuex模块化，这种方式就不行了
    // ...mapState(["categoryList"]),
    // ...mapState(["testCount", "home"]), // 这种方式可以，需要使用 this.home.categoryList
    ...mapState({
      // 对象中的数据，就会传递给组件

      // categoryList就是组件能接受到的数据
      // 它的值是一个函数，函数内部会调用得到值
      // 调用时会将所有vuex数据传递进去，就是state
      categoryList: (state) => state.home.categoryList.slice(0, 15),
    }),
  },
  methods: {
    // 函数直接写
    // 注意：将来action函数名称和mutation函数名称不要重复
    ...mapActions(["getCategoryList"]),
    // 跳转到search
    goSearch(e) {
      // console.log(e.target.dataset);// 元素自定义属性对象
      const { categoryname, categoryid, categorytype } = e.target.dataset;

      // 需求：如何获取需要的参数？
      // 已知：得到触发事件目标元素
      // 解决：给元素设置自定义属性 data-xxx, 通过自定义属性得到需要的参数

      // 判断是否是点中了a标签，才能跳转
      if (!categoryname) return;

      // 隐藏分类列表
      this.isSearchShow = false;

      const location = {
        name: "search",
        query: {
          categoryName: categoryname,
          [`category${categorytype}Id`]: categoryid,
        },
      };

      // 判断当前是否有params参数，有加上
      const { searchText } = this.$route.params;

      if (searchText) {
        location.params = {
          searchText,
        };
      }

      this.$router.push(location);
    },
  },
  mounted() {
    //判断vuex里是否又数据，如果有数据，就不需要再发请求了
    if (this.categoryList.length) return;
    // 调用vuex的action函数
    this.getCategoryList();
  },
  // //组件挂载成功以后就请求数据
  // async mounted() {
  //   const result = await reqGetBaseCategoryList();
  //   // console.log(result);
  //   this.categoryList = result.slice(0, 15);
  // },
};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      // 控制显示隐藏过渡效果
      &.search-enter {
        height: 0;
      }

      &.search-enter-active {
        transition: height 1s;
        overflow: hidden;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
