import { Typography, FormControl, FormControlLabel, FormLabel, Radio, 
  RadioGroup, Card, Box, CardContent, CardActions, Button } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import React, { useState, useContext, useEffect } from 'react'
import { MyContext } from '../userContext';
import useStyles from './styles'

const QuestionForm = () => {
  const [quizAnswer1, setQuizAnswer1] = useState('')
  const classes = useStyles()
  const [current, setCurrent] = useState(0)
  const { modify, state, score, sub, title, category, creator, del, difficulty, setScore } = useContext(MyContext)
  
  useEffect(() => {
    setScore(0)
  }, [])
  
  const changeQuestion = () => {
    if (current < state.questions.length) {
      setCurrent(current + 1);
    } 
    if (current === state.questions.length-1 ) {
      setCurrent(state.questions.length -1)
    }
  };

  return (
    <form onSubmit={sub}>
      <Box spacing={12}>
        <div>
        <Typography variant='h6' align='center'>
          Quiz Score: {`You score ${score} out of ${state.questions.length}`} 
        </Typography>
        <Typography variant='h6'>Creator: {creator}</Typography>
        <Typography variant='h6'>Category: {category}</Typography>
        <Typography variant='h6'>Title: {title}</Typography>
        <Typography variant='h6'>Difficulty: {difficulty}</Typography>
         {state.questions.length === 0 ? 
           <Typography variant='h6' ml={25}>There's no questions yet.</Typography>
           :
           (state.questions.map(({ question, answer1, answer2, answer3, answer4, 
           correctAnswer}, index) => (
            <div key={index}>
            {index === current && (
            <FormControl key={index + 1} children>
                <Card className={classes.Card} elevation={5}>
                  <CardHeader
                    title={`Question #${index+1}`}                  
                    className={classes.cardHeader}
                  />
                  <CardContent>
                  <FormLabel component='legend'>
                    <Typography>
                      {question}
                    </Typography>
                  </FormLabel> 

                  <RadioGroup disabled={false} onChange={modify}>
                    <FormControlLabel 
                      value={answer1} control={<Radio />} name={correctAnswer} 
                      onClick={e => {setQuizAnswer1(e.target.value); changeQuestion();}} label={answer1}         
                    /> 
                    <FormControlLabel 
                      value={answer2} control={<Radio />} name={correctAnswer}
                      label={answer2} onClick={e => {setQuizAnswer1(e.target.value); changeQuestion();}}
                    /> 

                    <FormControlLabel 
                      value={answer3} control={<Radio />} name={correctAnswer}
                      label={answer3} onClick={e => {setQuizAnswer1(e.target.value); changeQuestion();}}
                    /> 

                    <FormControlLabel 
                      value={answer4} control={<Radio />} name={correctAnswer}
                      label={answer4} onClick={e => {setQuizAnswer1(e.target.value); changeQuestion();}}
                    />
                  </RadioGroup>
                  </CardContent>
                  <CardActions>
                    <Button onClick={del}>Delete Quiz</Button>
                  </CardActions>
                </Card>
             </FormControl>
            )}
           </div>
         )))
         }   
      </div>
    </Box>
    <Button onClick={sub}>Submit</Button>
  </form>
  )
}

export default QuestionForm
