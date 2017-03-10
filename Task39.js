function sortFour(a,b,c,d,sortOption){
    var low1,high1,low2,high2,lowest,highest,middle1,middle2;
    function hagnel(shor) {
        console.log('es haga '+shor)
    }
    hagnel('verarku')
    if (a < b){
        low1 = a;
        high1 = b;
    }
    else
    {
        low1 = b;
        high1 = a;
    }
    if( c < d){
        low2 = c;
        high2 = d;
    }
    else{
        low2 = d;
        high2 = c;
    }

    if (low1 < low2){
        lowest = low1;
        middle1 = low2;
    }
    else{
        lowest = low2;
        middle1 = low1;
    }

    if (high1 > high2){
        highest = high1;
        middle2 = high2;
    }
    else{
        highest = high2;
        middle2 = high1;
    }

    if (middle1 < middle2){
        if(sortOption=='>'){
            alert(lowest+' '+middle1+" "+middle2+" "+highest);

        }
        else{
            alert(highest +' '+middle2+" "+middle1+" "+lowest);
        }
    }
    else{

        if(sortOption=='<'&& (middle1 > middle2)){
            alert(highest+' '+middle1+" "+middle2+" "+lowest);
        }
        else{
            alert(highest+' '+middle2+" "+middle1+" "+lowest);
        }
    }
}
sortFour(3,7,9,5,'<');
sortFour(3,7,9,5,'>');
sortFour(3,17,21,50,'>');