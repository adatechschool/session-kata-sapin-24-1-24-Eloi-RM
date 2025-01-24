function displayFirTip(levels, level_height) {
    let offset = ""
    for (let i = 0; i < levels + level_height; i++){
        offset += " "
    }
    console.log(offset + "+")
    
    for (let i = 0; i <= levels; i++){
        displayLevel(level_height, i)
    }
}

function displayLevel(height, tip_offset) {
    for (let i = tip_offset; i < height + tip_offset; i++) {
        const row  = printLeftTriangle(height * 2, i) + "|" + printRightTriangle(i)
        console.log(row)
    }
}

function printStarsRow(number) {
    let stars = ""
    let lastCharWasStar = true
    
    for (let i = 0; i < number; i++){
        const random = Math.floor(Math.random() * 20)
        
        if (random === 19 && lastCharWasStar) {
            stars += "o"
            lastCharWasStar = false
        } else if (random === 0 && lastCharWasStar) {
            stars += "+"
            lastCharWasStar = false
        } else {
            stars += "*"
            lastCharWasStar = true
        }
    }
    return stars
}

function printRightTriangle(rowIndex) {
    const row  = printStarsRow(rowIndex) + "\\"
    return row
}

function printLeftTriangle(rowsNumber, rowIndex) {
    let offset = ""
    for (let i = 0; i < rowsNumber - rowIndex - 1; i++){
            offset += " "
    }
    const row = offset + "/" + printStarsRow(rowIndex)
    return row
}

displayFirTip(3, 3)