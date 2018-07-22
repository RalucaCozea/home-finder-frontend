export const getQueryParamId = pathString => path => {
  if (!path) {
    return null;
  }

  if (path.indexOf(pathString) !== 0) {
    return null;
  }

  return parseInt(path.replace(pathString, ''), 0);
};
