import { Dispatch, SetStateAction } from "react";

export function handleScroll(event: any, setPageNumber: Dispatch<SetStateAction<number>>, pageNumber: number) {
    if(event.nativeEvent.contentOffset.y === 0.0) {
        setPageNumber(pageNumber + 1);
    }
}