import React , {useEffect} from 'react'
import { ScrollControls, Scroll, Environment,Sky,Backdrop,Float, Ring,Text3D, Sphere} from '@react-three/drei'

import baffle from 'baffle'
import { Space } from './components/Space';


function App() {

  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░P░h░a|n&t^o!m}',
      speed: 100
    })
    target.start()
    target.reveal(1000,1000)
  })

  return (
    <>
      <color attach="background" args={['#333']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='dawn'
        background
        
      />
     

      <ScrollControls pages={6} damping={0.1}>

        <Space scale={0.8}/>
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  />

       
        <Backdrop
          receiveShadow
          floor={20.5} // Stretches the floor segment, 0.25 by default
          segments={100} // Mesh-resolution, 20 by default
          scale={[50,30,10]}
          position={[4,-10,0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>  

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
      
        <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[1.1, 1.95, 40]} receiveShadow>
          <meshStandardMaterial color="#333" />
     </Ring>
      
        </Float>              

        <Scroll>
                
        </Scroll>
        <Scroll html style={{width: '100%'}}>

          <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>PHANTOM</h1>
          
          <div className='row' style={{ position: 'absolute', top: `132vh`}}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: '400px', color:"whitesmoke" }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
            <button>Read more</button>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: '440px' ,  color:"whitesmoke" }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>                
              <button>Read more</button>
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Cutting-Edge of Grooming</h2>              
          
          <button className="neon-button" style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
