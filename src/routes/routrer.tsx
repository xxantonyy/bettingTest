import { ReactNode } from 'react';
import { Error } from '@/pages/Error';
import { Main } from '@/pages/Main';

export interface IRoute {
    path: string;
    component: ReactNode;
}

export enum RouteNames {
    HOME = '/',
    ERROR = '*',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.HOME, component: <Main /> },
    { path: RouteNames.ERROR, component: <Error /> },
];
