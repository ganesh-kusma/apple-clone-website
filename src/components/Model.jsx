import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView"
import { useRef, useState } from "react"
import { yellowImg } from "../utils"
import * as Three from 'three'
const Model = () => {
  const [size, setSize] = useState('small')
  const [model, setModel] = useState({
    title: 'iPhone 15 pro in Natural Titanium',
    color: ['#8F8A81', 'FFE7B9', '#6F6C64'],
    img: yellowImg
  })
  const cameraControlSmall = useRef()
  const cameraControlLarge = useRef()
  const small = useRef(new Three.Group())
  const large = useRef(new Three.Group())

  const [smallRotation, setSmallRotation] = usestate(0)
  const [largeRotation, setLargeRotation] = usestate(0)

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, [])
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <ModelView
          index={1}
          groupRef={small}
          gsapType='view1'
          controlRef={cameraControlSmall}
          setRotationState={setSmallRotation}
          item={model}
          size={size}s
        />
      </div>

    </section>
  )
}

export default Model