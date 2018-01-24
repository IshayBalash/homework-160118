let cinema: Cinema = new Cinema();
let person_arry: Array<Person> = new Array<Person>(15);
set_person(person_arry);
cinemainfo(person_arry, cinema);

function set_person(arr: Array<Person>): void {
    for (let i: number = 0; i < arr.length; i++) {
        let randomnum: number = Math.round(Math.random() * (2 - 0) + 0)
        switch (randomnum){
            case 0:
                arr[i] = new Student()
                break;
            case 1:
                arr[i] = new Teacher();
                break;
            case 2:
                arr[i] = new worker();
                break
        }
    }
}

function cinemainfo(arr: Array<Person>, cinema: Cinema): void {
    let sum_income: number = 0;
    let num_of_total_viewrs: number=0;
    let num_of_students: number=0;
    let num_of_teachesrs: number=0;
    let num_of_workers: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        let temp: Person = arr[i]
        if (temp instanceof Student) {
            num_of_students++
            sum_income = sum_income + (cinema.movie_price - (cinema.movie_price / 100 * cinema.student_discount))
        }
        else if (temp instanceof Teacher) {
            num_of_teachesrs++;
            sum_income = sum_income + (cinema.movie_price - (cinema.movie_price/100 * cinema.teacher_discount))
        }
        else if (temp instanceof worker) {
            num_of_workers++;
            sum_income = sum_income + cinema.movie_price
        }
        num_of_total_viewrs++;
    }
    document.write(`the cinema name is: ${cinema.cinema_name}<br/>`);
    document.write(`the cinema movie price is: ${cinema.movie_price}<br/>`);
    document.write(`the cinema discount for students: ${cinema.student_discount}%<br/>`);
    document.write(`the cinema discount for teachers: ${cinema.teacher_discount}%<br/>`);
    document.write(`the cinema income for today is: ${sum_income}<br/>`);
    document.write(`the cinema total viewers is: ${num_of_total_viewrs}<br/>`);
    document.write(`the cinema student viewers number is: ${num_of_students}<br/>`);
    document.write(`the cinema teachers viewers number is: ${num_of_teachesrs}<br/>`);
    document.write(`the cinema workers viewers number is: ${num_of_workers}<br/>`);
}


