let obj = {
    name:'aziret',
    age: 16,
    surname: 'urustamov'
};
console.log(obj);

let getInfo = prompt('Введите значение (age, name, surname,):');

getInfo = getInfo.toLowerCase();

if (getInfo === 'age') {
    alert(`Возраст :${obj.age}`)
}else if (getInfo === 'name') {
    alert(`Имя: ${obj.name}`)
}else if (getInfo === 'surname') {
    alert(`Фамилия: ${obj.surname}`)
}else {
    getInfo = prompt('Некорректный ввод! Пожалуйста, введите только эти значения (age, name, surname):');
getInfo = getInfo.toLowerCase();
if (getInfo === 'age') {
    alert(`Возраст :${obj.age}`)
}else if (getInfo === 'name') {
    alert(`Имя: ${obj.name}`)
}else if (getInfo === 'surname') {
    alert(`Фамилия: ${obj.surname}`)
}
}