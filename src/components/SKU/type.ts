export interface SPECITEM{
    title:string,
    list:string[],
    id:string,
}
export interface SPECCOMBINATIONITEM{
    id:string,
    specs:string[],
}
export interface SKUOptions {
    specList:SPECITEM[],
    specCombinationList:SPECCOMBINATIONITEM[],
}
export interface WAY{
    [key:string]:[number,number],
}