function checkNumbers(number){
//
    const num=number;
    const a=(num-num%100)/100;
    const b=((num-a*100)-num%10)/10;
    const c=num%10;
    if (num>300) {
        alert(b/c);
    }
    else{
        alert(a/c);
    }
}
checkNumbers(508);