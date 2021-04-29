// const module = require('./module')
// console.log('this is index.js', module.var1)

// require.ensure(['./module'], function(require){
//     const module = require('./module')
//     console.log('加载完成', module.var1)
// });
// import module from './module'
// console.log('this is index.js', module.var1)


import('./module').then(result => {
    console.log(result)
})



