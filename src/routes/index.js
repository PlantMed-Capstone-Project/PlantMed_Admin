import AccountView from 'views/account'
import BlogView from 'views/blog'
import HistoryView from 'views/history'
import Overview from 'views/overview'
import ReportView from 'views/report'

export const routes = [
    { path: '/', component: <Overview /> },
    { path: '/account/expert', component: <AccountView /> },
    { path: '/blog/all', component: <BlogView /> },
    { path: '/report', component: <ReportView /> },
    { path: '/history', component: <HistoryView /> },
]
