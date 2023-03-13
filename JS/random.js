const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}


const displayUser = user => {
    console.log(user.results[0])
    const nameTag = document.getElementById('name');
    nameTag.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    const ageTag = document.getElementById('age');
    ageTag.innerHTML = user.results[0].registered.age;
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    const addressTag = document.getElementById('address');
    addressTag.innerHTML = user.results[0].location.city;

}
loadUser();