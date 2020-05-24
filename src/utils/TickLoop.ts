let action: ((delta: number) => void) | undefined;
let lastTime: number;
let timer: number;

export const startLoop = (
  callback: (delta: number) => void,
  time: number = Date.now(),
  delay?: number,
) => {
  stopLoop();
  lastTime = time;
  action = callback;
  timer = setInterval(onFiredTimer, delay);
};

const onFiredTimer = () => {
  if (!lastTime) {
    lastTime = Date.now();
    return;
  }
  const current = Date.now();
  const delta = current - lastTime;
  lastTime = current;

  action && action(delta);
};

export const stopLoop = () => {
  if (timer) {
    clearInterval(timer);
  }
  action = undefined;
};
