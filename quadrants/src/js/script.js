let x = +prompt("Enter the x:");
let y = +prompt("Enter the y:");


if(x>0 && y>0){
    console.log("The points you selected are located in region 1")
}
else if(x<0 && y>0){
    console.log("The points you selected are located in region 2")
}
else if(x<0 && y<0){
    console.log("The points you selected are located in region 3")
}
else if(x>0 && y<0){
    console.log("The points you selected are located in region 4")
}
else{
    console.log("The points you select are located either on the axes or at the coordinate origin.");
}

// let a = +prompt("Enter the a:");
// let b = +prompt("Enter the b:");
// let region;

// switch(true){
//     case(a>0 && b>0):
//     region= "The points you selected are located in region 1";
//     break;
//     case(a<0 && b>0):
//     region= "The points you selected are located in region 2";
//     break;
//     case(a<0 && b<0):
//     region= "The points you selected are located in region 3";
//     break;
//     case(a>0 && b<0):
//     region= "The points you selected are located in region 4"
//     break;
//     default:
//     region= "The points you select are located either on the axes or at the coordinate origin.";
//     break;
// }

// console.log(region);