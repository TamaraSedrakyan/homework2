const hwGrade1 = 54;
const hwGrade2 = 70;
const studentName = "Vazgen";
const total = (hwGrade1 + hwGrade2)/2; 
if (total >= 87 + 10) {
	console.log(studentName + " got A+");
} else if (total >= 50 + 10){
	console.log(studentName + " got a positive grade");
} else if (total >= 0){
	console.log(studentName + " failed");
} else {
	console.log("Wrong input, " + studentName + " jan");
}
