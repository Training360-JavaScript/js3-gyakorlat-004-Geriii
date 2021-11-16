const checkIP = (number) => {
  const pattern = /^(?!0)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}(?!\\.)$/
  return number.match(pattern) != null ? true : false;
};

export default checkIP