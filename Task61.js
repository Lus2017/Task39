function checkNumbers(number){
    const num=number;
    var t=true;
    const a=(num-num%1000)/1000;
    const b=((num -a*1000)-num%100)/100;
    debugger;
    const c=(num-a*1000-b*100-num%10)/10;
    const d=num%10;

    if (c+d==b+a){
        alert('t='+t);
    }
    else{
        t=false;
        alert('t='+t);
    }

}
checkNumbers(1812);