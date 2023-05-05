let a = 1;
console.log(a);
console.log('Hello World');
a = 'test'; 
console.log(a);


let money = 80;
let hourWork = 5;
let weekWork = 5;
let order = 40;
let dayWork = 11; 
let calc = order / hourWork / weekWork;
let compare = calc <= dayWork;
console.log(compare)
let totalMoney = money * order;
console.log(totalMoney)


const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11-2) * 5;
console.log('Смогу лия яработать? ' + (availableHours > projectHours))

console.log('Стоимость работ: ' + projectHours * payRateUSD + '$')


const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template)

const template2 = `Проект
Цена: ${price}$`;
console.log(template2)



const money1 = 100;
if (money1 > 50) {
	console.log('Может купить наш продукт');
}	else if (money1>5) {
	console.log('kuplen mimi product')
}	else {
	console.log('ne hvataet balnce')
}
console.log('Itog')

const money2 = 12000;
const total = money2 * (1 + 0.07 / 12) ** 24;
if (total > 13500) {
	console.log(`Сможет купить дом. Остаток: ${total - 13500} $`)
} else {
	console.log('ne smozhet kupit dom')
}


const role = 'manager';

if (role === 'manager') {
	console.log('Менеджер')
}


const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвертируем права админа ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный файл с редактированием ${
	isAdmin && canWrite && (!isEdited || isSuperAdmin)
}`);
let c = 7;
if (c === -8 || c === 22) {

}

const user = 'Бауржан'
const balanceUser = 1500;
const bonusBalanceUser = 90;
const banUser = false;
const isExistGame = false;
const isSellingGame = true;

const canBuy = (balanceUser > 1000 || bonusBalanceUser > 100) && !banUser && !isExistGame && isSellingGame;

console.log(`Смогу купить игру: ${canBuy ? 'Да' : 'Нет'}`)


10 < 0 ? console.log('Больше 0') : console.log('Не больше');

function toPower(num, power) {
	const res = num ** power;
	return res;
}

console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 4));


function canAccessWebsite(age) {
	if (age < 18) {
		return false;
	}
		return true;
}

console.log(canAccessWebsite(18))

const canAccessWebsite2 = age => age < 18 ? 'Нет' : 'Да';
console.log(canAccessWebsite2(18))


const KG_IN_USD = 7
const KM_IN_USD = 5

function calculateW(present) {
	return present * KG_IN_USD
}

function calculateKm(distance) {
	return distance * KM_IN_USD
}

function getExchagePrice(present1, present2, distance) {
	const price1 = present1 * KG_IN_USD;
	const price2 = present2 * KG_IN_USD;
	const distancePrice = distance * KM_IN_USD;
	return price1 + price2 + distancePrice;
}

console.log(getExchagePrice(1, 2, 10))


function computeCredit(age, haveJob = false) {
	switch(true) {
		case age > 24 && haveJob:
			return 500;
		case age > 24:
			return 100;
			default:
				return 0;
	}
}

function canBuy1(productPrice, age, balance, haveJob = false) {
	const creditMoney = computeCredit(age, haveJob);
	return productPrice <= balance + creditMoney;
}

console.log(canBuy1(2000, 25, 1900));



