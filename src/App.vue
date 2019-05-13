<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    <SignUp />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SignUp from './components/SignUp.vue'
import { components } from 'aws-amplify-vue'

export default {
  name: 'app',
  components: {
    components,
    HelloWorld,
    SignUp
  },
  data() {
    return {
      authConfig: {
        signUpConfig: {
          hiddenDefaults: ['email', 'phone_number']
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
