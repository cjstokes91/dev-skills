const devSkills = [
    { skill: 'JavaScript', learned: true },
    { skill: "HTML", learned: true },
    { skill: "CSS", learned: true },
    { skill: "Jquery", learned: true },
    { skill: "Node.js", learned: false },
    { skill: "Ruby", learned: false },
    { skill: "Python", learned: false },
    { skill: "mongoDb", learned: false },
    { skill: "mongoose", learned: false }
];

function getAll() {
    return devSkills;
}
function createOne(skill) { 
    devSkills.push(skill)

}

module.exports = {
    getAll,
    createOne
}