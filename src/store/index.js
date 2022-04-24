import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
const API_BASE_URL='https://dev.to/api/';
// const API_KEY='rSUT5mgBHonVNJKPnFC8QSQv';
export default new Vuex.Store({
    state: {
        articles:[],
        authorArticles:[],
    },
    mutations: {
        MUTATE: (state, payload) => {
            state[payload.state] = payload.data;
        },
    },
    getters:{
        gitGetter: (state) => (setup) => state[setup],
    },
    actions: {
        devArticles: ({commit}) => {
            axios
                .get(`${API_BASE_URL}articles?per_page=1000`, {})
                .then((response)=>{
                    commit("MUTATE", {
                        state: "articles",
                        data: response.data,
                    });
                })
                .catch((error)=>{
                    console.log(error);
                })
        },
        devAuthorArticles: ({commit}, {payload}) => {
            axios
                .get(`${API_BASE_URL}articles?username=${payload}`, {})
                .then((response)=>{
                    commit("MUTATE", {
                        state: "authorArticles",
                        data: response.data,
                    });
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    },
    modules: {
    }
})
