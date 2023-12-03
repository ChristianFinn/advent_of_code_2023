

async function main(){
    var lines = (await readCalibrationInput()).split('\n');
    for(var row = 0;row < lines.length;row++){
 
        for(var column = 0;column < lines[row].length;column++){
            numberAndIndex(row,column);
        }
    numberAndIndex(0,0);
    }
}

// given a row and column index', returns the number if given first index of number, also returns an array of all index in the number.
async function numberAndIndex(row, column){
    var lines = (await readCalibrationInput()).split('\n');
    character = lines[row][column];
    if(!isNaN(character)){
        if(column != 0 && isNaN(lines[row][column - 1]))
        console.log(character)
    }
}

async function readCalibrationInput(){
    const response = await fetch("./test_input.txt");
    return await response.text();
  }

main()