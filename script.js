let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
let femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let dayNames =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
function getDayNumber(CC,YY,DD,MM){
    return Math.abs(parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7));

}


$(Document).ready(function()
     {
         $('#inputForm').submit(function(event){
        let yearOfBirth = $('input#yob').val();
        let MM = $('input#mob').val();
        let DD = $('input#dob').val();
        let CC = yearOfBirth.toString().slice(0,2)
        let YY = yearOfBirth.toString().slice(2,4)
        let gender= $("input[name='gender']:checked").val();
       

        

        day = getDayNumber(CC,YY,DD,MM)

        function results(gender){
            if(gender ==='male'){
                akhanName = maleNames[day]
            }
            else{
                akhanName = femaleNames[day]
            }

            return akhanName
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
                console.log(results(gender))
            }
          
        }

        getName()

         event.preventDefault()
    })
 })