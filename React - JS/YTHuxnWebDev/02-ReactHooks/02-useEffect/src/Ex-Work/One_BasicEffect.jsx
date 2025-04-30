import { useEffect } from 'react'

const One_BasicEffect = () => {
  useEffect(() => {
    console.log('BasicEffect component mounted');
  }, []);

  return (
    <div>Check the console to see the message!</div>
  )
}

export default One_BasicEffect;