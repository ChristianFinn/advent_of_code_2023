async function main(){
    var lines = (await readCalibrationInput()).split('\n');
    var output = 0;
for(var i = 0;i < lines.length;i++){
    var gameNumber = Number(lines[i].split("Game ")[1].split(":")[0]);
    var sets = lines[i].split(":")[1].split(";");
    var rMax = 0;
    var gMax = 0;
    var bMax = 0;
    for(var j = 0;j < sets.length;j++){
        var set = sets[j].split(",");
        for(var k = 0;k < set.length;k++){
            var item = set[k].split(",")[0];
            if (item.slice(-3, ) == 'red'){
                var quatitiy = Number(item.slice(0,-4));
                if (quatitiy > rMax){
                    rMax = quatitiy;
                }
            }
            if (item.slice(-5, ) == 'green'){
                var quatitiy = Number(item.slice(0,-6));
                if (quatitiy > gMax){
                    gMax = quatitiy;
                }
            }
            if (item.slice(-4, ) == 'blue'){
                var quatitiy = Number(item.slice(0,-5));
                if (quatitiy > bMax){
                    bMax = quatitiy;
                }
            }
        }
    }
    var power = rMax*gMax*bMax;
    output = output + power;
}
console.log(output);
}

async function readCalibrationInput() {
    const response = await fetch("./input.txt");
    return await response.text();
  }

main()