var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();

router.get('/', function (req, res, next) {
  res.send(projects.sort((a, b) => a.id - b.id));
});

router.get('/:id', function (req, res, next) {
  if (req.params.id == 'active') {
    res.status(200).send(projects.filter(x => x.isActive).sort((a, b) => a.id - b.id));
  } else {
    const result = projects.find(x => x.id === parseInt(req.params.id));
    if (result) { res.status(200).send(result); }
    else {
      res.status(404).send({ "message": "No Project Found" });
    }
  }
});


module.exports = router;
