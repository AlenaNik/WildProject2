process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your name ? ')
process.stdin.on('data', (text) => {
  console.log('Hello ' + text)
  process.exit()
})
