let addedCourses = [
{
    id: 6,
        title: "PHP Tutorial",
    rating: 3,
},
{
    id: 7,
        title: "C# Tutorial",
    rating: 2,
},
{
    id: 8,
        title: "Docker Tutorial",
    rating: 3.8
}
];
let courses = [
    { id: 1, title: "huhuhuhu", rating: 4.2 },
    { id: 2, title: "hahahahaha", rating: 3.5 },
    { id: 3, title: "hehehehe", rating: 2.8 },
    { id: 4, title: "hohohoho", rating: 5.0 }
];
let result = (arr1,arr2)=>{
    let arr3 = [...arr1,...arr2]
    console.log(arr3)
};
result(courses,addedCourses);

