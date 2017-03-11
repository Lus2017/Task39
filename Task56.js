function checkNumbers(number){
//
    const num=number;
    const a=(num-num%100)/100;
    const b=((num-a*100)-num%10)/10;
    const c=num%10;
    if (c>b) {
        alert((a+b+c)/num);
    }
    else{
        alert(num);
    }
}
checkNumbers(101);