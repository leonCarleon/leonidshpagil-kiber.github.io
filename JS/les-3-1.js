// for([начало]; [yclovie]; [шаг]) {deustvia}

var num = prompt('Введите число элементов массива')

// создаем пустой массив
var arr = []

for (i=0; i < num; i++) {
    arr.push(prompt('Введите'+ Number(i + 1)+ ' элемент'))
}

alert(arr)
