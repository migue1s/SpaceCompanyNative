import LeftPad from './LeftPad';

export const durationFormatter = (secondsToFormat: number) => {
  let time = Math.floor(secondsToFormat);

  const seconds = time % 60;
  time /= 60;

  const minutes = Math.floor(time % 60);
  time /= 60;

  const hours = Math.floor(time % 24);
  time /= 24;

  const days = Math.floor(time);

  return `${days > 0 ? `${days} day${days > 1 ? 's' : ''} ` : ''}${LeftPad(
    hours.toString(),
    2,
  )}:${LeftPad(minutes.toString(), 2)}:${LeftPad(seconds.toString(), 2)}`;
};
