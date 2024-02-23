// for all loop (for in , for , for of , for each)


//for in loop


var details ={
    "name":"Saranya S",
    "age":"20",
    "degree":"Bsc Mathematics",
    "address":"Sivakasi,TamilNadu",
};

for (var i in details){
    console.log(i,details[i]);
}



// for loop 


var details1 ={
    "name":"Saranya S",
    "age":"20",
    "degree":"Bsc Mathematics",
    "address":"Sivakasi,TamilNadu",
};

for(var i=0; i<details1.length;i++){
    console.log(details1[i]);
}



// for of loop


const bts = ['rm','jin','jhope']
for(var bts1 of bts){
    console,log(bts1);
}


// for each loop


var bts2 = ['jimin','v','kookie']
bts2.forEach(string=>{console.log(string)});