## 基于java的html2img

> 实现思路

![image](https://raw.githubusercontent.com/shen1992/shenPlay/master/assets/2.jpg)

- redis缓存功能
- rateLimit限制一定时间内某个ip请求的数量

## 使用方法

方法 | 地址 | contentType
---|--- | ---
POST | https://api-fe.yuedu.163.com/html2img.json | application/json

> 参数

- html(string, 必须)
- width(num, 必须) 图片的宽度
- css(string, 可选)

[接口内置浏览器样式重置以及基本布局元素](https://g.hz.netease.com/winman-f2e/html2img/blob/master/helper.js)

> 使用示例

- 直接传入所需要展示的元素即可
- 支持内联样式

```
axios({
      method: 'post', 
      url: `https://api-fe.yuedu.163.com/html2img.json`,
      data: {
        html: `<div class="oDiv">你好吗</div>`,
        width: 200,
        css: `
        .oDiv {
          color: red;
          width: 200px;
          height: 200px;
          background: paleturquoise;
        }
        `
      }
    })
```

```
axios({
      method: 'post', 
      url: `https://api-fe.yuedu.163.com/html2img.json`,
      data: {
        html: `<div style="color: red">你好吗</div>`,
        width: 200
      }
    })

```

> 返回示例

```
{
  code: 0,
  url: xxx
}
```