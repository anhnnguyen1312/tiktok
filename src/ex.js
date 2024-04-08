
function arrToObj(arr) {
    return arr.reduce((obj,vals) => {
       obj[vals[0]] = vals[1];
       return obj;
    }, {});
    }
    const obj1 = arrToObj([
        ['name', 'Son Dang'], 
        ['age', 21], 
        ['address', 'Ha Noi']
     ])
     console.log(obj1)
    // Expected results:
    /**
    const obj1 = arrToObj([
       ['name', 'Son Dang'], 
       ['age', 21], 
       ['address', 'Ha Noi']
    ])
    console.log(obj1)
    Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
    
    const obj2 = arrToObj([
       ['name', 'Duc Long'], 
       ['age', 18], 
       ['address', 'Ha Noi']
    ])
    console.log(obj2)
    Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
    */