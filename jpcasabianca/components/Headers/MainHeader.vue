<template lang="html">
  <div class="full-row">

    <!-- LOGO -->
    <div class="row start-xs">
      <nuxt-link id="text-logo" class="markpro-medium" to="/">JP Casabianca</nuxt-link>
      <!-- <p>{{$nuxt.$route.path}}</p> -->
    </div>

    <!-- MAIN MENU -->
    <div class="row" id="main-menu">
      <ul class="col-xs main-nav">
        <li v-for="(item, index) in mainMenu" :key="index">
          <span
            @click="handleMenuAction(item.url)"
            :class="item.status == 'active' ? 'main-nav-item-title main-nav-item-title-active' : 'main-nav-item-title'">
            <div class="menu-bookmark"></div>
            {{item.title}}
          </span>
          <ul
            class="sub-nav"
            v-if="item.subMenu.length"
            v-show="item.status == 'active'">
            <li v-for="(subItem, index2) in item.subMenu" :key="index2">
              <span :id="'menuItem-'+subItem.url" @click="handleLinkAction(subItem.action, subItem.url)" class="main-nav-subitem-title">
                <div class="submenu-bookmark"></div>
                {{subItem.title}}
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- SECONDARY MENU -->
    <div class="row">
      <div class="col-xs" id="secondary-menu">
        <div class="secondary-menu-item full-row" v-for="(elem, i) in secondaryMenu" :key="i">
          <p class="markpro-medium">{{elem.title}}</p>
          <a
            v-for="(link, j) in elem.links" :key="j"
            :href="link.url">
            {{link.title}}
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import headerJson from '~/static/data/headers.json';

export default {
  data() {
    return {
        mainMenu: headerJson.mainMenu,
        secondaryMenu: headerJson.secondaryMenu,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      if (document.getElementById(sectionId)) {
        document.getElementById(sectionId).scrollIntoView();
      }
    },
    handleLinkAction(action, url) {
      if (action == 'scrollTo') {
        this.scrollToSection(url);
      } else {
        this.$router.replace({ path: url });
      }
    },
    activateMenuItem(url) {
      console.log(url);
    },
    handleMenuAction(url) {
      var action = '';
      for (var i = 0; i < this.mainMenu.length; i++) {
        if (url == this.mainMenu[i].url) {
          this.mainMenu[i].status = 'active';
          action = this.mainMenu[i].action;
        } else {
          this.mainMenu[i].status = '';
        }
      }
      this.handleLinkAction(action, url);
    },
    handleScroll() {
      var scrollSections = document.getElementsByClassName("scrollSection");
      for (var i = scrollSections.length - 1; i >= 0; i--) {
        var subMenuItemID = document.getElementById("menuItem-" + scrollSections[i].id);
        if(this.isVisible(scrollSections[i])) {
          subMenuItemID.classList.add("main-nav-subitem-title-active");
        } else {
          subMenuItemID.classList.remove("main-nav-subitem-title-active");
        }
      }
    },
    isVisible(ele) {
      const { top, bottom } = ele.getBoundingClientRect();
      const vHeight = (window.innerHeight || document.documentElement.clientHeight);
      return (
        (top > 0 || bottom > 0) &&
        top < vHeight
      );
    },
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  mounted() {
    this.handleScroll();
  }
};
</script>

<style lang="scss">

  @import "~/assets/sass/helpers/_variables.scss";
  @import "~/assets/sass/helpers/_extensions.scss";

  #text-logo {
    font-size: 20px;
    text-decoration: none;
    color: $blue;
    margin-left: $header-side-margins;
    margin-top: 30px;
    display: inline-block;
    padding: 15px 0;
    &:hover {
      color: $blue-dark;
    }
  }

  %main-nav-title-action {
    background-color: $light-gray;
    .menu-bookmark {
      display: inline-block!important;
    }
  }

  %main-nav-subitem-title-action {
    .submenu-bookmark {
      display: inline-block!important;
    }
  }

  #main-menu {
    margin: 10px 0 20px 0;
  }

  .main-nav {
    list-style: none;
    padding: 0;
    .main-nav-item-title {
      cursor: pointer;
      display: block;
      font-size: 14px;
      padding: 0.75em 0 0.75em $header-side-margins;
      position: relative;
      font-family: 'MarkPro-Medium', helvetica, sans-serif;
      .menu-bookmark {
        @extend %bookmark-blue;
        width: 8px;
        display: none;
      }
      &:hover {
        @extend %main-nav-title-action;
      }
    }
    .main-nav-item-title-active {
      @extend %main-nav-title-action;
    }
    .sub-nav {
      padding: 0.5em 0 0.5em $header-side-margins;
      list-style: none;
      .main-nav-subitem-title {
        position: relative;
        cursor: pointer;
        display: block;
        font-size: 14px;
        padding: 0.2em 0 0.2em $header-side-margins;
        .submenu-bookmark {
          @extend %bookmark-blue;
          width: 5px;
          display: none;
        }
        &:hover {
          @extend %main-nav-subitem-title-action;
        }
      }
      .main-nav-subitem-title-active {
        @extend %main-nav-subitem-title-action;
      }
    }
  }

  #secondary-menu {
    padding-left: $header-side-margins;
  }

  .secondary-menu-item {
    margin-bottom: 15px;
    a, p {
      font-size: 14px;
    }
    p {
      display: block;
      margin: 0;
    }
    a {
      display: inline-block;
      color: $gray-medium;
      margin-right: 8px;
      &:hover {
        color: $yellow-orange;
      }
    }
  }

</style>
