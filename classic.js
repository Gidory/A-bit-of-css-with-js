//Кнопка для початку гри
let knop = document.querySelector("#knopka");
//Показчик поїнтів
let points = document.querySelector("#pointers");
//Меню кінця гри
let GG = document.querySelector("#GameOver");
//Показчик поїнтів в меню кінця гри 
let count = document.querySelector("#count");
//Поясненні чому ти програв
let anw = document.querySelector("#answer");
//Показчик скільки усього ігр було зроблено
let counter = document.querySelector("#counter");
//Кнопка "Спробувати знову"
let retry = document.querySelector("#retry");
//Показчик "Життів"
let Lives = document.querySelector("#lives");
//Кнопка для показу Правил і інформації
let instruc = document.querySelector("#instructor");
//Кнопка "Назад"
let back = document.querySelector("#back");
//Блок з правилами 
let info = document.querySelector("#info");
//Коментатор
let anr = document.querySelector("#anr");
//Блок який сприймає кліки на порожню територію(там де нема ні кола ні квадрата)
let miss = document.querySelector("#miss");
//Показчик виграшів усього
let ww = document.querySelector("#wins");
//Кнопка для вибору складності
let df = document.querySelector("#diff");
//Кнопка для легкої складності
let ez = document.querySelector("#easy");
//Кнопка для нормальної складності
let nm = document.querySelector("#normal");
//Кнопка для складної складності
let hd = document.querySelector("#hard");
//Бронзове досягнення
let br = document.querySelector("#bronze");
//Срібне досягнення
let sl = document.querySelector("#silver");
//Золоте досягнення
let gd = document.querySelector("#gold");
//Кнопка яка припиняє гру
let ukrt = document.querySelector("#achsate");
//Блок який не дає користувачи натиснути на кола і квадрати після кінця гри
let stoper = document.querySelector("#stoper");
//Таймер гри
let timer = document.querySelector("#timer");
//Опис досягнення
let infi = document.querySelector("#infi");
//Відключити музику чи ввімкнути
let musici = document.querySelector("#music");
//Кнопка для відкриття налаштувань
let settings=document.querySelector("#settings");
//Змінення керування гри з кліку на X і Z, як і навпаки
let control=document.querySelector("#control");
//кнопка для відкриття меню кейсів
let opencase=document.querySelector("#cases");
//відкриття першого кейсу
let case1=document.querySelector("#case1");
//Повідомлення що недостатньо валюти чі вииграшів
let nomoney=document.querySelector("#nomoney");
//Рулетка скінів
let roulettee=document.querySelector("#roulettee");
//Блок кажучий названня скіна
let nameo=document.querySelector("#nameo");
//Блок кажучий рідкісність скіна
let rarity=document.querySelector("#rarity");
//Блок кажучий який тобі скін випав
let openedcase=document.querySelector("#openedcase");
//Названня випавшого тобі скіна
let nameo1=document.querySelector("#nameo1");
//Рідкісність випавшого тобі скіна
let rarity1=document.querySelector("#rarity1");
//Блок показуючий сам скін
let prize=document.querySelector("#prize");
//Використати скін
let equip=document.querySelector("#equip");
//Повернутися до меню кейсів
let backi=document.querySelector("#backi");
//Звичайний скін
let Smthweird=document.querySelector("#Smthweird");
//Рідкісний скін
let Sansonjudge=document.querySelector("#Sansonjudge");
//Легендарний скін
let ЗСУplane=document.querySelector("#ЗСУplane");
//Меню скінів
let catalog=document.querySelector("#catalog");
//Опис скінів
let skindesc=document.querySelector("#skindesc");
//Прибрати усі скіни
let resetskin=document.querySelector("#resetskin");
//Показчик грошей
let money=document.querySelector("#money");
//Кнопка для показу меню з оновленнями
let Updatesi=document.querySelector("#Updates");
//Новини про оновлення
let infk=document.querySelector('#infk');
//Блок для спеціальних анімацій програшу і виграшу
let animation=document.querySelector("#animation");
//Адмін панель
let admin=document.querySelector("#admin");
//Комірка до пароля адмін панелі
let passl=document.querySelector("#Hmmmm");
//Блок менюшки адмін панелі
let InBlock=document.querySelector("#InBlock");
//Зміна зберігаючі числа які написав користовуч в комірку коду
let Z=document.querySelector("#Z");
//Кнопка міняючса змінні в адмін панелі
let go=document.querySelector("#go");
//Кнопка відкриваюча менюшку кодів
let codes=document.querySelector("#codes");
//Інпут для коду в адмін панель
let ZI=document.querySelector("#ZI");
//використати промокод
let stgk=document.querySelector("#Hrrr");
//Якщо промокод спрацював ця кнопка покаже що ти отримав чи повідоме що ти вже його використовував
let partcode=document.querySelector("#partcode");
//Сброс прогресу адмін панелі
let progress=document.querySelector("#progress");
//Рекорд поїнтів в ЕЕ
let HighScore=document.querySelector("#HighScore");
//Educational mode
let EE=document.querySelector("#EE");
//Звук вибору складності
let audio10 = new Audio('dier.mp3');
//Зміні для дебагування режиму з прив'заними клавішами
let yak=false;
let yak1=false;
let yak2=false;
let yak3=false;
let yeek=false;
let enk=true;
//Зміні для дебагування режиму з прив'заними клавішами
//Складності
let easyk = false;
let normalk = false;
let hardk = false;
//Складності
//Доступ до скінів
let skin1=false;
let skin2=false;
let skin3=false;
//Доступ до скінів
let gamemo = false; // Зміна відповдіюча за те який скрипт буде працювати, а який ні(не використана, але не видаляти))
//Локальні збереження
const storage35=window.localStorage;
const storage13=window.localStorage;
const storage14=window.localStorage;
const storage15=window.localStorage;
const storage10=window.localStorage;
const storage2 = window.localStorage;
//Локальні збереження
//Зміна з виграшами
let W = 0;
//Інтервал прибираючий опис скінів через час
let O;
//Зміна для поїнтів
let P = 0.0;
//НВ=не використаний
let D = 0;
//Зміна для життів
let L = 5;
//Комбо
let лічильник = 1;
//Інтервал прибираючий кнопку прибирання скіну, колі з'являється опис
let E;
//Змінна для шансу
let x=0;
//Змінна часу
let tm = 10.0;
//Змінна відповідаюча за те, чи буде музика ввимкнена чи ні
let i = 0;
//Валюта
let PS = 0;
//Змінні для інтервалів
let e;
let g;
let l;
let s;
let t;
let B;
//Змінні для інтервалів
//Змінні проти багів з клавішами
let r=0
let I=0;
let z=0;
let h=0;
let j=0;
//Шось проти багів з клавішами
//Змінна яка визначає, яке в тебе буде управління
let V=0;
//НВ
let C=0;
//Інтервал перед ти як з'явиться опис скіна(при наведенні на нього мишею в обранні скінів)
let Y;
//Лічильник комбо
let K = 0.0;
//Ачівки
let ap = 0;
let ac = 0;
let ad = 0;
//Ачівки
//Змінні для скінів
let bp=0;
let bc=0;
let bd=0;
//Змінні для скінів
//Змінні для управління
let controls = true;
//Змінна для ввімкнення звуку чи його вимкнення
let IsMusic = true;
//Добре? Це просто важлива змінна для коду. Звісно тут щось то писали про нього, але меня=і ліньки було запам'товувати.................Я пішов
let lik = true;
//Сама гра
knop.addEventListener("click", knopir);
//Функція початку гри
function knopir() {
    enk=false;
    PS = storage10.getItem('PS');
        if (!PS) {
        PS = 0;
    }
    const storage3 = window.localStorage;
    ap = storage3.getItem('ap');
    if (!ap) {
        ap = 0;
    }
    const storage4 = window.localStorage;
    ac = storage4.getItem('ac');
    if (!ac) {
        ac = 0;
    }
    const storage5 = window.localStorage;
    ad = storage5.getItem('ad');
    if (!ad) {
        ad = 0;
    }
    if (easyk == false && normalk == false && hardk == false) {
        normalk = true;
    }
    let audio6 = new Audio('start.mp3');
    if(IsMusic==true){
        audio6.play();
    }
    tm = 10;
    K = 0;
    P = 0;
    L = 5;
    i = 1;
    лічильник=0.5;
    timer.innerText=tm;
    Lives.innerText = "Your lives: 5";
    points.innerText = "0";
    const storage = window.localStorage;
    let D = storage.getItem('D');
    if (!D) {
        D = 0;
    }
    function змінитиЗначення() {
        D++;
        storage.setItem('D', D);
    }
    змінитиЗначення();
    lik=false;
    opencase.style.display="none";
    gd.style.display="none";
    sl.style.display='none';
    br.style.display='none';
    miss.style.display="block";
    settings.style.display="none";
    ukrt.style.display = "block";
    timer.style.display="block";
    counter.innerText = D + " games were played in total.";
    df.style.display = "none";
    miss.style.display = "block";
    EE.style.display="none";
    instruc.style.display = "none";
    knop.style.display = "none";
    points.style.display = "block";
    stoper.style.disable="none;"
    Lives.style.display = "block";
    skins.style.display="none";
    resetskin.style.display="none";
    codes.style.display="none";
    Updatesi.style.display="none";
    if (controls==false){
        
      miss.addEventListener('mouseover', function(event) {
        yak=false;
        yak1=false;
        yak2=false;
        yak3=true;
        if(j<1){
        document.addEventListener('keydown', misser1);
        j++;
        }
      });
      //Функція місів
      function misser1(event){
        if(yak==false&&yak1==false&&yak2==false&&yak3==true&&(event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x")){
            K = 0;
            P=P-лічильник;
            if(лічильник<=0){
            P=P-5;
            }
            points.innerText = P;
            лічильник = 0;
            anr.innerText = "Miss! Combo: 0";
            if (P < 0) {
                let audio=new Audio("defeat.mp3");
                audio.play();
                лічильник=0;
                clearTimeout(e);
                clearInterval(s);
                clearInterval(g);
                clearInterval(l);
                clearInterval(t);
                P = 0;
                lik=true;
                ukrt.style.display = "none";
                anr.innerText = "Sadly, but you lost, but you can win next time.";
                miss.style.display="none";
                GG.style.display = "block";
                points.style.display = "none";
                Lives.style.display = "none";
                timer.style.display="none";
                count.innerText = "Your points: " + P;
                anw.innerText = "You made too much misses :(";
                let x=Math.random()*1;
                    if (x <= (0.6 + 0.40)&&x>0.6) {
                    if(skin2==true){
                        audio.pause();
                        animation.style.display="block";
                        animation.style.backgroundImage='url("pashalka.gif")';
                        animation.style.height=600+"px";
                        GG.style.display="none";
                        let audio1=new Audio("pashalka.mp3");
                        GG.style.display = "none";
                        if(IsMusic==true){
                            audio1.play();
                        }
                        setTimeout(respect, 8000);
                        function respect(){
                        animation.style.display="none";
                        animation.style.height=300+"px";
                        GG.style.display = "block";
                        }
                    }
                }
                document.removeEventListener('keydown', misser1);
                j=0;
            }
        }
      }
      miss.addEventListener('mouseout', function(event) {
      });
    }
    if (controls==true){
    if(h<1){
    miss.addEventListener("click", misser);
    h++;
    }
    function misser() {
        K = 0;
        P=P-лічильник;
        if(лічильник<1){
        P=P-5;
        }
        points.innerText = P;
        лічильник = 0;
        anr.innerText = "Miss! Combo: 0";
        if (P < 0) {
            let audio=new Audio("defeat.mp3");
            audio.play();
            лічильник=0;
            clearTimeout(e);
            clearInterval(s);
            clearInterval(g);
            clearInterval(l);
            clearInterval(t);
            P = 0;
            lik=true;
            ukrt.style.display = "none";
            anr.innerText = "Sadly, but you lost, but you can win next time.";
            GG.style.display = "block";
            points.style.display = "none";
            Lives.style.display = "none";
            timer.style.display="none";
            stoper.style.display="block";
            count.innerText = "Your points: " + P;
            anw.innerText = "You made too much misses :(";
            let x=Math.random()*1;
                    if (x <= (0.6 + 0.40)&&x>0.6) {
                    if(skin2==true){
                        
                        animation.style.display="block";
                        animation.style.backgroundImage='url("pashalka.gif")';
                        animation.style.height=600+"px";
                        GG.style.display="none";
                        let audio1=new Audio("pashalka.mp3");
                        GG.style.display = "none";
                        if(IsMusic==true){
                            audio1.play();
                        }
                        setTimeout(respect, 12000);
                        function respect(){
                        animation.style.display="none";
                        animation.style.height=300+"px";
                        GG.style.display = "block";
                        }
                    }
                }
        }
        }
    }
    
    if (easyk == true) {
        tm = 10;
        e = setTimeout(end, tm*1000);
        g = setInterval(anticreation, 800);
        l = setInterval(timeadd, 4000);
        t = setInterval(timeout, 1000);
        function timeout(){
            tm--;
            timer.innerText=tm;
        }
        function timeadd() {
            let tball;
            tball = document.createElement("div");
            tball.className = "tball";
            main.appendChild(tball);
            let X = randomFromTo(43, 557);
            let Y = randomFromTo(43, 347);
            tball.style.left = X + "px";
            tball.style.top = Y + "px";
            setInterval(goaw, 5000);
            function goaw() {
                tball.remove();
            }
            if (controls==false){
                tball.addEventListener('mouseover', function(event) {
                    // Функція виконується при наведенні мишею на об'єкт
                    yak1=false;
                    yak=false;
                    yak3=false;
                    yak2 = true;
                    document.addEventListener('keydown', bink2);
            });
            let isBinking2 = false;
        function bink2(event) {
        if (isBinking2) {
        return;
        }
        isBinking2 = true;
                if (yak2==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
                // Потрібні дії:
                tball.remove();
                tm += randomFromTo(0.3, 0.6);
                timer.innerText=tm;
                clearTimeout(e);
                e=setTimeout(end, tm*1000);
                P += randomFromTo(2, 4);
                P += лічильник;
                K += randomFromTo(1, 2);
                лічильник += randomFromTo(1, 2);
                P += лічильник;
                points.innerText = P;
                anr.innerText = "Cool! Combo: " + K;
                    }
                }
                tball.addEventListener('keyup', function(event) {
                if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
                isBinking2 = false;
                yak2 = false;
                yak1=false;
                yak=false;
                }
                });
                tball.addEventListener('mouseout', function(event) {
                    // Функція виконується при відведенні мишею від об'єкта
                    yak2 = false;
                    document.removeEventListener('keydown', bink2);
                });
            }
            if (controls==true){
            //Особливе, яке може додати секунди
            tball.addEventListener("click", chan);
            function chan() {
                tm += randomFromTo(0.2, 0.4);
                clearInterval(e);
                e = setTimeout(end, tm*1000);
                timer.innerText=tm;
                tball.remove();
                P += randomFromTo(2, 3);
                P += лічильник;
                лічильник += randomFromTo(0.8, 1.6);
                K += randomFromTo(0.8, 1.6);
                points.innerText = P;
                anr.innerText = "Cool! Combo: " + K;
            }
        }
        }
        //Квадрати, які віднімають життя
        function anticreation() {
            let square;
            square = document.createElement("div");
            square.id = "square";
            main.appendChild(square);
            let X = randomFromTo(43, 557);
            let Y = randomFromTo(43, 347);
            square.style.backgroundColor = "rgb(" + randomFromTo(0, 50) + "," + randomFromTo(0, 50) + "," + randomFromTo(0, 50) + ")";
            square.style.left = X + "px";
            square.style.top = Y + "px";
            setInterval(adeleten, 3200);
            function adeleten() {
                square.remove();
            }
            if (controls==false){
                square.addEventListener('mouseover', function(event) {
                    // Функція виконується при наведенні мишею на об'єкт
                    yak1 = true;
                    yak = false;
                    yak3 = false;
                    yak2 = false;

                    if(r<1){
                        document.addEventListener('keydown', bink1);
                        r++;
                    }
            });
            let isBinking1 = false;
        function bink1(event) {
        if (isBinking1) {
        return;
        }
        isBinking1 = true;
if (yak1==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
    // Потрібні дії:
    square.remove();
                K = 0;
                L=L - 1;
                лічильник=0;
                Lives.innerText = "Lives left: " + L;
                let audio = new Audio('ooof.mp3');
                if(IsMusic==true){
                    audio.play();
                }
                anr.innerText = "Ooof. Combo: 0.";
                if (L == 0) {
                    clearTimeout(e);
                    clearInterval(s);
                    clearInterval(g);
                    clearInterval(l);
                    clearInterval(t);
                    lik=true;
                    ukrt.style.display = "none";
                    anr.innerText = "Sadly, but you lost, but you can win next time.";
                    let audio = new Audio('longooof.mp3');
                    if(IsMusic==true){
                        audio.play();
                    }
                    GG.style.display = "block";
                    points.style.display = "none";
                    Lives.style.display = "none";
                    timer.style.display="none";
                    count.innerText = "Your points: " + P;
                    anw.innerText = "You ran out of lives :(";
                    L = 5;
                    Lives.innerText = "Your lives: 5";
                }
}
square.addEventListener('mouseout', function(event) {
    // Функція виконується при наведенні мишею на об'єкт
    yak1 = false;
    yak = false;
    yak3 = false;
    yak2 = false;
});
}
                document.addEventListener('keyup', function(event) {
                if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
                isBinking1 = false;
                }
                });
                square.addEventListener('mouseout', function(event) {
                    // Функція виконується при відведенні мишею від об'єкта
                    yak1 = false;
                    document.removeEventListener('keydown', bink1);
                    r=0;
                });
            }
            if (controls==true){
            square.addEventListener("click", removeita);
            function removeita() {
                square.remove();
                K = 0;
                L--;
                Lives.innerText = "Lives left: " + L;
                let audio = new Audio('ooof.mp3');
                if(IsMusic==true){
                    audio.play();
                }
                anr.innerText = "Ooof. Combo: 0.";
                if (L == 0) {
                    clearTimeout(e);
                    clearInterval(s);
                    clearInterval(g);
                    clearInterval(l);
                    clearInterval(t);
                    lik=true;
                    ukrt.style.display = "none";
                    anr.innerText = "Sadly, but you lost, but you can win next time.";
                    let audio = new Audio('longooof.mp3');
                    if(IsMusic==true){
                        audio.play();
                    }
                    GG.style.display = "block";
                    points.style.display = "none";
                    Lives.style.display = "none";
                    timer.style.display="none";
                    stoper.style.display="block";
                    count.innerText = "Your points: " + P;
                    anw.innerText = "You ran out of lives :(";
                    L = 5;
                    Lives.innerText = "Your lives: 5";
                }
            }
        }
    }
    //Функція кінця гри
        function end() {
                function змінитиЗначення10() {
                    PS = parseFloat(PS) + P*0.5;
                    storage10.setItem('PS', PS);
                }
                змінитиЗначення10();
            if(P>20){
            let x=0;
                let audio=new Audio("win.mp3");
                if(x==0){
                    x++;
                }
                if(x>0&&x<2){
                    if(IsMusic==true){
                        audio.play();
                    }
                }
            }
            lik=true;
            if (P > 0) {
                anr.innerText = "Great you won, wanna next round?";
            }
            if (P == 0) {
                anr.innerText = "Try clicking on circles, next round, ok?";
            }
            W = storage2.getItem('W');
            if (!W) {
                W = 0;
            }
            if (P > 20) {
                W++;
                storage2.setItem('W', W);
            }
            ww.innerText = W + " wins in total.";
            ukrt.style.display = "none";
            GG.style.display = "block";
            points.style.display = "none";
            Lives.style.display = "none";
            stoper.style.display="block";
            timer.style.display="none";
            enk=true;
            clearInterval(l);
            clearInterval(s);
            clearInterval(g);
            clearInterval(t);
            clearInterval(s);
            count.innerText = "Your points: " + P;
            if (P == 0) {
                anw.innerText = "Were you just afk or watching?";
            }
            if (P > 0 && P < 20) {
                anw.innerText = "Get a little training and you will do better."
            }
            if (P == 20 || P > 20 && P < 30) {
                anw.innerText = "You are getting good at this, keep playing like this.";
            }
            if (P == 30 || P > 30 && P < 40) {
                anw.innerText = "You got really good at this.";
            }
            if (P == 40 || P > 40 || P > 50 && P < 60) {
                anw.innerText = "You became professional... Yeah";
            }
            if (P == 60 && L == 5 || P > 60 && L == 5) {
                anw.innerText = "Great you mastered easy mode.";
                function змінитиЗначення3() {
                    ap++;
                    storage3.setItem('ap', ap);
                }
                змінитиЗначення3()
                return (ap);
            }
            if (L == 0) {
                anw.innerText = "You ran out of lives :(. Seriously?";
            }
        
        }
        let s = setInterval(create, 600);
        function create() {
            let ball;
            ball = document.createElement("div");
            ball.className = "ball";
            main.appendChild(ball);
            let X = randomFromTo(43, 557);
            let Y = randomFromTo(43, 347);
            if (skin1==false&&skin2==false&&skin3==false){
                ball.style.backgroundColor = "rgb(" + randomFromTo(0, 255) + "," + randomFromTo(0, 255) + "," + randomFromTo(0, 255) + ")";
            }
            if (skin1==true){
                ball.style.backgroundImage="url('Untitled-2.png')";
            }
            if (skin2==true){
                ball.style.backgroundImage="url('sans.jpg')";
            }
            if (skin3==true){
                ball.style.backgroundImage="url('Untitled-3.png')";
            }
            ball.style.left = X + "px";
            ball.style.top = Y + "px";
            let b = setInterval(deleten, 2400);
            function deleten() {
                ball.remove();
            }
            if (controls == false){
                ball.addEventListener('mouseover', function(event) {
                  // Функція виконується при наведенні мишею на об'єкт
                  yak1=false;
                  yak=true;
                  yak3=false;
                  yak2 = false;
                  document.addEventListener('keydown', bink);
                });
                let isBinking = false;
            function bink(event) {
            if (isBinking) {
            return;
            }
            isBinking = true;
    if (yak==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
        // Потрібні дії:
        ball.remove();
        K += 1;
        points.innerText = P;
        anr.innerText = "Great! Combo: " + K;
        P=P+(1+лічильник);
        лічильник += 0.5;
        points.innerText = P;
        document.removeEventListener('keydown', bink);
    }
}
                    document.addEventListener('keyup', function(event) {
                    if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
                    isBinking = false;
                    }
                    });
                    ball.addEventListener('mouseout', function(event) {
                        // Функція виконується при відведенні мишею від об'єкта
                        document.removeEventListener('keydown', bink);
                        yak = false;
                    });
            }
            if (controls==true){
            ball.addEventListener("click", removeit);
            function removeit() {
                ball.remove();
                K++;
                points.innerText = P;
                anr.innerText = "Great! Combo: " + K;
                    P += лічильник;
                    лічильник += 0.2;
                    points.innerText = P;
            }
        }
        }
        ukrt.addEventListener("click", relad);
        function relad() {
            clearTimeout(e);
            clearInterval(s);
            clearInterval(g);
            clearInterval(l);
            clearInterval(t);
            retries();
            points.style.display = "none";
            Lives.style.display = "none";
            timer.style.display="none";
    }
        retry.addEventListener("click", retries);
        function retries() {
            clearTimeout(e);
            clearInterval(l);
            if(parseFloat(ap) > 0){
                br.style.display="block";
            }
            if(parseFloat(ac) > 0){
                sl.style.display="block";
            }
            if(parseFloat(ad) > 0){
                gd.style.display="block";
            }
            if(parseFloat(ap) <= 0){
                br.style.display="none";
            }
            if(parseFloat(ac) <= 0){
                sl.style.display="none";
            }
            if(parseFloat(ad) <= 0){
                gd.style.display="none";
            }
            C=0;
            K = 0;
            лічильник=0.5;
            lik = true;
            if (L == 0) {
                anr.innerText = "Sadly but you lost, maybe in next round you will do better?"
            }
            skins.style.display="block";
            gd.style.display="block";
            sl.style.display='block';
            EE.style.display="block";
            br.style.display='block';
            settings.style.display="block";
            ukrt.style.display="none";
            df.style.display = "block";
            miss.style.display = "none";
            GG.style.display = "none";
            knop.style.display = "block";
            stoper.style.display="none";
            instruc.style.display = "block";
            opencase.style.display="block";
            Updatesi.style.display="block";
            codes.style.display="block";
            retry.removeEventListener("click", retries);
        }
    }
        if (normalk == true) {
            tm=10;
            e = setTimeout(end, tm*1000);
            g = setInterval(anticreation, 600);
            l = setInterval(timeadd, 1500);
            t = setInterval(timeout, 1000);
        function timeout(){
            tm--;
            timer.innerText=tm;
        }
        function timeadd() {
            let tball;
            tball = document.createElement("div");
            tball.className = "tball";
            main.appendChild(tball);
            let X = randomFromTo(43, 557);
            let Y = randomFromTo(43, 347);
            tball.style.left = X + "px";
            tball.style.top = Y + "px";
            setInterval(goaw, 1600);
            function goaw() {
                tball.remove();
            }
        if(controls==false){
            tball.addEventListener('mouseover', function(event) {
                // Функція виконується при наведенні мишею на об'єкт
                yak1=false;
                yak=false;
                yak3=false;
                yak2 = true;
                document.addEventListener('keydown', bink2);
        });
        let isBinking2 = false;
    function bink2(event) {
    if (isBinking2) {
    return;
    }
    isBinking2 = true;
            if (yak2==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
            // Потрібні дії:
            tball.remove();
            tm += randomFromTo(0.3, 0.6);
            timer.innerText=tm;
            clearTimeout(e);
            e=setTimeout(end, tm*1000);
            P += randomFromTo(2, 4);
            P += лічильник;
            K += randomFromTo(1, 2);
            лічильник += randomFromTo(1, 2);
            P += лічильник;
            points.innerText = P;
            anr.innerText = "Cool! Combo: " + K;
                }
            }
            tball.addEventListener('keyup', function(event) {
            if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
            }
            });
            tball.addEventListener('mouseout', function(event) {
                // Функція виконується при відведенні мишею від об'єкта
                yak2 = false;
                document.removeEventListener('keydown', bink2);
            });
        }
        if(controls==true){
                tball.addEventListener("click", chan);
                function chan() {
                    tball.remove();
                    tm += randomFromTo(0.3, 0.6);
                    timer.innerText=tm;
                    clearTimeout(e);
                    e=setTimeout(end, tm*1000);
                    P += randomFromTo(2, 4);
                    P += лічильник;
                    лічильник += randomFromTo(2, 3);
                    K += randomFromTo(2, 3);
                    points.innerText = P;
                    anr.innerText = "Cool! Combo: " + K;
                }
            }
        }
            function anticreation() {
                let square;
                square = document.createElement("div");
                square.id = "square";
                main.appendChild(square);
                let X = randomFromTo(43, 557);
                let Y = randomFromTo(43, 347);
                square.style.backgroundColor = "rgb(" + randomFromTo(0, 50) + "," + randomFromTo(0, 50) + "," + randomFromTo(0, 50) + ")";
                square.style.left = X + "px";
                square.style.top = Y + "px";
                let k = setInterval(adeleten, 2400);
                function adeleten() {
                    square.remove();
                }
                if(controls==false){
                    square.addEventListener('mouseover', function(event) {
                        // Функція виконується при наведенні мишею на об'єкт
                        yak1 = true;
                        yak = false;
                        yak3 = false;
                        yak2 = false;
                        if(I<1){
                        document.addEventListener('keydown', bink1);
                        I++;
                        }
                });
                let isBinking1 = false;
            function bink1(event) {
            if (isBinking1) {
            return;
            }
            isBinking1 = true;
    if (yak1==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
        // Потрібні дії:
        square.remove();
                    K = 0;
                    лічильник=0;
                    L=L - 1;
                    Lives.innerText = "Lives left: " + L;
                    let audio = new Audio('ooof.mp3');
                    if(IsMusic==true){
                        audio.play();
                    }
                    anr.innerText = "Ooof. Combo: 0.";
                    if (L == 0) {
                        clearTimeout(e);
                        clearInterval(s);
                        clearInterval(g);
                        clearInterval(l);
                        clearInterval(t);
                        lik=true;
                        ukrt.style.display = "none";
                        anr.innerText = "Sadly, but you lost, but you can win next time.";
                        let audio = new Audio('longooof.mp3');
                        if(IsMusic==true){
                            audio.play();
                        }
                        GG.style.display = "block";
                        points.style.display = "none";
                        Lives.style.display = "none";
                        timer.style.display="none";
                        count.innerText = "Your points: " + P;
                        anw.innerText = "You ran out of lives :(";
                        L = 5;
                        Lives.innerText = "Your lives: 5";
                    }
    }
    square.addEventListener('mouseout', function(event) {
        // Функція виконується при наведенні мишею на об'єкт
        yak1 = false;
        yak = false;
        yak3 = false;
        yak2 = false;
        document.removeEventListener('keydown', bink1);
        I=0;
});
}
                    document.addEventListener('keyup', function(event) {
                    if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
                    isBinking1 = false;
                    }
                    });
                    square.addEventListener('mouseout', function(event) {
                        // Функція виконується при відведенні мишею від об'єкта
                        yak1 = false;
                    });
                  }
                if(controls==true){
                square.addEventListener("click", removeita);
                function removeita() {
                    square.remove();
                    K = 0;
                    L=L-1;
                    лічильник=0;
                    Lives.innerText = "Lives left: " + L;
                    let audio = new Audio('ooof.mp3');
                    if(IsMusic==true){
                        audio.play();
                    }
                    anr.innerText = "Ooof. Combo: 0.";
                    if (L == 0) {
                        clearTimeout(e);
                        clearInterval(s);
                        clearInterval(g);
                        clearInterval(l);
                        clearInterval(t);
                        lik=true;
                        ukrt.style.display = "none";
                        anr.innerText = "Sadly, but you lost, but you can win next time.";
                        let audio = new Audio('longooof.mp3');
                        if(IsMusic==true){
                            audio.play();
                        }
                        GG.style.display = "block";
                        points.style.display = "none";
                        Lives.style.display = "none";
                        timer.style.display="none";
                        stoper.style.display="block";
                        count.innerText = "Your points: " + P;
                        anw.innerText = "You ran out of lives :(";
                        L = 5;
                        Lives.innerText = "Your lives: 5";
                        }
                    }
                }
            }
            function end() {
                function змінитиЗначення10() {
                    PS = parseFloat(PS) + P*0.6;
                    storage10.setItem('PS', PS);
                }
                змінитиЗначення10();
                if(P>20){
                let x=0;
                let audio=new Audio("win.mp3");
                if(x==0){
                    x++;
                }
                if(x>0&&x<2){
                    if(IsMusic==true){
                        audio.play();
                    }
                }
            }
            lik=true;
                if (P > 0) {
                    anr.innerText = "Great you won, wanna next round?";
                }
                if (P == 0) {
                    anr.innerText = "Try clicking on circles, next round, ok?";
                }
                W = storage2.getItem('W');
                if (!W) {
                    W = 0;
                }
                if (P > 20) {
                    W++;
                    storage2.setItem('W', W);
                }
                ukrt.style.display = "none";
                ww.innerText = W + " wins in total.";
                GG.style.display = "block";
                points.style.display = "none";
                Lives.style.display = "none";
                stoper.style.display="block";
                timer.style.display="none";
                enk=true;
                clearInterval(l);
                clearInterval(s);
                clearInterval(g);
                clearInterval(t);
                clearInterval(s);
                лічильник=0.5;
                count.innerText = "Your points: " + P;
                if (P == 0) {
                    anw.innerText = "Were you just afk or watching?";
                }
                if (P > 0 && P < 20) {
                    anw.innerText = "Get a little training and you will do better."
                }
                if (P == 20 || P > 20 && P < 30) {
                    anw.innerText = "You are getting good at this, keep playing like this.";
                }
                if (P == 30 || P > 30 && P < 40) {
                    anw.innerText = "You got really good at this.";
                }
                if (P == 40 || P > 40 || P > 50 && P < 60) {
                    anw.innerText = "You became professional in this mode.";
                }
                if (P == 60 && L == 5 || P > 60 && L == 5) {
                    anw.innerText = "Get ready for the hard mode ;).";
                    function змінитиЗначення4() {
                        ac++;
                        storage4.setItem('ac', ac);
                    }
                    змінитиЗначення4();
                    return (ac);
                }
                if (L == 0) {
                    anw.innerText = "You ran out of lives :(";
                }
            }
            
            s = setInterval(create, 400);
            function create() {
                let ball;
                ball = document.createElement("div");
                ball.className = "ball";
                main.appendChild(ball);
                let X = randomFromTo(43, 557);
                let Y = randomFromTo(43, 347);
                if (skin1==false&&skin2==false&&skin3==false){
                    ball.style.backgroundColor = "rgb(" + randomFromTo(0, 255) + "," + randomFromTo(0, 255) + "," + randomFromTo(0, 255) + ")";
                }
                if (skin1==true){
                    ball.style.backgroundImage = "url('Untitled-2.png')";
                }
                if (skin2==true){
                    ball.style.backgroundImage = "url('sans.jpg')";
                }
                if (skin3==true){
                    ball.style.backgroundImage = "url('Untitled-3.png')";
                }
                ball.style.left = X + "px";
                ball.style.top = Y + "px";
                setInterval(deleten, 1600);
                function deleten() {
                    ball.remove();
                }
                if (controls == false){
                    ball.addEventListener('mouseover', function(event) {
                      // Функція виконується при наведенні мишею на об'єкт
                      yak1=false;
                      yak=true;
                      yak3=false;
                      yak2 = false;
                        document.addEventListener('keydown', bink);
                    });
                    let isBinking = false;
            function bink(event) {
            if (isBinking) {
            return;
            }
            isBinking = true;
    if (yak==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
        // Потрібні дії:
        ball.remove();
        K += 1;
        points.innerText = P;
        anr.innerText = "Great! Combo: " + K;
        P=P+(1+лічильник);
        лічильник += 0.5;
        points.innerText = P;
        document.removeEventListener('keydown', bink);
    }
}
                    document.addEventListener('keyup', function(event) {
                    if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
                    isBinking = false;
                    }
                    });
                    ball.addEventListener('mouseout', function(event) {
                        // Функція виконується при відведенні мишею від об'єкта
                        yak = false;
                        document.removeEventListener('keydown', bink);
                    });
                  }
                  if (controls == true){
                    ball.addEventListener("click", removeit);
                    function removeit() {
                      ball.remove();
                      K++;
                      points.innerText = P;
                      anr.innerText = "Great! Combo: " + K;
                          P += лічильник;
                          лічильник += 1;
                          points.innerText = P;
                    }
                  }
                }
            ukrt.addEventListener("click", relad);
            function relad() {
                clearTimeout(e);
                clearInterval(s);
                clearInterval(g);
                clearInterval(l);
                clearInterval(t);
                retries();
                points.style.display = "none";
                Lives.style.display = "none";
                timer.style.display="none";
                
        }
            retry.addEventListener("click", retries);
            function retries() {
                clearTimeout(e);
                clearInterval(l);
                if(parseFloat(ap) > 0){
                    br.style.display="block";
                }
                if(parseFloat(ac) > 0){
                    sl.style.display="block";
                }
                if(parseFloat(ad) > 0){
                    gd.style.display="block";
                }
                if(parseFloat(ap) <= 0){
                    br.style.display="none";
                }
                if(parseFloat(ac) <= 0){
                    sl.style.display="none";
                }
                if(parseFloat(ad) <= 0){
                    gd.style.display="none";
                }
                C=0;
                K = 0;
                лічильник=0.5;
                lik=true;
                if (L == 0) {
                    anr.innerText = "Sadly but you lost, maybe in next round you will do better?"
                }
                gd.style.display="block";
                sl.style.display='block';
                br.style.display='block';
                settings.style.display="block";
                ukrt.style.display="none";
                df.style.display = "block";
                miss.style.display = "none";
                EE.style.display="block";
                GG.style.display = "none";
                stoper.style.display="none";
                knop.style.display = "block";
                instruc.style.display = "block";
                opencase.style.display="block";
                skins.style.display="block";
                Updatesi.style.display="block";
                codes.style.display="block";
                retry.removeEventListener("click", retries);
            }
        }
        if (hardk == true) {
            tm=10;
            e = setTimeout(end, tm*1000);
            g = setInterval(anticreation, 250);
            l = setInterval(timeadd, 3000);
            t = setInterval(timeout, 1000);
            function timeout(){
            tm--;
            timer.innerText=tm;
            }
            function timeadd() {
                let tball;
                tball = document.createElement("div");
                tball.className = "tball";
                main.appendChild(tball);
                let X = randomFromTo(43, 557);
                let Y = randomFromTo(43, 347);
                tball.style.left = X + "px";
                tball.style.top = Y + "px";
                setInterval(goaw, 3200);
                function goaw() {
                    tball.remove();
                }
                if(controls==false){
                    tball.addEventListener('mouseover', function(event) {
                        // Функція виконується при наведенні мишею на об'єкт
                        yak1=false;
                        yak=false;
                        yak3=false;
                        yak2 = true;
                        document.addEventListener('keydown', bink2);
                });
                let isBinking2 = false;
            function bink2(event) {
            if (isBinking2) {
            return;
            }
            isBinking2 = true;
                    if (yak2==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
                    // Потрібні дії:
                    tball.remove();
                    tm += randomFromTo(0.3, 0.6);
                    timer.innerText=tm;
                    clearTimeout(e);
                    e=setTimeout(end, tm*1000);
                    P += randomFromTo(4, 6);
                    P += лічильник;
                    K += randomFromTo(2, 3);
                    лічильник += randomFromTo(2, 3);
                    P += лічильник;
                    points.innerText = P;
                    anr.innerText = "Cool! Combo: " + K;
                        }
                    }
                    tball.addEventListener('keyup', function(event) {
                    if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
                    }
                    });
                    tball.addEventListener('mouseout', function(event) {
                        // Функція виконується при відведенні мишею від об'єкта
                        yak2 = false;
                        document.removeEventListener('keydown', bink2);
                    });
                }
                if (controls==true){
                tball.addEventListener("click", chan);
                function chan() {
                    tball.remove();
                    tm += randomFromTo(0.3, 0.6);
                    timer.innerText=tm;
                    clearTimeout(e);
                    e=setTimeout(end, tm*1000);
                    P += randomFromTo(4, 6);
                    P += лічильник;
                    лічильник += randomFromTo(3, 4);
                    K += randomFromTo(3, 4);
                    points.innerText = P;
                    anr.innerText = "Cool! Combo: " + K;
                    }
                }
            }
            function anticreation() {
                let square;
                square = document.createElement("div");
                square.id = "square";
                main.appendChild(square);
                let X = randomFromTo(43, 557);
                let Y = randomFromTo(43, 347);
                square.style.backgroundColor = "rgb(" + randomFromTo(0, 50) + "," + randomFromTo(0, 50) + "," + randomFromTo(0, 50) + ")";
                square.style.left = X + "px";
                square.style.top = Y + "px";
                let k = setInterval(adeleten, 1000);
                function adeleten() {
                    square.remove();
                }
                if (controls==false){
                    square.addEventListener('mouseover', function(event) {
                        // Функція виконується при наведенні мишею на об'єкт
                        yak1 = true;
                        yak = false;
                        yak3 = false;
                        yak2 = false;
                        if(z<1){
                            document.addEventListener('keydown', bink1);
                            z++;
                            }
                });
                let isBinking1 = false;
            function bink1(event) {
            if (isBinking1) {
            return;
            }
            isBinking1 = true;
    if (yak1==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
        // Потрібні дії:
        square.remove();
                    лічильник=0;
                    K = 0;
                    L=L - 1;
                    Lives.innerText = "Lives left: " + L;
                    let audio = new Audio('ooof.mp3');
                    if(IsMusic==true){
                        audio.play();
                    }
                    anr.innerText = "Ooof. Combo: 0.";
                    if (L == 0) {
                        clearTimeout(e);
                        clearInterval(s);
                        clearInterval(g);
                        clearInterval(l);
                        clearInterval(t);
                        lik=true;
                        ukrt.style.display = "none";
                        anr.innerText = "Sadly, but you lost, but you can win next time.";
                        let audio = new Audio('longooof.mp3');
                        if(IsMusic==true){
                            audio.play();
                        }
                        GG.style.display = "block";
                        let x=Math.random()*1;
                    if (x <= (0.6 + 0.40)&&x>0.6) {
                    if(skin2==true){
                        
                        animation.style.display="block";
                        animation.style.backgroundImage='url("pashalka.gif")';
                        animation.style.height=600+"px";
                        GG.style.display="none";
                        let audio1=new Audio("pashalka.mp3");
                        GG.style.display = "none";
                        if(IsMusic==true){
                            audio1.play();
                        }
                        setTimeout(respect, 8000);
                        function respect(){
                        animation.style.display="none";
                        animation.style.height=300+"px";
                        GG.style.display = "block";
                        }
                    }
                }
                        points.style.display = "none";
                        Lives.style.display = "none";
                        timer.style.display="none";
                        count.innerText = "Your points: " + P;
                        anw.innerText = "You ran out of lives :(";
                        L = 5;
                        Lives.innerText = "Your lives: 5";
                    }
        square.removeEventListener('keydown', bink1);
    }
    square.addEventListener('mouseout', function(event) {
        // Функція виконується при наведенні мишею на об'єкт
        yak1 = false;
        yak = false;
        yak3 = false;
        yak2 = false;
        square.removeEventListener('keydown', bink1);
});
}
                    document.addEventListener('keyup', function(event) {
                    if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
                    isBinking1 = false;
                    }
                    });
                    square.addEventListener('mouseout', function(event) {
                        // Функція виконується при відведенні мишею від об'єкта
                        yak1 = false;
                    });
                }
                if (controls==true){
                square.addEventListener("click", removeita);
                function removeita() {
                    square.remove();
                    K = 0;
                    L--;
                    Lives.innerText = "Lives left: " + L;
                    let audio = new Audio('ooof.mp3');
                    if(IsMusic==true){
                        audio.play();
                    }
                    anr.innerText = "Ooof. Combo: 0.";
                    if (L == 0) {
                        clearTimeout(e);
                        clearInterval(s);
                        clearInterval(g);
                        clearInterval(l);
                        clearInterval(t);
                        lik=true;
                        ukrt.style.display = "none";
                        anr.innerText = "Sadly, but you lost, but you can win next time.";
                        let audio = new Audio('longooof.mp3');
                        if(IsMusic==true){
                            audio.play();
                        }
                    let x=Math.random()*1;
                    if (x <= (0.6 + 0.40)&&x>0.6) {
                    if(skin2==true){
                        
                        animation.style.display="block";
                        animation.style.backgroundImage='url("pashalka.gif")';
                        animation.style.height=600+"px";
                        GG.style.display="none";
                        let audio1=new Audio("pashalka.mp3");
                        GG.style.display = "none";
                        if(IsMusic==true){
                            audio1.play();
                        }
                        setTimeout(respect, 12000);
                        function respect(){
                        animation.style.display="none";
                        animation.style.height=300+"px";
                        GG.style.display = "block";
                        }
                    }
                }
                        GG.style.display="block";
                        points.style.display = "none";
                        Lives.style.display = "none";
                        timer.style.display="none";
                        stoper.style.display="block";
                        count.innerText = "Your points: " + P;
                        anw.innerText = "You ran out of lives :(";
                        L = 5;
                        Lives.innerText = "Your lives: 5";
                    }
                }
            }
            }
            function end() {
                function змінитиЗначення10() {
                    PS = parseFloat(PS) + P*1.5;
                    storage10.setItem('PS', PS);
                }
                змінитиЗначення10();
                if (P>20){
                let x=0;
                let audio=new Audio("win.mp3");
                if(x==0){
                    x++;
                }
                if(x>0&&x<2){
                    if(IsMusic==true){
                        audio.play();
                    }
                }
            }
            lik=true;
                if (P > 0) {
                    anr.innerText = "Great you won, wanna next round?";
                }
                if (P == 0) {
                    anr.innerText = "Try clicking on circles, next round, ok?";
                }
                W = storage2.getItem('W');
                if (!W) {
                    W = 0;
                }
                if (P > 20) {
                            W++;
                            storage2.setItem('W', W);
                            if (skin3==true){
                            let x=Math.random()*1;
                            if (x <= (0.8 + 0.20)&&x>0.8) {
                            animation.style.display="block";
                            let audio=new Audio("jet.wav");
                            audio.play();
                            setTimeout(respect, 3500);
                            function respect(){
                            animation.style.display="none";
                            }
                        }
                    }   
                }
                stoper.style.display="block";
                ukrt.style.display = "none";
                ww.innerText = W + " wins in total.";
                GG.style.display = "block";
                points.style.display = "none";
                Lives.style.display = "none";
                timer.style.display="none";
                enk=true;
                clearInterval(l);
                clearInterval(s);
                clearInterval(g);
                clearInterval(t);
                count.innerText = "Your points: " + P;
                if (P == 0) {
                    anw.innerText = "Were you just afk or watching?";
                }
                if (P > 0 && P < 20) {
                    anw.innerText = "Get a little training and you will do better."
                }
                if (P == 20 || P > 20 && P < 30) {
                    anw.innerText = "You are getting good at this, keep playing like this.";
                }
                if (P == 30 || P > 30 && P < 40) {
                    anw.innerText = "You got really good at this.";
                }
                if (P == 40 || P > 40 || P > 50 && P < 60) {
                    anw.innerText = "You became professional.";
                }
                if (P == 60 && L == 5 || P > 60 && L == 5) {
                    anw.innerText = "I think you are cyber-gamer here now ;).";
                    function змінитиЗначення5() {
                        ad++;
                        storage4.setItem('ad', ad);
                    }
                    змінитиЗначення5()
                    return (ad);
                }
                if (L == 0) {
                    anw.innerText = "You ran out of lives :(";
                }
            }
            s = setInterval(create, 140);
            function create() {
                let ball;
                ball = document.createElement("div");
                ball.className = "ball";
                main.appendChild(ball);
                let X = randomFromTo(43, 557);
                let Y = randomFromTo(43, 347);
                if (skin1==false&&skin2==false&&skin3==false){
                    ball.style.backgroundColor = "rgb(" + randomFromTo(0, 255) + "," + randomFromTo(0, 255) + "," + randomFromTo(0, 255) + ")";
                }
                if (skin1==true){
                    ball.style.backgroundImage="url('Untitled-2.png')";
                }
                if (skin2==true){
                    ball.style.backgroundImage="url('sans.jpg')";
                }
                if (skin3==true){
                    ball.style.backgroundImage="url('Untitled-3.png')";
                }
                ball.style.left = X + "px";
                ball.style.top = Y + "px";
                setInterval(deleten, 560);
                function deleten() {
                    ball.remove();
                }
                if (controls==false){
                    ball.addEventListener('mouseover', function(event) {
                        // Функція виконується при наведенні мишею на об'єкт
                        yak1=false;
                        yak=true;
                        yak3=false;
                        yak2 = false;
                        document.addEventListener('keydown', bink);
                      });
                      let isBinking = false;
              function bink(event) {
              if (isBinking) {
              return;
              }
              isBinking = true;
      if (yak==true && (event.key == 'z' ||event.key == "Z"||event.key == 'я'||event.key == "Я"||event.key == "X"||event.key == "x")) {
          // Потрібні дії:
          ball.remove();
          points.innerText = P;
          anr.innerText = "Great! Combo: " + K;
          P=P+(1+лічильник);
          лічильник += 1.5;
          K += 1;
          points.innerText = P;
          document.removeEventListener('keydown', bink);
      }
  }
                      document.addEventListener('keyup', function(event) {
                      if (event.key == 'z' || event.key == 'Z'||event.key == 'я' || event.key == 'Я'||event.key == "X"||event.key == "x") {
                      isBinking = false;
                      }
                      });
                      ball.addEventListener('mouseout', function(event) {
                          // Функція виконується при відведенні мишею від об'єкта
                          yak = false;
                          document.removeEventListener('keydown', bink);
                      });
                }
                if (controls==true){
                ball.addEventListener("click", removeit);
                function removeit() {
                    ball.remove();
                    K++;
                    points.innerText = P;
                    anr.innerText = "Great! Combo: " + K;
                        P += лічильник;
                        лічильник += 1,5;
                        points.innerText = P;
                }
            }
        }
ukrt.addEventListener("click", relad);
            function relad() {
                clearTimeout(e);
                clearInterval(s);
                clearInterval(g);
                clearInterval(l);
                clearInterval(t);
                lik=true;
                retries();
                points.style.display = "none";
                Lives.style.display = "none";
                timer.style.display="none";
        }
            retry.addEventListener("click", retries);
            function retries() {
                if(parseFloat(ap) > 0){
                    br.style.display="block";
                }
                if(parseFloat(ac) > 0){
                    sl.style.display="block";
                }
                if(parseFloat(ad) > 0){
                    gd.style.display="block";
                }
                if(parseFloat(ap) <= 0){
                    br.style.display="none";
                }
                if(parseFloat(ac) <= 0){
                    sl.style.display="none";
                }
                if(parseFloat(ad) <= 0){
                    gd.style.display="none";
                }
                clearTimeout(e);
                clearInterval(l);
                C=0;
                K = 0;
                лічильник=0.5;
                if (L == 0) {
                    anr.innerText = "Sadly but you lost, maybe in next round you will do better?"
                }
                gd.style.display="block";
                sl.style.display='block';
                br.style.display='block';
                settings.style.display="block";
                ukrt.style.display="none";
                df.style.display = "block";
                miss.style.display = "none";
                GG.style.display = "none";
                knop.style.display = "block";
                instruc.style.display = "block";
                stoper.style.display="none";
                opencase.style.display="block";
                EE.style.display="block";
                skins.style.display="block";
                Updatesi.style.display="block";
                codes.style.display="block";
                retry.removeEventListener("click", retries);
            }
        }
    }
instruc.addEventListener("click", rulk);
function rulk() {
    let audio = new Audio('click.mp3'); 
    if(IsMusic==true){
        audio.play();
    }
    settings.style.display="none";
    df.style.display = "none";
    knop.style.display = "none";
    Updatesi.style.display="none";
    info.style.display = "block";
    instruc.style.display = "none";
    back.style.display = "block";
    opencase.style.display="none";
    skins.style.display="none";
    EE.style.display="none";
    codes.style.display="none";
    gd.style.display="none";
    sl.style.display='none';
    br.style.display='none';
}
settings.addEventListener("click", stg);
function stg(){
    let audio = new Audio('click.mp3'); 
    if(IsMusic==true){
        audio.play();
    }
    settings.style.display="none";
    control.style.display="block";
    musici.style.display="block";
    Updatesi.style.display="none";
    df.style.display = "none";
    EE.style.display="none";
    knop.style.display = "none";
    instruc.style.display = "none";
    back.style.display = "block";
    opencase.style.display="none";
    codes.style.display="none";
    skins.style.display="none";
    admin.style.display="block";
    gd.style.display="none";
    sl.style.display='none';
    br.style.display='none';
}
control.addEventListener("click", ctr);
function ctr(){
    V++;
    let audio=new Audio('click.mp3');
    if(IsMusic==true){
        audio.play();
    }
    if (V % 2 == 1){
        controls=false;
        control.innerText="Game Controls: Z or X";
    }
    if (V % 2 == 0){
        controls=true;
        control.innerText="Game Controls: click";
    }
}
back.addEventListener("click", backe);
function backe() {
    let audio = new Audio('click.mp3'); 
    if(IsMusic==true){
        audio.play();
    }
    anr.style.display="block";
    counter.style.display="block";
    wins.style.display="block";
    infi.style.display = "none";
    df.style.display = "block";
    knop.style.display = "block";
    gd.style.display = "block";
    sl.style.display = "block";
    br.style.display = "block";
    instruc.style.display = "block";
    settings.style.display="block";
    control.style.display="none";
    musici.style.display="none";
    info.style.display = "none";
    back.style.display = "none";
    HighScore.style.display="none";
    ez.style.display = "none";
    nm.style.display = "none";
    hd.style.display = "none";
    case1.style.display="none";
    opencase.style.display="block";
    nomoney.style.display="none";
    openedcase.style.display="none";
    skins.style.display="block";
    catalog.style.display="none";
    skindesc.style.display="none";
    resetskin.style.display="none";
    money.style.display="none";
    infk.style.display="none";
    Updatesi.style.display="block";
    admin.style.display="none";
    passl.style.display="none";
    codes.style.display="block";
    ZI.style.display="none";
    stgk.style.display="none";
    Z.style.display="none";
    InBlock.style.display="none";
    knopka2.style.display="none";
    partcode.style.display="none";
    EE.style.display="block";
    Z.value="Enter password here";
    Z.style.onfocus="if(this.value==this.defaultValue)this.value='';";
    se.value="Amount";
    fi.value="Amount";
    fi.style.onfocus="if(this.value==this.defaultValue)this.value='';";
    se.style.onfocus="if(this.value==this.defaultValue)this.value='';";
    ZI.value="Enter code here"; 
    ZI.style.onfocus="if(this.value==this.defaultValue)this.value='';";
    clearTimeout(Y);
    nomoney.style.opacity=0;
    case1.style.opacity=0;
    setTimeout(joK, 200);
    function joK(){
        resetskin.style.display="none";
        resetskin.style.display="none";
        resetskin.style.display="none";
        resetskin.style.display="none";
        resetskin.style.display="none";
    }
}
df.addEventListener("click", diff);
function diff() {
    let audio = new Audio('click.mp3'); 
    if(IsMusic==true){
        audio.play();
    }
    settings.style.display="none";
    knop.style.display = "none";
    instruc.style.display = "none";
    df.style.display = "none";
    ez.style.display = "block";
    nm.style.display = "block";
    Updatesi.style.display="none";
    hd.style.display = "block";
    back.style.display="block";
    codes.style.display="none";
    opencase.style.display="none";
    EE.style.display="none";
    skins.style.display="none";
    gd.style.display="none";
    sl.style.display='none';
    br.style.display='none';
}
ez.addEventListener("click", easy);
function easy(){
    ez.style.display = "none";
    nm.style.display = "none";
    hd.style.display = "none";
    knop.style.display = "block";
    back.style.display="none";
    instruc.style.display = "block";
    df.style.display = "block";
    settings.style.display="block";
    codes.style.display="block";
    Updatesi.style.display="block";
    opencase.style.display="block";
    skins.style.display="block";
    if(IsMusic==true){
        audio10.play();
    }
    easyk = true;
    normalk = false;
    hardk = false;

}
nm.addEventListener("click", norm);
function norm() {
    ez.style.display = "none";
    nm.style.display = "none";
    settings.style.display="block";
    hd.style.display = "none";
    knop.style.display = "block";
    back.style.display="none";
    instruc.style.display = "block";
    df.style.display = "block";
    codes.style.display="block";
    Updatesi.style.display="block";
    opencase.style.display="block";
    skins.style.display="block";
    if(IsMusic==true){
        audio10.play();
    }
    easyk = false;
    normalk = true;
    hardk = false;
}
hd.addEventListener("click", har);
function har() {
    ez.style.display = "none";
    nm.style.display = "none";
    hd.style.display = "none";
    settings.style.display="block";
    knop.style.display = "block";
    back.style.display="none";
    instruc.style.display = "block";
    df.style.display = "block";
    codes.style.display="block";
    Updatesi.style.display="block";
    opencase.style.display="block";
    skins.style.display="block";
    if(IsMusic==true){
        audio10.play();
    }
    easyk = false;
    normalk = false;
    hardk = true;
}
br.addEventListener("click", brk);
function brk(){
    let audio=new Audio('click.mp3');
    if(IsMusic==true){
        audio.play();
    }
    df.style.display = "none";
    knop.style.display = "none";
    infi.style.display = "block";
    instruc.style.display = "none";
    Updatesi.style.display="none";
    back.style.display = "block";
    EE.style.display="none";
    settings.style.display="none";
    opencase.style.display="none";
    skins.style.display="none";
    codes.style.display="none";
    infi.innerText="Get this trophey for reaching 60 score in easy mode. This achievment was received "+ap+" times";
}
sl.addEventListener("click", slk);
function slk(){
    let audio=new Audio('click.mp3');
    if(IsMusic==true){
        audio.play();
    }
    df.style.display = "none";
    knop.style.display = "none";
    infi.style.display = "block";
    EE.style.display="none";
    instruc.style.display = "none";
    back.style.display = "block";
    settings.style.display="none";
    Updatesi.style.display="none";
    opencase.style.display="none";
    skins.style.display="none";
    codes.style.display="none";
    infi.innerText="Get this trophey for reaching 60 score in normal mode. This achievment was received "+ac+" times";
}
gd.addEventListener("click", gdk);
function gdk(){
    let audio=new Audio('click.mp3');
    if(IsMusic==true){
        audio.play();
    }
    df.style.display = "none";
    knop.style.display = "none";
    infi.style.display = "block";
    instruc.style.display = "none";
    back.style.display = "block";
    settings.style.display="none";
    EE.style.display="none";
    opencase.style.display="none";
    Updatesi.style.display="none";
    skins.style.display="none";
    codes.style.display="none";
    infi.innerText="Get this trophey for reaching 60 score in hard mode. This achievment was received "+ad+" times";
}
musici.addEventListener("click", loli);
function loli(){
    i++;
    if(i % 2 == 0){
        let audio=new Audio("dier.mp3");
        audio.play();
        IsMusic=true;
        musici.innerText="Music: on";
    }
    if(i % 2 == 1 ){
        IsMusic=false;
        musici.innerText="Music: off";
    }
}
opencase.addEventListener("click", openitt);
function openitt(){
    let audio = new Audio('click.mp3'); 
    if(IsMusic==true){
        audio.play();
    }
    setTimeout(appear, 100);
	function appear(){
	case1.style.opacity=1;
	}
    skins.style.display="none";
    case1.style.display="block";
    opencase.style.display="none";
    settings.style.display="none";
    EE.style.display="none";
    control.style.display="none";
    musici.style.display="none";
    df.style.display = "none";
    knop.style.display = "none";
    instruc.style.display = "none";
    back.style.display = "block";
    Updatesi.style.display="none";
    gd.style.display="none";
    sl.style.display='none';
    br.style.display='none'; 
    codes.style.display="none";
    PS = storage10.getItem('PS');
        if (!PS) {
        PS = 0;
    }
    W = storage2.getItem('W');
        if (!W) {
        W = 0;
    }
    if (isNaN(PS)) {
        PS = 0;
        storage10.setItem('PS', PS);
    }
    let v=Math.round(PS, 2);
    const d = v.toLocaleString('en', {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 2
      });
    ww.innerText = W + " wins in total.";
    money.style.display="block";
    money.innerText="MP: "+d;
}
case1.addEventListener("click", caser1);
function caser1(){
    money.style.display="none";
    let audio = new Audio('roulette.wav'); 
    if (!(PS==0)&&PS>=500&&!(PS<0)&&W>=10){
        back.style.display = "none";
        if(IsMusic==true){
            audio.play();
        }
    function змінитиЗначення11() {
        PS = parseFloat(PS) - 500;
        storage10.setItem('PS', PS);
    }
    змінитиЗначення11();
    anr.innerText="Rolling you the worst item";
    roulettee.style.display="block";
    nameo.style.display="block";
    skins.style.display="none";
    setTimeout(stopnm, 4100);
    let M=setInterval(random, 200);
    function random(){
        x=Math.random()*1.15;
        if (x <= 0.6) {
            roulettee.style.backgroundImage = "url('Untitled-2.png')";
            nameo.innerText="Smth weird.";
            rarity.innerText="Common";
          } else if (x <= (0.6 + 0.45)&&x>0.6) {
            roulettee.style.backgroundImage = "url('sans.jpg')";
            nameo.innerText="Sans on judge.";
            rarity.innerText="Rare";
          }if (x <= (0.6 + 0.4 + 0.15)&&x>1.05) {
            roulettee.style.backgroundImage = "url('Untitled-3.png')";
            nameo.innerText="ЗСУ plane.";
            rarity.innerText="Legendary";
          }
        }
        function stopnm(){
            clearInterval(M);
            openedcase.style.display="block";
            roulettee.style.display="none";
            nameo.style.display="none";
            if (x <= 0.6) {
                prize.style.backgroundImage = "url('Untitled-2.png')";
                nameo1.innerText="Smth weird.";
                rarity1.innerText="Common";
                let m=parseFloat(bp);
                if (parseFloat(m) > 0){
                    rarity1.innerText="Duplicate.";
                    PS=parseFloat(PS)+50;
                    storage10.setItem('PS', PS);
                }
                bp = storage13.getItem('bp');
                if (!bp) {
                bp = 0;
                }
                bp = parseFloat(bp) + 1;
                storage13.setItem('bp', bp);
              } else if (x <= (0.6 + 0.45)&&x>0.6) {
                    rarity1.innerText="Rare";
                    let m=parseFloat(bc);
                    if (parseFloat(m) > 0){
                        rarity1.innerText="Duplicate.";
                    }
                prize.style.backgroundImage = "url('sans.jpg')";
                nameo1.innerText="Sans on judge.";
                rarity1.innerText="Rare";
                bc = storage14.getItem('bc');
                if (!bc) {
                bc = 0;
                }
                bc = parseFloat(bc) + 1;
                storage14.setItem('bc', bc);
              } else if (x <= (0.6 + 0.4 + 0.15)&&x>1.05) {
                    let audio=new Audio("aleluia.mp3");
                    audio.play();
                    rarity1.innerText="Legendary";
                    let m=parseFloat(bd);
                    if (m > 0){
                        rarity1.innerText="Duplicate.";
                    }
                prize.style.backgroundImage = "url('Untitled-3.png')";
                nameo1.innerText="ЗСУ plane.";
                rarity1.innerText="Legendary";
                bd = storage15.getItem('bd');
                if (!bd) {
                bd = 0;
                }
                bd = parseFloat(bd) + 1;
                storage15.setItem('bd', bd);
              }
        }
    }
    else {
        nomoney.style.display="block";
        back.style.display="block";
        let audio=new Audio("nope.mp3");
        if (IsMusic==true){
        audio.play();
        }
        setTimeout(anim, 100);
        function anim(){
            nomoney.style.opacity=1;
        }
    }
    money.style.display="none";
    case1.style.display="none";
    settings.style.display="none";
    control.style.display="none";
    musici.style.display="none";
    df.style.display = "none";
    knop.style.display = "none";
    instruc.style.display = "none";
    opencase.style.display="none";
    Updatesi.style.display="none";
    anr.innerText="Minimum: 10 wins and 500 points...";
}
skins.addEventListener("click", skiner);
function skiner(){
    let audio=new Audio("click.mp3");
        if (IsMusic==true){
        audio.play();
        }
    bp = storage13.getItem('bp');
        if (!bp) {
        bp = 0;
    }
    bc = storage13.getItem('bc');
        if (!bc) {
        bc = 0;
    }
    bd = storage13.getItem('bd');
        if (!bd) {
        bd = 0;
    }
    back.style.display="block";
    case1.style.display="none";
    settings.style.display="none";
    control.style.display="none";
    musici.style.display="none";
    df.style.display = "none";
    knop.style.display = "none";
    instruc.style.display = "none";
    opencase.style.display="none";
    skins.style.display="none";
    catalog.style.display="block";
    Updatesi.style.display="none";
    codes.style.display="none";
    gd.style.display="none";
    sl.style.display='none';
    br.style.display='none';
    EE.style.display="none";
    clearInterval(E);
    if(skin1==true||skin2==true||skin3==true){
        resetskin.style.display="block";
        }
    if(parseFloat(bp)>0){
        Smthweird.style.display="block";
    }
    if(parseFloat(bc)>0){
        Sansonjudge.style.display="block";
    }
    if(parseFloat(bd)>0){
        ЗСУplane.style.display="block";
    }
    if(parseFloat(bp) <= 0){
        Smthweird.style.display="none";
    }
    if(parseFloat(bc) <= 0){
        Sansonjudge.style.display="none";
    }
    if(parseFloat(bd) <= 0){
        ЗСУplane.style.display="none";
    }
}
equip.addEventListener("click", equipi);
function equipi(){
    if (x <= 0.6) {
        bp = storage13.getItem('bp');
        if (!bp) {
        bp = 0;
        }
        skin1=true;
    skin2=false;
    skin3=false;
      } else if (x <= (0.6 + 0.4)&&x>0.6) {
        bc = storage14.getItem('bc');
        if (!bc) {
        bc = 0;
        }
        skin1=false;
    skin2=true;
    skin3=false;
      } else if (x <= (0.6 + 0.4 + 0.15)&&x>1.0) {
        bd = storage13.getItem('bd');
        if (!bd) {
        bd = 0;
        }
        skin1=false;
    skin2=false;
    skin3=true;
        }
        backe();
}
Smthweird.addEventListener("click", weirdy);
function weirdy(){
    backe();
    skin1=true;
    skin2=false;
    skin3=false;
    clearTimeout(O);
    E=setInterval(huk, 10);
    function huk(){
        resetskin.style.display="none";
    }
}
Sansonjudge.addEventListener("click", sansy);
function sansy(){
    backe();
    skin1=false;
    skin2=true;
    skin3=false;
    clearTimeout(O);
    E=setInterval(huk, 10);
    function huk(){
        resetskin.style.display="none";
    }
}
ЗСУplane.addEventListener("click", planky);
function planky(){
    backe();
    skin1=false;
    skin2=false;
    skin3=true;
    clearTimeout(O);
    E=setInterval(huk, 10);
    function huk(){
        resetskin.style.display="none";
    }
}
Smthweird.addEventListener("mouseover", weirdy2);
function weirdy2(){
    Y=setTimeout(yonk, 450);
    function yonk(){
        setTimeout(appur, 100);
        function appur(){
    skindesc.style.opacity=1;
        }
    skindesc.style.display="block";
    skindesc.innerText="Common Skin. This is a weird thing i drew in 10 mins. Enjoy! (I am bad artist).";
    resetskin.style.display="none";
    }
}
Sansonjudge.addEventListener("mouseover", sansy2);
function sansy2(){
    Y=setTimeout(yonk, 450);
    function yonk(){
        setTimeout(appur, 100)
        function appur(){
    skindesc.style.opacity=1;
        }
    skindesc.style.display="block";
    skindesc.innerText="Rare Skin. This is sans, character that got many attention and still popular. Also he can dodge.";
    resetskin.style.display="none";
    }
}
ЗСУplane.addEventListener("mouseover", planky2);
function planky2(){
    Y=setTimeout(yonk, 450);
    function yonk(){
        setTimeout(appur, 100)
        function appur(){
    skindesc.style.opacity=1;
        }
    skindesc.style.display="block";
    skindesc.innerText="Legendary skin. Yeah this is some fiGhter-jet i found, but hey at Least it`s legendary, sO Rocket, Ytira, and yeah (some hidden word) to UKRAINE! ";
    resetskin.style.display="none";
    }
}
Smthweird.addEventListener("mouseout", weirdy3);
function weirdy3(){
    skindesc.style.opacity=0;
    O=setTimeout(disable, 500);
    function disable(){
    skindesc.style.display="none";
    if(skin1==true||skin2==true||skin3==true){
        resetskin.style.display="block";
        }
    }
}
Sansonjudge.addEventListener("mouseout", sansy3);
function sansy3(){
    skindesc.style.opacity=0;
    O=setTimeout(disable, 500);
    function disable(){
        skindesc.style.display="none";
        if(skin1==true||skin2==true||skin3==true){
            resetskin.style.display="block";
            }
    }
}
ЗСУplane.addEventListener("mouseout", planky3);
function planky3(){
    skindesc.style.opacity=0;
    O=setTimeout(disable, 500);
    function disable(){
    skindesc.style.display="none";
    if(skin1==true||skin2==true||skin3==true){
    resetskin.style.display="block";
    }
    }
}
backi.addEventListener("click", backy);
function backy(){
    openitt();
    catalog.style.display="none";
    skindesc.style.display="none";
    resetskin.style.display="none";
    openedcase.style.display="none";
}
function randomFromTo(a, b) {
        let c = Math.round(Math.random() * (b - a) + a);
        return (c);
}
resetskin.addEventListener("click", getskinoff);
function getskinoff(){
    skin1=false;
    skin2=false;
    skin3=false;
    resetskin.style.display="none";
}
Updatesi.addEventListener("click", kjh);
function kjh(){
    infk.style.display="block";
    infk.innerText="Alpha 2.5: 1)Added cases system and case itself. 2)Fixed some bugs in keyboard mode. 3)Added some secrets or just a secret in hard difficult. 4)Added code system and codes.";
    Updatesi.style.display="none";
    settings.style.display="none";
    df.style.display = "none";
    knop.style.display = "none";
    instruc.style.display = "none";
    back.style.display = "block";
    opencase.style.display="none";
    skins.style.display="none";
    EE.style.display="none";
    codes.style.display="none";
    gd.style.display="none";
    sl.style.display='none';
    br.style.display='none';
}
admin.addEventListener("click", adminer)
function adminer(){
    passl.style.display="block";
    Z.style.display="block";
    control.style.display="none";
    musici.style.display="none";
    admin.style.display="none";
    passl.addEventListener("click", openpass);
    function openpass(){
        let a=7358;
        if(Z.value==a){
            InBlock.style.display="block";
            passl.style.display="none";
            Z.style.display="none";
            InBlock.style.color="red";
            Z.value="Enter password here";
            Z.style.onfocus="if(this.value==this.defaultValue)this.value='';";
            go.addEventListener("click", seti);
            function seti(){
                let se=document.querySelector("#se");
                let fi=document.querySelector("#fi");
                if(fi.value == ""||isNaN(fi.value)){
                    PS=storage10.getItem('PS');
                }else{
                    PS=Number(fi.value);
                    storage10.setItem('PS', PS);
                }
                if(se.value == "" || isNaN(Number(se.value))){
                    W=storage2.getItem('W');
                } else {
                    W=Number(se.value);
                    storage2.setItem('W', W);
                }
                passl.removeEventListener("click", openpass);
                backe();
                se.value="Amount";
                fi.value="Amount";
                fi.style.onfocus="if(this.value==this.defaultValue)this.value='';";
                se.style.onfocus="if(this.value==this.defaultValue)this.value='';";
                go.removeEventListener("click", seti);
            }
        } else if(!(Z.value==a)){
            backe();
            se.value="Amount";
            fi.value="Amount";
            fi.style.onfocus="if(this.value==this.defaultValue)this.value='';";
            se.style.onfocus="if(this.value==this.defaultValue)this.value='';";
            let audio=new Audio("error.mp3");
            audio.play();
            Z.value="Enter password here";
            Z.style.onfocus="if(this.value==this.defaultValue)this.value='';";
            passl.removeEventListener("click", openpass);
        }
        passl.removeEventListener("click", openpass);
    }
}
codes.addEventListener("click", gift);
function gift(){
    let audio = new Audio('click.mp3'); 
    if(IsMusic==true){
        audio.play();
    }
    ZI.style.display="block";
    stgk.style.display="block";
    opencase.style.display="none";
    settings.style.display="none";
    control.style.display="none";
    musici.style.display="none";
    df.style.display = "none";
    EE.style.display="none";
    knop.style.display = "none";
    instruc.style.display = "none";
    back.style.display = "block";
    Updatesi.style.display="none";
    skins.style.display="none";
    gd.style.display="none";
    sl.style.display='none';
    br.style.display='none';
    codes.style.display="none";
}
    function yeetira(){
    let j=0;
    let bk=0;
    let bl=0;
    let bf=0;
    if(IsMusic==true){ 
    let audio=new Audio("click.mp3");
    audio.play();
    }
    let m=ZI.value;
    bc = storage14.getItem('bc');
    PS = storage10.getItem('PS');
    PS=parseFloat(PS)+P*0.6;
    storage10.setItem('PS', PS);
    const storage2=window.localStorage;
    const storage89=window.localStorage;
    const storage4=window.localStorage;
    bk = Number(storage2.getItem('bk'));
    bl = Number(storage89.getItem('bl'));
    bf = Number(storage4.getItem('bf'));
    let A=["THXFORPLAYING", "UNDERLEGEND", "JUSTASMALLPRESENT"];
    while (j<A.length&&!(m==A[j])) {
        j++;
    }
    if(Number(parseFloat(bk))>=1){
        partcode.style.display="block";
        partcode.innerText="You have already redeemed that code.";
    }
    if(Number(parseFloat(bl))>=1){
        partcode.style.display="block";
        partcode.innerText="You have already redeemed that code.";
    }
    if(Number(parseFloat(bf))>=1){
        partcode.style.display="block";
        partcode.innerText="You have already redeemed that code.";
    }
        if(m==A[j]){
            if(j==0){
                if(!(Number(parseFloat(bk))>=1)){
                let R=1000;
                PS=parseFloat(PS)+R;
                storage10.setItem('PS', PS);
                partcode.style.display="block";
                partcode.innerText="You got 1000 MP!";
                if(isNaN(PS)){
                    PS=0+1000;
                    storage10.setItem('PS', PS);
                }
                bk=parseFloat(bk)+1;
                storage2.setItem('bk', bk);
                } 
            }else if (j == 1) {
                if (!(isNaN(parseFloat(bl))) && parseFloat(bl) < 1) {
                    let bc = storage14.getItem('bc');
                    let R = 1000;
                    let PS = storage10.getItem('PS');
                    if (!parseFloat(bc) >= 1) {
                        bc = parseFloat(bc) + 1;
                        partcode.style.display = "block";
                        partcode.innerText = "You got rare skin!";
                        storage14.setItem('bc', bc);
                    } else if (parseFloat(bc) >= 1) {
                        PS = parseFloat(PS) + R;
                        storage10.setItem('PS', PS);
                        partcode.style.display = "block";
                        partcode.innerText = "You got 1000 MP!";
                        if (isNaN(PS)) {
                            PS = 0+1000;
                            storage10.setItem('PS', PS);
                        }
                    }
                    bl=bl+1;
                    storage89.setItem('bl', bl);
                }
            }else if(j==2){
                if (!(Number(parseFloat(bf))>=1)){
                    let R=2000;
                PS=parseFloat(PS)+R;
                storage10.setItem('PS', PS);
                partcode.style.display="block";
                partcode.innerText="You got 2000 MP!";
                anr.innerText="I heard somewhere admin console is hidden, maybe you can find it?.";
                if(isNaN(PS)){
                    PS=0+2000;
                    storage10.setItem('PS', PS);
                }
                bf=parseFloat(bf)+1;
                storage4.setItem('bf', bf);
            }
        }
    }else if(!(m==A[j])){
        yeek=true;
        if(IsMusic==true){
        let audio=new Audio("error.mp3");
        audio.play();
        audio.volume=0.3;
        }
        partcode.innerText="Invalid code";
        partcode.style.display="block";
    }
}
//Education Mode
EE.addEventListener("click", CEE);
function CEE(){
    let knopka2=document.querySelector("#knopka2");
    let tt=5;
    let pp=5;
    let WW=0;
    HighScore.style.display="block";
    WW = storage35.getItem('WW');
        if (!WW) {
        WW = 0;
        }
    br.style.display="none";
    sl.style.display="none";
    gd.style.display="none";
    HighScore.innerText="Your HighScore: "+WW;
	settings.style.display="none";
    df.style.display = "none";
    knop.style.display = "none";
    Updatesi.style.display="none";
    instruc.style.display = "none";
    back.style.display = "block";
    opencase.style.display="none";
    skins.style.display="none";
    codes.style.display="none";
    anr.style.display="none";
    counter.style.display="none";
    wins.style.display="none";
    EE.style.display="none";
    knopka2.style.display="block";
    back.addEventListener("click", FOREDU);
    function FOREDU(){
        knopka2.removeEventListener("click", goner);
    }
    knopka2.addEventListener("click", goner);
    function goner(){
        retry.addEventListener("click", retries);
        function retries(){
            if(p<=1){
            black.remove();
            }
            if(p<=2){
            red.remove();
            }
            if(p<=3){
            yellow.remove();
            }
            WW = storage35.getItem('WW');
            if (!WW) {
            WW = 0;
            }
            HighScore.innerText="Your HighScore: "+WW;
            GG.style.display = "none";
            points.style.display = "none";
            Lives.style.display = "none";
            stoper.style.display="none";
            timer.style.display="none";
            back.style.display="block";
            knopka2.style.display="block";
        }
        //Треба послідовно натиснути на шарики(1-чорний, 2-червоний, 3-жовтий)
        knopka2.style.display="none";
        back.style.display="none";
        let R=0;
        points.innerText=R;
        let t=0;
        t=0;
        let p=0;
        p=1;
        function YESIAM(){
            if(p==1){
        black.addEventListener("click", removeit);
        function removeit() {
            black.removeEventListener("click", removeit);
        black.remove();
        p++;
        R++;
        points.innerText=R;
        YESIAM();
        }
    }
    if(p==2){
        red.addEventListener("click", removeit2);
        function removeit2() {
            red.removeEventListener("click", removeit2);
        red.remove();
        p++;
        R++;
        points.innerText=R;
        YESIAM();
        }
    }
        if(p==3){
        yellow.addEventListener("click", removeit3);
        function removeit3() {
            yellow.removeEventListener("click", removeit3);
        yellow.remove();
        s = setInterval(create, 200);
        t=0;
        p++;
        p=1;
        R++;
        let M=Number(pp)/2;
        console.log(M);
        if(tt<M){
            pp--;
        }
        if(tt>=M){
            pp++;
            pp--;
        }
        tt=pp;
        timer.innerText=tt;
        points.innerText=R;
        YESIAM();
        }
    }
}
    let s = setInterval(create, 200);
    timeout1();
    timer.style.display="block";
    points.style.display = "block";
    let v=setInterval(timeout1, 1000);
    function timeout1(){
        if(tt<=0){
            enderman();
        }
        timer.innerText=tt;
        tt--;
    }
    function create() {
        let ball;
        t++;
        ball = document.createElement("div");
        ball.className = "ball";
        main.appendChild(ball);
        let X = randomFromTo(43, 557);
        let Y = randomFromTo(43, 347);
        if (t>=1){
            ball.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
            ball.id="black";
        }
        if (t>=2){
            ball.style.backgroundColor = "rgb(" + 255 + "," + 0 + "," + 0 + ")";
            ball.id="red";
        }
        if (t>=3){
            ball.style.backgroundColor = "rgb(" + 255 + "," + 255 + "," + 0 + ")";
            ball.id="yellow";
        }
        ball.style.left = X + "px";
        ball.style.top = Y + "px";
        if (t>=3){
            clearInterval(s);
            YESIAM();
        }
    }
    function enderman(){
                tt=5;
                pp=5;
                WW=R;
                storage35.setItem('WW', WW);
                GG.style.display = "block";
                points.style.display = "none";
                Lives.style.display = "none";
                stoper.style.display="block";
                timer.style.display="none";
                count.innerText = "Your points: " + R;
                clearInterval(v);
                clearInterval(s);
                if (R == 0) {
                    anw.innerText = "Were you just afk or watching?";
                }
                if (R > 0 && R < 10) {
                    anw.innerText = "Get a little training and you will do better."
                }
                if (R == 10 || R > 10 && R < 15) {
                    anw.innerText = "You are getting good at this, keep playing like this.";
                }
                if (R == 15 || R > 15 && R < 20) {
                    anw.innerText = "You got really good at this.";
                }
                if (R == 20 || R > 20) {
                    anw.innerText = "You became professional in this mode.";
                }
    }
        create();
    }
}

//End of EE
ZI.addEventListener("click", diss);
function diss(){
    ZI.value="";
}
progress.addEventListener("click", progressreset);
function progressreset(){
    localStorage.clear();
    location.reload(true);
}
    function addEvent() {
        stgk.addEventListener("click", yeetira);
        stgk.removeEventListener("click", addEvent);
      }
      addEvent();