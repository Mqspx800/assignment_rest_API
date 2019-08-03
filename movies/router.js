const Movie = require('../sequelize-rest')
const { Router } = require('express')
const router = new Router


router.get('/movies', (req, res, next) => {
  const limit = req.query.limit||undefined
  const offset = req.query.offset||0
  Promise.all([ Movie.count(),
    Movie.findAll({limit,offset})])
    .then(([total,movies]) =>
      res.json({total,movies}))
    .catch(err => next(err))
})

router.post('/movie', (req, res, next) => {
  Movie.create(req.body)
    .then(movie => res.json(movie))
    .catch(err => next(err))
})

router.put('/movie/:id', (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => movie.update(req.body))
    .then(movie => res.json(movie))
    .catch(err => next(err))
})

router.get('/movie/:id', (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => next(err))
})

router.delete('/movie/:id', (req, res, next) => {
  Movie.destroy({
    where:
      { id: req.params.id }
  })
  .then(deleted=>deleted?res.json(`id ${req.params.id} is deleted`):'not deleted')
  .catch(err=>next(err))
})

module.exports = router