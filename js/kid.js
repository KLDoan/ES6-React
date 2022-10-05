let kids = [
    { id: 1, name: "Nguyễn Văn A", age: 3 },
    { id: 2, name: "Lê Văn B", age: 2 },
    { id: 3, name: "Hoàng Thị C", age: 7 },
    { id: 4, name: "Adam", age: 4 },
    { id: 5, name: "Eva", age: 8 }
];

const kinder = [];
kids.forEach(kid => {
    if (kid.age < 6) {
        kinder.push({
            id: kid.id,
            name: kid.name
        })

    }
})
// console.log(kinder);
// tieu hoc
const primary_kids = [];
kids.forEach(kid => {
    if (kid.age >= 6 && kid.age <= 11) {
        primary_kids.push({
            id: kid.id,
            name: kid.name
        })
    }
})
// console.log(primary_kids);
export { kinder, primary_kids };


