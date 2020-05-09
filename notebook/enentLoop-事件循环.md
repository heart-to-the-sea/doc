## event loop 事件循环
## 代码解析

### 片段一

```javascript
  $.on("button", "click", function onClick() {
    setTimeout(function timer() {
      console.log("You clicked the button!");
    }, 2000);
  });

  console.log("Hi!");

  setTimeout(function timeout() {
    console.log("Click the button!");
  }, 5000);

  console.log("Welcome to loupe.");
```
### 代码执行步骤
- 1.定义事件保存在 '浏览器'中
- 2.执行`console.log("Hi!");`
- 3.执行`setTimeout(function timeout() {console.log("Click the button!");}, 5000);`,将cb传到保存在’浏览器‘中（有相应的管理模块）
- 4.执行`console.log("Welcome to loupe.");`
- 5.cb经过一定事件，保存到 task queue中，event loop把它抓起来放进 call stack中
- 6.然后。每次触发点击事件的时候，就会从步骤3一样开始执行到步骤5。

## 注意 
- setTimeout使从调用它的时候开始计时，然后计时结束放到任务队列中，如果主线程执行完毕，就从任务队列抓第一个排列任务来执行。（不算微任务）

## 参考
- https://www.youtube.com/watch?v=8aGhZQkoFbQ event loop 视频   (by latentflip)
- https://github.com/latentflip/loupe javascript runtime 可视化 (by latentflip)