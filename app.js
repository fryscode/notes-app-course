const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js')


// yargs.check()

yargs.command({
    command: 'add',
    describe: 'Adding new Note',
    builder:{
        title:{
            describe: 'My title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'My body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a notes!',
    builder:{
        title:{
            describe: 'You must add title history',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv){
        note.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing a notes!',
    handler(){
        note.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read your notes!',
    builder:{
        title:{
            describe: 'read notes!',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        note.readNote(argv.title)
    }
})

yargs.parse()
// const command = process.argv[2]

// console.log(process.argv)
// if (command === 'add'){
//     console.log('Adding notes!')
// }
// else if(command === 'remove'){
//     console.log('Remove notes!')
// }

// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// console.log(validator.isEmail('kinar@gmail.com'))
// console.log(chalk.green('Success!'))
// const x = require('./utils.js')
// const fs = require('fs')
// console.log(x)
// console.log(x)
//fs.writeFileSync('notes.txt', 'This file created by node.js)
// fs.appendFileSync('notes.txt', ' I live in Indonesia, and the city name Bekasi')