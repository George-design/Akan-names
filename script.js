let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
let femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let dayNames =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
function getDayNumber(CC,YY,DD,MM){
    return Math.abs(parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7));

}

 $(Document).ready(function(){

    $('#inputForm').submit(function(event){
        let YY = $('input#yob').val();
        let MM = $('input#mob').val();
        let DD = $('input#dob').val();
        let MM = document.getElementById("month").value===;
        let DD = document.getElementById("date").value===;
        let CC = yearOfBirth.toString().slice(0,2)
        let YY = yearOfBirth.toString().slice(2,4)
        let gender=document.getElementById("gender")
        let gender =genders.options[genders.selectedIndex].text;
        let akhanName;any

        console.log(gender)

        day = getDayNumber(CC,YY,DD,MM)

        //function getName(){
            {if(document.getElementById("date").value===)
                alert("you must enter a value");
    
            }elseIf{(document.getElementById("month").value===)
                    alert("you must enter a value");

            }elseIf{(document.getElementById("yearOfBirth").value===)
                       alert("you must enter a value");

            }elseIf{(document.getElementById("gender").options[document.getElementById("gender").selectedIndex].text===""){
                      alert("you must enter a value");

            }else{
                return;false
            }
            Console.log(akhanName)
        }

     

         
    })
 })