const isObjectEmpty = (obj) => {
  return (!obj && obj === 'null' && obj === 'undefined');
};

export default isObjectEmpty;
