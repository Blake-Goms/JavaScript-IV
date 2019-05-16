// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}!`)
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}`)
    }
    grade(Student, subject) {
        return (`${Student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects(favSubjects) {
        return (favSubjects);
    }
    PRAssignment(subject) {
        return (`${Student.name} gas submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        return (`${Student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUP(channel) {
        return (`${this.name} announces to ${channel}, @${channel} stand up times`)
    }
    debugsCode(Student, subject) {
        return (`${ProjectManagers.name} debugs ${Student.name}'s code on ${subject}`)
    }
}

//Start of Instructor Objects
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const dan = new Instructor({
    name: 'Dan',
    location: 'LA',
    age: 31,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the relish`
});
const ryan = new Instructor({
    name: 'Ryan',
    location: 'Vegas',
    age: 29,
    gender: 'male',
    favLanguage: 'Redux',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the pickles`
});
//Start of Student Objects
const blake = new Student ({
    name: 'Blake',
    location: 'Avengers Tower',
    age: 23,
    gender: 'male',
    previousBackground: 'Community College',
    className: 'WEB20',
    favSubjects: ['ComputerScience ' , 'GameDevelopment ', 'History']
});
const phil = new Student ({
    name: 'Phil',
    location: 'Somewhere',
    age: 28,
    gender: 'male',
    previousBackground: 'Community College',
    className: 'WEB20',
    favSubjects: ['UI/UX ' , 'WebDevelopment']
});
const jaytee = new Student ({
    name: 'Jaytee',
    location: 'Bay Area',
    age: 27,
    gender: 'male',
    previousBackground: 'Video Editor',
    className: 'WEB20',
    favSubjects: ['Programming ', 'UI/UX']
});
//Start of ProjectManagers Objects
const josh = new ProjectManagers ({
    name: 'Josh',
    location: 'Arizona',
    age: 27,
    gender: 'male',
    gradClassName: 'WEB17',
    favInstructor: 'Josh-Knell',
});
const brian = new ProjectManagers ({
    name: 'Brian',
    location: 'Arizona',
    age: 47,
    gender: 'male',
    gradClassName: 'WEB17',
    favInstructor: 'Ryan',
});
const maks = new ProjectManagers ({
    name: 'Maks',
    location: 'DC',
    age: 25,
    gender: 'male',
    gradClassName: 'WEB17',
    favInstructor: 'Josh-Knell',
});

//testing with Instructors
console.log(fred.demo('Javascript'));
console.log(fred.grade(blake, blake.favSubjects));

console.log(dan.demo('HTML'));
console.log(dan.grade(phil, phil.favSubjects));

console.log(ryan.demo('React'));
console.log(ryan.grade(jaytee, jaytee.favSubjects));

//testing with Students
console.log(blake.listsSubjects(blake.favSubjects));
console.log(blake.PRAssignment('javascript'));

console.log(phil.listsSubjects(phil.favSubjects));
console.log(phil.PRAssignment('React'));

console.log(jaytee.listsSubjects(jaytee.favSubjects));
console.log(jaytee.PRAssignment('HTML'));

//testing with ProjectManagers
console.log(josh.standUP('WEB20'));
console.log(josh.debugsCode(blake, blake.favSubjects));

console.log(brian.standUP('WEB19'));
console.log(brian.debugsCode(phil, phil.favSubjects));

console.log(maks.standUP('WEB18'));
console.log(maks.debugsCode(jaytee, jaytee.favSubjects));