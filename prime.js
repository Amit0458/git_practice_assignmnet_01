function isPrime(number) {
if(number <= 1 || number == undefined) {
    return false;
}

for(let i=2; i<=Math.sqrt(number); i++) {
    if( number % i == 0) {
        return true;
    }
}
return false;

}

let num = 19;
let ans = isPrime(number);

if(ans) {
    console.log("Is Prime");
}
else {
    console.log("Not Prime");
}
