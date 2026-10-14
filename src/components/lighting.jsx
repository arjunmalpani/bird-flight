import { Environment } from "@react-three/drei";

export default function Lighting() {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight
                position={[10, 20, 10]}
                intensity={2}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-camera-left={-50}
                shadow-camera-right={50}
                shadow-camera-top={50}
                shadow-camera-bottom={-50}
                shadow-camera-near={1}
                shadow-camera-far={200}
                shadow-bias={-0.0005}
            />
            {/* <Environment
                preset="sunset"
                // background
                // backgroundBlurriness={1}
            />*/}
        </>
    );
}
