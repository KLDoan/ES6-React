// zoo size = 5
const zoo = [
    { Name: "Eurasian Collared-Dove " },
    { Name: "Bald Eagle " },
    { Name: "Cooper's Hawk " },
    { Name: "Bell's Sparrow " },
    { Name: "Mourning Dove " },

]
const mySet = new Set(zoo);
let names = [];
// run first list of animals
mySet.forEach(animal_name => {
    console.log(animal_name);
    names += `${animal_name.Name}`
});
//
document.getElementById("demo").innerHTML = `<h1>List Of Animals</h1> ${names}`

function add_animal() {
    mySet.add({ Name: document.getElementById("animal_id").value });
    alert(`You have add an animal name ${' '}${document.getElementById("animal_id").value}`)
    names += `${document.getElementById("animal_id").value}  `
}
function delete_animals() {
    mySet.delete(mySet[1])
}
let user_check_input = ''
function check() {
    user_check_input = document.getElementById("user_check").value
    mySet.forEach(e => {
        if (e.Name == user_check_input) { console.log(`You have  ${user_check_input}`) } else { console.log(`You don't have  ${user_check_input}`) }
    })
}
function show() {
    document.getElementById("demo").innerHTML = `<h1>List Of Animals</h1> ${names}`
}