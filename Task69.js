function checkNumbers(number){
    const num=number;
    const a=(num-num%1000)/1000;
    const b=((num -a*1000)-num%100)/100;
    const c=(num-a*1000-b*100-num%10)/10;
    const d=num%10;
    if ((a+b+c+d)>20) {
        alert(y='1');
    }
    else{
        alert(y='0');
    }
}
checkNumbers(5556);