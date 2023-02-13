// const mongoose = require('mongoose')

// if(process.argv.length < 3) {
//     console.log('Please provide the password as an argument: node mongo.js <password>')
//     process.exit(1)
// }

// const password = process.argv[2]
// //const password ="programing.123"

// const url = `mongodb+srv://Dragisa:${password}@cluster0.4yrpbia.mongodb.net/?retryWrites=true&w=majority`

// const noteSchema = new mongoose.Schema({
//     content: String,
//     date: Date,
//     important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

// // mongoose
// // .connect(url)
// // .then((result) => {
// //     console.log('conected')

//     // const note = new Note({
//     //     content: `HTML is Easy`,
//     //     date: new Date(),
//     //     important: true,
//     // })

//     // const note1 = new Note({
//     //     content: `Mongoose makes use of mongo easy`,
//     //     date: new Date(),
//     //     important : true
//     // })

//     // const note2 = new Note({
//     //     content: `Callback-functions suck`,
//     //     date: new Date(),
//     //     important : false
//     // })

// //     return note1.save() && note2.save()
// // })
// // .then(() => {
// //     console.log('note saved!')
// //     return mongoose.connect.close()
// // })
// // .catch((error) => console.log(error))


// Note.find({}).then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
//     mongoose.connection.close()
//   })


const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/testing?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'CSS is hard',
  date: new Date(),
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
/*
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})*/
