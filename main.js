function displayFirTip(levels, level_height) {
    let offset = ""
    for (let i = 0; i < levels + level_height; i++){
        offset += " "
    }
    console.log(offset + "+")
    
    for (let i = 0; i < levels; i++){
       printLevel(level_height, i, levels)
    }
    displayTrunk(levels / 2 + level_height, Math.floor((level_height + levels - 2) / 2))
}

function printLevel(height, tip_offset, spacing) {
    for (let i = tip_offset; i < height + tip_offset; i++) {
        const row  = printLeftTriangle(height + spacing, i) + "|" + printRightTriangle(i)
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

function displayTrunk(spacing, width) {
    if (width % 2 === 0) {
        width += 1
    }

    for (let i = 0; i < 3; i++){
        let offset = ""
        for (let j = 0; j < spacing; j++){
            offset += " "
        }
        
        let trunk = ""
        for (let j = 0; j < width; j++){
            trunk += "#"
        }
        console.log(offset + trunk)
    }
}

displayFirTip(5, 5)

