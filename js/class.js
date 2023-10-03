// class Instructor {
//     name;
//     designation = ' Web Course Instructor'
//     team= ' Web team'
//     location;
//     startSupportSession(time){
//         console.log(`Starrt the support session at ${time}`)
//     }
//     createQuiz(module){
//         console.log(`Please create quiz for the ${module}`)
//     }

//     constructor(name, location){
//         this.name= name;
//         this.location = location;
//     }
// }

// const aamir = new Instructor('aamir','Dhaka');
// console.log(aamir)


///////////// Nested and Advanced/////////////////////////

class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name= name;
        this.location = location;
    }
 provideFeedback(){
        console.log(`${this.name} thank you for your feedback!!!`)
    }
}

class Instructor extends TeamMember{
    // name;
    designation = ' Web Course Instructor'
    team= ' Web team'
    // location;
    constructor(name, location){
        super(name, location)
                // this.name= name;
                // this.location = location;
            }
    startSupportSession(time){
        console.log(`Starrt the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for the ${module}`)
    }

    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback!!!`)
    // }
}
class Developer extends TeamMember{
    // name;
    designation = ' Web Course Instructor'
    team= ' Web team'
    // location;
    tech;
    constructor(name, location, tech){
        super(name, location)
        // this.name= name;
        // this.location = location;
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    realse(version){
        console.log(`Please realse the ${version}`)
    }

    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback!!!`)
    // }
}
class JobPlacement extends TeamMember{
    // name;
    designation = ' Job Placement Commandos'
    team= ' JOb Placement team'
    // location;
  
    constructor(name, location, region){
        super(name, location)
        // this.name= name;
        // this.location = location;
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the ${feature}`)
    }
   prepareStudent(version){
        console.log(`Please realse the ${version}`)
    }

    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback!!!`)
    // }
}

const alia= new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia)

const bipasa = new JobPlacement('Bipasa Baso', 'India', 'Sub-Continent')
console.log(bipasa)