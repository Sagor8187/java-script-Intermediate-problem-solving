
let letter = ["a","b","a","c","b","a"]
// out put → {a:3, b:2, c:1}

let a = 0
let b = 0
let c = 0

for (let i of letter){
    if(i == "a"){
        a=a+1
    }else if(i =="b"){
        b=b+1
    }else{
        c=c+1
    }
}
console.log({a,b,c})