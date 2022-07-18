import React from 'react'
import InfoApp from './Component/InfoApp'
import Practice from './Component/practice'


const objectOne={
  link:'./images/IMG_0851.png',
  p : 'Create an account',
  h3:'Create/login to an existing account to get started',
  p2:'An account is created with your email and a desired password'
}

const objSecond={
 link:'./images/IMG_0850 (2).png',
  p: 'Explore varieties',
  h3:' Shop for your favorites meal as e dey hot.',
  p2:'Shop for your favorite meals or drinks and enjoy while doing it'
}


export default function App() {

  return (
    <>
      <InfoApp user={objectOne} isAddText={false} isReverce={false} />
      <InfoApp user={objSecond} isAddText={true} isReverce={true} />
      <Practice step={2} />
    </>
  )
}




