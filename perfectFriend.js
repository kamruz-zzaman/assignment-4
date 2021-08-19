function perfectFriend(friends) {
    // start looping
    const arr = []
    for (const friend of friends) {
        // if friends character length is equal to 5 and if it is string
        if (friend.length == 5 && typeof friend === 'string') {
            arr.push(friend);
        }
    }
    // if there is no 5 character name
    return arr;

}
const friendList = perfectFriend(['kamrul', 12546, 'kamruzzaman', 'sunny', 'nazmul', 'munna', 'raisul', 'neloy', 'minhaj']);
console.log(friendList);