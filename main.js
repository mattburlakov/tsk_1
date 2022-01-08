function getStatisics(marks) {
    var studentCount = marks.length;
    var summ = 0;
    var avgMark = 0;
    var highestMarkOA = 0;
    var highestMark = "";
    var lowestMarkOA = 5;
    var lowestMark = "";
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var i = marks_1[_i];
        summ += i.avgMark;
        if (highestMarkOA < i.avgMark) {
            highestMarkOA = i.avgMark;
            highestMark = i.name;
        }
        if (lowestMarkOA > i.avgMark) {
            lowestMarkOA = i.avgMark;
            lowestMark = i.name;
        }
    }
    avgMark = summ / studentCount;
    return { avgMark: avgMark, highestMark: highestMark, lowestMark: lowestMark };
}
var testMarks = [{
        name: "Vasya",
        avgMark: 3.75
    },
    {
        name: "Lena",
        avgMark: 4.89
    }];
console.log(getStatisics(testMarks));
