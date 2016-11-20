const fs = require('fs');

var fetchProblems = () => {
    try {
        var problemsString = fs.readFileSync('problems-data.json');
        return JSON.parse(problemsString);
    } catch (e) {
        return [];
    }
};

var saveProblems = (problems) => {
    fs.writeFileSync('problems-data.json', JSON.stringify(problems));
};

var addProblem = (tag, statement, answers, correctAnswer) => {
    var problems = fetchProblems();
    var problem = {
        tag,
        statement,
        answers,
        correctAnswer
    };
    var duplicateProblems = problems.filter((problem) => problem.tag === tag);

    if (duplicateProblems.length === 0) {
        problems.push(problem);
        saveProblems(problems);
        return problem;
    }
};

var getAll = () => {
    return fetchProblems();
};

var getProblem = (tag) => {
    var problems = fetchProblems();
    var filteredProblems = problems.filter((problem) => problem.tag === tag);
    return filteredProblems[0];
};

var removeProblem = (tag) => {
    var problems = fetchProblems();
    var filteredProblems = problems.filter((problem) => problem.tag !== tag);
    saveProblems(filteredProblems);

    return problems.length !== filteredProblems.length;
};

var logProblem = (problem) => {
    console.log('--');
    console.log(`Tag: ${problem.tag}`);
    console.log(`Statement: ${problem.statement}`);
    console.log(`AnswerOptions: ${problem.answers}`);
    console.log(`Correct Answer: ${problem.correctAnswer}`);
    console.log('--');
};

module.exports = {
    addProblem,
    getAll,
    getProblem,
    removeProblem,
    logProblem
};
