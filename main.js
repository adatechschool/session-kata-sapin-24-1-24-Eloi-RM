function displayFirTip(level_height) {
    let offset = ""
    for (let i = 0; i < level_height; i++){
        offset += " "
    }
    console.log(offset + "+")


}

function printStarsRow(number) {
    let stars = ""
    for (let i = 0; i < number; i++){
        stars += "*"
    }
    return stars
}

function printRightTriangle(rowsNumber) {
    for (let i = 0; i < rowsNumber; i++){
        const row  = printStarsRow(i) + "\\"
        return row
    }
}

function printLeftTriangle(rowsNumber) {
    for (let i = 0; i < rowsNumber; i++){
        let offset = ""
        for (let j = 0; j < rowsNumber - i; j++){
            offset += " "
        }
        const row = offset + "/" + printStarsRow(i)
        return row
    }
}

displayFirTip(1)