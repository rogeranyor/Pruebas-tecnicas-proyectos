function findNaughtyStep(original, modified) {
    let or_split = original.split("")
    let md_split = modified.split("")

    let length;

    if (or_split.length > md_split.length) length = or_split.length
    else length = md_split.length

    for (let i = 0; i < length; i++) {
        if (or_split[i] !== md_split[i]) {
            if (or_split.length > md_split.length) return or_split[i]
            else return md_split[i]
        }
    }

    return ''
}

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
findNaughtyStep(original2, modified2) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
findNaughtyStep(original3, modified3) // ''