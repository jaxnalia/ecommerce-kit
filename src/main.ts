import './app.css'
import './styles/scrollbar.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app