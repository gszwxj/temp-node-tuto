const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
    // if (req.url == '/'){
        res.end('Welcome to our home page. For Node.js project.')
    }
    else if (req.url ==='/about'){
        res.end('Here is our about page.')
    }
    else{
        res.end(`
            <h1>Ooops!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href="/">back home</a>
        `)
    }
  
    // res.end(`<h1>Ooops!</h1>
    //     <p>We can't seem to find the page you are looking for. .</p>
    //     <a href="/">back home</a>
    //     `)
    console.log(req.url)
    // res.write('Welcome to our home page. For Node.js project.1about');   //       throw er; // Unhandled 'error' event
      

    //   Error [ERR_STREAM_WRITE_AFTER_END]: write after end
//     console.log(req)
// console.log(res)
    // res.end()
});

// console.log(req)
// console.log(res)
server.listen(5000)






















// const {readFile, writeFile} = require('fs');   // async version

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, result) =>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile(
//             './content/result-async.txt',
//             `Here is the result: ${first}, ${second}`,
//             (err, result) => {
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else{
//                     console.log(result)
//                 }
//             }
//         )
//     })
//     console.log(result)
// })
// // writeFile('/content/firs')