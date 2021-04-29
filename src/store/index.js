import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        isListShow: true,
        isPopupShow: false,
        popUpType: 'success',
        popUpText: '',
    },
    mutations: {
        changeToList(state) { // payload
            state.isListShow = true;
        },
        changeToGrid(state) {
            state.isListShow = false;
        },
        setPopupState(state, payload) {
            state.isPopupShow = true;
            state.popUpType = payload.type;
            state.popUpText = payload.text;
            setTimeout(()=>{
                state.isPopupShow = false
            }, 1500)
        }
    },
    actions: {

    }
})