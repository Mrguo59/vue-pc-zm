<template>
  <div class="container">
    <ul>
      <li>关于我们</li>
      <li>联系我们</li>
      <li>联系客服</li>
      <li>商家入驻</li>
      <li>营销中心</li>
      <li>手机尚品汇</li>
      <li>销售联盟</li>
      <li>尚品汇社区</li>
    </ul>
    <p>地址：北京市昌平区宏福科技园综合楼6层</p>
    <p>京ICP备19006430号</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  height: 102px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    li {
      padding: 0 20px;
      margin: 15px 0;
      border-right: 1px solid #e4e4e4;
      line-height: 24px;
    }
  }
}
</style>
