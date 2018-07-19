<template>
  <div>

    <!-- ICON -->
    <span @click="toggle_header()" id="menu-nav-icon" class="icon-x-circle"></span>

    <!-- HEADER -->
    <header id="main-header">
      <div class="full-row">

        <!-- MAIN HEADER COMPONENT -->
        <MainHeader />

        <!-- SHOWS IF OVERFLOW-Y -->
        <span id="header-scroll-overflow" class="icon-arrow-down toggleVisbility"></span>

      </div>
    </header>
    <!-- END HEADER -->

    <!-- MAIN CONTENT -->
    <main id="main-content">
      <nuxt/>
    </main>
    <!-- END MAIN CONTENT -->

  </div>
</template>

<script type="text/javascript">

  import MainHeader from '~/components/Headers/MainHeader.vue';

  export default {
    data() {
      return {
        menuShow: true,
      };
    },
    components: {
      MainHeader,
    },
    methods: {
      handleScroll () {
        // console.log(window.scrollY);
      },
      headerOverflow() {
        var header = document.getElementById('main-header');
        var icon = document.getElementById('header-scroll-overflow');
        if (header.offsetHeight < header.scrollHeight ||
            header.offsetWidth < header.scrollWidth) {
            icon.classList.add('toggleVisbility');
            icon.classList.add('show');
            icon.classList.remove('hide');
        } else {
            icon.classList.remove('toggleVisbility');
            icon.classList.remove('show');
            icon.classList.add('hide');
        }
      },
      handleResize() {
        this.headerOverflow();
      },
      toggle_header() {

        var menuNavIcon = document.getElementById("menu-nav-icon");
        var mainHeader = document.getElementById('main-header');
        var mainContent = document.getElementById('main-content');

        if (this.menuShow) {
          menuNavIcon.style.left = "20px";
          menuNavIcon.className = "icon-menu"
          mainHeader.style.left = "-300px";
          mainContent.style.left = "0";
          mainContent.style.width = "100%";
        } else {
          menuNavIcon.style.left = "260px";
          menuNavIcon.className = "icon-x-circle"
          mainHeader.style.left = "0px";
          mainContent.style.left = "300px";
          mainContent.style.width = "calc(100% - 300px)";
        }
        this.menuShow = !this.menuShow;
      },
    },
    created () {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
      }
    },
    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
      }
    },
    mounted() {
      //do something after mounting vue instance
      this.headerOverflow();
      var id = setInterval(this.animate_header, 10);
    }
  };

</script>

<style lang="scss">

  @import "~/assets/sass/helpers/_variables.scss";
  @import "~/assets/sass/helpers/_mixins.scss";

  #main-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    background-color: #fff;
    height: 100%;
    overflow-y: scroll!important;
    overflow-x: hidden!important;
    @include transition(all 0.5s ease);
  }
  #main-content {
    position: relative;
    left: 300px;
    background-color: #f2f2f2;
    top: 0;
    width: calc(100% - 300px);
    height: 100%;
    z-index: 2;
    @include transition(all 0.5s ease);
  }
  #header-scroll-overflow {
    position: fixed;
    bottom: 20px;
    left: 260px;
    font-size: 24px;
    color: $blue;
    display: inline-block;
    z-index: 9999;
  }
  #menu-nav-icon {
    color: $blue;
    font-size: 24px;
    cursor: pointer;
    position: fixed;
    left: 260px;
    top: 10px;
    z-index: 9999;
    @include transition(all 0.5s ease);
    &:hover {
      color: $yellow-orange;
    }
  }
</style>
