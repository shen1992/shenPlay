#!/usr/bin/env node

const path = require('path')
const { Readable } = require('stream')
const Koa = require('koa')
const send = require('koa-send')
const compilerSFC = require('@vue/compiler-sfc')

const app = new Koa()

const stream2string = (stream) => {
    return new Promse((resolve, reject) => {
        const chunks = [];
        stream.on('data', chunk => {chunks.push(chunk)})
        stream.on('end', () => { resolve(Buffer.concat(chunks).toString('utf-8'))})
        stream.on('error', reject)
    })
}

const stringToStream = text => {
    const stream = new Readable();
    stream.push(text);
    stream.push(null);
    return stream;
}

// 加载第三方模块
app.use(async (ctx, next) => {
    if (ctx.path.startsWith('/@modules/')) {
        // 截取模块名称
        const moduleName = ctx.path.substr(10);
        // 找到模块路径
        const pkgPath = path.join(process.pwd(), 'node_modules', moduleName, 'package.json');
        const pkg = require(pkgPath);
        // 重新给ctx.path赋值，需要重新设置一个存在的路径，因为之前的路径是不存在的
        ctx.path = path.join('/node_modules', moduleName, pkg.module);
        // 执行下一个中间件
        await next();
    }
})

// 开启静态文件服务器
app.use(async (ctx, next) => {
    // 加载静态文件
    await send(ctx, ctx.path, { root: process.cwd(), index: 'index.html'})
    await next()
})

// 处理单文件组件
app.use(async (ctx, next) => {
    if (ctx.path.endsWith('.vue')) {
        // 获取响应文件内容，转换成字符串
        const contents = await stringToStream(ctx.body);
        // 编译文件内容
        const { descriptor } = compilerSFC.parse(contents);
        // 定义状态码
        let code;
        // 不存在type就是第一次请求
        if (!ctx.query.type) {
            code = descriptor.script.content;
            // 这里的code格式是, 需要改造成我们前面贴出来的vite中的样子
            // import Hello from './components/Hello.vue'
            // export default {
            //      name: 'App',
            //      components: {
            //          Hello
            //      }
            //  }
            // 改造code的格式，将export default 替换为const __script =
            code = code.replace(/export\s+default\s+/g, 'const __script = ')
            code += `
                import { render as __render } from '${ctx.path}?type=template'
                __script.rener = __render
                export default __script
            `
        } else if (ctx.query.type === 'template') {
            // 获取编译后的对象 code就是render函数
            const templateRender = compilerSFC.compileTemplate({ source: descriptor.template.content })
            // 将render函数赋值给code返回给浏览器
            code = templateRender.code
        }
        // 设置浏览器响应头为js
        ctx.type = 'application/javascript'
        // 将字符串转换成数据流传给下一个中间件。
        ctx.body = stringToStream(code);
    }
    await next()
})

// 修改第三方模块路径
app.use(async (ctx, next) => {
    if (ctx.type === 'application/javascript') {
        const contents = await stream2string(ctx.body);
        // 将body中导入的路径修改一下，重新赋值给body返回给浏览器
        // import vue from 'vue', 匹配到from '修改为from '@modules/
        ctx.body = contents.replace(/(from\s+['"])(?![\.\/])/g, '$1/@modules/').replace(/process\.env\.NODE_ENV/g, '"development"');
    }
})

app.listen(5000)

console.log('服务器已经启动 http://localhost:5000')