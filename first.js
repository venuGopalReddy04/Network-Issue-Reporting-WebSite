let lst=[];
function submitForm(){
    let issue=document.getElementById("user").value;
    let pin=document.getElementById("pincode").value;
    console.log('userissue',user);
    console.log('pincode',pin);
    localStorage.setItem('userissue',user)
    localStorage.setItem('pincode',pin);
    lst.push(pin);
}
let count=0;
for(let i of lst){
    if(pin===i){
        count++;
    }
    else{
       lst.push(pin); 
    }
}
console.log(lst);
console.log(count);