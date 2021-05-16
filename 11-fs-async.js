const {readFile, writeFile} = require('fs');   // async version

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                else{
                    // console.log(result)
                    console.log('done with this task')
                }
            }
        )
    })

    console.log(result)
})
// writeFile('/content/firs')
console.log('start new one.')