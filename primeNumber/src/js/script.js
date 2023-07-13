let a = +prompt("Enter the numberI");

if(a>0){
for(let i=2;i<a;i++){
    if(a%i==0){
        console.log(`${a} is not a prime number.`);
        break
    }
    else{
        console.log(`${a} is a prime number.`);
        break;
    }
}
}
else{
    console.log(`${a} is neither a prime nor a complex number.`);
}

