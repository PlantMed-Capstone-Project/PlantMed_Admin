import { Sidebar } from 'layouts'
import AccountView from 'views/account'
import BlockedListAccount from 'views/account/components/BlockedListAccount'
import DetailAccount from 'views/account/components/DetailAccount'
import ExpertView from 'views/account/components/ExpertView'
import UserView from 'views/account/components/UserView'
import BlogView from 'views/blog'
import BlockedListBlog from 'views/blog/components/BlockedListBlog'
import DetailBlog from 'views/blog/components/DetailBlog'
import HistoryView from 'views/history'
import Overview from 'views/overview'
import ReportView from 'views/report'

export const routes = [
    { path: '/', component: Overview, layout: Sidebar },
    {
        path: '/account/expert-pending',
        component: AccountView,
        layout: Sidebar,
    },
    {
        path: '/account/expert-pending/:id',
        component: DetailAccount,
        layout: Sidebar,
    },
    { path: '/account/users', component: UserView, layout: Sidebar },
    { path: '/account/experts', component: ExpertView, layout: Sidebar },
    {
        path: '/account/blocked',
        component: BlockedListAccount,
        layout: Sidebar,
    },
    { path: '/blog/all', component: BlogView, layout: Sidebar },
    { path: '/blog/blocked', component: BlockedListBlog, layout: Sidebar },
    { path: '/blog/:id', component: DetailBlog, layout: Sidebar },
    { path: '/report', component: ReportView, layout: Sidebar },
    { path: '/history', component: HistoryView, layout: Sidebar },
]
