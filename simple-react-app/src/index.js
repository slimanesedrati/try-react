import {createRoot} from 'react-dom';
import App from './App';
import './index.css'

const container = document.getElementById('app');
const root = createRoot(container)

root.render(<App darkMode = {true}  /> ,container)
