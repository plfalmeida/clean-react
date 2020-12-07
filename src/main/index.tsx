import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@/presentation/components'
import '@/presentation/styles/globals.scss'
import { makeLogin } from './factories/pages/login/login-factory'

ReactDom.render(
  <Router
    makeLogin={makeLogin}
  />,
  document.getElementById('main')
)
