/**
 * XY Tookit库总入口
 *
 * Created at     : 2021-07-05 12:07:23
 * Last modified  : 2021-07-05 13:30:44
 */

/**
 * 浏览器版本库
 */
export {
  getChromeVersion,
  getEdgeVersion,
  getPlatform,
  getSafariVersion,
  isPcExcludePad,
  isPc,
} from './browser';

/**
 * 浏览器全屏库
 */
export { fscreen } from './fullScreen';

/**
 * LocalStorage本地存储库
 */
export { store } from './store';

/**
 * UrlParam参数解析
 */
export { urlParam } from './urlParam';

/**
 * 深度克隆引用型数据
 */
export { cloneDeep } from './cloneDeep';
