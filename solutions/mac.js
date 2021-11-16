const checkMac = (number) => {
  const pattern = /^[0-9a-f]{1,2}([\.:-])(?:[0-9a-f]{1,2}\1){4}[0-9a-f]{1,2}$/i;
  return number.match(pattern) != null ? true : false;
};

export default checkMac