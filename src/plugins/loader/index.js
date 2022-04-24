import Spinner from './views/Spinner'
import store from './store'

export default {
  install (Vue, options) {
    options.store.registerModule('Loader', store)

    Vue.component('Loader', Spinner)
    Vue.mixin({
      mounted () {
        Event.$on('loading', state => {
          this.$store.commit('Loader/SET_LOADING', state)
        })
      }
    })
  }
}
