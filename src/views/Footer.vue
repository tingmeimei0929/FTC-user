<template>
  <footer class="footer footer--theme-dark">
    <div class="container">
      <div class="row">
        <div class="footerTitle">
          <h6 class="footer_matrix-title">支持</h6>
          <ul class="footer_matrix-content">
            <li>
              <a class="footer_matrix-link"
                 href=" "
                 target="_blank">关于我们</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/jobs/?from=ft"
                 target="_blank">职业机会</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/corp/faq.html"
                 target="_blank">问题回馈</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/corp/contact.html"
                 target="_blank">联系方式</a>
            </li>
          </ul>
        </div>
        <div class="footerTitle">
          <h6 class="footer_matrix-title">法律事务</h6>
          <ul class="footer_matrix-content">
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/corp/service.html"
                 target="_blank">服务条款</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/corp/copyright.html"
                 target="_blank">版权声明</a>
            </li>
          </ul>
        </div>
        <div class="footerTitle">
          <h6 class="footer_matrix-title">服务</h6>
          <ul class="footer_matrix-content">
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/corp/sales.html"
                 target="_blank">广告业务</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/events/event.html"
                 target="_blank">会议活动</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/marketing/home.html"
                 target="_blank">会员信息中心</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/marketing/ftc.html"
                 target="_blank">最新动态</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/corp/partner.html"
                 target="_blank">合作伙伴</a>
            </li>
          </ul>
        </div>
        <div class="footerTitle">
          <h6 class="footer_matrix-title">关注我们</h6>
          <ul class="footer_matrix-content">
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/corp/follow.html"
                 target="_blank">微信</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://weibo.com/ftchinese"
                 target="_blank">微博</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="https://www.linkedin.com/company/4865254?trk=hp-feed-company-name"
                 target="_blank">Linkedin</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="https://www.facebook.com/financialtimeschinese"
                 target="_blank">Facebook</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="https://twitter.com/FTChinese"
                 target="_blank">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="footerTitle">
          <h6 class="footer_matrix-title">FT产品</h6>
          <ul class="footer_matrix-content">
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/marketing/intelligence.html"
                 target="_blank">FT研究院</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/channel/mba.html"
                 target="_blank">FT商学院</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/m/marketing/ebook.html"
                 target="_blank">FT电子书</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="http://www.ftchinese.com/channel/datanews.html"
                 target="_blank">数据新闻</a>
            </li>
            <li>
              <a class="footer_matrix-link"
                 href="https://www.ft.com/"
                 target="_blank">FT英文版</a>
            </li>
          </ul>
        </div>
        <div class="footerTitle">
          <h6 class="footer_matrix-title">移动应用</h6>
          <ul class="footer_matrix-content">
            <li>
              <a class="footer_matrix-link"
                 href="/android/latest"
                 target="_blank">安卓</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row footer_copyright">
        <small>"@FT中文网 2020."
          <abbr title="Financial Times"
                aria-label="F T">FT</abbr>
          and ‘Financial Times’ are trademarks of The Financial Times Ltd.

        </small>
      </div>
      <div class="row text-muted">
        <small>测试版 V0.7.14</small>
      </div>
    </div>
  </footer>
</template>
    
<script>
export default {
  name: "Footer",
  data () {
    return {

    };
  }
};
</script>
  
<style lang="scss" scoped>
/// Footer spacing unit
// $o-footer-spacing-unit: 20px;
.footer {
  margin-top: 40px;
  border-top: 10px solid;
  line-height: 20px;
  font-size: 16px;
  position: fixed;
  // bott: 0;

  a {
    border-bottom: 0;
    text-decoration: none;
  }

  .row {
    margin-top: 20px !important;
    padding: 15px 0;
    align-items: flex-start !important;
  }
  .footerTitle {
    width: 15%;
    height: inherit;
    line-height: inherit;
    text-align: left;
    display: inline-block;
    overflow: hidden;
    clear: both;
  }
  // h6
  .footer_matrix-title {
    line-height: inherit;
    font-size: inherit;
    font-weight: 600;
  }
  // ul
  .footer_matrix-content {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  // li
  .footer_matrix-link {
    display: block;
    padding: 4px 0;
  }
}
.footer--theme-dark {
  color: #fff;
  background-color: #33302e;
  border-color: #0a5e66;
}

a {
  color: #b3a9a0;
  &:hover,
  &:focus {
    color: #fff;
  }
}
.footer_copyright {
  padding: 20px 0;
  color: #b3a9a0;
  a {
    text-decoration: underline;
  }
}
.text-muted {
  padding: 0;
  font-size: 80%;
  font-weight: 400;
  color: #6c757d !important;
}
.footer--theme-light {
  color: #33302e;
  background-color: #807973;
  border-color: #990f3d;

  a {
    color: #4d4845;
    &:hover,
    &:focus {
      color: #fff;
    }
  }

  .footer_copyright {
    color: #4d4845;
  }
}

@media print {
  .footer {
    display: none;
  }
}
</style>