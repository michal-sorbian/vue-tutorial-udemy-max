import * as types from '../types.js'

const state = {
   counter: 0,
};

const getters = {
   [types.DOUBLE_COUNTER](state){
      return state.counter * 2;
   },
   [types.CLICK_COUNTER](state) {
      return state.counter + ' Clicks';
   },
};

const mutations = {
   increment(state, payload) {
      state.counter += payload;
   },
   decrement(state, payload) {
      state.counter -= payload;
   },
}

const actions = {
   increment(context, payload){
      context.commit('increment', payload);
   },
   decrement(context, payload){
      context.commit('decrement', payload);
   },
   asyncIncrement(context, payload){
      setTimeout(function(){
         context.commit('increment', payload.by);
      }, payload.duration)
   },
   asyncDecrement(context, payload){
      setTimeout(function(){
         context.commit('decrement', payload.by);
      }, payload.duration)
   },
}

export default {
   state: state,
   getters: getters,
   mutations: mutations,
   actions: actions
}