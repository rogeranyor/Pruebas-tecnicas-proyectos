function drawGift(size, symbol) {
    if (size === 1) return "#\n";
    let preSpaces;
    let content;
    let result = " ".repeat(size - 1) + "#".repeat(size) + "\n";
    let result2 = "";

    for (let i = 1; i < size - 1; i++) {

        preSpaces = " ".repeat(size - 1 - i) + "#";

        content = symbol.repeat(size - 2) + "#" +
            symbol.repeat(size - (size - i + 1)) +
            "#";

        result += preSpaces + content + "\n";

        content = "#" +
            symbol.repeat(size - 2) + "#" +
            symbol.repeat(size * 2 - (i + size) - 2) +
            "#";
        result2 += content + "\n";

    }
    result += "#".repeat(size) + symbol.repeat(size - 2) + "#\n";
    result += result2;
    result += "#".repeat(size) + "\n"
    return result;
}
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/