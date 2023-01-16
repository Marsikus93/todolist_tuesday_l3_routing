export const dataState:DataStateType={
    pages:
        [
            {
                heading:"Cycle while",
                about:"Cycle while has such syntax"
            },
            {
                heading:"Cycle for",
                about:"Cycle for has such syntax"
            },
            {
                heading:"Construction \"switch\"",
                about:"Construction switch has such syntax"
            },
        ]
}
export type DataStateType={
    pages:Array<PagesType>
}
export type PagesType={
    heading:string
    about:string
}