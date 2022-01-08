export const RESTART_ON_REMOUNT = "@saga-injector/restart-on-remount";

export const BANNER_STATUS_POST = {
  STATUS_POST: 1,
  STATUS_DRAFT: 0,
};
export const TYPE_BANNER_STATUS = {
  BANNER: 1,
  NEWS: 0,
};
export const TYPE_DEBT = {
  INCREASE_DEBT: 1, // Tăng dư nợ
  COMPLETE_ORDER_DEBT: 2, // Đã thanh toán
  CANCEL_ORDER_DEBT: 3,
};

export const API_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  NOTFOUND: 404,
  BADREQUEST: 400,
  SERVER: 500,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
  FORBIDDEN: 403,
};
export const CONFIG_TYPE = {
  ATTENDANCE: 1,
  ORDER_PROMOTION: 2,
  DAILY_TURN: 3,
  REFERRAL_APP: 4,
  REFERRAL_CODE: 5,
  REFERRAL_MEMBER: 6,
};
export const ACCOUNT_R0LE = {
  ALL: 0,
  ADMIN: 1,
  STAFF: 2,
  AGENT: 3,
};
export const REQUEST_STATUS = {
  PENDING: 0, // Chờ phản hồi
  SUCCESS: 1, // Đồng ý
  REFUSE: 2, // Từ chối
};
export const PARTNER_REQUEST_STATUS = {
  PENDING: 2, // Đang yêu cầu
  ACCEPT: 1, // Chấp nhận
  REJECT: 0, // Từ chối
};
export const ORDER_STATUS = {
  PENDING: 1, // chờ xác nhận
  CONFIRMED: 2, // đang thực hiện
  SHIP: 3, // đang vận chuyển
  SUCCCESS: 4, // hoàn thành
  CANCELED: 5, // huỷ
  DENY: 6, // từ chối
};
export const GENDER = {
  MALE: 0,
  FEMALE: 1,
};
export const REG_PHONE = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export const IS_ACTIVE = {
  ACTIVE: 1, // Hoạt động
  INACTIVE: 0, // Ngưng hoạt động
};
export const ENTERPRISE_REQUEST_STATUS = {
  PENDING: 2, // Chờ phê duyệt
  ACCEPT: 1, // Chấp nhận
  REJECT: 0, // Từ chối
};
export const MEDIA_NAME = {
  IMAGE: "image",
  VIDEO: "video",
};
