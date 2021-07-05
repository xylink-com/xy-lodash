/**
 * 浏览器版本信息
 *
 * @property { number } major 主版本号
 * @property { number } minor 次版本号
 * @property { number } build 修订版本号
 */
export type IBrowserBaseVerson = {
  major: number;
  minor: number;
  build?: number;
};

/**
 * 通用浏览器版本信息
 *
 * @value { undefined | IBrowserBaseVerson } 版本信息，可能为 undefined
 */
export type IBroswerVersion = undefined | IBrowserBaseVerson;

/**
 * 浏览器平台
 *
 * @property { boolean } platform.isTablet 是否是平板
 * @property { boolean } platform.isAndroid 是否是安卓设备
 * @property { boolean } isPhone 是否是iphone
 * @property { boolean } isPc 是否是pc浏览器
 * @property { boolean } isMac 是否是mac浏览器
 * @property { boolean } isChrome 是否是Chrome浏览器
 * @property { boolean } isLinux 是否是Linux浏览器
 * @property { boolean } isFirefox 是否是火狐浏览器
 * @property { boolean } isBaidu 是否是百度浏览器
 * @property { boolean } isQQ 是否是QQ浏览器
 * @property { boolean } isOpera 是否是Opera浏览器
 * @property { boolean } isZhazha 是否是其他不出名浏览器
 * @property { boolean } isEdge 是否是Edge浏览器
 * @property { boolean } isSafari 是否是Safari浏览器
 * @property { boolean } isPad 是否是苹果iPad
 * @property { boolean } isWeixin 是否是微信浏览器
 * @property { boolean } iswxwork 是否是企业微信浏览器
 * @property { boolean } isDingDing 是否是钉钉浏览器
 * @property { boolean } isWindowsWechat 是否是windows微信浏览器
 * @property { boolean } isWindowsWxWechat 是否是windows企业微信浏览器
 * @property { string } ua 浏览器agent信息
 * @property { string } lowerUa 浏览器agent小写信息
 */
export interface IPlatform {
  isTablet: boolean;
  isPhone: boolean;
  isAndroid: boolean;
  isPc: boolean;
  isMac: boolean;
  isChrome: boolean;
  isLinux: boolean;
  isFirefox: boolean;
  isBaidu: boolean;
  isQQ: boolean;
  isOpera: boolean;
  isZhazha: boolean;
  isEdge: boolean;
  isSafari: boolean;
  isPad: boolean;
  isWeixin: boolean;
  iswxwork: boolean;
  isDingDing: boolean;
  isWindowsWechat: boolean;
  isWindowsWxWechat: boolean;
  ua: string;
  lowerUa: string;
}
