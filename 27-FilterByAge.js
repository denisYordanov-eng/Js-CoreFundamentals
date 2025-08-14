function filterByAge(minAge, p1Name,p1Years,p2Name,p2Years){
    let person1={name:p1Name,age:p1Years};
    let person2={name:p2Name,age:p2Years};

    let minYears=minAge;

    if(person1.age >= minAge){
        console.log(person1);
    }
    if(person2.age >= minAge){
        console.log(person2);
    }
}
filterByAge(12, 'Ivan', 15, 'Asen', 9)