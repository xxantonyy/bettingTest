import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';

export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
