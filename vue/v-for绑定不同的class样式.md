# v-for 绑定不同的 class 类名

```html
     <div  v-for="(item,index) in kindList" :key="item.id" :class="calculate(index)">
         {{item.ctitle}}
     </div>
```

```javascript
    data(){
      return{
        classList:['class-name1','class-name2']
      }
    },
    methods:{
      calculate(index){
        return this.classList[index]
      }
    }
```
