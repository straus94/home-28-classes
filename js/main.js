// 1. Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
class Circle {
    constructor(r) {
        this.r = r;
    }

    get radius() {
        return this.r;
    }

    set radius(newRadius) {
        this.r = newRadius;
    }

    get diametr() {
        return this.r * 2;
    }

    square() {
        const pi = 3.14;
        return (this.r * this.r) * pi;
    }

    long() {
        const pi = 3.14;
        let d = this.r * 2;
        return d * pi;
    }
}

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.

let r = new Circle(10);
r.radius = 2;
// console.log(`radius = ${r.radius}`);
// console.log(`diametr = ${r.diametr}`);
// console.log(`square = ${r.square()}`);
// console.log(`long = ${r.long()}`);




// 2) Реализовать класс, описывающий простой маркер.
// В классе должны быть следующие компоненты:

class Marker {
    constructor(color, percent) {
        this.color = color;
        this.percent = percent;
    }

    print(str) {
        const symbol = 0.5;
        let chars = str.length;
        // console.log(chars);
        if (this.percent <= 0) {
            return console.log(`dont ink`);
            
        } else {
            for (let i = 0; i < str.length; i++) {
                this.percent -= symbol;
                if (str[i] == ' ') this.percent += symbol;
            }
        }

        console.log(`${str} - left the ${this.percent} inks`);
        // console.log(this.percent);
        
    }
}

class SetMarker extends Marker {
    constructor(color, percent) {
        super(color, percent);
        // this.addInk = addInk;
    }

    addInk(percent) {
        this.percent += percent;
        console.log(`add ${percent} inks, left the ${this.percent} inks`);
    }
}

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом;
//  текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ 
//  – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого
//  маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 

// let m = new Marker('red', 3);
// m.print('lalala');
// m.print('lalala');

// let n = new SetMarker('white', 30);
// n.print('lalala');
// n.addInk(10);


// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
class Employee {
    constructor() {
        
    }
}

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью 
// метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().





