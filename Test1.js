//Plus +
function plus(num1,num2) 
{
    return num1+num2;
}

//Minus -
function minus(num1,num2) 
{
    return num1-num2;
}

//Multiplied *
function multiplied(num1,num2) 
{
    return num1*num2;
}

//Divide /
function divide(num1,num2) 
{ 
    if(num2 == 0){
        return "Can't divide by 0!";
    }else{
        return num1/num2;
    }
}


console.log(plus(2,2));
console.log(minus(2,2));
console.log(multiplied(2,2));
console.log(divide(4,2));
console.log(divide(4,0));

