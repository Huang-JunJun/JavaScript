const subsets = (nums) => {
  const t = [];
  const ans = [];

  const dfs = (cur) => {
    console.log(t);
    console.log(cur);
    if (cur === nums.length) {
      ans.push(t.slice());
      return;
    }
    t.push(nums[cur]);
    dfs(cur + 1);
    t.pop(t.length - 1);
    dfs(cur + 1);
  }
  dfs(0);
  return ans;
}

console.log(subsets([1,2,3]));