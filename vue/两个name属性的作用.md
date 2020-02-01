# 两个name属性的作用?

> 一、组件中的name属性   
> 二、路由配置中的name属性

---

##### 组件中的name属性

  + 只有作为组件选项时起作用
  + 组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name
  + **递归调用、方便调试**

---

##### 路由中的name属性

  + 如果 `<router-view>`设置`name`属性，则会渲染对应的路由配置中 `components` 下的相应组件
  + 比如一个视图中,左边栏一个`<router-view>`中间内容一个`<router-view>`,顶部导航栏一个`<router-view>`
  
  ```html
    <router-view class="view content"></router-view>
    <router-view class="view right" name="right"></router-view>
    <router-view class="view left" name="left"></router-view>
  ```

  为了确保能正确使用组件

  ```javascript
    const router = new VueRouter({
      routes: [
        {
          path: '/',
          components: {
            default: Foo,
            a: Bar,
            b: Baz
          }
        }
      ]
    })
  ```