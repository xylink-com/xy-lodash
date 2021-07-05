class UrlParam {
  defalutParamStr: string;
  constructor() {
    this.defalutParamStr = window.location.search;
  }

  private searchMatch(search: string) {
    return search.indexOf('?') > -1 ? search.substr(1) : search;
  }

  /**
   * 获取Url query部分name所对应的值
   *
   * @param { string } name 需要查询的key值
   * @param { string } search url query内容
   * @returns { undefined | string } 返回key所对应的值
   */
  get(name: string, search?: string): string | undefined {
    const urlSearch = search || this.defalutParamStr;
    const reg = new RegExp('(^|&|\\?)' + name + '=([^&?]*)(&|\\?|$)'); //构造一个含有目标参数的正则表达式对象
    let r = this.searchMatch(urlSearch).match(reg);
    if (r != null) return unescape(r[2]);
    return undefined; //返回参数值
  }

  /**
   * 获取Url中所有参数
   *
   * @param { string } search url query内容
   * @returns { Object } 返回query对象数据
   */
  getAll(search?: string) {
    const urlSearch = search || this.defalutParamStr;
    const query = this.searchMatch(urlSearch).split(/[&?]/);
    const params = {};
    for (let i = 0; i < query.length; i++) {
      let q = query[i].split('=');
      if (q.length === 2) {
        params[q[0]] = q[1];
      }
    }
    return params;
  }
}

const urlParam = new UrlParam();

export { urlParam };
