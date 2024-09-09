import {Vector3} from "@react-three/fiber";
import {RigidBody} from "@react-three/rapier";

interface ObstacleProps {
    position: Vector3
}

const Obstacle = ({position}: ObstacleProps) => {

    return (
        <RigidBody restitution={0.1} friction={1}>
            <mesh position={position}>
                <boxGeometry args={[0.8, 0.8, 0.8]}/>
                <meshStandardMaterial color="yellow"/>
            </mesh>
        </RigidBody>
    )
}

export default Obstacle