

async function main(){
    var lines = (await readCalibrationInput()).split('\n');
    for(var row = 0;row < lines.length;row++){
        for(var column = 0;column < lines[row].length;column++){
            var numAndIndexs = await numberAndIndex(row,column);
            // console.log(await numAndIndexs[1]);
            if(!isNaN(numAndIndexs[0])){
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
        if(isNaN(lines[row][l])){
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
    out = false;
    first = false;
    last = false;
    top = false;
    bottom = false;
    if(indexs[0] == 0){
        first = true;
    }
    if(indexs[indexs.length - 1] == lines[row].length-1){
        last = true;
    }
    if(row == 0){
        top = true;
    }
    if(row == lines.length){
        bottom = true;
    }
    console.log(indexs);
    if(!top){
        console.log("This thing is true")
        if(lines[row -1][indexs[0] -1] != "." || lines[row][indexs[0] -1] != "." || lines[row +1][indexs[0] -1] != "."){
            console.log("hello");
        }
    }
  }

async function readCalibrationInput(){
    const response = await fetch("./test_input.txt");
    return await response.text();
  }

main()