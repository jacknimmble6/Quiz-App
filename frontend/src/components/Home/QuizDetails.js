import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Card, FormControl, CardHeader,Radio, FormControlLabel,
 CardContent, RadioGroup, FormLabel, Button, Grid} from '@material-ui/core'
import { MyContext } from '../userContext';
import useStyles from './styles'
import axios from 'axios'

const QuizDetails = () => {
    const [quizDetails1, setQuizDetails1] = useState([])
    const [quizAnswer1, setQuizAnswer11] = useState('')
    const [quizTitle, setQuizTitle] = useState('')
    const [quizCategory, setQuizCategory] = useState('')
    const [quizCreator, setQuizCreator] = useState('')
    const [quizDifficulty, setQuizDifficulty] = useState('')
    const [quizScore, setQuizScore] = useState('')
    const [current, setCurrent] = useState(0)
    const classes = useStyles()
    const { id } = useParams()

    const changeQuestion = () => {
      if (current < quizDetails1.length) {
        setCurrent(current + 1);
      } 
      if (current === quizDetails1.length-1 ) {
        setCurrent(quizDetails1.length -1)
      }
    };

    const { modify, score } = useContext(MyContext)

    useEffect(() => {
      axios.get(`https://quiz-app223.herokuapp.com/quiz/getQuiz/${id}/`)
      .then(res => {
          setQuizDetails1(res.data.questions)
          setQuizDifficulty(res.data.difficulty)
          setQuizCategory(res.data.category)
          setQuizTitle(res.data.title)
          setQuizCreator(res.data.creator)
      })
      .catch(err => {
          console.log(err)
      })
      
      setQuizScore('')
     
      return () => {
          setQuizDetails1()
      }
    }, [id])

    const submitDetail = (e) => {
      e.preventDefault()
      setQuizScore(`Quiz Score: You scored ${score/quizDetails1.length * 100}%`)
    }

    const QuizzDetails = () => (
      quizDetails1.map((item, index) => (
        <div key={index}>
        {index === current && (
        <FormControl key={`Quiz-${index}`}>
          <Card className={classes.Card} elevation={5}>
            <CardHeader
              title={`Question #${index + 1}`}                  
              className={classes.cardHeader}
            />
            <CardContent>
            <FormLabel component='legend'>
              <Typography>
                {item.question}
              </Typography>
            </FormLabel> 

            <RadioGroup onChange={modify} >
              <FormControlLabel 
                value={item.answer1} control={<Radio />} name={item.correctAnswer.toString()} 
                onClick={e => {setQuizAnswer11(e.target.value); changeQuestion();}} label={item.answer1}
              /> 
              <FormControlLabel
                value={item.answer2} control={<Radio />} name={item.correctAnswer.toString()}
                label={item.answer2} onClick={e => {setQuizAnswer11(e.target.value); changeQuestion();}}
              /> 

              <FormControlLabel 
                value={item.answer3} control={<Radio />} name={item.correctAnswer.toString()}
                label={item.answer3} onClick={e => {setQuizAnswer11(e.target.value); changeQuestion();}}
              /> 

              <FormControlLabel 
                value={item.answer4} control={<Radio />} name={item.correctAnswer.toString()}
                label={item.answer4} onClick={e => {setQuizAnswer11(e.target.value); changeQuestion();}} 
              />
            </RadioGroup>
            </CardContent>
          </Card>
        </FormControl>
      )}
      </div>
      ))
    )

    return (
      <Grid container direction='row' spacing={1}>

        <form>
          <Grid item lg={6} md={12} xs='auto'>
            <QuizzDetails />
            <Button onClick={submitDetail}>Submit Quiz</Button>
          </Grid>
        </form>

        <Grid item lg={6} md={12} xs='auto'>
          <Card className={classes.description}>
            <Typography variant='h6'>Number of Questions: {quizDetails1.length}</Typography>
            <Typography variant='h6'>Title: {quizTitle}</Typography>
            <Typography variant='h6'>Creator: {quizCreator}</Typography>
            <Typography variant='h6'>Category: {quizCategory}</Typography>
            <Typography variant='h6'>Difficulty: {quizDifficulty}</Typography>
            <Typography variant='h6' align='center'>
              {quizScore}  
            </Typography>
          </Card>
        </Grid>

      </Grid>
    )
}

export default QuizDetails
