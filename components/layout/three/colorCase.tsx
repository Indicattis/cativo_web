


type CaseType = {
    theme: string;
}

export default function ColorCase({theme}: CaseType) {
    return (
        <mesh rotation={[-0.3, -0.4, -0.2]}>
           <boxGeometry attach="geometry" args={[3, 4, 0.3]} />
           <meshBasicMaterial attach="material" color={theme}/>
           {/* <meshLambertMaterial attach={"geometry"} /> */}
        </mesh>
    )
}

