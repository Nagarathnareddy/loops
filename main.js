let a=[1,2,3,4,5,9,20,31,42,43,56,57,60,64,78,98,100]
d=0;

//script to print while loop
function usingWhile(){
    console.log("by using while loop");
    while(d<a.length){
        console.log(`table ${a[d]}`);
        e=0;
        while(e<=9){
            e++;
            if(e==3 || e==5 || e==7 || e==9){
            }
            console.log(`${a[d]}*${e}=${a[d]*e}`);
        }
        d++;
    }
}

//script to print do while loop
function usingDoWhile(){
    d = 0;
    console.log("by using dowhile loop");
    do{
        console.log(`table of ${a[d]}`);
        e=0;
        while(e<=9){
            e++;
            if(e==3 || e==5 || e==7 || e==9){
                continue;
            }
            console.log(`${a[d]}*${e}=${a[d]*e}`);
        }
        d++;
    }while(d<a.length)
}

    //script to print for loop
    for (i =1; i <= 60; i++) {

        for(j=1;j<=10;j++){
        
            if(i==3 ||i==7 || i==9 || i==13 || i==17 || i==21 || i==27 || i==29|| i==31 || i==35 || i==38 || i==41|| i==43 || i==47 || i==51 || i==55|| i==58)
        
            {
        continue;
            }
        
            if(j==3 || j==5 || j==7 || j==9)
            {
                continue;
            }
        
            console.log(`${i} * ${j} = ${i*j}`)
        
        }
        }