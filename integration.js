
function filterUsersByAge(users, minAge) {
    return users.filter(users => users.age >= minAge)
}


function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}


function getFilteredAndSortedUsers(users, minAge) {
    const filteredUsers = filterUsersByAge(users, minAge);
    return sortUsersByAge(filteredUsers);
}

module.exports = { filterUsersByAge, sortUsersByAge, getFilteredAndSortedUsers };
