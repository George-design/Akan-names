let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
let femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let dayNames =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
function getDayNumber(CC,YY,DD,MM){
    return Math.abs(parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7));

}


let YY= document.getElementById('YY').value;
let MM = document.getElementById('DD').value;
let DD = document.getElementById('MM').value;
let CC = yearOfBirth.toString().slice(0,2);
let YY = yearOfBirth.toString().slice(2,4);
let gender= $("input[name='gender']:checked").val();


function test() {
    console.log('hello')                  
}


function getName(){
    if(YY===""){
        alert("you must enter a value");

    }
    else if(MM< 0 || MM > 12) {
            alert("you must enter a value between 0 and 12");

    }
    else if(DD < 0 || DD > 31 ){ 
               alert("you must enter a value between 0 and 31");

    }
  else{
        console.log(hello)
    }
  
}