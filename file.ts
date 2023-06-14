// utilize of the generic function Type

function createArray<T>(items:T[]):T[]{
    return new Array().concat(items);
}

let a=createArray([0,1,2,3,4,5,6,7,8,9]);

console.log(a);