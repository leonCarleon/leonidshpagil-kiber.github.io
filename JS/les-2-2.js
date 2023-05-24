var animals = ['Кот','Сабака','Карова','Риба']

// .indexOf - определяет индекс элемента в массиве
//alert(animals.indexOf('Карова'))
alert( 'исходный список :' + animals)


// .splise - удаляет элементы массива с опр. индекса в опр. кол-ве

newanimals = animals.splice(2, 1)
animals.splice(2, 1)
alert( 'измененный список :' + animals)
alert( 'Вырезаные эл списка :' + newanimals)
