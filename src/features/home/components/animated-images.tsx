import Image from 'next/image'
import React from 'react'

const AnimatedImages = () => (
  <>
    {/* Element 1 */}
    <Image
      src='/elements/element-1.png'
      alt='Floating element 1'
      className='
        absolute z-0 hidden pointer-events-none md:block
        top-[8%] left-[12%] w-[150px]
        animate-slideInFast animate-floatFast
      '
      width={10}
      height={10}
    />
    {/* Element 2 */}
    <Image
      src='/elements/element-2.png'
      alt='Floating element 2'
      className='
        absolute z-0 hidden pointer-events-none md:block
        bottom-[8%] left-[34%] -translate-x-1/2 w-[200px]
        animate-slideInSlow animate-floatSlow
      '
       width={10}
      height={10}
    />
  </>
)

export default AnimatedImages