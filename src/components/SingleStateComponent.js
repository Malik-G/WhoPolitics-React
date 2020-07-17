import React, { Component, useEffect } from 'react'
import { useParams, useHistory } from 'react-router';

const SingleStateComponent = (props) => {
  let { id } = useParams()
  let history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  const goToMap = () => {
    history.push('/mainmap')
  }

  useEffect(() => {
    console.log(id)
    console.log(props)
  })

  return (
    <div>
      <button onClick={goToHome} style={{ margin: 5 }}>Home</button>
      <button onClick={goToMap} style={{ margin: 5 }}>U.S. Map</button>
      <h1 style={{ color: 'slategrey' }}>{id} Single State Page</h1>
    </div>
  )
}

export default SingleStateComponent;


////CLASS IMPLEMENTATION

// class SingleStateComponent extends Component{
//   state = { stateID: this.props.match.params.id}
//   //let { idFromParams } = useParams();

//   componentDidMount() {
//     console.log(this.props)
//   }

//   render() { 
//     const {stateID} = this.state
//     console.log(stateID)
//     return ( 
//     <>
//     <h1>{stateID} Single State Page</h1>
//     </>);
//   }
// }

//export default SingleStateComponent;

