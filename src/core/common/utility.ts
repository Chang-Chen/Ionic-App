/**
 * 根据key获取URL中对应的key值
 * @param {string} key
 * @param {string} url
 * @return {any}
 */
const getQueryParamValByKey = (key: string, url?: string): any => {
  if (typeof url !== 'string' || url === undefined || typeof key !== 'string' || key === undefined) {
    return;
  }
  const t = url || location.href;
  const reg = new RegExp('[?|&]' + key + '=([^&]+)');
  const match = t.match(reg);
  return match && match[1];
};

/**
 * 将一个对象的属性和值，以&key=value形式拼接
 * @param {Object | string} param
 * @param {boolean} notFirAddParam 默认FALSE,即默认首次拼接
 * @return {string}
 */
const setQueryParamByObj = (param: Object | string, notFirAddParam?: boolean): string => {
  let paramStr = '';
  notFirAddParam = notFirAddParam || false;
  if (typeof param === 'object') {
    let firstIndex = true;
    for (const p in param) {
      if (param.hasOwnProperty(p)) {
        paramStr += (firstIndex && !notFirAddParam ? '?' : '&') + String(p) + '=' + String(param[p]);
        firstIndex = false;
      }
    }
  }
  return paramStr;
};

/**
 * 拨打电话号码
 * @param {number | string} phone
 */
const callPhone = (phone: number | string): void => {
  location.href = 'tel:' + phone;
};

/**
 * 是否是中文
 * @param {string} str
 * @return {boolean}
 */
const isChineseCode = (str: string): boolean => {
  if (str.length !== 0) {
    const reg = /^[\u0391-\uFFE5]+$/;
    if (!reg.test(str)) {
      return false;
    }
  }
  return true;
};

/**
 * 检测字符串是否为空
 * @param {string} str
 * @return {boolean}
 */
const isEmptyString = (str: string): boolean => {
  return (str === null || typeof str === 'undefined' || str.trim() === '');
};

/**
 * 清楚null字符串
 * @param {string} str
 * @return {string}
 */
const clearNullString = (str: string) => {
  if (str === null || typeof str === 'undefined' || str.trim() === '') {
    str = '';
  }
};

/**
 * 是否是固定电话
 * @param phone
 * @return {boolean}
 */
const isTelephone = (phone): boolean => {
  const phone_reg = new RegExp(/^([+]{0,1}\d{3,4}|\d{3,4}-)?\d{7,8}$/);
  return phone_reg.test(phone);
};

/**
 * 是否是手机号码
 * @param mobile
 * @return {boolean}
 */
const isMobile = (mobile): boolean => {
  const mobile_reg = new RegExp(/^0{0,1}1[0-9]{10}$/);
  return mobile_reg.test(mobile);
};

/**
 * 金钱数字千分位格式化，','分割
 * @param {number | string} money
 * @return {string}
 */
const moneyNumberFormat = (money: number | string): string => {
  let formatNum = String(money);
  const re = /(-?\d+)(\d{3})/;
  while (re.test(formatNum)) {
    formatNum = formatNum.replace(re, '$1,$2');
  }
  return formatNum;
};


export const utility = {
  getQueryParamValByKey,
  setQueryParamByObj,
  callPhone,
  isChineseCode,
  isEmptyString,
  clearNullString,
  isTelephone,
  isMobile,
  moneyNumberFormat,
};
