import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appStore from '../../app/appStore';

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
