//只允许中文
export const onlyregExpZh = str => {
  return RegExp(/^[\u4e00-\u9fa5]+$/).test(str);
};
//匹配手机号
export const regExpPhone = str => {
  return RegExp(/^1[3456789]\d{9}$/).test(str);
};
//匹配身份证
export const regExpIDCard = str => {
  return RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(str);
};
//匹配空白行
export const regExpWhiteLine = str => {
  return RegExp(/\n\s*\r/).test(str);
};
//匹配邮箱格式
export const regExpEmail = str => {
  return RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(str);
};
//匹配数字
export const regExpNumber = str => {
  return RegExp(/^[0-9]*$/).test(str);
};
