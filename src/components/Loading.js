import React from 'react'
import { RiseLoader} from 'react-spinners'

const Loading = () => {
  const loader = {height:'80vh' ,
  width:'100vw',
  display:'flex' ,
  alignItems:'center' ,
  justifyContent:'center',
  transform:'translateX(-50% , -50%) '
}
  return (
    <div style={loader}>
      <RiseLoader size={24} margin={4} loading/>
    </div>
  )
}

export default Loading
