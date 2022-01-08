interface Student {
  name : string;
  avgMark : number;
}

interface Statistics {
  avgMark : number;
  highestMark : string;
  lowestMark : string;
}

function getStatisics(marks : Student[]) : Statistics {
  let studentCount = marks.length;
  let summ = 0;

  let avgMark = 0;
  let highestMarkOA = 0;
  let highestMark = "";
  let lowestMarkOA = 5;
  let lowestMark = "";

  for (let i of marks){
    summ += i.avgMark;
    if (highestMarkOA < i.avgMark){highestMarkOA = i.avgMark; highestMark = i.name;}
    if (lowestMarkOA > i.avgMark){lowestMarkOA = i.avgMark; lowestMark = i.name;}
  }

  avgMark = summ / studentCount;

  return {avgMark, highestMark, lowestMark};
}

const testMarks = [{
    name : "Vasya",
    avgMark : 3.75
  },
  {
    name : "Lena",
    avgMark : 4.89
}]

console.log(getStatisics(testMarks));
