let greet =()=>{
let name ='John '
let displayName= ()=>{
    return`Hi Iam ${name}`;
}
return displayName;
}
let talk= greet()
console.log({talk});

let nums=(num)=>{ 
    let add=(digit)=>{
        return digit+num
      
    }
    return add
}
let addition = nums(45);
console.log({addition});
console.log(addition(20));