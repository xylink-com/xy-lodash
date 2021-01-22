/** 
 * @author chenjiaojiao
 * 
 * Created at     : 2021-01-21 18:45:42
 * Last modified  : 2021-01-22 18:21:38
 */


// 获取数据类型
const getType = (value: any) => {
  const type = Object.prototype.toString.call(value);

  return type.match(/\[object (.*)\]/)[1];
}

const cloneDeep = (value) => {
  // 存放已递归到的目标对象
  const clonedObj = [];

  const baseClone = (value) => {
    // 如果不是引用类型，就返回原数据
    if (typeof value !== 'object') {
      return value;
    }
    if (value === null) {
      return value;
    } 
    if (getType(value) === 'RegExp') {
      return value;
    } 
    if (getType(value) === 'Date') {
      return value;
    }

    const length = clonedObj.length;
    const obj = getType(value) === 'Array' ? [] : {};

    for (let i = 0 ; i < length; i++) {
      if (clonedObj[i].target === value) {
        return clonedObj[i].copyTarget;
      }
    }
    
    clonedObj.push({value, copyTarget: obj});
    Object.keys(value).forEach(key => { 
      if(obj[key]) { 
        return; 
      } 
      obj[key] = baseClone(value[key]);
    }); 
    return obj;
  };
  
  return baseClone(value);
};

const array = [
  {
    name: 'a',
    age: 1
  },
  {
    name: 'b',
    age: 2
  }
];

export default cloneDeep;
