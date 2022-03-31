var cat1;
var cat2;
var cat3;
/*表示する点数　初期値を0に設定*/ 
var tokuten = 0;
var total;
var game_end = false; //ゲーム終了の判断の変数

/*windowsを開いたときにゲームスタート*/
window.onload = function(){
    start_game()
}

function start_game(){
    cat1 = document.getElementById("photo.cat1");
    cat2 = document.getElementById("photo.cat2");
    cat3 = document.getElementById("photo.cat3");

    total = document.getElementById("tokuten_hyoji");

    cat1.onclick = function(){
        click(cat1);
    }
    cat2.onclick = function(){
        click(cat2);
    }
    cat3.onclick = function(){
        click(cat3);
    }
    
    var ransuX1 = Math.random() * 3 * 1000
    setTimeout(function(){
        hidden(cat1);
    },ransuX1);

    var ransuX2 = Math.random() * 3 * 1000
    setTimeout(function(){
        hidden(cat2);
    },ransuX2);

    var ransuX3 = Math.random() * 3 * 1000
    setTimeout(function(){
        hidden(cat3);
    },ransuX3);

    /*ゲームの終了*/
    setTimeout(stop_game,30000)
}

    function stop_game(){
        alert("END!");
        alert("あなたの得点は"+ tokuten +"点です")
        game_end = true;
    }

    /*クリックイベント*/
    function click(img_cat){
        img_cat.src = "image/cat-normal1.png"
        setTimeout(function(){
            modoru(img_cat);
        },1000);
        tokuten = tokuten + 1;
        total.innerHTML = tokuten;
    }

    function modoru(img_cat){
        img_cat.src = "image/cat_good2.png"
    }

    function hidden(img_cat){
        img_cat.style.visibility = "hidden";
        if(game_end == false){
            var ransuX = Math.random() * 3* 1000
            setTimeout(function(){
                visible(img_cat);
            },ransuX);
        }
    }
    function visible(img_cat){
    if(game_end == false) {
            img_cat.style.visibility = "visible";
        var ransuX = Math.random() * 3* 1000
        setTimeout(function(){
            hidden(img_cat);
        },ransuX);
    }
}
