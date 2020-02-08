// setTimeout( () => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'jen', 'jess']
// const shotNames = names.filter( (name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout( () => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 200)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, result) => {
    setTimeout(()=>{
        const suma = a + b
        result(suma)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})