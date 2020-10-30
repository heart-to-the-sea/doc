## 基础

1. `nest n mo user server` 创建`user`模块
2. `nest n co user server` 创建控制层
3. `nest n s user server` 创建'提供数据的'
4. 创建`user.interface` 定义接口
5. 创建`user.dto`定义字段
6. 在`user.controller`中写接口,具体操作在`user.srevice`中操作

## 疑问

1. `@Entity`是什么?以及那些参数装饰器怎么用?
2. 怎么处理异常,逻辑一场或数据库异常?
3. 怎么统一接口返回的数据结构,比如用data包一层等