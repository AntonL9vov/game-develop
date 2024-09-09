import './App.css'
import Field from "./components/Field/Field.tsx";
import Player from "./components/Player/Player.tsx";
import {Physics} from "@react-three/rapier";
import Obstacle from "./components/Obstacle/Obstacle.tsx";

export default function App() {

    return (
        <Physics gravity={[0, -20, 0]}>
            <ambientLight intensity={1.5}/>
            <Player/>
            <Field/>
        </Physics>
    )
}