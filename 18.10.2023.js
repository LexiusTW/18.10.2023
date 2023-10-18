//№1
//Массив с названиями дней недели
const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  ];
  
  const dayNumber = 4; //Задаем любой порядковый номер
  
  if (dayNumber >= 1 && dayNumber <= 7) {   //Проверяем что данный номер находится в допустимом диапозоне от 1 до 7
    const dayName = days[dayNumber - 1];    //получаем название дня недели
    console.log(`№1 - ${dayName}`);    //выводим это название
  } else {
    console.log("№1 - Недопустимый номер дня недели"); //выводится в том случае если порядковый номер не соответсвует диапозону
  }
  
//№2
// Задаем номер масти (от 1 до 4)
const Number = 2; 
let Name;

// Используем оператор switch для определения названия масти и присваиваем порядковый номер каждой масти 
switch (Number) {
  case 1:
    Name = "Пики";
    break;
  case 2:
    Name = "Трефы";
    break;
  case 3:
    Name = "Бубны";
    break;
  case 4:
    Name = "Червы";
    break;
  default:
    Name = "№2 - Недопустимый номер масти"; // добавляем стандартнок значение которое будет выводить текст при не верном порядковом номере
    break;
}

console.log(`№2 - Номер ${Number} соответствует масти - ${Name}`); 

//№3
// Задаем номер масти (от 1 до 4) и номер достоинства карты (от 6 до 14)
const suitNumber = 1; 
const rankNumber = 11;

let suitName;
let rankName;

switch (suitNumber) {
  case 1:
    suitName = "пики";
    break;
  case 2:
    suitName = "трефы";
    break;
  case 3:
    suitName = "бубны";
    break;
  case 4:
    suitName = "червы";
    break;
  default:
    suitName = "№3 - Недопустимый номер масти";
    break;
}

switch (rankNumber) {
  case 6:
    rankName = "Шестерка";
    break;
  case 7:
    rankName = "Семерка";
    break;
  case 8:
    rankName = "Восьмерка";
    break;
  case 9:
    rankName = "Девятка";
    break;
  case 10:
    rankName = "Десятка";
    break;
  case 11:
    rankName = "Валет";
    break;
  case 12:
    rankName = "Дама";
    break;
  case 13:
    rankName = "Король";
    break;
  case 14:
    rankName = "Туз";
    break;
  default:
    rankName = "Недопустимый номер достоинства";
    break;
}
//выводим название карты
console.log(`№3 - Ваша карта: ${rankName} ${suitName}`);

