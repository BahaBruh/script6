const users = {
    
}


    for (var i = 1; i < 6; i++) {
        
        users[i] = {
        name: 'Имя : ' + prompt('пользователь' + i ' введите имя'),
        age:  'Возраст : ' + +prompt(' Введите возраст')
        }
        
    }
    for (const key in users) {
        console.log( ` Пользователь - ${i} : `);
        for (const key2 in users[key]) {
            console.log(users[key][key2]);
        }
    }





const rec = receipt()

console.log(rec);

for (const key in rec) {
        console.log( ` Вы заказали : ${key} `);
    console.log(` info : ${rec[key].info}`);
    console.log(` price : ${rec[key].price}`);
    console.log( 'Общая стоимость с учетом доставки - 9000 =  ' + rec[key].price + rec[key].price + 9000 );
        }
        

    
    
