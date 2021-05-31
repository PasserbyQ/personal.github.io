import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ElPopover } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElPopover)
app.mount("#app");





// var global
// function f1() {
//     function f2() {
//         var v2 = 999
//         v1 = 111
//         console.log(v1)
//     }
//     var v1 = 666
//     return f2
// }
// const f = f1()
// f()
