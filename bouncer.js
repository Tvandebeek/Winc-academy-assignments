
var age = 20; 
const maxNumPeople = 100; 
var curNumPeople = 51;

const bouncerBotBrenda = function (maxNumPeople, curNumPeople, age) {
    if (age<18){
         answer =('this is a club for adults');
    }else{
            if (curNumPeople<=maxNumPeople){
            answer=('come in');
            }else{
            answer=('it is too busy now, please come back later');
            }
        }
        return (answer);
    }

    console.log (answer);
   
   