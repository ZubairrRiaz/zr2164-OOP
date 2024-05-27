import inquirer from 'inquirer'

class Person {

    name1:string = 'Extrovert';
    name2:string = 'introvert';
    name3:string = 'Mystery.'

   async inputfunction() {

        let answer = await inquirer.prompt({
            name: 'input',
            type: 'input',
            message: 'Type 1 if you like to talk to others and type 2 if you would rather keep to yourself:',
            
        })

        if(answer.input == '1'){

            console.log(`You are: ${this.name1}`);
            
        }else if(answer.input == '2'){

            console.log(`You are: ${this.name2}`);
            
        }else {
            console.log(`Yo are Still a ${this.name3}`);
            
        }

        let ans = await inquirer.prompt({
            name: 'input2',
            type: 'input',
            message: 'What is your Name?'
        })

        console.log(`Your Name is: ${ans.input2} and your Perspnality type is ${this.name3}`);


    };

}

let p1 = new Person()

console.log(await p1.inputfunction());



