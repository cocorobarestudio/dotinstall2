'use strict';

{
let i = 0;

    function showTime(){
        console.log(new Date());
        const timeoutId = setTimeout(showTime, 1000);//1/1000秒後から初めてね
        i++;
        if(i > 2){
            clearTimeout(timeoutId);
        }
    }

  showTime();
}

{
    const name = 5;

    try{
        console.log(name.toUpperCase());
    } catch(e) {//引数を設定
        console.log(e);
    }
    console.log('finish!');
}

{
    class Post {
        constructor(text){
        this.text = text;
        this.likeCount = 0;
    }

        show(){
            console.log(`${this.text} - ${this.likeCount}likes`);
        }

        like(){
            this.likeCount++;
            this.show();
        }

        //静的メソッド
        //thisは使えない
        static showInfo(){
            console.log('Post class version 1.0');
        }

    }
    const posts = [
        new Post('javascript勉強中'),
        new Post('プログラミング楽しい！'),
    ];

    // function show(post){
    //     console.log(`${post.text} - ${post.likeCount}いいね`);
    // }
    posts[0].like();
    posts[0].show();
    posts[1].show();
    posts.showInfo();

}