import { readFileSync, writeFileSync, unlink } from 'fs'
console.clear()

const itemName = process.argv[2].toLowerCase().trim() || null

if (!itemName) {
    console.log('missing argument')
    process.exit()
}

const readMe = readFileSync('./README.md', { encoding: 'utf-8' }, (err) => {
    if (err) throw err
    console.log('ok')
})

const filterTests = (str) => {
    if (str[0] !== '[') return true
    const startingIndex = str.indexOf('[')
    const endingIndex = str.indexOf(']')
    if (endingIndex - startingIndex - 1 !== itemName.length) return true

    return str.slice(1, itemName.length + 1) != itemName
}

const arrayEachLine = readMe.split('\n')
const filteredArr = arrayEachLine.filter(str => filterTests(str))


if (arrayEachLine.length === filteredArr.length) {
    console.log('no match found, exiting\n')
    process.exit(0)
}

writeFileSync('./README.md', filteredArr.join('\n'), (err) => {
    if (err) throw err
    console.log('updated README')
})

unlink(`./md/${itemName}.md`, (err) => {
    if (err) throw err
    console.log('removed file')
})