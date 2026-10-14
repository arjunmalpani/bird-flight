import { Grid } from "@react-three/drei";

export default function Platform() {
    return (
        <>
            <mesh
                rotation-x={-Math.PI / 2}
                position={[0, -2.99, 0]}
                receiveShadow
            >
                <planeGeometry args={[100, 100]} />
                <shadowMaterial opacity={0.5} />
            </mesh>
            <Grid
                position={[0, -3, 0]}
                args={[100, 100]}
                cellSize={1}
                cellThickness={0.6}
                cellColor="#222"
                sectionSize={5}
                sectionThickness={1.2}
                sectionColor="#222"
                fadeDistance={145}
                fadeStrength={1.5}
                infiniteGrid
            />
        </>
    );
}
