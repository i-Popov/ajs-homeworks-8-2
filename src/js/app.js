export default class ErrorRepository {
  constructor() {
    this.repository = new Map([[1, 'error 1'], [2, 'error 2'], [3, 'error 3'], [4, 'error 4'], [5, 'error 5']]);
  }

  translate(code) {
    if (this.repository.has(code)) {
      return this.repository.get(code);
    }
    return 'Unknown error';
  }
}
