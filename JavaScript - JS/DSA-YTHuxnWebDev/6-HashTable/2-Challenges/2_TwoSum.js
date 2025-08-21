function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap && numMap[complement] !== 1) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}

const nums = [3, 8, 7, 2, 4, 12, 89, 5];
const target1 = 7;
const target2 = 17;
const result = twoSum(nums, target1);
const ans = twoSum(nums, target2);

console.log(result);
console.log(ans);
