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
    { path: '/', component: <Overview /> },
    { path: '/account/expert-pending', component: <AccountView /> },
    { path: '/account/expert-pending/:id', component: <DetailAccount /> },
    { path: '/account/users', component: <UserView /> },
    { path: '/account/experts', component: <ExpertView /> },
    { path: '/account/blocked', component: <BlockedListAccount /> },
    { path: '/blog/all', component: <BlogView /> },
    { path: '/blog/blocked', component: <BlockedListBlog /> },
    { path: '/blog/:id', component: <DetailBlog /> },
    { path: '/report', component: <ReportView /> },
    { path: '/history', component: <HistoryView /> },
]
