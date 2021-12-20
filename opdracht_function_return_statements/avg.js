const grades = [80, 77, 88, 95, 68];

/*dit heb ik gestolen van stackoverflow, 
ik kon geen andere solution vinden, maar ik snap 
deze eigenlijk nog niet zo... ik ga het in de 
oplossing zoeken die hierna gegeven wordt*/

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);