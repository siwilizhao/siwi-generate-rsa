# siwi-generate-rsa
生成rsa 公钥私钥

# 参考
```shell
openssl genrsa -out private.pem 2048

openssl rsa -in private.pem -pubout -out public.pem

```
# 安装

## yarn

`yarn add siwi-generate-rsa`
## npm
`npm install  siwi-generate-rsa`
## 建议开发环境安装
`yarn add -D siwi-generate-rsa`
`npm install -D siwi-generate-rsa`

# 为你的项目生成公钥私钥
const Rsa = require('siwi-generate-rsa')
module.exports = new Rsa()

> 在项目根目录storage下生成 private.pem public.pem

# 指定类型
`请输入rsa类型 默认2048 请输入:`

* 1024
* 2018
# 指定路径
`输入保存路径，默认storage 请输入:`
* 自定义路径

