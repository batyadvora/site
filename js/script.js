let ktotam = prompt ( 'Кто там?' );
if (ktotam == null) {
	alert ( 'Отмена' )
} else if (!(ktotam == 'админ' && ktotam == null )) {
	alert ( 'я вас не знаю' )
} else if ( ktotam == 'админ') {
let parol = prompt ( 'Пароль?' )
	if (parol == 'я главный') {
		alert ( 'Привет!' )
	} else if (!(parol == 'я главный' && parol == null)) {
		alert ( 'Неверный пароль' )
	} else if (parol == null) {
		alert ( 'отмена' )
	}
