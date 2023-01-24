var y= new Array();
y[0]='Pratham'
y[1]='John'
y[2]='jash'
y[3]='Harsh'
y[4]='Hapaliya'
y[5]='Raj'
y[6]='Jaiswal'
for (var i=0;i<y.length;i++){
    if(y[i].charAt(0)==='J' || y[i].charAt(0)==='j' ){
        console.log('GoodBye ' + y[i]);
    }
    else {
        console.log('Hello '+y[i]);
    }
}