import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        isListShow: true
    },
    mutations: {
        changeToList(state) { // payload
            state.isListShow = true;
        },
        changeToGrid(state) {
            state.isListShow = false;
        }
    },
    actions: {

    }
})