import Babel from '@babel/core'
import fs from 'node:fs'

const code = fs.readFileSync('./test.js', 'utf8');

// babel会注入一个types对象，里面包含了各种ast节点的方法
const transformFunction = ({ types: t }) => {
    return {
        name: 'babel-transform-function',
        // visitor 是一个对象， 它包含了一组方法，这些方法对应于AST中不同的节点类型，当Balbel遇到了不同的节点，会调用visitor中对应的方法
        visitor: {
            // 匹配，此处匹配的是箭头函数
            ArrowFunctionExpression(path) {
                const node = path.node
                const arrowFunction = t.functionExpression(
                    null, // node.id -> null 说明这是个匿名函数
                    node.params, // 返回的是一个数组，代表了函数的参数
                    // BlockStatement 是AST节点的一种类型，代表一个区块包裹如函数，if-else，循环这样语法块
                    t.blockStatement([t.returnStatement(node.body)]), // returnStatement才是函数的主体
                    node.async // 布尔值，表示函数是否异步
                )
                path.replaceWith(arrowFunction) // 替换当前节点
            }
        }
    }
}

const result = Babel.transform(code, {
    plugins: [
        transformFunction
    ]
})

console.log(result.code)