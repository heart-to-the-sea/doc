# HTTP协议

- HTTP协议使应用层的协议，建立在TCP传出层之上

## 请求报文

- 通用报文
- 请求报文
- 相应报文

##  报文由最多由三部分组成

- 请求行 
- 头部信息 Headers
- 空行 
- 请求体 body

## post-body相关头部信息

- `content-type:multipart/form-data`
- 上传文件啊，表单提价啊，这个请求又一个`boundary`作为分隔符
  - `<delimiter>\r\n<header>\r\n\r\n<content>\r\n<delimter>\r\n<header>\r\n\r\n<content>`
- `application/``x-www-form-urlencoded`
  - 默认的提交方式，
  - `\r\n<query>`,一个空行之后就是以 `'&'` 分隔的键-值对。
  - 不支持二进制数据