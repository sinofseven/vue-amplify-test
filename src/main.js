import Vue from 'vue'
import App from './App.vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.config.productionTip = false

Vue.use(AmplifyPlugin, AmplifyModules)

Amplify.configure({
  Auth: {
    identityPoolId: 'ap-northeast-1:f8b2c81e-d35a-431e-956f-a70bdfc4d887',
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_NT1FRd7nd',
    userPoolWebClientId: '43o2k7opqit4ll1cnpcf01gh8l'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
