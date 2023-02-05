export default function bubbleSort(arr: number[]): number[] {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      const [current, next] = [arr[i], arr[i + 1]];
      if (current && next && current > next) {
        [arr[i], arr[i + 1]] = [next, current];
        sorted = false;
        console.log(arr.join(","));
      }
    }
  }
  return arr;
}
