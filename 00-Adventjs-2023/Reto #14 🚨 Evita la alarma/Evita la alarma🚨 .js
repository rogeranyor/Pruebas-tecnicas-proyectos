function maxGifts(houses) {
    if (houses.length === 0) return 0
    else if (houses.length === 1) return houses[0]
    else {
        let sumNoAdd = houses[0]
        let sumAdd = Math.max(houses[0], houses[1])

        for (let i = 2; i < houses.length; i++) {
            const sumTmp = Math.max(sumNoAdd + houses[i], sumAdd)
            sumNoAdd = sumAdd
            sumAdd = sumTmp
        }
        return sumAdd
    }
}
console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)