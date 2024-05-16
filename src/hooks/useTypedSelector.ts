import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useTypedSelector = useSelector.withTypes<RootState>();
