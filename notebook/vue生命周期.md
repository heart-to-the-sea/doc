# vue生命周期

1. new Vue实例
2. 初始化event&&lifecycle
3. beforeCreate
4. 注入数据，校验
5. created
6. 是否指定el选项
   1. 是，是否指定template选项
      1. 是，开始编译生成render函数
      2. 否，将el外部的html作为模板编译，
         1. 存在与new Vue()的情况，Vue.componetn()没有template是不行的。
   2. 否，等待vm.$mount()手动挂载
7. beforeMount
8. 创建vm.$el,替换掉el
9. mounted。挂载完毕
10. 更新阶段，data修改
11. beforeUpdate
12. 重新执行render函数，new Vnode，新的虚拟dom，并应用更新。(多个数据改变为一次循环).
13. updated。更新完毕
14. 下面就是销毁阶段，beforeDestroy
15. 解除绑定，销毁子组件(又走了一边周期)以及事件监听器
16. destroyed.销毁完毕



## 疑问

1. 如果一直不vm.$mount(),下面怎么进行
   1. 没有el的情况就相当于vue.componetn(),是由vue自动执行vm.$mount()的。
2. vm.$el替换el，后面的el是指什么东西？
3. 销毁阶段，解除绑定是el选项么。还有默认的事件监听器包含了什么？
4. "将el外部的html作为template编译"什么意思？
   1. 就是将el节点中的html作为template编译
   2. 优先teplate选项，template选项编译结果会覆盖掉所挂载的节点上的内容。