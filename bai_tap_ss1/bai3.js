const getInfo = ({firstName = 'Quân',degree = 'VN'}) => {
    console.log(`firstName: ${firstName}
    degree: ${degree}`);
};

const sv1 = {
    firstName: 'Vương',
    gender:'male',
    english: 'English'
};
const sv2 = {
    name:'Vương',
    degree: 'Trung Quốc'
}
getInfo(sv1);
getInfo(sv2)

