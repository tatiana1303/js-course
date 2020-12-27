//№1
let a = 1;
let b = 1;
let c = ++a; //2 префиксная форма инкремента, возворщает новое значение, увеличение на единицу.
alert (c);
let d = b++; //1 постфиксная форма инкремента, возвращает старое значение
alert (d); 
c = (2+ ++a); //5, переменная а из предыдущего занчения равна 2, в этом выражении с помощью префиксного инкремента возвращено новое значение 3, 2 +3=5
alert (c); 
d = (2+ b++); 
alert (d);//4,  переменная b из предыдущего занчения равна 2, в этом выражении с помощью постфиксного инкремента возвращено старое значение 2, 2+2=4
alert(a); //3, перезаписанная переменная a
alert(b); //3, перезаписанная переменная b

//№2
let a1 = 2;
let x = 1 + (a1 *= 2);
alert (x); //5    (1+ (2*2)=5)

//№3
let a2 = 10;
let b2 = -4;
function compareNumbers (a2, b2){
    if (a2 >= 0 && b2 >= 0){ 
        alert (a2 - b2);
    } else if (a2 < 0 && b2 < 0){
        alert (a2 * b2);
    } else (a2 > 0 && b2 < 0 || a2 < 0 && b2 > 0);{
        alert (a2 + b2);
    }
}
compareNumbers (a2, b2);

//№4
let a3 = +prompt ('введите число от 1-15');
 switch (a3){
	case 1:
		alert ('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 2:
		alert ('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 3:
		alert ('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 4:
		alert ('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 5:
		alert ('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 6:
		alert ('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 7:
		alert ('7, 8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 8:
		alert ('8, 9, 10, 11, 12, 13, 14, 15');
		break;
	case 9:
		alert ('9, 10, 11, 12, 13, 14, 15');
		break;
	case 10:
		alert ('10, 11, 12, 13, 14, 15');
		break;
	case 11:
		alert ('11, 12, 13, 14, 15');
		break;
	case 12:
		alert ('12, 13, 14, 15');
		break;
	case 13:
		alert ('13, 14, 15');
		break;
	case 14:
		alert ('14, 15');
		break;
	case 15:
		alert (15);
		break;	
    }


//№5
        let a4 = 6;
		let b4 = 5;

		function plus(a4, b4) {
    		return a4 + b4;
		}
        
		function minus(a4, b4) {
    		return a4 - b4;
		}

		function div (a4, b4) {
    		return a4 / b4;
		}

		function multy (a4, b4) {
    		return a4 * b4;
        }
       alert (plus (a4, b4)); //11
       alert (minus(a4, b4)); //1
       alert (div (a4, b4)); //1.2
	   alert (multy (a4, b4)); //30 
	   
//№6

let arg1 = 7;
let arg2 = 6;
let operation = '+'; 
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case '-':
            return arg1 - arg2;
            break;
        case '*':
            return arg1 * arg2;
            break;
        case '+':
            return arg1 + arg2;
			break;
		case '/':
			return arg1 / arg2;
			break;	   
    }
}
alert (mathOperation (arg1, arg2, operation));

//№7
alert (null > 0); //false
alert (null < 0); //false
alert (null == 0); //false
alert (null >= 0); //true
alert (null <= 0); //true
alert (null === 0); //false
//№8
let val = 3;
let pow = 2;
function power(val, pow){
    if (pow == 1) {
        return val;
    } else {
    return val* power(val, pow-1);
} 
}
alert (power (val, pow)); 