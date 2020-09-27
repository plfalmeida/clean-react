export class UnexpectedError extends Error {
  constructor () {
    super('Some thing is wrong. Try again later.')
    this.name = 'UnexpectedError'
  }
}
