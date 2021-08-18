const fs = require('fs')
const chalk = require('chalk')
// const getNotes = function (){
//     return 'Your Notes ...'
// }

const addNotes = (title, body) => {
    const notes = loadNote()
    const duplicate = notes.filter((note) => note.title === title )

    if (duplicate.length === 0 ){
        notes.push({
            title : title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else {
        console.log(chalk.red.inverse('Note title already taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const load = loadNote()

    console.log(chalk.bold.green.inverse('My Listing'))
    
    load.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const note = loadNote()
    const search = note.find((snote) => snote.title === title )

    if(search){
        console.log(chalk.bold.green.inverse(search.title))
        console.log(search.body)

    }
    else {
        console.log(chalk.bold.red.inverse('Data not found'))
    }
}

const removeNotes = (title) => {
    const notes = loadNote()
    const keepNote = notes.filter((note) => note.title !== title)
 
    if (notes.length > keepNote.length){
        saveNotes(keepNote)
        console.log(chalk.bold.green.inverse('Note removed!'))
    }
    else{
        console.log(chalk.bold.red.inverse('Not found!'))
    }

    
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}