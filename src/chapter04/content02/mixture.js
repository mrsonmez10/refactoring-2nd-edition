/*
 * - Birim testleri birbirinden izole ve bağımsızdır
 * - Verilen herhangi bir davranış tek ve sadece bir testte belirtilmelidir
 * - Tekrarlanabilir, hızlı, yazma ve okuması kolay olmalı (Mülakat örneği)
 * - Genel yazılım kurallarımız geçerli (Dry, naming vs..)
 * - TDD yönelimi -> Örnekli göreceğiz!
 * - Kullandığınız kütüphanelerin temel ve kritik noktalarını bilin
 */

function prepareMessage(name) {
	return `Hey ${name}`;
}

function isNumberEven(n) {
	return n % 2 == 0;
}

function isNumberOdd(n) {
	return Math.abs(n % 2) == 1;
}

function getCustomer(id) {
	return { id, name: 'Jane' };
}

const persons = ['Jane', 'Doe', 'Sane', 'Mathew'];
function getPersons() {
	return persons;
}

function downloadCV(path) {
	if (!path) {
		throw new Error('invalid URL');
	}
	return 'Content';
}

module.exports = {
	prepareMessage,
	isNumberEven,
	isNumberOdd,
	getCustomer,
	getPersons,
	downloadCV
};