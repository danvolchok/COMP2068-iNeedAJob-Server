const express = require('express')
const router = express.Router()
const Employer = require('../models/employer')

// GET: /api/employers => get all employers as json
router.get('/', (req, res) => {
    Employer.find((err, employers) => {
        if (err) {
            return res.json(err).status(404)
        }
        else {
            return res.json(employers).status(200)
        }
    })
})

// POST: /api/employer => create a new employer
router.post('/', (req, res) => {
    Employer.create(req.body, (err, employer) => {
        if (err) {
            return res.json(err).status(400) // bad request
        }
        else {
            return res.json(employer).status(201) // new resource created
        }
    })
})

// DELETE: /api/employer/:id => delete an employer
router.delete('/:_id', (req, res) => {
    Employer.deleteOne({ _id: req.params._id }, (err, employer) => {
        if (err) {
            return res.json(err).status(400) // bad request
        }
        else {
            res.json(employer).status(200)
        }
    })
})

// PUT: /api/employer/:id => update an employer
router.put('/:_id', (req, res) => {
    Employer.findOneAndUpdate({ _id: req.params._id }, req.body, (err, employer) => {
        if (err) {
            return res.json(err).status(400) // bad request
        }
        else {
            res.json(employer).status(202) // accepted
        }
    })
})


module.exports = router