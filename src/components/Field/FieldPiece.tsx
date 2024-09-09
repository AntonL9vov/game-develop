import Floor from './floor.jpg'
import {useTexture} from "@react-three/drei";
import * as THREE from "three";
import {Vector3} from "@react-three/fiber";
import Obstacle from "../Obstacle/Obstacle.tsx";
import {RigidBody} from "@react-three/rapier";

interface FieldPieceProps {
    position: Vector3
    withObstacle?: boolean
}

export default function FieldPiece({position, withObstacle}: FieldPieceProps) {
    const texture = useTexture(Floor);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <>
            <RigidBody>
                <mesh position={position}>
                    <planeGeometry args={[1, 1]}/>
                    <meshStandardMaterial color="gray" map={texture}/>
                </mesh>
            </RigidBody>
            {/*{withObstacle ? <Obstacle position={[0, 0, 4]}/> : undefined}*/}
        </>

    )
}