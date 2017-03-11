function checkNumbers(number){
    const num=number;
    const a=(num-num%100)/100;
    const b=((num-a*100)-num%10)/10;
    const c=num%10;
    var max , middle, min;

    if(a>b&&a>c){
        max=a;
        if(b>c){
            middle=b;
            min=c;
        }else{
            middle=c;
            min=b;
        }
    }

    else if(b>a&&b>c){
        max=b;

        if(a>c){
            middle=a;
            min=c;
        }else{
            middle=c;
            min=a;
        }
    }

    else{
        max=c;
        if(b>a){
            middle=b;
            min=a;
        }else{
            middle=a;
            min=b;
        }
    }
    alert(max+' '+middle+' '+min);
    alert(min+' '+middle+' '+max);
}
checkNumbers(568);