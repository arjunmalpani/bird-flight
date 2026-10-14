import { useAnimations, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import * as THREE from "three";
const birdModel = "/models/phoenix_bird.glb";

function measure(scene, size = 10) {
    const box = new THREE.Box3().setFromObject(scene.clone());
    const dims = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    return {
        fit: size / Math.max(dims.x, dims.y, dims.z),
        offset: centre.negate(),
    };
}

function prepare(scene, glow = 1.5) {
    scene.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true;
        const m = o.material;
        m.side = THREE.DoubleSide;
        if (m.emissive) m.emissiveIntensity = glow;
        if (m.transparent) {
            m.alphaTest = 0.5;
            m.transparent = false;
            m.depthWrite = true;
        }
        m.needsUpdate = true;
    });
}

export default function Bird({ size, glow, animate, ...props }) {
    const group = useRef();
    const { scene, animations } = useGLTF(birdModel);
    const { actions, names } = useAnimations(animations, group);

    const { fit, offset } = useMemo(() => measure(scene, size), [scene, size]);

    useEffect(() => {
        prepare(scene, glow);
    }, [scene, glow]);
    useEffect(() => {
        if (!animate || !names[0]) return;

        const action = actions[names[0]];
        if (!action) return;

        action.reset().fadeIn(0.2).play();

        return () => {
            action.fadeOut(0.2).stop();
        };
    }, [actions, names]);

    return (
        <group ref={group} {...props}>
            <group scale={fit}>
                <primitive object={scene} position={offset} />
            </group>
        </group>
    );
}
useGLTF.preload(birdModel);
