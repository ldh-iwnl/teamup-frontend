import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Button, NavBar, Icon} from 'vant';


const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.mount('#app');

