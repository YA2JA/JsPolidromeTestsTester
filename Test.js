function Test(TestedFunc) {
    let TestText = "a".repeat(10**6);
    let start = Date.now();
    for (i = 0; i<50; i++){
        a = TestedFunc(TestText);
    }
    let deltaTime  = Date.now() - start;
    console.log(deltaTime + "ms")
    return a
}

let IsPolindrome = (value) =>  value.split("").reverse().join("") == value

function _isPolindrome(numberAsString) {
    let characters = numberAsString.split('');
    let IsPolindrome = true;
    for(let index = 0; index<characters.length; index++){
        const element = characters[index];
        if (element !== characters[characters.length - 1 - index]){
            IsPolindrome = false;
        }
    }
    return IsPolindrome
}

console.log(Test(_isPolindrome));
console.log(Test(IsPolindrome));

console.log("end")

