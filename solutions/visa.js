const checkVisa = (number) => {
  const pattern = /^4(\d{3})(\d{4}){3}$/
  if (number.match(pattern) != null)
        return true;
};

export default checkVisa