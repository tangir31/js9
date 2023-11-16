let arr = [
    // ... (ваш исходный массив)
];

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
];

// Проходим по каждому элементу в исходном массиве
arr.forEach(person => {
    // Получаем значение faculity и переводим его в верхний регистр для сравнения
    const faculity = person.info.faculity.toUpperCase().trim();

    // Находим соответствующую категорию и увеличиваем счетчик count
    const categoryIndex = categories.findIndex(category => category.course === faculity);
    if (categoryIndex !== -1) {
        categories[categoryIndex].count++;
    }
});

console.log(categories);