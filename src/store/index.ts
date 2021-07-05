/**
 * Store LocalStorage
 *
 * @authors Luo-jinghui (luojinghui424@gmail.com)
 * @date  2019-11-01 14:36:12
 */

interface IStore {
  storage: Storage;
  set: (key: string, value: any) => void;
  get: (key: string) => any;
  remove: (key: string) => void;
  clear: () => void;
  removeList: (array: string[]) => void;
}

/**
 * 浏览器存储库
 *
 * @function { IStore } store
 */
const store: IStore = {
  /**
   * 代理浏览器 localStorage Api
   *
   * @property { WindowLocalStorage } storage 代理浏览器本地存储api
   */
  storage: window.localStorage,

  /**
   * 向浏览器本地存储设置值
   *
   * @param key 存储的key
   * @param value 存储的value
   * @returns { null } null
   */
  set(key: string, value: any) {
    if (!value) return;

    let data = serialize(value) || '';

    this.storage.setItem(key, data);
  },

  /**
   * 获取本地存储值
   *
   * @param { string } key 获取key所对应的存储内容
   * @returns { any } 存储的内容
   */
  get(key: string) {
    if (!key) return;

    const val = this.storage.getItem(key);
    let newVal = val || '';

    try {
      newVal = JSON.parse(newVal);
    } catch (err) {
      newVal = val || '';
    }

    return newVal;
  },

  /**
   * 移除某一项存储的值
   *
   * @param key 移除项的key值
   * @returns { null }
   */
  remove(key: string) {
    if (!key) return;

    this.storage.removeItem(key);
  },

  /**
   * 清理localStorage存储库
   */
  clear() {
    this.storage.clear();
  },

  /**
   * 批量删除 array => key 数组内容的值
   *
   * @param { string[] } array key的数组
   */
  removeList(array: string[]) {
    for (let key of array) {
      this.storage.removeItem(key);
    }
  },
};

/**
 * 序列化数据
 *
 * @param { any } value 需要序列化的内容
 * @returns { any } 返回需要序列化的内容
 */
const serialize = (value: any) => {
  if (!value) return;

  let val = '';
  const type = Object.prototype.toString.call(value);

  if (type === '[object Object]' || type === '[object Array]') {
    val = JSON.stringify(value);
  } else {
    val = value;
  }

  return val;
};

export { store };
