function checkNumbers(number){
//
    const num=number;
    const a=(num-num%100)/100;
    const b=((num-a*100)-num%10)/10;
    const c=num%10;
    if (a>b && a>c) {
        alert(a);
    }
    else if(b>a && b>c){
        alert(b);
    }
    else{
        alert(c);
    }
}
checkNumbers(580);