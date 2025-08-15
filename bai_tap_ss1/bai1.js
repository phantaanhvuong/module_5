// Sử dụng ES6 ( arrow function, fitter)
//
// 1. Viết hàm kiểm tra 1 số có phải là số nguyên tố
// 2. Cho 1 mảng số nguyên. Sử dụng filter để lọc ra các số là số nguyên tố
let isPrime = num =>{
    if (num<2) return false;
    for (let i = 2;i<num; i++){
        if (num % i === 0) return false;
    }
    return true;
}
let numbers = [1,2,3,4,5,6,7,8,9]
let primes = numbers.filter(isPrime)
console.log(`Mảng trên có các số nguyên tố là ${primes}`);