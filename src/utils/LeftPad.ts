export default (text: string, length: number) => {
  return '0'.repeat(length - text.length) + text;
};
