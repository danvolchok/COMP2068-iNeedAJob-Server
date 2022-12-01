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
            return res.json(err).status(400)
        }
        else {
            return res.json(employer).status(201)
        }
    })
})

module.exports = router