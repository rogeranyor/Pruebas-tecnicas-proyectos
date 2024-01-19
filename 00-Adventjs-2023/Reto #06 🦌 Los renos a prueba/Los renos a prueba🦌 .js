function maxDistance(movements) {

    let dis = 0
    let bonus = 0

    movements.split("").forEach((element) => {
        if (element === '>') dis++
        else if (element === '<') dis--
        else bonus++
    })

    return Math.abs(dis) + bonus
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5