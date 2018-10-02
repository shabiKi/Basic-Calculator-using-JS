function ADDnumber(){
	var firstNumber = Number(document.formCalc.txtnum1.value);
	var secondNumber = Number(document.formCalc.txtnum2.value);
	var res = firstNumber+secondNumber
	document.formCalc.txtres.value = res;
}

function SUBTRACTnumber(){
	var firstNumber = Number(document.formCalc.txtnum1.value);
	var secondNumber = Number(document.formCalc.txtnum2.value);
	var res = firstNumber-secondNumber
	document.formCalc.txtres.value = res;
}

function Multiplynumber(){
	var firstNumber = Number(document.formCalc.txtnum1.value);
	var secondNumber = Number(document.formCalc.txtnum2.value);
	var res = firstNumber*secondNumber
	document.formCalc.txtres.value = res;
}

function Dividenumber(){
	var firstNumber = Number(document.formCalc.txtnum1.value);
	var secondNumber = Number(document.formCalc.txtnum2.value);
	var res = firstNumber/secondNumber
	document.formCalc.txtres.value = res;
}
