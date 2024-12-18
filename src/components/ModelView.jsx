import { PerspectiveCamera, View } from "@react-three/drei";
import Lights from './Lights';
const ModelView = ({index,groupRef,gsapType,controlRef,setRotationState,item,size}) => {
    return (
        <View
        index={index}
        id={gsapType}
        className={`border border-red-500 w-full h-full ${index===2}?:'right-[-100%]':''`}
        >
        <ambientLight intensity={0.3}/>
        <PerspectiveCamera makeDefault position={[0,0,4]}/>
        <Lights/>
        </View>
    )
}

export default ModelView