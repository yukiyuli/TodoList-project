<template>
  <h2>Today's tasks</h2>
  <ul class="tasks">
    <li class="task-item" v-for="(item,index) in todoArray" :key="index">
      <span class="task-text">{{item.name}}&nbsp;&nbsp;&nbsp; {{item.time}} </span>
      <span>
        <span class="btns enable-click" @click="finishFunc(index)">Done</span>
        <span class="btns enable-click" @click="deleteFunc(index)">Delete</span>
      </span>
    </li>
  </ul>
</template>
<script>
import { getCurrentInstance } from 'vue'
import { useTodo, useFinished, useKeepTimes } from '../utils/useData.js'
export default {
  setup () {
    const { proxy } = getCurrentInstance()
    const { todoArray, updateTodo } = useTodo(proxy)
    const { finishedArray, updateFinished } = useFinished(proxy)
    const { keepTimes, updateKeepTimes } = useKeepTimes(proxy)

    function finishFunc (index) {
      const todos = [...todoArray.value]
      const finished = [...finishedArray.value]

      finished.push(todos[index])
      updateFinished(finished)

      todos.splice(index, 1)
      updateTodo(todos)

      updateKeepTimes(keepTimes.value + 1)

      proxy.$router.push({
        path: '/finished'
      })
    }
    function deleteFunc (index) {
      const todos = [...todoArray.value]
      todos.splice(index, 1)
      updateTodo(todos)
    }
    return {
      todoArray,
      finishFunc,
      deleteFunc
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import "../scss/tasks.scss";
@include task-common-style;
.btns{
  color: #03a9f4;
  cursor: pointer;
  margin-left: 5px;
}
</style>
