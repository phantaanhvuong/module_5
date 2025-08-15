let courses = [
    {
        id:1,
        title:"huhuhuhu",
        rating: 4.2
    },
    {
        id:2,
        title:"hahahahaha",
        rating: 3.5
    }
];
let lists = result =>{
    for (let i = 0; i < courses.length; i++) {
        if (result[i].rating >=4){
            console.log(result[i])
        }
    }
}
// Cách dùng filter
// let lists = (arr) => {
//     let filtered = arr.filter(course => course.rating >= 4);
//     filtered.forEach(course => console.log(course));
// };
// filter cơ bản
// let lists = course => console.log(courses.filter( course=> course.rating >= 4));


(lists(courses));