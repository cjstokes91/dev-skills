const SkillModel = require('../models/skill');


function newSkill(req, res) {
    res.render('skills/new')

}


function index(req, res) {
    res.render('skills/index', {
        devName: 'CJ',
        skills: SkillModel.getAll(),
    })

}

function create(req, res) {
    req.body.learned = false;
    SkillModel.createOne(req.body);
    res.redirect('skills')
}





module.exports = {
    index,
    create,
    new: newSkill
}