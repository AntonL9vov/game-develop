import FieldPiece from "./FieldPiece.tsx";
import {Vector3} from "@react-three/fiber";
import {memo} from "react";
import {RigidBody} from "@react-three/rapier";

interface FieldRowProps {
    position: Vector3,
    withObstacle?: number
}

interface Row {
    position: Vector3,
    withObstacle?: boolean
}

const FieldRow = memo(({position, withObstacle}: FieldRowProps) => {
    const rows: Row[] = [{
        position: [1.1, 0, 0],
        withObstacle: withObstacle === 0
    }, {
        position: [0, 0, 0],
        withObstacle: withObstacle === 1
    }, {
        position: [-1.1, 0, 0],
        withObstacle: withObstacle === 2
    }]

    return (
        <RigidBody>
            <group position={position}>
                {rows.map((row, index) => (
                    <FieldPiece key={index} position={row.position} withObstacle={row.withObstacle}/>
                ))}
            </group>
        </RigidBody>
    )
})

export default FieldRow;