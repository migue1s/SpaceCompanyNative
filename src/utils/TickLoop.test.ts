import {start, stop} from './TickLoop';

jest.useFakeTimers();
jest.mock('LayoutAnimation');

it('starts and stops', () => {
  const callback = jest.fn();

  start(callback, undefined, 20);
  jest.advanceTimersByTime(100);

  expect(callback).toHaveBeenCalledTimes(5);

  stop();
  jest.advanceTimersByTime(100);

  expect(callback).toHaveBeenCalledTimes(5);
});
