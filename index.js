// 1.
// document.getElementById("myH1").textContent="xin chao";
// document.getElementById("myP").textContent="hello world";
// let age = 25;
// let name = "Trung Thai";
// let tuvung = "단가";
// console.log(`nam nay ${age} tuoi`);
// console.log(`tôi tên là ${name}`);
// console.log(`từ vựng tiếng Hàn hôm nay là ${tuvung}`)

// 2.
// let fullName = "Ho Trung Thai";
// let age = 25;
// let GPA = 2.86;
//     document.getElementById("p1").textContent= fullName;
//     document.getElementById(`p2`).textContent = age;
//     document.getElementById(`p3`).textContent = GPA;

// 3.
// let username;
//     document.getElementById("myButton").onclick= function(){
//         username = document.getElementById("myInput").value;
//         document.getElementById("myLabel").textContent = `Hello ${username}`
//     }

// 4.
// let a = 25;
// let b = "Thai";
// let c = "Thai";

// a = Number(a);
// b = String(b);
// c = Boolean(c);

// console.log(`${a}, ${typeof a}`);
// console.log(`${b}, ${typeof b}`);
// console.log(`${c}, ${typeof c}`);


const pi = 3.14159
let banKinh;
let chuVi;

document.getElementById("myButton").onclick = function(){
    banKinh = document.getElementById("myInput").value;
    banKinh = Number(banKinh);
    chuVi = 2 * pi * banKinh;
    document.getElementById("myH3").textContent=`Chu vi hình tròn là: ${chuVi}`;
}