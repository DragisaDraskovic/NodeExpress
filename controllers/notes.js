const notesRuter = require('express').Router()
const { request, response } = require('express')
const Note = require('../models/note')

notesRuter.get('/', (request,response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

notesRuter.get('/:id', (request, response, next) => {
    Note.findById(request.params.id)
    .then(note => {
        if(note) {
            response.json(note)
        } else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})

notesRuter.post('/', (request, response, next) => {
    const body = request.body

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    note.save()
    .then(savedNote => {
        response.json(savedNote)
    })
    .catch(error => next(error))
})

notesRuter.delete('/:id', (request, response, next) => {
    Note.findByIdAndRemove(request.params.id)
    .then(() => {
        response.status(204).end()
    })

    .catch(error => next(error))
})

notesRuter.put('/:id', (request, response, next) => {
    const body = request.body

    const note = {
        content: body.content,
        important: body.important,
    }

    Note.findByIdAndUpdate(request.params.id, note, {new: true})
    .then(updatedNote => {
        response.json(updatedNote)
    })
    .catch(error => next(error))
})

module.exports = notesRuter