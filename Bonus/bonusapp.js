console.log('bonus')

let container = document.getElementById ('container')

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0){
        console.log("Fizz")
        container.innerHTML += 'Fizz'
    }
    else if (i % 5 === 0){ 
        console.log("Buzz")
        container.innerHTML += 'Buzz'
    }
    else if (i % 15 === 0){
        console.log("FizzBuzz")
        container.innerHTML += 'FizzBuzz'
    }
    else console.log(i)
    container.innerHTML += (i)

}