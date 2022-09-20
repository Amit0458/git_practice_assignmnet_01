let reverse(str) {
    let rev = "";

    for(let i=str.length-1; i>= 0; i--) {
        rev += str[i];
    }
    if(rev == str) {
        return true;
    }
    else {
        return false;
    }
}

let str = boomboom;

let ans = reverse(str);

if( str == rev) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}

