<template>
  <div class="stepd">
    <div class="views" style="margin-left:80px">
      <div :class="isIdCard ? 'img_box img_box_active' : 'img_box'">
        <img
          v-if="!isIdCard"
          class="idcard"
          src="~@/assets/images/civil/idcard.png"
          alt
        />
        <img
          v-if="isIdCard"
          class="idcard"
          src="~@/assets/images/civil/idcard_active.png"
          alt
        />
      </div>
      <span :class="isIdCard ? 'info_box info_box_active' : 'info_box'"
        >身份验证</span
      >
    </div>
    <div class="views">
      <img
        v-if="!isDocument"
        class="next"
        src="~@/assets/images/civil/next.png"
        alt
      />
      <img
        v-if="isDocument"
        class="next"
        src="~@/assets/images/civil/next_active.png"
        alt
      />
      <div :class="isDocument ? 'img_box img_box_active' : 'img_box'">
        <img
          class="documents"
          v-if="!isDocument"
          src="~@/assets/images/civil/document.png"
          alt
        />
        <img
          class="documents"
          v-if="isDocument"
          src="~@/assets/images/civil/document_active.png"
          alt
        />
      </div>
      <span :class="isDocument ? 'info_box info_box_active' : 'info_box'"
        >案件信息</span
      >
    </div>
    <div class="views">
      <img
        class="next"
        v-if="!isDocument_1"
        src="~@/assets/images/civil/next.png"
        alt
      />
      <img
        class="next"
        v-if="isDocument_1"
        src="~@/assets/images/civil/next_active.png"
        alt
      />
      <div :class="isDocument_1 ? 'img_box img_box_active' : 'img_box'">
        <img
          class="documents"
          v-if="!isDocument_1"
          src="~@/assets/images/civil/document_1.png"
          alt
        />
        <img
          class="documents"
          v-if="isDocument_1"
          src="~@/assets/images/civil/document_1_active.png"
          alt
        />
      </div>
      <span :class="isDocument_1 ? 'info_box info_box_active' : 'info_box'"
        >原告被告信息</span
      >
    </div>
    <div class="views">
      <img
        class="next"
        v-if="!istijiao"
        src="~@/assets/images/civil/next.png"
        alt
      />
      <img
        class="next"
        v-if="istijiao"
        src="~@/assets/images/civil/next_active.png"
        alt
      />
      <div :class="istijiao ? 'img_box img_box_active' : 'img_box'">
        <img
          class="tijiao"
          v-if="!istijiao"
          src="~@/assets/images/civil/tijiao.png"
          alt
        />
        <img
          class="tijiao"
          v-if="istijiao"
          src="~@/assets/images/civil/tijiao_active.png"
          alt
        />
      </div>
      <span :class="istijiao ? 'info_box info_box_active' : 'info_box'"
        >提交材料</span
      >
    </div>
    <div class="views">
      <img
        class="next"
        v-if="!istijiao_1"
        src="~@/assets/images/civil/next.png"
        alt
      />
      <img
        class="next"
        v-if="istijiao_1"
        src="~@/assets/images/civil/next_active.png"
        alt
      />
      <div :class="istijiao_1 ? 'img_box img_box_active' : 'img_box'">
        <img
          class="tijiao"
          v-if="!istijiao_1"
          src="~@/assets/images/civil/tijiao_1.png"
          alt
        />
        <img
          class="tijiao"
          v-if="istijiao_1"
          src="~@/assets/images/civil/tijiao_1_active.png"
          alt
        />
      </div>
      <span :class="istijiao_1 ? 'info_box info_box_active' : 'info_box'"
        >信息确认</span
      >
    </div>
    <div class="views">
      <img
        class="next"
        v-if="!iswancheng"
        src="~@/assets/images/civil/next.png"
        alt
      />
      <img
        class="next"
        v-if="iswancheng"
        src="~@/assets/images/civil/next_active.png"
        alt
      />
      <div :class="iswancheng ? 'img_box img_box_active' : 'img_box'">
        <img
          class="wancheng"
          v-if="!iswancheng"
          src="~@/assets/images/civil/wancheng.png"
          alt
        />
        <img
          class="wancheng"
          v-if="iswancheng"
          src="~@/assets/images/civil/wancheng_active.png"
          alt
        />
      </div>
      <span :class="iswancheng ? 'info_box info_box_active' : 'info_box'"
        >完成</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isIdCard: state => state.Step.isIdCard,
      isDocument: state => state.Step.isDocument,
      isDocument_1: state => state.Step.isDocument_1,
      istijiao: state => state.Step.istijiao,
      istijiao_1: state => state.Step.istijiao_1,
      iswancheng: state => state.Step.iswancheng
    })
  }
};
</script>

<style lang="scss" scoped>
.stepd {
  width: 1840px;
  height: 82px;
  margin-left: 33px;
  background: #f8f8f8;
  display: flex;
  align-items: flex-end;
  .views {
    display: flex;
    align-items: center;
    margin-left: 35px;
    .img_box {
      width: 44px;
      height: 44px;
      border: 2px solid #a5adbe;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 37px;
      .idcard {
        width: 30px;
        height: 24px;
      }
      .documents {
        width: 25px;
        height: 26px;
      }
      .tijiao {
        width: 26px;
        height: 29px;
      }
      .wancheng {
        width: 28px;
        height: 28px;
      }
    }
    .img_box_active {
      border: 2px solid rgba(51, 128, 243, 1);
    }
    .info_box {
      font-size: 28px;
      font-family: PingFang-SC;
      font-weight: 400;
      color: rgba(132, 140, 157, 1);
      margin: 0 0 0 12px;
    }
    .info_box_active {
      color: #3380f3;
    }
    .next {
      width: 46px;
      height: 14px;
    }
  }
}
</style>
