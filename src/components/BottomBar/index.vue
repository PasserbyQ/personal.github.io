<template>
  <div class="info-container">
    <div class="avatar"><img src="@/assets/logo.png" /></div>
    <!-- <div class="title">{{ userInfo.name }}</div> -->
    <div class="desc">{{ userInfo.desc }}</div>
    <div class="link">
      <img
        v-for="link in userInfo.links"
        :key="link.link"
        :src="link.logo"
        @click="hrefClick(link.link)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive } from "vue";
export default {
  setup() {
    /*****************  数据声明  ***************/
    const userInfo = reactive({
      name: "技术",
      desc: "三年原生开发经验，两年前端开发经验，专注技术",
      links: [
        {
          logo: require("@/assets/csdn.png"),
          link: "https://blog.csdn.net/qq_32644987",
        },
        {
          logo: require("@/assets/github.png"),
          link: "https://github.com/PasserbyQ",
        },
      ],
    });

    /*****************  生命周期  ***************/

    // onMounted(() => {});

    /*****************  自定义方法  ***************/
    const hrefClick = (url: string) => {
      window.open(url);
    };

    /*****************  网络请求  ***************/

    return { userInfo, hrefClick };
  },
};
</script>
<style lang="scss" scoped>
.info-container {
  height: 200px;
  background: #13df81;
  color: white;

  .avatar {
    padding: 20px;
    img {
      width: 50px;
      height: 50px;
    }
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  .desc {
    font-size: 16px;
    padding-bottom: 20px;
  }

  .link {
    display: flex;
    justify-content: center;
    img {
      padding: 0 20px;
      width: 35px;
      height: 35px;
    }
  }
}
.info-container:hover {
  cursor: pointer;
}
</style>