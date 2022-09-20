function isPrime(number) {
if(number <= 1 || number == undefined) {
    return false;
}


for(let i=2; i<=Math.sqrt(num); i++) {
    if( num % i == 0) {
        return false;


    }
}
return true;

}

let num = 19;
let ans = isPrime(number);

if(ans) {
    console.log("Is Prime");
}
else {
    console.log("Not Prime");
}
