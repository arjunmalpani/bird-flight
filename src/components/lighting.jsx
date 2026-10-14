import { Environment } from "@react-three/drei";

export default function Lighting() {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight
                position={[4, 12, 4]}
                intensity={2}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-camera-near={1}
                shadow-camera-far={30}
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
