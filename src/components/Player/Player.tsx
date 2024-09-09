import {useEffect, useRef, useState} from "react";
import {RigidBody} from "@react-three/rapier";

export default function Player() {
    const [playerPosition, setPlayerPosition] = useState([1, 2, -1]);

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            switch (event.code) {
                case "ArrowRight":
                    if (playerPosition[0] === 1) return
                    setPlayerPosition([playerPosition[0] + 1, 2, -1]);
                    break;
                case "ArrowLeft":
                    if (playerPosition[0] === -1) return
                    setPlayerPosition([playerPosition[0] - 1, 2, -1]);
                    break;
            }
        }
        const putInInitialPosition = () => {
            console.log('here', playerPosition, playerRef.current)
            setPlayerPosition([1, 2, -1]);
            console.log('here', playerPosition, playerRef.current)
        }

        document.addEventListener('keydown', handleKey);
        document.addEventListener('click', putInInitialPosition);

        return () => {
            document.removeEventListener('keydown', handleKey);
            document.removeEventListener('click', putInInitialPosition);
        }
    });

    const playerRef = useRef()


    return (
        <RigidBody>
            <mesh ref={playerRef} position={playerPosition}>
                <boxGeometry args={[0.6, 0.6, 0.6]}/>
                <meshStandardMaterial color="blue"/>
            </mesh>
        </RigidBody>
    )
}