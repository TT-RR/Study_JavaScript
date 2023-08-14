//条件分岐
let number = 19;

if (number >= 20) {
    console.log("成人です。");
} else if (number == 19) {
    console.log("未成年の中でも18歳以上です。");
} else {
    console.log("未成年です。");
}

//真偽値
//出力されるのはtrue or falseになる
console.log(number < 20);

//switch文
let rank = "青";
switch (rank) {
    case "青":
        console.log("正常です。");
        break;
    case "黄":
        console.log("要注意です。");
        break;
    case "赤":
        console.log("異常です。");
        break;
    default:
        console.log("何かがおかしいです。");
        break;
}

