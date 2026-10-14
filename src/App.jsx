import { Canvas } from "@react-three/fiber";
import Experience from "./components/experience";

function App() {
    return (
        <div className="h-dvh w-full">
            <Canvas shadows camera={{ position: [12, 6, 10], fov: 50 }}>
                <Experience />
            </Canvas>
            <p className="absolute bottom-2 right-3 max-w-[70%] text-right text-xs leading-tight text-white/60">
                "
                <a
                    href="https://skfb.ly/6vLBp"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-white"
                >
                    phoenix bird
                </a>
                " by NORBERTO-3D,{" "}
                <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-white"
                >
                    CC BY 4.0
                </a>
                . Modified (scaled, materials and glow adjusted).
            </p>
        </div>
    );
}

export default App;
