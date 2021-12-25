import React, { useState, useEffect } from 'react'
import { Typography, Card, CardContent, Grid, CardHeader, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
    const [quizList, setQuizList] = useState([])

    useEffect(() => {
        try {
            const fetchQuizzes = async () => {
              const res = await fetch('https://quiz-app223.herokuapp.com/quiz/getQuiz')

              const quizzes = await res.json()

              setQuizList(quizzes)
            }
            fetchQuizzes()

        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <Grid container direction='row' rowSpacing={2} spacing={2}>
          {quizList.map((quiz, index) => (
              <Grid item lg={3} xs={12} key={index}>

                <Card sx={{ marginTop: 2, marginBottom: 1 }}>
                  <CardHeader 
                  avatar={<Avatar sx={{ bgcolor: 'green' }}>{quiz.creator.charAt(0)}</Avatar>} 
                  subheader={`Creator: ${quiz.creator}`} 
                  />

                  <CardContent>
                    <Typography paragraph align='left' gutterBottom>Quiz Title: {quiz.title}</Typography>
                    <Typography paragraph align='left'>Category: {quiz.category}</Typography>
                    <Typography paragraph align='left'>Difficulty: {quiz.difficulty}</Typography>
                    <Typography paragraph align='left'>Number of Questions: {quiz.questions.length}</Typography>
                  </CardContent>
                
                  <Link to={`/quiz/detail/${quiz._id}`} color='inherit' style={{ textDecoration: 'none' }}>
                    <Typography color='primary'>
                      Take Quiz
                    </Typography>
                  </Link>

                </Card>

              </Grid>
          ))}
        </Grid>
    ) 
}

export default Home
  