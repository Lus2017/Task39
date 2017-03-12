function checkNumbers(number){
    const num=number;
    const a=(num-num%1000)/1000;
    const b=((num -a*1000)-num%100)/100;
    debugger;
    const c=(num-a*1000-b*100-num%10)/10;
    const d=num%10;
    if (a==1 || b==1 || c==1 || d==1) {
        alert('1');
    }
    else{
        alert('0');
    }
}
checkNumbers(2156);