module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  } else {
    return matrix.reduce((acc, num, i) => {
      return acc.concat((!(i % 2) ? num : num.reverse()));
    }, [])
  }
}