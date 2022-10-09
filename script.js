function BMI(){
    let w=document.getElementById('weight-input').value;
    let h=document.getElementById('height-input').value;
    let bmi=w/(h/100*h/100);
    let hasil=(bmi.toFixed(1));
    
    if(hasil < 18.5){
        document.getElementById("result").innerHTML="Your BMI is " + hasil + " which means You are UnderWeight"
    }else if((hasil > 18.5) && (hasil < 24.9)){
        document.getElementById("result").innerHTML="Your BMI is " + hasil + " which means You are Normal"
    }else if((hasil > 25) && (hasil < 29.9)){
        document.getElementById("result").innerHTML="Your BMI is " + hasil + " which means Your are OverWeight"
    }else{
        document.getElementById("result").innerHTML="Your BMI is " + hasil + " which means Your are Obesity"
    }
}