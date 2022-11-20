import { Dispatch, SetStateAction } from "react";

export function handleScroll(event: any, setPageNumber: Dispatch<SetStateAction<number>>, pageNumber: number) {
    console.log(event.nativeEvent.contentOffset);
    
    setPageNumber(pageNumber + 1);
}