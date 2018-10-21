//No Prompt // Need to smooth these out, but they work well!
function payroll(week1, week2, rate){
	const overtimeRate = ((rate)*1.5);
	if ((week1 <= 40) && (week2 <= 40)) {
		let noOvertime = ((week1 + week2)*rate);
		return noOvertime;
	} else if ((week1 > 40) && (week2 <= 40)) {
			let weekOneOvertime = ((week1 - 40)*overtimeRate);
			let remainderWeek1 = ((40)*rate);
			let remainderWeek2 = ((week2)*rate);
			console.log("weekOneOvertime")
			return (weekOneOvertime+remainderWeek1+remainderWeek2);
	} else if ((week1 <= 40) && (week2 > 40)) {
			let week2Overtime = ((week2 - 40)*overtimeRate);
			let remainderWeek2 = ((40)*rate);
			let remainderWeek1 = ((week1)*rate);
			console.log("week2Overtime")
			return (week2Overtime+remainderWeek2+remainderWeek1);
	} else {
			let overtimePay = (((week1+week2)-80)*overtimeRate);
			let pay = ((rate)*80);
			console.log("overtimePay")
			return (overtimePay + pay);
	}
}

//Prompt //Need to smooth these out, but they work well! 
const Prompt = function() {
	const week1 = prompt("Enter hours for week one.");
	const week2 = prompt("Enter hours for week two.");
	const rate = prompt("Enter hourly rate.");
	const overtimeRate = ((rate)*1.5);
	if ((week1 <= 40) && (week2 <= 40)) {
		const noOvertime = ((week1 + week2)*rate);
		console.log("noOvertime")
		return noOvertime;
	} else if ((week1 > 40) && (week2 <= 40)) {
			const weekOneOvertime = ((week1 - 40)*overtimeRate);
			const remainderWeek1 = ((40)*rate);
			const remainderWeek2 = ((week2)*rate);
			console.log("weekOneOvertime")
			return (weekOneOvertime+remainderWeek1+remainderWeek2);
	} else if ((week1 <= 40) && (week2 > 40)) {
			const week2Overtime = ((week2 - 40)*overtimeRate);
			const remainderWeek2 = ((40)*rate);
			const remainderWeek1 = ((week1)*rate);
			console.log("week2Overtime")
			return (week2Overtime+remainderWeek2+remainderWeek1);
	} else {
			const overtimePay = ((((parseInt(week1))+(parseInt(week2))) - 80)*overtimeRate);
			const pay = ((rate)*80);
			console.log("overtimePay", overtimePay)
			console.log("pay", pay)
			return (overtimePay + pay);
	}
}