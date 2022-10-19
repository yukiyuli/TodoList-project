<template>
  <h2>New task</h2>
  <div class="form-item">
    <label for="taskName">Task name</label>
    <input type="text" id="taskName" placeholder="Enter your task name" class="enable-click" v-model="task.name"/>
  </div>
  <div class="form-item">
    <label for="taskTime">Set time</label>
    <input type="time" id="taskTime" class="enable-click" v-model="task.time">
  </div>
  <div class="form-item">
    <span class="submit-task enable-click" @click="addFunc">Confirm</span>
  </div>
</template>
<script>
import { setTaskTimer } from '../utils/useIPC.js'
import { getCurrentInstance, reactive } from 'vue'
import { useTodo } from '../utils/useData.js'
export default {
  setup () {
    const { proxy } = getCurrentInstance()
    const { todoArray, updateTodo } = useTodo(proxy)
    const task = reactive({
      name: '',
      time: ''
    })
    function addFunc () {
      if (!task.name) return

      const todos = [...todoArray.value]
      todos.push(task)
      updateTodo(todos)

      setTaskTimer(task.time, task.name)

      proxy.$router.push({
        path: '/'
      })
    }
    return {
      task,
      addFunc
    }
  }
}
</script>
<style lang="scss" scoped>
.form-item{
  margin-top: 40px;
}

#taskName {
  margin-left: 20px;
  width:300px;
  height:28px;
  font-size:14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#taskTime {
  margin-left: 34px;
  width:100px;
  height:28px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-task{
  background-color: #31c27c;
  color: #fff;
  padding: 6px 15px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
