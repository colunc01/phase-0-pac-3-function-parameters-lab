function introduction(name) {
    const string = `Hi, my name is ${name}.`;
    //console.log(`Hi, my name is ${name}`);
    return string;
}

function introductionWithLanguage (name, language) {
    //console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
    const string = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return string;
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    //console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
    const string = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return string;
}


/* Used this to test code
console.log(introduction("Cesar"));
console.log(introductionWithLanguage("Cesar","C++"));
console.log(introductionWithLanguageOptional("Cesar"));
*/