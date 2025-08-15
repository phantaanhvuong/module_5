let courses = [
    { id: 1, title: "huhuhuhu", rating: 4.2 },
    { id: 2, title: "hahahahaha", rating: 3.5 },
    { id: 3, title: "hehehehe", rating: 2.8 },
    { id: 4, title: "hohohoho", rating: 5.0 }
];

let result = courses.filter(course => course.rating < 4);
let result2 = result.map(course => `${course.id} - ${course.title} - ${course.rating}`);

console.log(result2);