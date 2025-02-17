function sortingAge (employee){
    const data = employee.sort((a,b)=>a.age - b.age)
    return data
}


module.exports = sortingAge