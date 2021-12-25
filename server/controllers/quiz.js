import express from 'express'
import Quiz from '../models/quiz.js'

const router = express.Router()

export const getQuizzes = async (req, res) => {
    try {
        const quiz = await Quiz.find()

        res.status(200).json(quiz)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const createQuiz = async (req, res) => {
    const { questions1, category, title, creator, difficulty } = req.body

    const newQuiz = new Quiz({ questions: questions1, category, title, creator, difficulty })

    try {
        await newQuiz.save()

        res.status(201).json(newQuiz)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getQuiz = async (req, res) => {
    const { id } = req.params;

    try {
        const quiz = await Quiz.findById(id);
        
        res.status(200).json(quiz);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
