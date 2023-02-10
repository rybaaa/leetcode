class Worker {
    #name
    #surname
    #rate
    #days

    constructor(name, surname, rate, days) {
        this.#name = name
        this.#surname = surname
        this.#rate = rate
        this.#days = days
    }

    getSalary() {
        return this.#rate * this.#days
    }

    getName() {
        return this.#name
    }

    getSurname() {
        return this.#surname
    }

    getRate() {
        return this.#rate
    }

    setRate (rate){
        this.#rate = rate
    }

    setDays(days){
        this.#days = days
    }

    getDays() {
        return this.#days
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10

class MyString {
    reverse(str) {
        return str.split('').reverse().join('')
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1)
    }

    ucWords(str) {
        let arr = str.split(' ')
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
        return arr.join(' ')
    }
}


var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

console.log('abcde'.slice(1))