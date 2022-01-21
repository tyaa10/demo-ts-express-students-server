import express from 'express'
import cors from 'cors'
import repository from './InMemoryRepository'
import Student from './Student'
const app = express()
app.use((req, res, next) => { next(); }, cors({maxAge: 84600}))
app.use('/api', express.json({'limit':'10mb'}))
app.route('/api/students')
  .get(function (req, res) {
    try {
      res.status(200)
        .send(`{"data": ${JSON.stringify(repository.students.sort((item1, item2) => item2.getId() - item1.getId()))}}`)
    } catch (error) {
      res.status(500).json(
        {
          'error': error.message
        }
      )
    }
  })
  .post(function (req, res) {
    try {
      let newStudent = req.body
      newStudent =
        new Student(
          newStudent.name,
          newStudent.age,
          newStudent.avgScore,
          newStudent.email
        )
      repository.students.push(newStudent)
      res.status(201).json(
        {
          'message': 'Student Created',
          'data': {'id': newStudent.getId()}
        }
      )
    } catch (error) {
      console.log(error);
      
      res.status(500).json(
        {
          'error': error.message
        }
      )
    }
  })
app.route('/api/students/:id')
  .put(function (req, res) {
    try {
      const student =
        repository.students.find(todo => todo.getId() === Number(req.params.id)) ?? null
      if (student) {
        const updatedStudent = req.body
        student.setName(updatedStudent.name)
        student.setAge(updatedStudent.age)
        student.setAvgScore(updatedStudent.avgScore)
        student.setEmail(updatedStudent.email)
      } else {
        res.status(404).send()
      }
      res.status(200).json(
        {
          'message': 'Student Updated'
        }
      )
    } catch (error) {
      res.status(500).json(
        {
          'error': error.message
        }
      )
    }
  })
  .delete(function (req, res) {
    try {
      const delIndex =
        repository.students.findIndex(a => a.getId() === Number(req.params.id))        
      if (delIndex !== -1) {
        repository.students.splice(delIndex, 1)
        res.status(204).send()
      } else {
        res.status(404).send()
      }
    } catch (error) {
      res.status(500).send()
    }
  })
  app.listen(4000, 'localhost', function () {
    console.log(`Running on http://localhost:4000`);
  })