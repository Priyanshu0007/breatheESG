import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  {FirebaseProvider}  from './context/firebase.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseProvider>
      <BrowserRouter>
        <App />
        <Toaster richColors/>
      </BrowserRouter>
    </FirebaseProvider>
  </React.StrictMode>,
)
