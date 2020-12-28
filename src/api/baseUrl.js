// 开发环境
const developUrl = '';
// 测试环境
const testUrl = '';
// 线上环境
const formalUrl = '';

let baseUrl;
let localHref = window.location.href;

if (localHref.includes('localhost')) {
    baseUrl = developUrl;
} else {
    baseUrl = developUrl;
}
export default baseUrl;
