/*
    model used for;
    paginating and sorting
*/
export interface SearchConfig{
    _page:number;
    _limit:number;

    _sort:string;
    _order:string;
}