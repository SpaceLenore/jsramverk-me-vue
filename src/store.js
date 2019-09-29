import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        jwt: localStorage.getItem('token') || null
    },
    mutations: {
        setJwt(state, newJwt) {
            state.jwt = newJwt
            localStorage.setItem('token', newJwt)
        }
    },
    actions: {

    }
})
