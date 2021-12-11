const Data = require('./names.json');
function singleRandomName(){
    const namesArray = Data.names;
    const length = namesArray.length;
    const randomIndex = Math.floor(Math.random()*length);
    return namesArray[randomIndex];
}

function listOfRandomNames(length = 0){
    const list = [];
    for(let i=0;i<length;i++){
        list.push(singleRandomName());
    }
    return list;
}

exports.singleRandomName = singleRandomName;
exports.listOfRandomNames = listOfRandomNames;
