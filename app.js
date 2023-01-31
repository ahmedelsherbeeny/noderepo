const _ =require('lodash')

const items=[1,[2,4,[1,8,7]],[5,7]]

const newItems=_.flattenDeep(items)
console.log(newItems);