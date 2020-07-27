# typescript的笔记

## symbol

1. ```Symbol.prototype.description``` 获取Symbol的描述

2. Symbol作为属性名不会被```for...in```、```for...of```、```Object.keys()```、```Object.getOwnPropertyNames()```、```JSON.stringify()```返回
    ```javascript
      // 可以通过Object.getOwnPropertyNames()获取对象的Symbol属性
    const dd = Symbol('dd')
    const ff = Symbol('ff')
    const obj = {
      c: Symbol(),
      [dd]: '22',
      [ff]: '11'
    }
    console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(dd), Symbol(ff)]

    ```
3. 可以通过```Reflect.ownKeys()```获取所有类型的键名。常规键名和Symbol键名

4. 一般Symbol用于创建对象的非私有、又希望只用于内部的方法

5. Symbol.for(str) 重新使用一个Symbol值; Symbol.keyFor(symbol) 返回已登记的Symbol类型值的key; **都是全局环境**
    ```javascript
      let s1 = Symbol.for('foo')
      let s2 = Symbol.for('foo')

      s1 === s2 // true
      // 先搜索有没有以'foo'为标志的Symbol，如果有就返回该Symbol，没有就创建并注册到全局
    ```

6. 关于Symbol.species

    ```javascript
    // ts中和js中表现不同
    class MyArray extends Array {
    }

    const a = new MyArray(1, 2, 3);
    const b = a.map(x => x);

    b instanceof MyArray // true js中

    /**
     * ts中 b 衍生对象原型不指向 MyArray
     * js中 b 衍生对象原型指向 MyArray 
     */
    
    // 可通过Symbol.species去修改
    class MyArray extends Array {
      static get [Symbol.species]() { return Array; }
    }
    ```