import { OrbitControls } from "@react-three/drei";
import Bird from "./bird";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Lighting from "./lighting";
import Platform from "./platform";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";

function Experience() {
    const flyerControls = useControls("Flyer Controls", {
        height: { value: 4, min: 1, max: 30, step: 1 },
        bob: { value: 0.5, min: 0, max: 1, step: 0.1 },
        speed: { value: 0.8, min: 0, max: 2, step: 0.1 },
        radius: { value: 6, min: 0, max: 20, step: 1 },
        direction: { options: ["front", "back"] },
    });
    const birdControls = useControls("Bird Controls", {
        size: { value: 10, min: 1, max: 20, step: 1 },
        animate: true,
        glow: { value: 1.5, min: 0, max: 3, step: 0.1 },
    });
    return (
        <>
            <Lighting />
            <Flyer {...flyerControls}>
                <Bird {...birdControls} />
            </Flyer>
            <Platform />
            <EffectComposer>
                <Bloom
                    intensity={0.9}
                    luminanceThreshold={0.6}
                    luminanceSmoothing={0.3}
                    mipmapBlur
                />
            </EffectComposer>
            <OrbitControls
                maxPolarAngle={Math.PI / 2 - 0.05}
                minPolarAngle={0.3}
                minDistance={8}
                maxDistance={60}
                enablePan={false}
            />
        </>
    );
}

export default Experience;

function Flyer({
    height = 4,
    bob = 0.5,
    speed = 0.8,
    direction = "front",
    radius = 6,
    children,
}) {
    const ref = useRef();
    const angle = useRef(0);
    const facing = direction === "front" ? -Math.PI / 2 : Math.PI / 2;
    useFrame((_, delta) => {
        angle.current += delta * speed;
        const a = angle.current;

        ref.current.position.set(
            Math.cos(a) * radius,
            height + Math.sin(a * 2) * bob, // gentle bobbing
            Math.sin(a) * radius,
        );
        ref.current.rotation.y = -a; // turn to face the direction of travel
    });

    return (
        <group ref={ref}>
            <group rotation={[0, facing, 0]}>{children}</group>
        </group>
    );
}
