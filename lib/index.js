const shell = require('shelljs')
const readline = require('readline')
const path = require('path')
const fs = require('fs')
class Scripts {
    constructor() {
        this.init()
    }
    async init() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        const type = await new Promise((resolve,reject) => {
            rl.question('请输入rsa类型 默认2048 请输入：', (t) => {
                const type = t? t: '2048'
                resolve(type)
            })   
        })
        const save_path = await new Promise((resolve,reject) => {
            rl.question('请输入保存路径，默认storage 请输入：', (p) => {
                const save_path = p ? `./${p}`: './storage'
                if (!fs.existsSync(save_path)) {
                    fs.mkdirSync(save_path)
                }
                resolve(path.resolve(save_path))
            })   
        })
        
        rl.close()
        // 生成key
        await shell.rm('-rf', `${save_path}`)
        await shell.mkdir(save_path)
        await shell.cd(save_path)
        await shell.exec('pwd')
        await shell.exec(`openssl genrsa -out private.pem ${type}`)
        await shell.exec('openssl rsa -in private.pem -pubout -out public.pem')
        await shell.exec('echo "秘钥生成成功"')
        await shell.exit()
    }
}
module.exports = Scripts