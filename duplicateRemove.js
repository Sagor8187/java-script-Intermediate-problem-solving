//let nums [1,2,2,3,4,4,5] 
// output→ [1,2,3,4,5]
// Remove Duplicates

let nums = [1,2,2,3,4,4,5] 
const filters = []

for (let i = 0;i<nums.length;i++){
    let isduplicate = false;

    for(let j = 0;j<nums.length; j++){
        if(nums[i]=== filters[j]){
            isduplicate =true
            break
        }
    }
    if(!isduplicate){
        filters.push(nums[i])
    }
}

console.log(filters)
