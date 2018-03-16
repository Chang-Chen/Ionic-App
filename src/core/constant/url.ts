const BASE_URLS = 'http://www.softwareo2o.com/wehouse-mall';
const BASE_FILE_URLS = 'http://www.softwareo2o.com:88/wemall-oss';

//文件上传
export const UPL_UPLOAD_FILE = BASE_FILE_URLS + '/ossFile/upload.do?module=wemall';

//获取个人用户信息
export const USER_INFO = BASE_URLS + '/user/getUserInfoByUserId.do';

//修改用户信息
export const USER_INFO_MODIFY = BASE_URLS + '/user/updateUserInfo.do';

//获取用户报备信息
export const USER_CUSTOMER_DETAIL = BASE_URLS + '/user/findCustomerDetail.do';

// 房源列表查询
export const HOUSE_LIST = BASE_URLS + '/house/findHouseList.do';

//房源详情
export const HOUSE_DETAIL = BASE_URLS + '/house/detail.do';

//发送验证码
export const USER_SEND_CODE = BASE_URLS + '/common/sendCode.do';

//用户注册
export const USER_REGISTER = BASE_URLS + '/binding/bindUser.do';

//用户登录
export const USER_LOGIN = BASE_URLS + '/binding/autoLogin.do';

//报备客户
export const REPORT_CLIENTS = BASE_URLS + '/house/report.do';


