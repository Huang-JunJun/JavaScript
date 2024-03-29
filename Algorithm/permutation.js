var permutation = function(s) {
  const rec = [], vis = [];
  const n = s.length;
  const arr = Array.from(s).sort();
  const perm = [];
  const backtrack = (arr, i, n, perm) => {
    if (i === n) {
      rec.push(perm.toString());
      return;
    }
    for (let j = 0; j < n; j++) {
      if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
        continue;
      }
      vis[j] = true;
      perm.push(arr[j]);
      backtrack(arr, i + 1, n, perm);
      perm.pop();
      vis[j] = false;
    }
  }

  backtrack(arr, 0, n, perm);
  let recArr = []
  for (let i = 0; i < rec.length; i++) {
    recArr[i] = rec[i].split(',').join('');
  }
  return recArr;
};

const rec = permutation('abc')

console.log(rec);