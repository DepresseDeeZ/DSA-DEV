const sqaure=(n)=>{
    return n*n;
};

const cube=(n)=>{
    return n*n*n;
};

const sumofSomething=(a,b,callbackFun)=>{
    const val1= callbackFun(a);
    const val2 = callbackFun(b);
    return val1+val2;
}

const ans = sumofSomething(1,2,cube);
console.log(ans)

