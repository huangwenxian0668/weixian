# 使用指南  

## 1. 点击展开或缩起的内容 

<details>
  <summary>Click to expand</summary>
  whatever
</details>

## 2. 怎么展示本地图片
![Flex中的四大概念](/flex1.png)   

> 这个地址填写的与config.js同级的public文件夹中的图片地址，注意格式     
如我们这张flex1.png图片在项目中的位置是: docs\.vuepress\public\flex1.png


## 3. 怎么实现点击放大本地图片
<a data-fancybox title="Flex中的四大概念" href="/flex1.png">![Flex中的四大概念](/flex1.png)</a>

> 注意里面的地址的格式


## 3. 代码使得代码高亮
格式为:
```
```javascript
```
```javascript
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    // 最终拿到这2项
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
```
