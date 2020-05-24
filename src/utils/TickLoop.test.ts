import {startLoop, stopLoop} from './TickLoop';

jest.useFakeTimers();

it('starts and stops', () => {
  const callback = jest.fn();

  startLoop(callback, undefined, 20);
  jest.advanceTimersByTime(100);

  expect(callback).toHaveBeenCalledTimes(5);

  stopLoop();
  jest.advanceTimersByTime(100);

  expect(callback).toHaveBeenCalledTimes(5);
});
