import {durationFormatter} from './TimeFormatter';

it('formats seconds correctly', () => {
  expect(durationFormatter(1)).toEqual('00:00:01');
});

it('converts to other units', () => {
  expect(durationFormatter(60)).toEqual('00:01:00');
  expect(durationFormatter(3600)).toEqual('01:00:00');
  expect(durationFormatter(86400)).toEqual('1 day 00:00:00');
  expect(durationFormatter(172800)).toEqual('2 days 00:00:00');
});

it('can convert seconds to multiple times', () => {
  expect(durationFormatter(1)).toEqual('00:00:01');
  expect(durationFormatter(10)).toEqual('00:00:10');
  expect(durationFormatter(90)).toEqual('00:01:30');
});
