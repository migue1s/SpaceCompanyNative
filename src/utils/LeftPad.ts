export default (text: string, length: number) => {
  return '0'.repeat(Math.max(0, length - text.length)) + text;
};
