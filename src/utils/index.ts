import moment from 'dayjs'

/*
时间格式化
formatTime(time, type)
@time 时间
@type 格式
 */ 
export const formatTime = (time:any, type='YYYY-MM-DD HH:mm:ss')=>{
  if(time){
    return moment(time).format(type);
  }
  return '';
}

function check(value: string, reg: RegExp){
  return reg.test(value)
}

/*
函数柯里化
*/
function createCurry(func: any, args:any=[]):()=>any{
  let arity = func.length;
  args = args || []
  return function (){
    let _args = [].slice.call(arguments)
    _args.push(...args)
    // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
    if (_args.length < arity) {
      return createCurry.call(this, func, _args);
    }
    // 参数收集完毕，则执行func
    return func.apply(this, _args);
  }
}
let _check:any = createCurry(check)
/* 
校验手机号
checkPhone(phone:string)
*/
export const checkPhone:any = _check(/^1\d{10}|^58\d{9}$/)
/*
校验身份证
checkIdCard(idcard:string)
*/
export const checkIdCard:any = _check(/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/)
/*
校验邮箱
checkEmail(email:string)
*/
export const checkEmail:any = _check(/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/)

