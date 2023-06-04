function greet() {
    console.log('Welcome to our site');
    
};
let data = [{}]
let createUser = new Promise((resolve, reject) => {
    if (data) {
        setTimeout(() => {resolve('user successful created');
            
        }, 5000);
        
    }
    else{
        setTimeout(() => {resolve('user already exist');
            
        }, 5000);
    }
}); 
 async function createUserAccount() {     
    let response= createUser;
    console.log({response});
}
createUserAccount();