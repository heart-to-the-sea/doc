let customVue = new Vue({
  el: "#custom",
  data() {
    return {
      backTop: {
        title: "返回顶部",
        isShow: false
      }
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  computed: {},
  methods: {
    // 返回顶部
    fnBackTop() {
      const that = customVue;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      const that = customVue;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 200) {
        that.backTop.isShow = true;
      } else {
        that.backTop.isShow = false;
      }
    }
  }
});
