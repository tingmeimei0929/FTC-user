<template>
  <div class="col-auto">
    <h2>订阅FT中文网会员</h2>
    <h4>请选择您的订阅方式</h4>
    <div class="col-middle">
      <div class="mid-card">
        <div class="card">
          <div class="card-main">
            <h3>标准会员</h3>
            <ul>
              <li>专享订阅内容每日仅需0.71元(或按月订阅每日0.93元)</li>
              <li>精选深度分析</li>
              <li>中英双语内容</li>
              <li>金融英语速读训练</li>
              <li>英语原声电台</li>
              <li>无限浏览7日前所有历史文章（近8万篇）</li>
            </ul>
          </div>
          <div class="card-footer">
            <div class="text-center">
              <button type="submit"
                      class="btn btn-year">
                ¥258.00/年
              </button>
            </div>

            <div class="text-center">
              <button type="submit"
                      class="btn btn-month">
                ¥28.00/月
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mid-card">
        <div class="card">
          <div class="card-main">
            <h3>高端会员</h3>
            <ul>
              <li>享受“标准会员”所有权益</li>
              <li>专享订阅内容每日仅需5.47元</li>
              <li>
                编辑精选，总编/各版块主编每周五为您推荐本周必读资讯，分享他们的思考与观点
              </li>
              <li>
                FT中文网2018年度论坛门票2张，价值3999元/张
                （不含差旅与食宿）
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <div class="text-center">
              <button type="submit"
                      class="btn btn-year">
                ¥1,998.00/年
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="p-footer">
      如果订阅时遇到问题，可以致函
      <a href="#">FT客服邮箱</a>
    </p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Member",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
</style>
