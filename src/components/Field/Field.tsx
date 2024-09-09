import {useState, useEffect, useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import FieldRow from "./FieldRow.tsx";
import {uuidv4} from "../../utils/uuid.ts";
import {RapierRigidBody, RigidBody} from "@react-three/rapier";
import Obstacle from "../Obstacle/Obstacle.tsx";

const ROW_HEIGHT = 1.1; // высота одного сегмента
const INITIAL_ROW_COUNT = 200; // начальное количество сегментов

interface Row {
    id: string;
    position: [number, number, number];
    withObstacle: number;
}

function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Field() {
    const [rows, setRows] = useState<Row[]>([]);

    // Инициализация сегментов дороги
    useEffect(() => {
        const initialRows: Row[] = [];
        for (let i = 0; i < INITIAL_ROW_COUNT; i++) {
            initialRows.push({
                id: uuidv4(),
                position: [0, i * ROW_HEIGHT, 0],
                withObstacle: Math.random() > 0.5 ? randomIntFromInterval(0, 2) : -1
            });
        }
        setRows(initialRows);
    }, []);

    const ground = useRef<RapierRigidBody>(null);


    useFrame(() => {
        if (!ground.current) return

        ground.current.setLinvel({x: 0, y: 0, z: 2}, true);
    })

    return (
        <>
            <RigidBody ref={ground}>
                <instancedMesh position={[0, -3, 0]} rotation-x={-Math.PI / 2}>
                    {rows.map(row => (
                        <FieldRow key={row.id} position={row?.position} withObstacle={row.withObstacle}/>
                    ))}
                </instancedMesh>
            </RigidBody>
            <RigidBody restitution={0.1} friction={1}>
                <mesh position={[0, 3, -1]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]}/>
                    <meshStandardMaterial color="yellow"/>
                </mesh>
            </RigidBody>
        </>
    );
}
