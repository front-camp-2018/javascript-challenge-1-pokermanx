/* eslint-disable-next-line */
export const doubleNum = num => {
  // your logic here...
  const numSubstr = String(num);
  const split1 = numSubstr.substring(0, numSubstr.length / 2);
  const split2 = numSubstr.substring(numSubstr.length / 2);

  if (split1 === split2) {
    return num;
  } else {
    return num * 2;
  }
};
