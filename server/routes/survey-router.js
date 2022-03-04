const express = require('express')

const SurveyCtrl = require('../controllers/survey-ctrl')

const router = express.Router()

router.post('/survey', SurveyCtrl.createSurvey)
router.put('/survey/:id', SurveyCtrl.updateSurvey)
router.get('/survey/:id', SurveyCtrl.getSurveyById)
router.get('/surveys', SurveyCtrl.getSurveys)

module.exports = router
