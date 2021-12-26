console.log('Wecome! What is your name?')

/* volgens mij kan ik de form alleen in HTML maken toch? Dithebben we nog niet 
geleerd. Ik doe een poging, maar iet terug krijgen, nog geen idee.
Eerlijk gezegd vind ik dit ineens een flinke stap verder dan wat we tot nu toe
geleerd hebben.

Ik krijg geen "return" van het spelletje. Dus m'n link naar de .js file zal niet kloppen.

Helaas vanwege de deadline geen tijd om dieper hierop in te gaan via repl.it*/

console.log('Hey [name]')
console.log('Enter a number between 0 and 25 and click enter to start guessing...')

const randomNumber = Math.floor(Math.random() * 100) + 1
    console.log('Random Number', randomNumber)

    function checkGuess() {
      let myGuess = guess.value
      if (myGuess === randomNumber) {
        feedback.textContent = "You got it right!"
      } else if (myGuess != randomNumber) {
        feedback.textContent = "Your guess was " + myGuess + ". That's wrong. Try Again!"
       }
   }
   submitGuess.addEventListener('click', checkGuess)