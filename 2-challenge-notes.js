const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const load = loadNotes()
    const lnote = load.filter((note) => note.title === title)

    if (lnote.length === 0){
        load.push({
            title: title,
            body: body
        })
        saveNote(load)
        console.log(chalk.bold.green.inverse('Adding new note!'))
    }
    else {
        console.log(chalk.bold.red.inverse('Note already taken!'))
    }
}

const saveNote = (notes) => {
    const snote = JSON.stringify(notes)
    fs.writeFileSync('new-chalenge.json', snote)
}

const loadNotes = () => {
   
    try {
        const lnote = fs.readFileSync('new-chalenge.json')
        return JSON.parse(lnote.toString())     
    } catch (e) {
        return []
    }

}
const removeNotes = (title) => {
    const lnote = loadNotes()
    const keepnotes = lnote.filter((note) => note.title !== title )

    // console.log(lnote.length)
    // console.log(keepnotes.length)
    if ( lnote.length > keepnotes.length ){
        saveNote(keepnotes)
        console.log(chalk.bold.green.inverse('Note removed'))
    }
    else {
        console.log(chalk.bold.red.inverse('Data not found'))
    }
}

const listNotes = () => {
    const lnotes = loadNotes()

    console.log(chalk.bold.green.inverse('my listing'))
    lnotes.forEach((note) => {
       console.log(note.title)
    })

}

const readNotes = (title) => {
    const lnotes = loadNotes()
    const knotes = lnotes.find((note) => note.title === title)

    if (knotes){
        console.log(chalk.bold.green.inverse(knotes.title))
        console.log(chalk.bold.red.inverse(knotes.body))
    }
}

module.exports = {
    addNotes,
    removeNotes,
    listNotes,
    readNotes

}
