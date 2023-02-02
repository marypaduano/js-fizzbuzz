console.log('bonus')
let fizz
let buzz
let fizzBuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0){
        console.log("Fizz")
        document.getElementById('container').innerHTML += 'Fizz'
    }
    else if (i % 5 === 0){ 
        console.log("Buzz")
        document.getElementById('container').innerHTML += 'Buzz'
    }
    else if (i % 15 === 0){
        console.log("FizzBuzz")
        document.getElementById('container').innerHTML += 'FizzBuzz'
    }
    else console.log(i)
    document.getElementById('container').innerHTML += (i)

}