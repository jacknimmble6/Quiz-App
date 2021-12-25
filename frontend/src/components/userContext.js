import React, { createContext, useState, useReducer } from 'react'
import axios from 'axios'

const MyContext = createContext()

const initialState = {
    questions: [
        { 
          question: '',
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: '',
          correctAnswer: '',
        }
    ],
    fields: {
      difficulty: '',
      creator: '',
      category: '',
      title: '',
    }
}

function reducer(state, action) {
    switch(action.type) {
        case 'submit':
            return {
                questions: [...state.questions, action.payload],
                fields: {
                  difficulty: action.payload.difficulty,
                  creator: action.payload.creator,
                  category: action.payload.category,
                  title: action.payload.title,
                }
            }
        case 'delete':
            return {
              ...state,
              questions: state.questions.filter((question) => question.index !== action.payload),
            }; 
        default:
            return state
    }
}

const MyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [score, setScore] = useState(Math.min(0, Math.max(1)))
    const [question, setQuestion] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [creator, setCreator] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')

    const handleSelector = (e) => { setDifficulty(e.target.value) }

    const handleQuestion = (e) => { setQuestion(e.target.value) }

    const handleAnswer1 = (e) => { setAnswer1(e.target.value) }

    const handleAnswer2 = (e) => { setAnswer2(e.target.value) }

    const handleAnswer3 = (e) => { setAnswer3(e.target.value) }

    const handleAnswer4 = (e) => { setAnswer4(e.target.value) }

    const handleCorrectAnswer = (e) => { setCorrectAnswer(e.target.value) }

    const handleCreator = (e) => { setCreator(e.target.value) }

    const handleCategory = (e) => { setCategory(e.target.value) }

    const handleTitle = (e) => { setTitle(e.target.value) }
    const clear = (e) => {
      setQuestion("")
      setAnswer1("")
      setAnswer2("")
      setAnswer3("")
      setAnswer4("")
      setCorrectAnswer("")
    }

    const onSubmit = (e) => { 
      e.preventDefault()
      dispatch({ 
        type: 'submit', 
        payload: { question, answer1, answer2, answer3, answer4, 
          correctAnswer, difficulty, creator, category, title } 
      })
      clear()
    }

    const del = (e) => {
      e.preventDefault()
      dispatch ({ type: 'delete' })
    }

    const sub = (e) => {
        e.preventDefault()
        const newQuiz = {
          questions1: state.questions,
          difficulty: state.fields.difficulty,
          creator: state.fields.creator,
          title: state.fields.title,
          category: state.fields.category
        }
        axios.post('https://quiz-app223.herokuapp.com/quiz/createQuiz', newQuiz)
        .then(res => console.log('It was a success!!', res.data))
        dispatch ({ type: 'delete' })
    }


    const modify = (e, quizAnswer1) => {
      if (quizAnswer1 === e.target.name) {
        setScore(score + 1)
        console.log('Correct')
        
      } else {
        setScore(score)
        console.log('Wrong')
      }
    }

    return (
        <MyContext.Provider value={{ 
            state, score, modify, setScore, dispatch, onSubmit, handleAnswer1, 
            handleQuestion, handleAnswer3, handleAnswer2, handleAnswer4, handleCorrectAnswer, 
            handleSelector, difficulty, setDifficulty, creator, setCreator, handleCreator,
             sub, category, handleCategory, title, handleTitle, del
            }
          }
        >
            {children}
        </MyContext.Provider>
    )
}

export {MyContextProvider, MyContext}