<template>
  <div class="app-main">
    <div class="title-h3">
      <h3>vue基础知识整理</h3>
    </div>
    <div v-for="item in articles" :key="item.id">
      <div>
        <span class="title-h4">{{ item.titleH4 }}</span>
      </div>

      <div class="content-p">
        <p>{{ item.contentP }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 0,
          titleH4: 'mvvm',
          contentP:
            'MVVM是Model-View-ViewModel缩写，也就是把MVC中的Controller演变成ViewModel。Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据。',
        },
        {
          id: 1,
          titleH4: 'Vue2.x响应式数据原理',
          contentP:
            'vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式实现的我们可以通过Object.defineProperty()来实现对数据改变的监听。当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在属性被访问和修改时通知变更。这里需要注意的是不同浏览器在控制台打印数据对象时对 getter/setter 的格式化并不同，所以建议安装 vue-devtools 来获取对检查数据更加友好的用户界面。每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。',
        },
        {
          id: 2,
          titleH4: 'Vue2.0响应式原理的不足',
          contentP:
            '1.动态添加响应式属性必须用Vue.set2.直接操作数组索引无法触发视图更新3.数据的响应式处理和视图未完全解耦',
        },
        {
          id: 3,
          titleH4: 'Vue3.x响应式数据原理',
          contentP:
            'Vue3.x改用Proxy替代Object.defineProperty。因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。Vue3.0响应式相对于Vue2.0的最大区别在于用到了es6中的方法Proxy。这个方法不需要循环遍历data的每个属性，对每个属性都做一遍响应式处理。而是直接代理了整个data对象，拦截这个对象所包含的所有属性的get、set方法。这么做的好处:1.就是在我们动态为data添加一个属性时，不用做任何处理，这个属性就已经是响应式的了。2.数组的任何操作也都可以触发响应。',
        },
      ],
    }
  },
}
</script>
