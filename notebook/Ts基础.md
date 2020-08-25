# Ts 基础

## 声明空间

#### 类型声明空间

- `interface Bar{}` `let bar = Bar` 会报错,因为接口 Bar 不在变量生命空间中.
- 类型注解 `let bar:Bar`

#### 变量声明空间

- class 类可以用变量接收,但是 interface 不行
- 理论上 类型声明空间和变量生命空间的命名可以相同
- 变量生命空间不能当作类型注解

## 模块

- `export`和`import` 暴露/导入
