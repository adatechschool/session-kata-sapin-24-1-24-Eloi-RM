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
        const row  = printLeftTriangle(height + tip_offset + (height - tip_offset), i) + "|" + printRightTriangle(height, i)
        console.log(row)
    }
}

function printStarsRow(number) {
    let stars = ""
    for (let i = 0; i < number; i++){
        stars += "*"
    }
    return stars
}

function printRightTriangle(rowsNumber, rowIndex) {
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