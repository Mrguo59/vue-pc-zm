<template>
  <div class="container">
    <div class="Footer-top">
      <dl>
        <dt>购物指南</dt>
        <dd>购物流程</dd>
        <dd>会员介绍</dd>
        <dd>生活旅行/团购</dd>
        <dd>常见问题</dd>
        <dd>购物指南</dd>
      </dl>
      <dl>
        <dt>配送方式</dt>
        <dd>上门自提</dd>
        <dd>211限时达</dd>
        <dd>配送服务查询</dd>
        <dd>配送费收取标准</dd>
        <dd>海外配送</dd>
      </dl>
      <dl>
        <dt>支付方式</dt>
        <dd>货到付款</dd>
        <dd>在线支付</dd>
        <dd>分期付款</dd>
        <dd>邮局汇款</dd>
        <dd>公司转账</dd>
      </dl>
      <dl>
        <dt>售后服务</dt>
        <dd>售后政策</dd>
        <dd>价格保护</dd>
        <dd>退款说明</dd>
        <dd>返修/退换货</dd>
        <dd>取消订单</dd>
      </dl>
      <dl>
        <dt>特色服务</dt>
        <dd>夺宝岛</dd>
        <dd>DIY装机</dd>
        <dd>延保服务</dd>
        <dd>尚品汇E卡</dd>
        <dd>尚品汇通信</dd>
      </dl>
      <dl>
        <dt>帮助中心</dt>
        <dd>
          <img src="./images/wx_cz.jpg" alt="" />
        </dd>
      </dl>
    </div>
    <ul class="Footer-bottom">
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #eaeaea;
  .Footer-top {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    padding-left: 40px;
    box-sizing: border-box;
    border-top: 1px solid #e4e1e1;
    border-bottom: 1px solid #e4e1e1;
    dl {
      width: 16.6666667%;
      line-height: 18px;
      dt {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  .Footer-bottom {
    width: 1200px;
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
