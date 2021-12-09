"use strict";

if (4==9){
  console.log('ok!');
}
else{
  console.log('error');
}

const num = 50;

if(num<49) {
  console.log('error');
}
else if (num>100){
  console.log('много');
}
else{
  console.log('ok');
}

(num=== 50) ? console.group('ok') : console.log('error')

const number = 50;

switch(number){
  case 49:
    console.log('неверно');
    break;
    case 50:
      console.log('точно');
      break;
      case 50:
        console.log('верно!');
      break;
default:
  console.log('не в этот раз');
  break;

}