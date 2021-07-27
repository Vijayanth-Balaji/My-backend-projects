const bio = {
    name:"vijayanth",
    school:"sri chaitanya techno school",
    years:13
}

console.log(bio);
console.log(bio.name);
console.log(bio.school);
console.log(bio.years);

const JSONdata = JSON.stringify(bio);
console.log(JSONdata);
const objData = JSON.parse(JSONdata);
console.log(objData);