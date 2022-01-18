// let a = 10;
// a= '100';
// так как а опеределили как числовое значение, строчное значение уже не может быть определено. 
// Тайп скрипт начнет ругатся.



// let b: number | null = 10
// let a = null;

let names: string = "it-Kamasutra";
names = 'it-inkubator'
///////
let sex: 'male' | 'female'
sex = 'male'
/////можем указать прямо название тип как значение слова. 


let isSamurai: boolean | null = true;
isSamurai = null;

let namess: Array<string> = ['Dimych', 'Viktor', 'Valera'];
let namess2: string[] = ['Dimych', 'Viktor', 'Valera'];
alert(namess[0].toUpperCase());
//string - строка, Array масив. 2 variant tapescripts/
namess.map(n => {

});
//////////////////

let user: UserType = {
  sayHello(message: string) { alert('yo') },
  name: 'Dimych',
  age: 29,
  isSamurai: true,
  address: {
    city: 'Kiev',
    country: 'Ukraine'
  }
}
console.log(user.name)
// console.log (user.mail)
// console.log (user.sex) эти варианты не отоносятся к объекту юзер их не существует и тайп скрипт ругается.

// в TS  есть типы и интерфейсы
type AddresType = {
  city: string
  country?: string
} /// country? если поставить вопрос то если не будет этой строки в коде ругатся не будет. может быть а может 
// быть

type UserType = {
  sayHello: Function // либо (message:string) => void;
  name: string
  age: number
  isSamurai: boolean
  address: AddresType | null
}
// то что выше мы написали user присвоили : UserType и все строки не ругаются ибо соотвествуют типизации ТS.

const summ: (a: number, b: number) => number = (a: any, b: any) => {
  return a + b;
}


///////////////////////////
type InitialStateType = {
  name: string
  age: number
  isSamurai: boolean
  address: AddresType | null
}

let initialState: InitialStateType = {
  name: 'Dimych',
  age: 29,
  isSamurai: true,
  address: {
    city: 'Kiev',
  }
}
///////////////////////

//а можно типизировать уже какойто объект 
export type InitialStateType2 = typeof initialState2;

let initialState2 = {
  name: 'Dimych',
  age: 29,
  isSamurai: true,
  address: {
    city: 'Kiev',
  }
}
//что бы не типизировать одинаковые объекты каждый раз, можно сделать сравнительную типизацию.

//пример приминения 
let state1: InitialStateType2 = {
  name: 'Dimych',
  age: 29,
  isSamurai: true,
  address: {
    city: 'Kiev',
  }
}
/////////////////////////////////////

//Припустим вариант что инитиал стейт 3 у нас зашел с 0 значениями. надо определить тогда что может быть 
//  primer: name: null as string | null, age: null as number | null, ... addresses: [] as Array<AddresType2>


type AddresType2 = {
  city: string | null
  country?: string | null
}

let initialState3 = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  addresses: [] as Array<AddresType2>, //может быть что заходит масив адресов с примитивами AddresType2 указываем так <=
  counter: 0
}

export type InitialStateType3 = typeof initialState3;

let state4: InitialStateType3 = {
  name: 'Dimytch',
  age: null,
  isSamurai: true,
  addresses: [{ city: 'sdsdf', country: 'sdfdf' }],
  counter: 0
}
///////////

//////////// actionCreator TS primer

const GET_TASKS = 'APP/GetTASKS'

type GetTasksActionType = {
  type: typeof GET_TASKS, // таким образом мы типизируем что const GET_TASKS = 'APP/GetTASKS' вот такую логику.
  id: number,

}

let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 12,
}