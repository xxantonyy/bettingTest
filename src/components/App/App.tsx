import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/routes/AppRouter';
import { Loading } from '@/widgets/Loading/Loading';
import { store } from '@/store';
import './App.scss';

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <AppRouter />
            </Suspense>
        </BrowserRouter>
    </Provider>
);
