

async function main(){
    var lines = (await readCalibrationInput()).split('\n');
    for(var row = 0;row < lines.length;row++){
        for(var column = 0;column < lines[row].length;column++){
            var numAndIndexs = await numberAndIndex(row,column);
            
            if(!isNaN(numAndIndexs[0]) && numAndIndexs[0] != 0){
                await indexsNearSpecialCharacter(numAndIndexs[1], row);
            }
        }
    }
}

// given a row and column index', returns the number if given first index of number, also returns an array of all index in the number.
async function numberAndIndex(row, column){
    var lines = (await readCalibrationInput()).split('\n');
    character = lines[row][column];
    let isFirst = false;
    if(column != 0){
        if(!isNaN(character) && isNaN(lines[row][column - 1])){
            isFirst = true;
    }
    }
    if(column == 0 && !isNaN(character)){
        isFirst = true;
    }
if(isFirst){
    var notLast = true;
    var theNumber = ""
    var indexs = [];
    var l = column;
    while(notLast){
        indexs.push(l);
        theNumber = theNumber + lines[row][l];
        l = l+1
        if(isNaN(lines[row][l]) || l == 10){
            notLast = false;
        }
    }
}
returner = [theNumber, indexs]
return returner;
}

// given an array of indexs and a row number, return boolean for is near a special character
async function indexsNearSpecialCharacter(indexs, row){
    var lines = (await readCalibrationInput()).split('\n');
    let notSpecial = [".","0","1","2","3","4","5","6","7","8","9"]
    let first, last, top, bottom;
    out = false;
    // console.log(lines[row].length);
    first = await indexs[0] === 0;
    last = await indexs[indexs.length - 1] === lines[row].length - 1;
    top = await row === 0;
    bottom = await row === lines.length - 1;
    if(!top && !first && !bottom){
        if(!notSpecial.includes(lines[row -1][indexs[0] -1]) || !notSpecial.includes(lines[row][indexs[0] -1])|| !notSpecial.includes(lines[row +1][indexs[0] -1])){
            console.log(indexs, row);
        }
    }
  }

async function readCalibrationInput(){
    const response = await fetch("./test_input.txt");
    return await response.text();
  }

main()