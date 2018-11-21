import chalk from 'chalk'
/* ToDo: Improvements 
   Consider including modules like https://getpino.io/#/ or winston
*/

export function success(message) {
  console.log(chalk.bold.green(`SUCCESS:${message}`))
}

export function info(message) {
  console.log(message)
  //TODO: fix why object is not printing
  console.log(chalk.bold.blue(`INFO:${message}`))
}

export function error(message) {
  console.log(chalk.bold.red(`ERROR:${message}`))
}
