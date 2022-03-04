const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Survey = new Schema(
    {
        surveyId: { type: String, 
            required: true,
            unique: true},
        gameGenre: { type: String, 
            required: true,
            enum: ['Action', 'Adventure', 'Strategy', 'Sports']},
        daysPerYear: { type: Number, required: true, min: 0, max: 365},
        age: { type: Number, required: true, min: 0}
    }
)

module.exports = mongoose.model('surveys', Survey)
