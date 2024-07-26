import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF,useScroll } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'


export function Space(props) {
  const { nodes, materials } = useGLTF('./models/robot/space-transformed.glb')

  const robot = useRef()
  const scroll = useScroll()
  const tl = useRef()

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=> {
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

    tl.current
    .to(robot.current.rotation, {y: -1}, 2)
    .to(robot.current.position, {x: 1}, 2)

    .to(robot.current.rotation, {y: 1}, 6)   
    .to(robot.current.position, {x: -1}, 6)

    .to(robot.current.rotation, {y: 0}, 11)
    .to(robot.current.rotation, {x: 1}, 11)
    .to(robot.current.position, {x: 0}, 11)

    .to(robot.current.rotation, {y: 0}, 13)
    .to(robot.current.rotation, {x: -1}, 13)    
    .to(robot.current.position, {x: 0}, 13)

    .to(robot.current.rotation, {y: 0}, 16)   
    .to(robot.current.rotation, {x: 0}, 16) 
    .to(robot.current.position, {x: 0}, 16)    

    .to(robot.current.rotation, {y: 0}, 20)   
    .to(robot.current.rotation, {x: 0}, 20) 
    .to(robot.current.position, {x: 0}, 20)   

  },[])
  
  return (
    <group {...props} dispose={null} ref={robot}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['defaultMat.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/robot/space-transformed.glb')
