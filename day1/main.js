async function main(){
    var lines = (await readCalibrationInput()).split('\n');
    var total = 0
for(var i = 0;i < lines.length;i++){
    var numbers_in_line = [];
    var items = lines[i];
    
    for(var j = 0;j < lines[i].length;j++){     
        if (items.slice(j, j+3) == "one"){
            numbers_in_line.push("1")
        }
        if (items.slice(j, j+3) == "two"){
            numbers_in_line.push("2")
        }
        if (items.slice(j, j+5) == "three"){
            numbers_in_line.push("3")
        }
        if (items.slice(j, j+4) == "four"){
            numbers_in_line.push("4")
        }
        if (items.slice(j, j+4) == "five"){
            numbers_in_line.push("5")
        }
        if (items.slice(j, j+3) == "six"){
            numbers_in_line.push("6")
        }
        if (items.slice(j, j+5) == "seven"){
            numbers_in_line.push("7")
        }
        if (items.slice(j, j+5) == "eight"){
            numbers_in_line.push("8")
        }
        if (items.slice(j, j+4) == "nine"){
            numbers_in_line.push("9")
        }
        if (!isNaN(items[j]) && items[j] != "\r") {
            numbers_in_line.push(items[j]);
          }
    }
    var double_number = numbers_in_line[0] + numbers_in_line[numbers_in_line.length-1]
    total += Number(double_number)
}
console.log(total)
}

async function readCalibrationInput() {
    const response = await fetch("./calibration_input.txt");
    return await response.text();
  }

main()