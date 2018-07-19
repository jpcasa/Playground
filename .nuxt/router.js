import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _e105cca8 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _e2dcdc0c = () => import('../pages/blog/_category/index.vue' /* webpackChunkName: "pages/blog/_category/index" */).then(m => m.default || m)
const _4dd9cd82 = () => import('../pages/blog/_category/_article.vue' /* webpackChunkName: "pages/blog/_category/_article" */).then(m => m.default || m)
const _a5e4d8ca = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/blog",
			component: _e105cca8,
			name: "blog"
		},
		{
			path: "/blog/:category",
			component: _e2dcdc0c,
			name: "blog-category"
		},
		{
			path: "/blog/:category/:article",
			component: _4dd9cd82,
			name: "blog-category-article"
		},
		{
			path: "/",
			component: _a5e4d8ca,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
