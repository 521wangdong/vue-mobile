<template>
  <div class="home">
    <div class="box">
      <div class="btn">vue工作总结</div>
    </div>
  </div>
</template>

<script>
import { getList } from '../api/list'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getList()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .box {
    width: 340px;
    height: 320px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 10px 0px rgba(20, 97, 124, 0.2);
    border-radius: 4px;
    margin: 0 auto;
    .btn {
      width: 280px;
      height: 48px;
      line-height: 48px;
      background: linear-gradient(
        101deg,
        rgba(3, 204, 252, 1) 0%,
        rgba(51, 131, 217, 1) 100%
      );
      border-radius: 24px;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      margin: 0 auto;
    }
  }
}
</style>
