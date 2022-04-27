// function toggler(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c
// }

// var a = 1;
// var b = 2;
// var c = 3;
// const toggle = new toggler(a,b,c);

// var x = toggle.a
// console.log(x)
// var y = toggle.b;
// console.log(y);
// var z = toggle.c;
// console.log(z);

function myfunc() {
    var ele = document.getElementById("my-div");
    ele.classList.toggle("mytoggleclass");
    for (let i = 1; i <= 3; i++){
        let div1 = document.getElementById("maindiv");
        var x = document.createElement("div");
        div1.appendChild(x);
        x.append("count" + i)
        if (i === 3) {
            x.append("change again")
        }
    }
}