import { AppDispatcher, RootState } from "./../store/index";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatcher>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
