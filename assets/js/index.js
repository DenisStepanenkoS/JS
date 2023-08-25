let a = Number(prompt())

if(a === 10){
    console.log("Вірно")
}else{
    console.log("Не Вірно")
}

let test = true

if(test){
    console.log("Вірно")
}else{
    console.log("Не Вірно")
}


if(!test){
    console.log("Вірно")
}else{
    console.log("Не Вірно")
}


let price = prompt()

if(prompt < 500){
    console.log("0%")
}else if(prompt < 800){
    console.log("3%")
} else{
    console.log("5%")
}


let i = 25

while (i >= 0){
    console.log(i--)
}

i = 10
while(i<=50){
    console.log(i)
    i+=5
}

i = 1
let sum = 0
while(i<=100){
    sum += i++
}

console.log(sum)