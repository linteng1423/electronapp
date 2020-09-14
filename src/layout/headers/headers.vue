<template>
  <el-header>
    <router-link
      tag="div"
      to="/index"
      :class="isCollapse ? 'logo min-logo' : 'logo'"
      style="float:left"
    >
      <img class="logo_img" src="~@/assets/images/logo.png" alt="logo" />
      <span>永州市零陵区人民法院</span>
      <p class="self">自助立案</p>
    </router-link>

    <div class="userInfo">
      <div class="user-avator">
        <img class="next_img" src="~@/assets/images/time.png" alt />
        <p class="times">{{ nowtime }}</p>
        <span class="dates">{{ nowDate }}</span>
        <img class="next_img" src="~@/assets/images/user.png" alt />
        <span class="users">{{ userName }}</span>
        <img class="next_img" src="~@/assets/images/next.png" alt />
        <img
          class="next_img"
          style="margin-left:31px"
          src="~@/assets/images/home.png"
          alt
        />
      </div>
    </div>
  </el-header>
</template>

<script>
import { dateTime } from "@/utils/upDate";
export default {
  name: "Headers",
  data() {
    return {
      isCollapse: false,
      userName: localStorage.getItem("userName") || "请登录",
      nowDate: dateTime(new Date(), "Y/M/D"),
      nowtime: dateTime(new Date(), "h:m")
    };
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(() => {
      _this.nowtime = dateTime(new Date(), "h:m");
      _this.nowDate = dateTime(new Date(), "Y/M/D");
    }, 1000);
  },
  methods: {}
};
</script>
<style lang="scss">
.userInfo {
  height: 100%;
  float: right;
  width: 50%;
}
.logo {
  width: 600px;
  height: 100%;
  cursor: pointer;
  transition: width 0.5s linear;
  display: flex;
  align-items: center;
  img {
    height: 50px;
    width: 44.5px;
    vertical-align: middle;
    margin-right: 9px;
  }
  span {
    vertical-align: middle;
    font-size: 32px;
    font-weight: 800;
    color: rgba(51, 51, 51, 1);
  }
  .self {
    font-size: 32px;
    font-weight: 800;
    color: rgba(48, 121, 242, 1);
    padding-left: 19px;
    margin-left: 20px;
    border-left: 2px solid #caced7;
  }
}
.min-logo {
  width: 60px;
  transition: width 0.3s;
}
.user-avator {
  width: 600px;
  height: 100%;
  margin-right: 40px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  .times {
    font-size: 32px;
    font-family: Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin: 0 12px;
  }
  .users {
    font-size: 28px;
    font-family: PingFang-SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin: 0 40px 0 11px;
  }
}
.next_img {
  width: 32px;
  height: 32px;
}
.user-avator .dates {
  cursor: pointer;
  margin: 0 40px 0 0px;
  font-size: 24px;
  font-family: Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.el-header {
  width: 100%;
  height: 90px !important;
  padding: 0;
  margin: 0;
  background-color: #fff;
  color: #333333;
  text-align: left;
}
</style>
