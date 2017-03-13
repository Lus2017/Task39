function checkNumbers(number){
    const num=number;
    const a=(num-num%1000)/1000;
    const b=((num -a*1000)-num%100)/100;
    const c=(num-a*1000-b*100-num%10)/10;
    const d=num%10;
    if (num==(a+b+c+d)*(a+b+c+d)) {
        alert('YES');
    }
    else{
        alert('NO');
    }
}
checkNumbers(2508);