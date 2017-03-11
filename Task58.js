function checkNumbers(number){

    const num=number;
    var f='a';
    const a=(num-num%100)/100;
    const b=((num-a*100)-num%10)/10;
    const c=num%10;
    if (a+b<5) {
        alert('f='+a);
    }
    else{
        t=false;
        alert('f='+b);
    }

}
checkNumbers(121);