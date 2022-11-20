import { Dispatch, SetStateAction } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>, scrollViewRef: any, setPageNumber: Dispatch<SetStateAction<number>>, pageNumber: number) {
    if(event.nativeEvent.contentOffset.y === 0.0) {
        setPageNumber(pageNumber + 1);
        scrollViewRef.current.scrollTo({y: 1, animated: true})
    }
}