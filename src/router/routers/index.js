export const CommonRouter = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        component: () => import("@/views"),
        meta: {
            title: "首页"
        }
    }
]