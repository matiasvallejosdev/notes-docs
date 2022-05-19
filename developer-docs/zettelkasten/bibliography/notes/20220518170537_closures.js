// https://www.programiz.com/python-programming/closure

const count = (function(){
    let _count = 0;
    const add = () =>{
        return _count++;
    }
    const rest = () =>{
        return _count--;
    }
    const value = () =>{
        return _count;
    }
    return {
        add,
        rest,
        value
    }
})();

count.add();
count.add();
count.add();
console.log(count.value());