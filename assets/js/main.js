
// Arrow function istifade etmekle


// const arr=[4,25,80,32,6,71,45,12];

// arr.map=((item)=>{
//     return item>18;

// })
// const result=arr.filter(arr.map);
// console.log(result);


// ====================


//  1-ci variant Salary sum

const data=[
    {
        name:"Ceyhun", age:18, salary:1500,
    },
    {
        name:"Farid", age:35, salary:2500,
    },
    {
        name:"Elmar", age:23, salary:5000,
        
    },
    {
        name:"Elmar", age:23, salary:1500,
    }
]


// const result=data.reduce(sumnum,0);

// function sumnum(total,value){
    
    
//     return total+value.salary;
    
// };

// console.log(result);






// ===============================



//  2-ci variant Salary sum

const result=data.reduce((total,value)=>total+value.salary,0,

);
console.log(result);










// if=============else

// let usarname=prompt("Adinizi daxil edin");
// let password=prompt("Adinizi daxil edin");
// console.log(usarname.trim(" "));
// console.log(password.trim(" "));
// if(usarname===password){
//     alert("Login")
// }
// else(
//     alert("Log out")
// )




// Switc case


// const day = 2;

// switch (day) {
//   case 1:
//     console.log("Yanvar qis ayidir");
//     break;
//   case 2:
//     console.log("Fevral qis ayidir");
//     break;
//   case 3:
//     console.log("Mart yaz ayidir");
//     break;
//   case 4:
//     console.log("Aprel yaz ayidir");
//     break;
//   case 5:
//     console.log("May yaz ayidir");
//     break;
//   case 6:
//     console.log("Iyun yay ayidir");
//     break;
//   case 7:
//     console.log("Iyul yay ayidir");
//     break;
//   case 7:
//     console.log("Avqust yay ayidir");
//     break;
//   case 7:
//     console.log("Sentyabr payiz ayidir");
//     break;
//   case 7:
//     console.log("Oktyabr payiz");
//     break;
//   case 7:
//     console.log("Noyabr payiz");
//     break;
//   case 7:
//     console.log("Dekabr qis ayidir");
//     break;
//   default:
//     alert("Cemi 12 ayimiz var");
// }
