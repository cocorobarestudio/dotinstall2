{
    const scores = [80,90,40, 100];
    scores.splice(1, 1, 40,50);
// console.log(`Score: ${scores[0]}`);

for (let i = 0; i < scores.length ; i++){
    console.log(`Score ${i}: ${scores[i]}`);
}

}

{
const otherScores = [10, 20];
const scores1 = [80, 90, 40, 70, ...otherScores];

console.log(scores1);

function sum(a, b){
    console.log(a + b);
    
}
sum(...otherScores);

}

{
    const scores = [89, 90, 40,70];
 

    const [a, b, ...other] = scores;
    console.log(a);
    console.log(b);
    console.log(other);
}

{
    let x = 30;
    let y = 70;
    [x, y] = [y, x];
    console.log(x, y);
}

{
    const scores = [89, 90, 40,70];

    scores.forEach((score, index)=>{
        console.log(`Score ${index}: ${score}`);
        
    }); 
}

{
    const prices = [190, 180, 200];

    // const updatePrices = prices.map((price) =>{
    //     return price + 20;
    // });

    const updatePrices = prices.map(price =>  price + 20);

    console.log(updatePrices);
}

{
    const numbers = [1, 4, 7, 8, 10];
    
    const evenNumbers = numbers.filter(number => number % 2 === 0);

    
    // const evenNumbers = numbers.filter(number => {
    //     if (number % 2 === 0){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
console.log(evenNumbers);
}

{
    const point = {
        x : 100, 
        y : 180,
    };

    point.x = 120;
    point['x'] =150;//.はいらない 文字列として再代入
console.log(point);
console.log(point.y);
console.log(point['y']);//.はいらない
console.log(point.x);
}

{
    
        const point = {
            x : 100, 
            y : 180,
        };

        point.z = 90; //プロパティの追加　

        delete point.y;　//プロパティの削除
        console.log(point);


}

{


    const otherProps ={
        r: 4,
        color: 'red',

    }
    const point = {
        x : 100, 
        y : 180,
        ...otherProps, //スプレッド構文
    };
    console.log(point);


const {x, r, ...others}  = point;
//分割代入
//レスト構文　xとr以外のothers



console.log(x);
console.log(r);
console.log(others); 


}

{
    const point = {
        x : 100,
        y : 180,
    };

    // const keys = Object.keys(point);
    // keys.forEach(key => {
    //         console.log(`key: ${key}, Value: ${point[key]}`);
    // });


    const points = [
        {x: 30, y : 20},
        {x : 10, y: 50},
        {x: 40, y:40},
    ];
    console.log(points[1].y);//配列とオブジェクトの組み合わせ
}

{
    let x = [1, 2];
    let y = x;
    x[0] = 5;

    console.log(x);
    console.log(y);
}

{
    const foo = {
        a: 1,
        b: 2,
    }

    const bar = {...foo};
    const moo = {
        c: 3,
        d: 4,
        ...bar};

    console.log(foo);
    console.log(bar.a);
   
    console.log(moo);


}

{
    const str = 'hello';
    // console.log(str.length);
    //console.log(str.substring(2.4)); //文字列の３つ目から５つ目を取得

    console.log(str[1]); //文字列の２番目の文字を取得
}

{
const d = [2020, 12, 05];
console.log(d.join('/'));


const t = '17:08:29';
console.log(t.split(':'));

const [hour, minute, second] = t.split(':');
console.log(hour);
console.log(minute);
console.log(second);

}

{
    const scores = [10, 3, 9];

    let sum = 0;

    scores.forEach(score =>{
        sum += score;
    });

    const avg = sum / scores.length;

    // console.log(sum);
    // console.log(avg);

    console.log(Math.floor(avg)); //小数点以下切り捨て
    console.log(Math.ceil(avg));// 小数点以下切り上げ
    console.log(Math.round(avg));//四捨五入
    console.log(avg.toFixed(3));//小数点第３位までで四捨五入

    console.log(Math.random()); //0以上１未満のランダムな数字を生成
}


{
    console.log(Math.random());

    //0, 1, 2, 3, 
    //Math.floor(Math.random() * 3);

    //0, ..... n
    //Math.floor(Math.random() * (n + 1))

    //min ........ max 
   // Math.floor(Math.random() * (max + 1 - min) + min)
 
   //1〜６の場合 
    console.log(Math.floor(Math.random() * 6) + 1);

}

{

const d = new Date();
console.log(d);

console.log(`${d.getMonth() + 1}月　${d.getDate()}日　`);
}

{
    const d = new Date(2019, 10); //2019/ 11/1
  

    d.setHours(10, 20, 30); //後から日付を操作したい場合　10:20:30
    d.setDate(31); // 補正してくれる　11月は30日までしかないので、12/1に補正してくれる。
    d.setDate(d.getDate() + 3); //今日から3日後

    console.log(d);
}


{

    let i = 0;

    function showTime(){
        console.log(new Date());
        i++;
        if(i > 2){
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(showTime, 1000);

}

{
    function showTime(){
        console.log(new Date());
    }

    setTimeout(showTime);
}