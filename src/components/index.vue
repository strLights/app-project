<template>
  <div>
    <!-- 顶部布局 -->
    <van-row gutter="10" class="header">
      <van-col span="5">
        <img class="logo" src="../assets/images/logo.png" />
      </van-col>
      <van-col span="15">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </van-col>
      <van-col class="login" span="4">
        <span class="login_btn">登录</span>
      </van-col>
    </van-row>
    <!-- tablist -->
    <van-tabs>
      <van-tab v-for="(cname, index) in tabsList" :title="cname" :key="index">
        <!-- {{ cname }} -->
      </van-tab>
    </van-tabs>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(sname, index) in swiperList" :key="index">
        <img :src="sname" />
      </van-swipe-item>
    </van-swipe>

    <!-- 底部tabbar -->
    <van-tabbar v-model="active" active-color="#DD1A21" inactive-color="#000">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="send-gift-o">值得买</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "index",
  data() {
    return {
      value: "",
      tabsList: '',
      swiperList: [
        "https://yanxuan.nosdn.127.net/c8f6ea8569234c98d5f33c757b3b7960.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/78aa71c6c4b9071f37ad173820d97ebd.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/0a3c5b76e43e122d11d6a416bdd05351.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/d3fed1565d636233a577c20b82b191eb.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/2d4dd54dc192af52aa6621e4075d7849.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
      ],
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  created() {
    console.log(axios);
    axios.get('http://localhost:8888/tabsList')
      .then( res => {
        console.log(res);
        this.tabsList = res.data.data;
      }).catch(error =>{
        console.log(error);
      })
  }
};
</script>

<style scoped>
.header {
  margin: 0.2rem 0;
  text-align: center;
}
.logo {
  width: 1.6rem;
  padding: 0.15rem 0 0.1rem 0;
}
.van-search {
  padding: 0;
}
.van-search__content {
  background-color: #ededed;
}
.login {
  margin: 0.2rem 0;
}
.login_btn {
  border: 1px solid #dd1a21;
  color: #dd1a21;
  padding: 0.1rem 0.15rem;
  border-radius: 0.1rem;
  font-size: 0.1rem;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>