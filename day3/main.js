async function main(){
    var out = 0;
    var lines = (await readCalibrationInput()).split('\n');
    var specialIndexs = [];
    var specialNumbers = [];
    for(var row = 0;row < lines.length;row++){
        for(var column = 0;column < lines[row].length;column++){
            var numAndIndexs = await numberAndIndex(row,column);
            if(!isNaN(numAndIndexs[0]) && numAndIndexs[0] != 0){
                let nearSpecial = await indexsNearSpecialCharacter(numAndIndexs[1], row);
                if(nearSpecial[0] && !nearSpecial[1]){
                    out = out + Number(numAndIndexs[0]);
                }
                if(nearSpecial[0] && nearSpecial[1]){
                    specialNumbers.push(numAndIndexs[0]);
                    specialIndexs.push(nearSpecial[2]);
                }
            }
        }
    }
    var finalNumbers = [];
    for(var i = 0;i < specialNumbers.length;i++){
        var numberBeingChecked = specialNumbers[i];
        var indexBeingChecked = specialIndexs[i];
        var isFinal = true;
        specialIndexs.splice(i, 1);
        specialNumbers.splice(i, 1);
        // console.log(numberBeingChecked);
        for(var j = 0;j < specialNumbers.length;j++){
            if(indexBeingChecked[0] == specialIndexs[j][0] && indexBeingChecked[1] == specialIndexs[j][1]){
                console.log(numberBeingChecked);
                console.log(specialNumbers[j]);
                out = out + (Number(numberBeingChecked)*Number(specialNumbers[j]));
                specialIndexs.splice(j, 1);
                specialNumbers.splice(j, 1);
                isFinal = false
            }
        }
        if(isFinal){
            finalNumbers.push(numberBeingChecked);
        }
    }
    console.log(finalNumbers);
    for(var i = 0;i < finalNumbers.length;i++){
        out = out + Number(finalNumbers[i]);
    }
    console.log(out);
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
        if(isNaN(lines[row][l]) || l == lines[row].length -1){
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
    let notSpecial = [".","0","1","2","3","4","5","6","7","8","9"];
    let rowLength = lines[0].length -1;
    let columnLength = lines.length;
    let indexsToCheck = [[row,indexs[0]-1],[row,indexs[indexs.length-1]+1],[row-1,indexs[0]-1],[row-1,indexs[indexs.length-1]+1],[row+1,indexs[0]-1],[row+1,indexs[indexs.length-1]+1]];
    for(var i = 0;i < indexs.length;i++){
        indexsToCheck.push([row-1,indexs[i]],[row+1,indexs[i]]);
    }
    for(var i = 0;i < indexsToCheck.length;i++){
        if(indexsToCheck[i].includes(-1) || indexsToCheck[i][0] == columnLength || indexsToCheck[i][1] == rowLength){
            continue;
        }
        else{
            if(!notSpecial.includes(lines[indexsToCheck[i][0]][indexsToCheck[i][1]])){
                if(lines[indexsToCheck[i][0]][indexsToCheck[i][1]] == "*"){
                    star = true;
                    starIndex = [indexsToCheck[i][0],indexsToCheck[i][1]];
                }
                else{
                    star = false;
                    starIndex = [];
                }
                return [true, star, starIndex];
            }
        }
    }
    return [false, false, []];

  }

async function readCalibrationInput(){
    const response = await fetch("./test_input.txt");
    return await response.text();
  }

main()
