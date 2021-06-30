// 原始值类型：string，number，boolean
const str : string = 'hello ts';
const num : number = 2;
const bool : boolean = true;

export type stringType = typeof str;
export type numType = typeof num;
export type boolType = typeof bool;

// 数组类型

// 可以使用[]进行类型定义
const numArr : number[] = [1,2,3];
const strArr : string[] = ['1','2','3'];
const booleanArr : boolean[] = [true,false];

// 也可以使用Array<T>进行类型定义
const numArr2 : Array<number> = [1,2,3];
const strArr2: Array<string> = ['1','2','3'];
const booleanArr2 : Array<boolean> = [true,false];

export type numArrType = typeof numArr;
export type strArrType = typeof strArr;
export type boolArrType = typeof booleanArr;

export type numArr2Type = typeof numArr;
export type strArr2Type = typeof strArr;
export type boolArr2Type = typeof booleanArr;




type MyPick<T,K extends keyof T> = {
  [k in K] : T[k];
}


interface A {
  a: string;
  b : string;
  c : number;
}


type PickType =  MyPick<A,'a'>;