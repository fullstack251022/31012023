const animalEating = (animal, food) => {
    console.log(`I am animal: ${animal}, and i am eating ${food}`)
}

const animalSleeping = (animal) =>{
    console.log('I animal: ' + animal + ' and i am sleeping zzzzz')
}



// const name = 'Beni';
// const myObj = {
//     name: 'Beni'
// }

// console.log(myObj)


module.exports = {
    animalEating,
    animalSleeping
}