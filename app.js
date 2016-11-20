const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const problems = require('./problems.js');

const tagOptions = {
    describe: 'Tag of problem',
    demand: true,
    alias: 't'
};
const statementOptions = {
    describe: 'Statement of problem',
    demand: true,
    alias: 's'
};

const answerOptions = {
    describe: 'Answer options for the problem',
    demand: true,
    alias: 'a'
};

const correctAnswerOptions = {
    describe: 'Correct Answer for the problem',
    demand: true,
    alias: 'c'
};

const argv = yargs
    .command('add', 'Add a new problem', {
        tag: tagOptions,
        statement: statementOptions,
        answer: answerOptions,
        correctAnswer: correctAnswerOptions
    })
    .command('list', 'List all problems')
    .command('read', 'Read a problem', {
        tag: tagOptions,
    })
    .command('remove', 'Remove a problem', {
        tag: tagOptions
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var problem = problems.addProblem(argv.tag, argv.statement, argv.answer, argv.correctAnswer);
    if (problem) {
        console.log('Problem created');
        problems.logProblem(problem);
    } else {
        console.log('Problem tag taken');
    }
} else if (command === 'list') {
    var allProblems = problems.getAll();
    console.log(`Printing ${allProblems.length} problem(s).`);
    allProblems.forEach((problem) => problems.logProblem(problem));
} else if (command === 'read') {
    var problem = problems.getProblem(argv.tag);
    if (problem) {
        console.log('Problem found');
        problems.logProblem(problem);
    } else {
        console.log('Problem not found');
    }
} else if (command === 'remove') {
    var problemRemoved = problems.removeProblem(argv.tag);
    var message = problemRemoved ? 'Problem was removed' : 'Problem not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}
