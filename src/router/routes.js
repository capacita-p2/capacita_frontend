
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'acesso', component: () => import('pages/Acesso.vue') },
      { path: 'inscricaopcd', component: () => import('pages/InscricaoPcd.vue') },
      { path: 'inscricaoinst', component: () => import('pages/InscricaoInst.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
