<template>
  <div class="topBar">
    <a v-if="isReturn"><img src="../../assets/images/return@2x.png"></a>
    <p>{{ titleTxt }}</p>
    <a v-if="isShare"><img src="../../assets/images/share@2x.png"></a>
  </div>
</template>

<script>
  export default {
    name: "topBar",
    props: ["titleTxt", "isShare", "isReturn", "shareMsg"],
    methods: {
      returnIt() {
        window.callNative('closeWebview');
        // if (this.$route.query.page_type === 'first') {
        //   window.callNative('closeWebview');
        // }
        // else {
        //   window.history.back();
        // }
      },
      shareIt() {
        window.callNative('share', this.shareMsg);
        // window.callNative('share', {
        //   title: '分享join',
        //   desc: '分享内容简介',
        //   img: 'http://h5.motherplanet.cn/image/index/logo.png',
        //   url: window.location.href,
        // });
      }
    }
  }
</script>

<style scoped lang="less">
  .topBar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    a {
      height: .4rem;
      padding: .24rem;
      position: absolute;
      top: 0;

      img {
        height: 100%;
        width: auto;
      }

      &:first-child {
        left: 0;
      }

      &:last-child {
        right: 0;
      }
    }

    p {
      margin: .24rem 1.2rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

</style>
