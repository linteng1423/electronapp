简体中文 | [English](./README.md) 

## 1、基础目录结构
```

├── public
├── server
└── src
    ├── api
    ├── assets
    ├── components
    ├── filters
    ├── layout
    ├── lib
    ├── routes
    ├── store
    ├── styles
    ├── utils
    └── views
```

## 开发

```bash
# 克隆指定项目分支
git clone -b dev xxxx
# 进入项目目录
cd xxxx

# 安装依赖
npm install

# 启动服务
npm run dev
```

浏览器访问 http://localhost:8085

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

```bash
# 代码格式检查
npm run lint
```

### 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).


