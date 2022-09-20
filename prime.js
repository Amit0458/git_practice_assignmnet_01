function isPrime(num) {
if(num <= 1 || num == undefined) {
    return false;
}

for(let i=2; i<=Math.sqrt(num); i++) {
    if( num % i == 0) {
        return true;
    }
}
return false;

}

let num = 19;
let ans = isPrime(num);

if(ans) {
    console.log("Prime");
}
else {
    console.log("Not Prime");
}
