import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import ClassIcon from '@mui/icons-material/Class';
import { ComponentType, ReactNode } from 'react';

interface SidebarItem {
    icon:ComponentType,
    title:string,
    link:string
};

export const SidebarData:SidebarItem[] = [
    {
        icon: ArticleIcon,
        title:'授業一覧',
        link:'/classes',
    },
    {
        icon: CalendarMonthIcon,
        title:'時間割',
        link:'/schedule',
    },
    {
        icon: CoPresentIcon,
        title:'学生情報',
        link:'/userdetail',
    },
    {
        icon: LanguageIcon,
        title:'WebClass',
        link:'/webclass',
    },
    {
        icon: ClassIcon,
        title:'CAMPUS SQUARE',
        link:'/canpusquare',
    }
];

export const FooterData:SidebarItem[] = [
    {
        icon: SettingsIcon,
        title:"設定",
        link:"/setting",
    },
    {
        icon: EmailIcon,
        title:"お問い合わせ",
        link:"/contact",
    },

]