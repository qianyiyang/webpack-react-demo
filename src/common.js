export const flatten = (arr) => {
  console.log("my-flatten");
  return arr.reduce((all, cur) => {
    if (Array.isArray(cur)) {
      return [...all, ...flatten(cur)];
    } else {
      return [...all, cur];
    }
  }, []);
};
