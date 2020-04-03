import './css/a.scss'
import {formatTime, checkPhone, checkIdCard, checkEmail} from 'utils/index'
console.log(formatTime(1584435129107))
console.log('ENV', process.env.NODE_ENV)
function reduce(a, b){
  console.log(a)
  let i = 0;
  let obj = {s: '2', n: '4'}
  let {s, n} = obj
  return a - b
}

console.log('checkPhone(18737319892)', checkPhone('18737319892'))
console.log('checkPhone(18737312)', checkPhone('18737312'))
console.log('checkIdCard(身份证)', checkIdCard('41142619971115422X'))
console.log('checkIdCard(身份证)', checkIdCard('411426199711422X'))
console.log('checkEmail(邮箱)', checkEmail('zhuhuanhuan@daojia-inc.com'))
console.log('checkEmail(邮箱)', checkEmail('zhuhuanhua12.com'))
