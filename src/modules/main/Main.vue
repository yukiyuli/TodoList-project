<template>
    <div id="nav">
      <div class="date">{{dateStr}}</div>
      <div class="nav-text">
       <p class="todobox enable-click"><router-link to="/">To Do List</router-link></p>
       <p class="finishbox tab-manager enable-click"><router-link to="/finished">Finished</router-link></p>
      </div>
      <router-link to="/add">
        <span class="add-icon enable-click">+</span>
        <span>New</span>
      </router-link>
    </div>
    <div class="content">
      <span class="close-icon enable-click" @click="closeMain">x
      </span>
        <div class="content-manage">
        <router-view/>
      </div>
    </div>
  </template>
<script>
import { closeMain } from '../../utils/useIPC.js'
export default {
  setup () {
    const date = new Date()
    const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    return {
      closeMain,
      dateStr
    }
  }
}

</script>
  <style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body{
    height: 100%;
    width: 100%;
  }

  body{
  display: flex;
  -webkit-app-region: drag;
}

.enable-click {
  -webkit-app-region: no-drag;
}

.todobox{
  margin-bottom: 25px;
}

  #app{
    height: 100%;
    width: 100%;
    display: flex;
  }
  #nav{
    padding: 50px 0;
    width: 200px;
    background-color: #f8f8f8;
    color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    a{
      text-decoration: none;
      color:#333;
      padding: 8px 20px;
      border-radius: 5px;
      &.router-link-exact-active{
        background-color: #31c27c;
        color: #fff;
      }
    }
    .date{
      font-size: 24px;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 40px;
      color: #31c27c;
    }
    .nav-text{
      flex: 1;
      font-size: 18px;
      display: flex;
      flex-direction:column;
    }
  }

  .content{
    flex: 1;
    padding-top: 20px;
    .content-manage{
      box-sizing: border-box;
      padding: 50px;
      height: 100%;
      width: 100%;
      font-size: 16px;
    }
    .close-icon{
  font-size: 26px;
  float: right;
  margin-right: 30px;
  cursor: pointer;
}
  }

  .close-cion{
  float: right;
  margin-right: 30px;
  cursor: pointer;
  }

  .add-icon{
  display: inline-block;
  height: 30px;
  width: 30px;
  line-height: 28px;
  text-align: center;
  font-size: 24px;
  border-radius: 50%;
  background-color: #31c27c;
  color: #fff;
  margin-right: 10px;
}
  </style>
