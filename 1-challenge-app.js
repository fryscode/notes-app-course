const yargs = require('yargs')
const fs = require('fs')
const notes = require('./2-challenge-notes')

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder:{
        title:{
            describe: 'Add new title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Add new body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder:{
        title:{
            describe: 'Remove note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List note',
    handler(argv){
        notes.listNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read note',
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse()