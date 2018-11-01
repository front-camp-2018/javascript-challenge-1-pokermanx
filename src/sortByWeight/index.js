/* eslint-disable-next-line */
export const sortByWeight = arr => {
  // your logic here...
  const arrCalc = []; 
  
  for (let i = 0; i < arr.length; i++) {
    arrCalc[i] = 0;
    for (const num of arr[i]){
      arrCalc[i] += Number(num); 
    }
  }
  
  for (let i = 0; i < arrCalc.length; i++) {
    while (i > 0 && arrCalc[i] < arrCalc[i - 1]) {
      [arrCalc[i], arrCalc[i - 1]] = [arrCalc[i - 1], arrCalc[i]];
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    }
  }
  return arr;
};
