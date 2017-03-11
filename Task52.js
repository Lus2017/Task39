function checkNumbers(number){
    const num=number;
    var t=true;
    const a=(num-num%100)/100;
    const b=((num-a*100)-num%10)/10;
    const c=num%10;
    if (a==b || a==c || b==c) {
        alert('t='+t);
    }
    else{
        t=false;
        alert('t='+t);
    }

}
checkNumbers(121);