import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
    //Interpolations
      //Named interpolation
      message: {
        hello: '{msg} world'
      },
      //List interpolation
      message1:{
        hello: '{0} world'
      },
      //Literal interpolation
      address: "{account}{'@'}{domain}",
      message3: {
        the_world: 'the world',
        dio: 'DIO:',
        linked: '@:message3.dio @:message3.the_world !!!!'
      }
    },
    ch: {
    //Interpolations
      //Named interpolation
      message: {
        hello: '世界 你好！'
      },
      //List interpolation
      message1:{
        hello: '世界 你好！'
      },
      //Literal interpolation
      address: '邮箱地址为：foo@domain.com',
      message3: {
        the_world: 'the world',
        dio: 'DIO:',
        linked: '变为英文的结果应该是：DIO: the world !!!!'
      }
    }
  }

const i18n = createI18n({
    legacy: false,
    locale: 'ch',
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)

app.use(i18n).use(router)

app.mount('#app')
