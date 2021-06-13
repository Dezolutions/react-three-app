import React from 'react'

const MeshItem = ({ position, color, args, form }) => {
  const mesh = React.useRef();
  //useFrame allows us to re-render/update rotation on each frame
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      
      position={position}
      ref={mesh}
      castShadow>
      {(form === 'cube' && <boxBufferGeometry attach='geometry' args={args} />) ||
      (form === 'sphere' && <sphereGeometry attach='geometry' args={args} />) ||
      (form === 'pyramid' && <coneGeometry attach='geometry' args={args} />)}
      <meshStandardMaterial
        color={color}
        attach='material'
        factor={0.6}
      />
    </mesh>

  );
};

export default MeshItem
