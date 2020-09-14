// import contentMain from "@/layout/contentMain/contentMain.vue";
import index from "@/views/index.vue";
import Layout from "@/layout/index.vue";
export const CommonRouter = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: Layout,
    children: [
      {
        path: "/",
        name: "index",
        component: index,
        meta: {
          title: "首页"
        }
      },
      {
        path: "/case-case",
        name: "case-case",
        component: () => import("@/views/notification"),
        meta: {
          title: "民事案件告知书"
        }
      },
      {
        path: "/case-information",
        name: "case-information",
        component: () => import("@/views/case-information"),
        meta: {
          title: "案件信息",
          isStep: true
        }
      },
      {
        path: "/civil",
        name: "civil",
        component: () => import("@/views/case/civil"),
        meta: {
          title: "原告被告信息",
          isStep: true
        }
      },
      {
        path: "/enforcement-basis",
        name: "enforcement-basis",
        component: () => import("@/views/case/enforcement-basis"),
        meta: {
          title: "提交材料",
          isStep: true
        }
      },
      {
        path: "/subInfo",
        name: "subInfo",
        component: () => import("@/views/case/subInfo"),
        meta: {
          title: "提交材料",
          isStep: true
        }
      },
      {
        path: "/confirm",
        name: "confirm",
        component: () => import("@/views/case/confirm"),
        meta: {
          title: "信息确认",
          isStep: true
        }
      },
      {
        path: "/theEnd",
        name: "theEnd",
        component: () => import("@/views/case/theEnd"),
        meta: {
          title: "完成",
          isStep: true
        }
      }
    ]
  }
];
