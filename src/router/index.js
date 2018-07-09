import Appframe from '../components/Appframe.vue'
import DashView from '../components/Dash.vue'
import NotFoundView from '../components/404.vue'

import Table from '../views/Table.vue'


// Routes
const routes = [
  {
    path: '/',
    component: Appframe,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'table',
        component: Table,
        name: 'Table',
        meta: {description: 'Simple and advance table in CoPilot'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
