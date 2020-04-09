<template>
  <div id="app">
    <header class="navbar">
      <div class="sidebar-button" @click="showPopup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          viewBox="0 0 448 512"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          ></path>
        </svg>
      </div>
      <span class="site-name">Vue</span>
    </header>
    <router-view></router-view>
    <van-popup
      v-model="show"
      position="left"
      style="width: 39%; height: 100%; z-index: 2030;margin-top: 57px;"
    >
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          :title="item.title"
          v-for="item in routes"
          :key="item.id"
          :to="item.url"
        />
      </van-sidebar>
    </van-popup>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'app',
  data() {
    return {
      show: false,
      activeKey: 0,
      routes: [
        { id: 0, title: '基础', url: '/basics' },
        { id: 1, title: '进阶', url: '/advance' },
      ],
    }
  },
  components: {
    HelloWorld,
  },
  methods: {
    onChange(index) {
      this.show = false
    },
    showPopup() {
      this.show == true ? (this.show = false) : (this.show = true)
    },
  },
}
</script>

<style>
.app-main {
  margin-top: 58px;
  padding: 20px 16px 12px;
}
.van-overlay {
  width: 39%;
}
.title-h3 {
  font-size: 0.9em;
  overflow: auto;
  text-align: center;
  margin-bottom: 20px;
  text-size-adjust: 100%;
  line-height: 30px;
  border-radius: 6px;
  color: rgb(89, 89, 89);
  box-sizing: inherit;
  border-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-color: rgb(222, 198, 251);
  background: rgb(246, 238, 255);
}
.title-h4 {
  font-size: 18px;
  display: inline-block;
  padding-left: 10px;
  border-left: 5px solid rgb(222, 198, 251);
  color: rgb(89, 89, 89);
}

.content-p {
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 26px;
  margin-top: 10px;
  margin-bottom: 10px;
  word-spacing: 2px;
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: 0.85rem 0;
  background-color: #282c34;
  border-radius: 6px;
  overflow: auto;
  color: #fff;
}
</style>
<style lang="less" scoped>
.van-sidebar-item {
  background-color: #ffffff;
}
.van-sidebar-item--select {
  border-color: #42b983;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2050;
  right: 0;
  height: 58px;
  line-height: 58px;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .sidebar-button {
    .icon {
      display: block;
      width: 20px;
      height: 20px;
    }
  }

  .navbar .site-name {
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
    position: relative;
  }
}
</style>
