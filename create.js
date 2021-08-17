import { readdirSync, appendFile, writeFile } from 'fs'
import generateTemplate from './util/template.js'
console.clear()

// 3rd argument in command 
const itemName = process.argv[2].toLowerCase() || null

// if no argument, exit
if (!itemName) {
    console.log('missing argument')
    process.exit()
}

const allFiles = readdirSync('./md', { encode: 'utf-8' }, (err) => {
    if (err) throw err
    console.log('read all files')
})

if (allFiles.indexOf(`${itemName}.md`) !== -1) {
    console.log('entry already exists!\n')
    process.exit(0)
}

const writeToFile = (itemName) => {
    writeFile(`./md/${itemName}.md`, generateTemplate(itemName), (err) => {
        if (err) throw err
        console.log(`${itemName} file created`)
    })
}

const appendToFile = (itemName) => {
    const formatted = `\n\n[${itemName}](./md/${itemName}.md#${itemName})`
    appendFile('./README.md', formatted, (err) => {
        if (err) throw err
        console.log(`${itemName} added`)
    })
}

// add the template file to ./md
writeToFile(itemName)
// add the item to the README.MD 
appendToFile(itemName)
