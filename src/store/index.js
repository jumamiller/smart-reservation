import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
const API_BASE_URL='https://dev.to/api/';
const GITHUB_API_BASE_URL='https://api.github.com/repos/section-engineering-education/engineering-education/';
// const API_KEY='rSUT5mgBHonVNJKPnFC8QSQv';
export default new Vuex.Store({
    state: {
        articles:[],
        authorArticles:[],
        pullRequests: [],
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
        // all articles
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
        // section PRs
        sectionPullRequests: ({commit}) => {
            axios
                .get(`${GITHUB_API_BASE_URL}pulls`, {})
                .then((response)=>{
                    commit("MUTATE", {
                        state: "pullRequests",
                        data: response.data,
                    });
                })
                .catch((error)=>{
                    console.log(error);
                })
        },
        // articles belonging to specific author
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
