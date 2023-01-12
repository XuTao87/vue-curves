#### 📦 npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```sh
$ npm i vue-curves

```

#### 🔨 快速上手
**完整引入**

在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import curves from 'vue-curves';
import App from './App.vue';

Vue.use(curves)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 🎨 按需引入

如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import {Button} from 'vue-curves';

Vue.component(Button.name, Button)

/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```