import * as THREE from 'three'
import { useMemo, useLayoutEffect, useRef, useState, useEffect, Suspense } from 'react'
import { Html, Mask, Image, Environment, useGLTF, Text, ContactShadows, OrbitControls, PresentationControls } from '@react-three/drei'

import { Canvas, useFrame } from '@react-three/fiber'
import Level from './components/Level'
import Sudo from './components/Sudo'
import Camera from './components/Camera'
import Cactus from './components/Cactus'
import Icon from './components/Icon'
import Pyramid from './components/Pyramid'
import Arcade from './components/Arcade_Draco'
import CY80s from './components/80s_Draco'

import Mountains from './components/Mountains_Draco'

import { Track, Zoom } from './Music/TrackMusic'


export default function App({ ready }) {
  const usePersonControls = () => {
    const keys = {
      KeyW: 'forward',
      KeyS: 'backward',
      KeyA: 'left',
      KeyD: 'right',
      Space: 'jump',
      KeyJ: 'buttonB',
      KeyK: 'buttonR',
      KeyL: 'buttonG',
      Escape: 'Escape',
      ArrowLeft: 'left',
      ArrowUp: 'forward',
      ArrowRight: 'right',
      ArrowDown: 'backward',
    }

    const moveFieldByKey = (key) => keys[key]

    const [movement, setMovement] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false,
      jump: false,
      buttonB: false,
      buttonR: false,
      buttonG: false,
      Escape: false,
    })

    useEffect(() => {
      const handleKeyDown = (e) => {
        setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
      }
      const handleKeyUp = (e) => {
        setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
      }
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('keyup', handleKeyUp)
      }
    }, [])
    return movement
  }
  const { forward, backward, left, right, jump, buttonB, buttonR, buttonG, Escape } = usePersonControls()


  useEffect(() => {
    // console.log(forward, backward, left, right, jump, buttonB, buttonR, buttonG, Escape)

    if (Escape) {
      setStart(false)
      setAPPReady(false)
      setClicked(true)
    }
  }, [forward, backward, left, right, jump, buttonB, buttonR, buttonG, Escape])


  const [APPready, setAPPReady] = useState(false)
  const [start, setStart] = useState(false)
  const [clicked, setClicked] = useState(false)
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
      {/* // <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 1.2] }}> */}
      {/* <color attach="background" args={['#8ecae6']} /> */}
      <color attach="background" args={['#e63946']} />

      <Suspense fallback={null}>
      <group position={[2.5, -0.5,0]}>
      <Track position-z={-0.5} url="/comping1.mp3" />
        <Track position-z={-0.25} url="/synth.mp3" />
        <Track position-z={0} url="/snare.mp3" />
        <Track position-z={0.25} url="/drums.mp3" />

        
        {/* <Zoom url="/drums.mp3" /> */}
        </group> 
      </Suspense>

      <ambientLight />
      {/* <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}> */}
      <PresentationControls global zoom={0.1} rotation={[0, -Math.PI / 2, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <group onClick={() => {
          // setStart(true)
          // setReady(true)
          setStart(true)
        }} position-y={-0.75} dispose={null}>
          <Arcade keys={usePersonControls()} _ready={APPready} _setReady={setAPPReady} start={start} clicked={clicked} />
        </group>
        <Suspense fallback={null}>
          {/* <ambientLight /> */}
          <Mountains position={[1, -0.6, 0]} rotation={[0, 0, 0]} scale={0.8} />
          <CY80s position={[-5, -0.1, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.8} />

          {/* <CY80s position={[-2, -0.6, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.8}/> */}

        </Suspense>
        {/* {ready&&}  */}
        <TitleText onClick={() => {
          setClicked(true)
        }} rotation={[0, Math.PI / 2, 0]} position={[0, -0.1, 0.18]} />

        {/* <mesh rotation={[0, Math.PI / 2, 0]} position={[-0.3, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="blue" />
          </mesh> */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.75, 0]}>

          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#023047" />
        </mesh>
        {/* <gridHelper /> */}

        {/* <WasdControls/> */}
      </PresentationControls>
      <OrbitControls />

    </Canvas>
  )
}


function TitleText({ clicked, ...props }) {

  return (
    <Text font="/Inter-Bold.woff" fontSize={1.25} letterSpacing={-0.1} {...props}>
      Arcade
      <meshStandardMaterial color="#c9ffed" />
    </Text>
  )
}

// function Jumbo({...props }) {
//   const ref = useRef()
//   useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
//   return (
//     <group ref={ref} {...props }>
//       <Text hAlign="right" position={[0, -0.1, 0.18]} children="THREE" />
//       <Text hAlign="right" position={[0, -1, 0.18]}children="TRES" />
//       <Text hAlign="right"   fontSize={1.25} letterSpacing={-0.1}  position={[0, 1, 0.18]} children="TROIS" />
//     </group>
//   )
// }

