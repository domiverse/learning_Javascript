// document.getElementById("myH1").textContent="xin chao";
// document.getElementById("myP").textContent="hello world";
// let age = 25;
// let name = "Trung Thai";
// let tuvung = "단가";
// console.log(`nam nay ${age} tuoi`);
// console.log(`tôi tên là ${name}`);
// console.log(`từ vựng tiếng Hàn hôm nay là ${tuvung}`)

// let fullName = "Ho Trung Thai";
// let age = 25;
// let GPA = 2.86;
//     document.getElementById("p1").textContent= fullName;
//     document.getElementById(`p2`).textContent = age;
//     document.getElementById(`p3`).textContent = GPA;

let username;

    document.getElementById("myButton").onclick= function(){
        username = document.getElementById("myInput").value;
        document.getElementById("myLabel").textContent = `Hello ${username}`
    }
