let arr = []
const flatTree = (tree) => {
  if(tree.name) {
    arr.push(tree.name)
    
  }

  if(tree.chilren){
    for (let i = 0; i < tree.chilren.length; i++) {
      flatTree(tree.chilren[i])
    }
  }

  return arr
}

const tree = {
  name: 'leaf1',
  chilren: [
    {
      name: 'lev1'
    },
    {
      name: 'lev2',
      chilren: [
        {
          name: 'lev3'
        },
        {
          name: 'lev4'
        }
      ]
    }
  ]
}

console.log(flatTree(tree));