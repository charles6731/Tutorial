export let setStorage = (name,value) => {
    localStorage.setItem(name,`${value}`);
    return value;
    
};

export let getStoredValue = (name)=> {
    const value = localStorage.getItem(name);
    return value;
}