import ErrorRepository from '../app';

test.each([
  [1, 'error 1'],
  [2, 'error 2'],
  [3, 'error 3'],
  [4, 'error 4'],
  [5, 'error 5'],
  [99999, 'Unknown error'],
])(
  ('Error Repository should return text of error and unknown error'),
  (input, expected) => {
    const result = new ErrorRepository();
    expect(result.translate(input)).toEqual(expected);
  },
);
