import React, { useContext } from 'react'
import QuestionForm from './QuestionForm'
import { TextField, Button, Typography, Grid, NativeSelect } from '@mui/material';
import { MyContext } from '../userContext';

const Form1 = () => {
  const { state, onSubmit, handleAnswer1, handleQuestion, handleAnswer3, 
    handleAnswer2, handleAnswer4, handleCorrectAnswer, question,
    answer1, answer2, answer3, answer4, correctAnswer, handleSelector, difficulty,
    creator, handleCreator, handleCategory, 
    category, title, handleTitle } = useContext(MyContext)

  const ariaLabel = { 'aria-label': 'description' };

  const focusField = (e) => {
    e.target.value = ''
  }

  return (
    <div>
      <Typography variant='h4'>
        Number of Questions: {state.questions.length} 
      </Typography>
      <br/>
      <Grid container direction='row' rowSpacing={6} spacing={1}>

        <Grid item lg={6} xs={12}>
        <form onSubmit={onSubmit} onFocus={focusField}>
          <TextField
            placeholder="Question"
            name="question"
            value={question}
            onChange={handleQuestion}
            inputProps={ariaLabel}
            variant='standard'
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          />

          <TextField
            placeholder="Answer 1"
            name="answer1"
            value={answer1}
            onChange={handleAnswer1}
            inputProps={ariaLabel}
            variant='standard'
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          />

          <TextField
            placeholder="Answer 2"
            name="answer2"
            value={answer2}
            onChange={handleAnswer2}
            inputProps={ariaLabel}
            variant='standard'
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          />

          <TextField
            placeholder="Answer 3"
            name="answer3"
            value={answer3}
            onChange={handleAnswer3}
            inputProps={ariaLabel}
            variant='standard'
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          />

          <TextField
            placeholder="Answer 4"
            name="answer4"
            value={answer4}
            onChange={handleAnswer4}
            inputProps={ariaLabel}
            variant='standard'
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          />

          <TextField
            placeholder='Correct Answer'
            name='correctAnswer'
            value={correctAnswer} 
            onChange={handleCorrectAnswer}
            inputProps={ariaLabel}
            variant='standard'
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          />

          <NativeSelect
            label='Difficulty'
            value={difficulty}
            onChange={handleSelector}
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          >
            <option value="">Difficulty</option>
            <option value='Easy'>Easy</option>
            <option value='Medium'>Medium</option>
            <option value='Hard'>Hard</option>
          </NativeSelect> 

          <TextField
            placeholder='Creator'
            name='creator'
            value={creator} 
            onChange={handleCreator}
            inputProps={ariaLabel}
            variant='standard'
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          />
          
          <NativeSelect
            label='Category'
            value={category}
            onChange={handleCategory}
            style={{ marginRight: 20, marginLeft: 20, width:220, height:27 }}
          >
            <option value="">Category</option>
            <option value='Sports'>Sports</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Education'>Education</option>
            <option value='Food'>Food</option>
            <option value='Other'>Other</option>
          </NativeSelect>

          <TextField
            placeholder='Title'
            name='title'
            value={title} 
            onChange={handleTitle}
            inputProps={ariaLabel}
            variant='standard'
            style={{ marginRight: 20, marginLeft: 20, width:220 }}
          />

          <br/>
          <Button onClick={onSubmit}>Submit</Button>
          </form>
          <div>         
          </div>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <QuestionForm />
        </Grid>

      </Grid> 

    </div>
  )
}

export default Form1