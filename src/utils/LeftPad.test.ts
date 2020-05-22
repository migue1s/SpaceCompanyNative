import LeftPad from './LeftPad';

it('pads correctly', () => {
  expect(LeftPad('1', 2)).toEqual('01');
});

it('does not pad when not needed', () => {
  expect(LeftPad('1', 1)).toEqual('1');
});
