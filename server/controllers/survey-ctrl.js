const Survey = require('../models/survey-model')

createSurvey = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a survey',
        })
    }

    const survey = new Survey(body)

    if (!survey) {
        return res.status(400).json({ success: false, error: err })
    }

    survey
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: survey._id,
                message: 'Survey created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Survey not created!',
            })
        })
}

updateSurvey = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Survey.findOne({ _id: req.params.id }, (err, survey) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Survey not found!',
            })
        }
        survey.surveyId = body.surveyId
        survey.gameGenre = body.gameGenre
        survey.daysPerYear = body.daysPerYear
        survey.age = body.age
        survey
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: survey._id,
                    message: 'Survey updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Survey not updated!',
                })
            })
    })
}

getSurveyById = async (req, res) => {
    await Survey.findOne({ _id: req.params.id }, (err, survey) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: survey })
    }).catch(err => console.log(err))
}

getSurveys = async (req, res) => {
    await Survey.find({}, (err, surveys) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!surveys.length) {
            return res
                .status(404)
                .json({ success: false, error: `Survey not found` })
        }
        return res.status(200).json({ success: true, data: surveys })
    }).catch(err => console.log(err))
}

module.exports = {
    createSurvey,
    updateSurvey,
    getSurveys,
    getSurveyById,
}
