/**
 * Browser Lib
 *
 * @author jinghui-Luo
 * @mail luojinghui424@gmail.com
 *
 * Created at     : 2021-07-05 12:04:18
 * Last modified  : 2021-07-05 13:09:34
 */

import { IBroswerVersion, IPlatform } from '../type';

/**
 * 浏览器品牌
 *
 * @return { IPlatform } platform 浏览器品牌对象数据
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
 */
export const getPlatform = (): IPlatform => {
  const ua: string = navigator.userAgent;
  const lowerUa = ua.toLocaleLowerCase();

  const isMac =
    navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
    /macintosh|mac os x/i.test(ua);
  const isLinux = navigator.platform.toUpperCase().indexOf('LINUX') >= 0;
  const isWindowsPhone = /(?:Windows Phone)/.test(ua);
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
  const isAndroid = /(?:Android)/.test(ua);
  const isFireFox = /(?:Firefox)/.test(ua);
  const isChrome = /(?:Chrome|CriOS)/.test(ua) && !(ua.indexOf('Edg') > -1);
  const isEdge = ua.indexOf('Edg') > -1;
  const isSafari = ua.indexOf('Safari') > -1 && !(ua.indexOf('Chrome') > -1);
  const isPad =
    /iPad/i.test(ua) ||
    (ua === 'MacIntel' && navigator.maxTouchPoints > 1) ||
    (ua === 'Macintosh' && navigator.maxTouchPoints > 1);
  const isTablet =
    /(?:iPad|PlayBook)/.test(ua) ||
    (isAndroid && !/(?:Mobile)/.test(ua)) ||
    (isFireFox && /(?:Tablet)/.test(ua));
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
  const isPc = !isPhone && !isAndroid && !isSymbian && !isPad;
  const isBaidu =
    ua.indexOf('Baidu') > -1 ||
    ua.indexOf('BIDUBrowser') > -1 ||
    ua.indexOf('baiduboxapp') > -1;
  const isFirefox = !!lowerUa.match(/firefox/) || ua.indexOf('Firefox') > -1;
  const isQQ =
    !!lowerUa.match(/tencenttraveler/) ||
    !!lowerUa.match(/qqbrowser/) ||
    ua.indexOf('QQ/') > -1 ||
    ua.indexOf('MicroMessenger') > -1;
  // PC微信浏览器
  const isWindowsWechat =
    ua.indexOf('MicroMessenger') > -1 &&
    lowerUa.indexOf('wxwork') <= -1 &&
    lowerUa.indexOf('windowswechat') > -1 &&
    // 排除mac客户端
    lowerUa.indexOf('macintosh') <= -1;
  // PC企业微信浏览器
  const isWindowsWxWechat =
    ua.indexOf('MicroMessenger') > -1 &&
    lowerUa.indexOf('wxwork') > -1 &&
    lowerUa.indexOf('windowswechat') > -1 &&
    // 排除mac客户端
    lowerUa.indexOf('macintosh') <= -1;
  // 移动端微信浏览器
  const isWeixin =
    ua.indexOf('MicroMessenger') > -1 &&
    lowerUa.indexOf('wxwork') <= -1 &&
    lowerUa.indexOf('windowswechat') <= -1;
  const isOpera = ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1;
  const iswxwork =
    lowerUa.indexOf('wxwork') > -1 && lowerUa.indexOf('micromessenger') > -1;
  const isDingDing = lowerUa.indexOf('dingtalk') > -1;
  const isZhazha =
    ua.indexOf('QihooBrowser') > -1 ||
    ua.indexOf('QHBrowser') > -1 ||
    ua.indexOf('360SE') > -1 ||
    ua.indexOf('360EE') > -1 ||
    ua.indexOf('LBBROWSER') > -1 ||
    ua.indexOf('UC') > -1 ||
    ua.indexOf('UBrowser') > -1 ||
    ua.indexOf('UCWEB') > -1 ||
    ua.indexOf('Quark') > -1 ||
    ua.indexOf('MiuiBrowser') > -1 ||
    ua.indexOf('AliApp(TB') > -1 ||
    ua.indexOf('Weibo') > -1 ||
    ua.indexOf('IqiyiApp') > -1 ||
    ua.indexOf('HuaweiBrowser') > -1 ||
    ua.indexOf('HUAWEI') > -1 ||
    ua.indexOf('MetaSr') > -1 ||
    ua.indexOf('Sogou') > -1 ||
    ua.indexOf('SE') > -1 ||
    ua.indexOf('Maxthon') > -1 ||
    ua.indexOf('The world') > -1 ||
    ua.indexOf('MetaSr') > -1 ||
    ua.indexOf('2345Explorer') > -1 ||
    ua.indexOf('TencentTraveler') > -1 ||
    ua.indexOf('Mb2345Browser') > -1;

  return {
    isTablet,
    isPhone,
    isAndroid,
    isPc,
    isMac,
    isChrome,
    isLinux,
    isFirefox,
    isBaidu,
    isQQ,
    isOpera,
    isZhazha,
    isEdge,
    isSafari,
    isPad,
    isWeixin,
    iswxwork,
    isDingDing,
    isWindowsWechat,
    isWindowsWxWechat,
    ua,
    lowerUa,
  };
};

/**
 * 是否是桌面端浏览器（包含iPad和平板）
 *
 * @returns { boolean }
 */
export const isPc = (): boolean => {
  const { isAndroid, isPhone } = getPlatform();

  return !isAndroid && !isPhone;
};

/**
 * 是否是桌面端浏览器（不包含ipad和平板）
 *
 * @returns { boolean }
 */
export const isPcExcludePad = (): boolean => {
  const { isAndroid, isPhone, isPad } = getPlatform();

  return !isAndroid && !isPhone && !isPad;
};

/**
 * 获取Chrome版本信息
 *
 * @returns { IBroswerVersion } version Chrome浏览器版本
 */
export const getChromeVersion = (): IBroswerVersion => {
  let pieces: any = navigator.userAgent.match(
    /Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/
  );
  if (pieces == null || pieces.length !== 5) {
    return undefined;
  }

  pieces = pieces.map((piece: any) => parseInt(piece, 10));

  return {
    major: pieces[1],
    minor: pieces[2],
    build: pieces[3],
  };
};

/**
 * 获取Edge浏览器版本信息
 *
 * @returns { IBroswerVersion } version Edge浏览器版本
 */
export const getEdgeVersion = (): IBroswerVersion => {
  let pieces: any = navigator.userAgent.match(
    /Ed(?:g)\/([0-9]+)\.([0-9]+)\.([0-9]+)/
  );
  if (pieces == null || pieces.length < 4) {
    return undefined;
  }

  pieces = pieces.map((piece: any) => parseInt(piece, 10));
  return {
    major: pieces[1],
    minor: pieces[2],
    build: pieces[3],
  };
};

/**
 * 获取Safari版本信息
 *
 * @returns { IBroswerVersion } version Safari浏览器版本
 */
export const getSafariVersion = (): IBroswerVersion => {
  let pieces: any = navigator.userAgent.match(/Version\/([0-9]+)\.([0-9]+)/);
  if (pieces == null || pieces.length < 3) {
    return undefined;
  }

  pieces = pieces.map((piece: any) => parseInt(piece, 10));
  return {
    major: pieces[1],
    minor: pieces[2],
  };
};

/**
 * 获取微信浏览器版本信息
 *
 * @returns { IBroswerVersion } version 微信浏览器版本
 */
export const getWeixinVersion = (): IBroswerVersion => {
  const { isWeixin } = getPlatform();

  if (isWeixin) {
    const weixinInfo = navigator.userAgent.match(
      /MicroMessenger\/([\d\.]+)/i
    ) || ['', ''];
    const weixinVersion = weixinInfo[1].split('.');

    if (weixinVersion.length) {
      return {
        major: Number(weixinVersion[0]),
        minor: Number(weixinVersion[1]),
        build: Number(weixinVersion[2]),
      };
    }

    return {
      major: 0,
      minor: 0,
    };
  } else {
    return {
      major: 0,
      minor: 0,
    };
  }
};
