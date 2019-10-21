let api = {};
if (process.env.VUE_APP_TITLE === "production") { // 生成环境
    api.url = '生成环境';
} else {
    if (process.env.VUE_APP_TITLE === "pre") { // 测试环境
        api.url = '测试环境';
    } else { // 本地环境
        api.url = '本地环境';
    }
}

export default api;