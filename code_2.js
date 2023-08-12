//基本変数宣言
let name = "TT-RR";
console.log(name);

//再代入
name = "TT-RR2";
console.log(name);

//変数の計算
let number = 100;
number += 20;
number -= 20;
number *= 4;
number /= 4;
console.log(number);

//定数の宣言
//定数に値を再代入するとエラーになる
const school = "名古屋";
console.log(school + "の学校に通っています。");

//テンプレートリテラル
//１.文字列の中に変数を埋め込む
//２.バッククォートで囲む
const age = 19;
console.log(`私は${age}歳です。`);