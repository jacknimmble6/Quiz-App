import mongoose from 'mongoose'

const quizSchema = mongoose.Schema({
    questions: [],
    title: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const Quiz = mongoose.model('Quiz', quizSchema)

export default Quiz
