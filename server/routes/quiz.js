import express from 'express'
import { createQuiz, getQuiz, getQuizzes } from '../controllers/quiz.js'

const router = express.Router()

router.get('/getQuiz', getQuizzes)
router.post('/createQuiz', createQuiz)
router.get('/getQuiz/:id', getQuiz)

export default router
