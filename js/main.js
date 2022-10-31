'use strict';

let throwDice = () => Math.ceil( Math.random() * 6 );

let throws = +prompt('Сколько кубиков кидаем (1 - 10) ?').trim();

switch(throws) {
    case 1 : alert( throwDice() ); break;
    case 2 : alert( `${throwDice()} + ${throwDice()}` ); break;
    case 3 : alert( `${throwDice()} + ${throwDice()} + ${throwDice()}` ); break;
    case 4 : alert( `${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()}` ); break;
    case 5 : alert( `${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()}` ); break;
    case 6 : alert( `${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()}` ); break;
    case 7 : alert( `${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()}` ); break;
    case 8 : alert( `${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()}` ); break;
    case 9 : alert( `${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()}` ); break;
    case 10 : alert( `${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()} + ${throwDice()}` ); break;
    default : alert( 'Число должно быть от 1 до 10' );
}