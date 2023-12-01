console.log("Start")
// 14gxqgqsqqbxfpxnbccjc33eight
// eight2sevenkl
// mrjstg5onetwoeightgcczx8vgrgl
// 9246
// ninetwo2crrqk2grsctqxqbcrmrdsqbrz9eight

async function main(){
    var lines = (await readCalibrationInput()).split('\n');
    var total = 0
for(var i = 0;i < lines.length;i++){
    var numbers_in_line = [];
    var items = lines[i];
    
    for(var j = 0;j < lines[i].length;j++){     
        if (!isNaN(items[j]) && items[j] != "\r") {
            numbers_in_line.push(items[j]);
          }
    }
    console.log(numbers_in_line)
    var double_number = numbers_in_line[0] + numbers_in_line[numbers_in_line.length-1]
    console.log(double_number)
    total += Number(double_number)
}
console.log(total)
}

async function readCalibrationInput() {
    const response = await fetch("./calibration_input.txt");
    return await response.text();
  }


main()

console.log("Finish")