import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({

  // 该插件会将vuex中数据持久化
  // 可通过配置来决定哪些数据需要持久化，保存在localStorage、sessionStorage还是cookie中
  plugins: [createPersistedState()],
  state: {
    todoArray: [], // 待完成任务数组
    finishedArray: [], // 已完成任务数组
    keepTimes: 0 // 已完成任务次数
  },
  mutations: {
    SET_TODO_ARRAY: (state, todoArray) => {
      state.todoArray = todoArray
    },
    SET_FINISHED_ARRAY: (state, finishedArray) => {
      state.finishedArray = finishedArray
    },
    SET_KEEP_TIMES: (state, keepTimes) => {
      state.keepTimes = keepTimes
    }
  }
})
