function cyberReindeer(road, time) {
    let roadCopy = [...road.split("")]
    let result = []
    result.push(roadCopy.join(""))
    let next = 1;
    let lastChar = '.'

    for (let i = 0; i < time - 1; i++) {
        if (i === 4) {
            roadCopy = roadCopy.join('').replaceAll('|', '*').split("")
            roadCopy[0] === '*' ? next-- : null
        }
        if (roadCopy[0] === '|') {
            result.push(roadCopy.join(""))
            continue
        }
        else if (roadCopy[next] !== '|') {
            roadCopy[next - 1] = lastChar
            lastChar = roadCopy[next]
            roadCopy[next] = 'S'
            result.push(roadCopy.join(""))
        }
        else {
            result.push(roadCopy.join(""))
            next--
        }
        next++
    }

    return result;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/