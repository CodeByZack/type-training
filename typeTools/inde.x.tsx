type MyPick<T,K extends keyof T> = {
  [k in K] : T[k];
}


interface A {
  a: string;
  b : string;
  c : number;
}


type PickType =  MyPick<A,'a'>;