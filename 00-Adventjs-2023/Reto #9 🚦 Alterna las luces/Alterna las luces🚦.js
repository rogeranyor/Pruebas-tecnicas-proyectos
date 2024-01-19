function adjustLights(lights) {
    let prevLight = lights[0]
    let counter = 0
    for (let i = 1; i < lights.length; i++) {
        if (prevLight === lights[i]) {
            counter = counter + 1
            prevLight = prevLight === "🟢" ? "🔴" : "🟢";
        } else {
            prevLight = lights[i];
        }
    }
    return Math.min(lights.length - counter, counter)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴))
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1 (cambia la primera luz a verde))
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)
console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢