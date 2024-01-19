function createChristmasTree(ornaments, height) {
    ornaments = ornaments.split("");
    let ch;
    let result = "";
    for (let i = 1; i < height + 1; i++) {
        result += " ".repeat(height - i);
        for (let j = 0; j < i; j++) {
            ch = ornaments.shift();
            ornaments.push(ch);
            result += ch +
                ((j + 1 < i) ? " " : "")

        }
        result += "\n"
    }
    result += " ".repeat(height - 1) + "|\n"
    return result;
}

console.log(createChristmasTree("123", 4))