let array = ['a','b','c','a','d','c','e'];

const result ={};

for(let i=0;i<array.length;i++){
 var element = array[i];
 if(!result.hasOwnProperty(array[i])){
    result[element]=1;
 }
else{
    result[element]++;
}
}

console.log(result);