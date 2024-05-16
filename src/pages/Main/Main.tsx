import { memo } from 'react';
import { classNames } from '@/shared/classNames/classNames';
import cls from './Main.module.scss';
import { Header } from './ui/Header/Header';
import { Content } from './ui/Content/Content';

const Main = memo(() => (
    <div className={classNames(cls.Main, {}, [])}>
        <div className={cls.headerWrapper}>
            <Header />
        </div>
        <div className={cls.contentWrapper}>
            <Content />
        </div>
    </div>
));

export default Main;
