console.log('bonus')

let result

let boxElement = document.getElementById ('container')

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0 && i % 3 === 0){
        result ='FizzBuzz'
    }
    else if (i % 3 === 0){
        result ='Fizz'
    }
    else if (i % 5 === 0){ 
        result ='Buzz'
    }
    else { 
        result = i
    }

    console.log(result)
    boxElement.innerHTML += '<div>' + result + '</div>'

}