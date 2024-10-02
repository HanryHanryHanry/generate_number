/*
var score = [700, 8, 9, 10, 3];
 
console.log(score.sort( (firstEl, secondEl) => {
    if (secondEl > firstEl){
        return -1;
    }
    else {
        return 0;
    }
} ));
 
*/
// var mysql = require('mysql');

// var conn = mysql.createConnection({
//     host    : 'localhost',
//     user    : 'root',
//     password: 'KHONGmonha1!',
//     database: 'mysql_node'
// });
// //kết nối.
// conn.connect(function (err){
//     //nếu có nỗi thì in ra
//     if (err) throw err.stack;
//     //nếu thành công
//     console.log('ket noi thanh cong');
    
// });
 

//https://freetuts.net/hoc-javascript

const c0 =document.getElementById("c0");
const c1 =document.getElementById("c1");
const c2 =document.getElementById("c2");
const c3 =document.getElementById("c3");
const c4 =document.getElementById("c4");
const c5 =document.getElementById("c5");
const c6 =document.getElementById("c6");
const c7 =document.getElementById("c7");
const c8 =document.getElementById("c8");
const c9 =document.getElementById("c9");

const c10 =document.getElementById("c10");
const c11 =document.getElementById("c11");
const c12 =document.getElementById("c12");
const c13 =document.getElementById("c13");
const c14 =document.getElementById("c14");
const c15 =document.getElementById("c15");
const c16 =document.getElementById("c16");
const c17 =document.getElementById("c17");
const c18 =document.getElementById("c18");
const c19 =document.getElementById("c19");

const c20 =document.getElementById("c20");
const c21 =document.getElementById("c21");
const c22 =document.getElementById("c22");
const c23 =document.getElementById("c23");
const c24 =document.getElementById("c24");
const c25 =document.getElementById("c25");
const c26 =document.getElementById("c26");
const c27 =document.getElementById("c27");
const c28 =document.getElementById("c28");
const c29 =document.getElementById("c29");

const c30 =document.getElementById("c30");
const c31 =document.getElementById("c31");
const c32 =document.getElementById("c32");
const c33 =document.getElementById("c33");
const c34 =document.getElementById("c34");
const c35 =document.getElementById("c35");
const c36 =document.getElementById("c36");
const c37 =document.getElementById("c37");
const c38 =document.getElementById("c38");
const c39 =document.getElementById("c39");

const c40 =document.getElementById("c40");
const c41 =document.getElementById("c41");
const c42 =document.getElementById("c42");
const c43 =document.getElementById("c43");
const c44 =document.getElementById("c44");
const c45 =document.getElementById("c45");
const c46 =document.getElementById("c46");
const c47 =document.getElementById("c47");
const c48 =document.getElementById("c48");
const c49 =document.getElementById("c49");

const c50 =document.getElementById("c50");
const c51 =document.getElementById("c51");
const c52 =document.getElementById("c52");
const c53 =document.getElementById("c53");
const c54 =document.getElementById("c54");
const c55 =document.getElementById("c55");
const c56 =document.getElementById("c56");
const c57 =document.getElementById("c57");
const c58 =document.getElementById("c58");
const c59 =document.getElementById("c59");

const c60 =document.getElementById("c60");
const c61 =document.getElementById("c61");
const c62 =document.getElementById("c62");
const c63 =document.getElementById("c63");
const c64 =document.getElementById("c64");
const c65 =document.getElementById("c65");
const c66 =document.getElementById("c66");
const c67 =document.getElementById("c67");
const c68 =document.getElementById("c68");
const c69 =document.getElementById("c69");

const c70 =document.getElementById("c70");
const c71 =document.getElementById("c71");
const c72 =document.getElementById("c72");
const c73 =document.getElementById("c73");
const c74 =document.getElementById("c74");
const c75 =document.getElementById("c75");
const c76 =document.getElementById("c76");
const c77 =document.getElementById("c77");
const c78 =document.getElementById("c78");
const c79 =document.getElementById("c79");

const c80 =document.getElementById("c80");
const c81 =document.getElementById("c81");
const c82 =document.getElementById("c82");
const c83 =document.getElementById("c83");
const c84 =document.getElementById("c84");
const c85 =document.getElementById("c85");
const c86 =document.getElementById("c86");
const c87 =document.getElementById("c87");
const c88 =document.getElementById("c88");
const c89 =document.getElementById("c89");

const c90 =document.getElementById("c90");
const c91 =document.getElementById("c91");
const c92 =document.getElementById("c92");
const c93 =document.getElementById("c93");
const c94 =document.getElementById("c94");
const c95 =document.getElementById("c95");
const c96 =document.getElementById("c96");
const c97 =document.getElementById("c97");
const c98 =document.getElementById("c98");
const c99 =document.getElementById("c99");




let number_random=220;
let count_number=0;
let timer = null;
let isRunning = false;
let isReset = false;
let b=0;
let count_number1 =[];
let count_number2 =[];
let count_number3 =[];
let index_max=[];
let index_min=[];
let count1=0;
let maxCount=0;
let minCount=0;
let isgenerate=false;
const FirstTime500ms = 500;
const secondTime200ms = 200;
let generation_time1=0;
let inputs = document.querySelectorAll(".unit");//lay tat ca cac input
let hour=0;
let minute=0;

const max_number11=document.getElementById("max_number1");
const min_number11=document.getElementById("min_number1");
const generation_time = document.getElementById("generation_time");

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours> 12? "PM":"AM";
    hours = hours %12||12;
    hours = hours.toString().padStart(2,0);
    const minuts = now.getMinutes().toString().padStart(2,0);
    const seconds= now.getSeconds().toString().padStart(2,0);
    const timeString =`${hours}:${minuts}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
    hour=hours;
    minute=minuts;
    if(hour===16 && minute===30){
        bit_change_generate_number=true;
    }
    if(hour===17 &&minute==30){   //dung phat sinh mot so ngau nhien
        clearInterval(timer);  // ngat timer
        isRunning = false;
    }
    if(hour===18&&minute===30){
        timer = setInterval(update, generation_time1); 
        isRunning = false;
    }
}
updateClock();
setInterval(updateClock, 1000);

function start(){
    maxCount =max_number11.value;
    minCount=min_number11.value;
    generation_time1=generation_time.value;
    if(generation_time1<100) generation_time1=100;
    if (!isRunning ){
        // startTime = Date.now() - elapsedTime;
        if(!isReset){
        for(i=0; i<100; i++){
            count_number1[i]=0;
            inputs[i].value=0
        }
    }
        timer = setInterval(update, generation_time1);  // sau moi 200 ms se thuc hien ham update mot lan
        isRunning = true;
        isReset = true;
        // isgenerate=false;
    }
}

function stop(){
        if(isRunning){
            clearInterval(timer);  // ngat timer
            isRunning = false;
        }
  }

function reset(){
    isReset = false;
  }
  function update(){
    number_random = Math.floor(Math.random()*100);
     maxCount =max_number11.value;
     minCount=min_number11.value;
      for(let i=0; i<100;i++){
         if(number_random === i){
             count_number1[i]+=1;
             inputs[i].value=count_number1[i];
         }
         count_number2[i]=count_number1[i]
         count_number3[i]=count_number1[i]
      }
      count_number2.sort((a,b)=>{
        if(a>b) {return 1;}
        if(a<b) {return -1};
            return 0;
        });
     count_number3.sort((a,b)=>{
        if(a<b) {return 1;}
        if(a>b) {return -1};
            return 0;
        });
// tim mot phan tu nho hon 100;
// tim 28 phan tu nho nhat
      for(let i=0; i<minCount;i++){
        for(let j=0; j<100;j++){
            if((count_number2[i] === count_number1[j])){
                if(i==0){
                    index_min[i]=j;  
                    break;
                }
                if(i>0){
                     count1=0;
                     for(let k=0;k<i;k++){
                        if(j === index_min[k]){
                            count1+=1;
                        }
                    }
                    if(count1===0){
                        index_min[i]=j;
                            j=99;
                            count1=0;
                    }
                }
                
            }
        }
        // inputs[index_min[i]].style.background = 'red';
    }
// tim 28 phan tu lon nhat
for(let i=0; i<maxCount;i++){
    for(let j=0; j<100;j++){
        if((count_number3[i] === count_number1[j])){
            if(i==0){
                index_max[i]=j;  
                break;
            }
            if(i>0){
                 count1=0;
                 for(let k=0;k<i;k++){
                    if(j === index_max[k]){
                        count1+=1;
                    }
                }
                if(count1===0){
                    index_max[i]=j;
                        j=99;
                        count1=0;
                }
            }
            
        }
    }  
    // inputs[index_min[i]].style.background = 'red';
}

       for(let i=0;i<100;i++){
        inputs[i].style.background = 'white';
       }
         for(let i=0; i<maxCount;i++){
            // inputs[index_min[i]].style.background = 'red';
            inputs[index_max[i]].style.background = 'green';
        }
        for(let i=0; i<minCount;i++){
            inputs[index_min[i]].style.background = 'red';
            // inputs[index_max[i]].style.background = 'green';
        }
        console.log(count_number2); 
        console.log(index_min); 
        console.log(count_number3); 
      }
   
    //  c1.value=number_random;
  