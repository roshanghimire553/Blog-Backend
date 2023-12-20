//Find a pair with the given sum in an array. Given an unsorted integer array,
// print a pair with the given sum in it.

//first input
const nums = [8, 7, 2, 5, 3, 1];
const target = 10;

//second input //
const nums2 = [5, 2, 6, 8, 1, 9];
const target2 = 12;

//function to calculate sum of array to targeted value  and find pair //
const FindPair = (target, nums) => {
  let pairFound = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`pair found (${nums[i]},${nums[j]})`);
        pairFound = true;
      }
    }
  }
  if (!pairFound) {
    console.log("pair not found");
  }

  return;
};

FindPair(target, nums); //output for first array input
FindPair(target2, nums2); //output for second array input
