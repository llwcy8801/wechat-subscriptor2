import Vue from 'vue'
import Vuex from 'vuex'
import searchbar from './modules/searchbar'
import searchResult from './modules/searchResult'

Vue.use(Vuex)

const state = {
  collectItems: [],
  searchResult: {},
}


const getters={
  collectItem:state=>{
    let items=localStorage.getItem("collectItems")?localStorage.getItem("collectItems").split(','):state.collectItems
    store.commit('SET_COLLECTION',items)
    return state.collectItems
  }  
}

const mutations = {
  SET_COLLECTION(state,items){
    state.collectItems=items
  },
  SET_RESULT (state, result) {
    state.searchResult = result
  },
  COLLECT_IT (state, name) {
    state.collectItems.push(name)
    localStorage.setItem("collectItems", state.collectItems)
  },
  DELETE_COLLECTION(state, name){
    state.collectItems.splice(state.collectItems.indexOf(name), 1)
    localStorage.setItem("collectItems", state.collectItems)
  }
}

const store=new Vuex.Store({
  state,
  getters,
  mutations,
  modules:{
    searchbar,
    searchResult
  }
})
export default store