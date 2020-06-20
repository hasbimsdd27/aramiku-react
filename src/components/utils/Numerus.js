export const Numerus = (n, d) => {
  let x = "";
  let p = "";
  x = ("" + n).length;
  p = Math.pow;
  d = p(10, d);
  x -= x % 3;
  return Math.round((n * d) / p(10, x)) / d + " kMGTPE"[x / 3];
};
