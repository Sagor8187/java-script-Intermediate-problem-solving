// Second Largest Number
// [10, 5, 20, 8] → 10

const nums = [10, 5, 20, 8]

let frist = -Infinity
let second = -Infinity

for (let i = 0 ;i<nums.length;i++){
    if(nums[i]>frist){
        second = frist;
        frist=nums[i]
    }else if(nums[i] > second && nums[i] !== frist){
        second = nums[i]
    }
}

console.log(second)