import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>
)
/*Ao criar um projeto react, usaremos vite, e assim será
npm create vite@latest [pode ser contraintuitivo "criar" a ultima versão do vite ao
inves de instalar, mas oque acontece? primeiro ele "cria" o template de dependencias
partindo das próprias perguntas que eu respondo, de quais tecnologias eu vou usar para
o meu projeto, depois ele le essa template ao rodar "npm install" E oficialmente tras 
essas tecnologias para meu computador]

npm run dev = tal qual npx prisma studio tal qual npm --watch server.js que fizemos no
back, iremos usar o run dev (que é um código que o vite criou) para rodar na porta 5173
*/
