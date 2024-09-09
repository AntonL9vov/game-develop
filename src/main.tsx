import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './index.css'
import {Canvas} from "@react-three/fiber";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Canvas camera={{fov: 75}}>
            <App/>
        </Canvas>
    </StrictMode>,
)
