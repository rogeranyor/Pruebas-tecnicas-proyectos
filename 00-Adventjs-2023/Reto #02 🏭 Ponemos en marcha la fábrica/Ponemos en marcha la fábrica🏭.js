function manufacture(gifts, materials) {
    // Code here
    let split;
    let materials_split = materials;
    let results = [...gifts];


    for (let j = 0; j < gifts.length; j++) {
        split = gifts[j].split("");
        for (let i = 0; i < split.length; i++) {
            if (!materials_split.includes(split[i])) {
                results[j] = false
                break;
            }
        }
    }
    return results.filter((r) => r !== false);
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const giftIds2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3) // []