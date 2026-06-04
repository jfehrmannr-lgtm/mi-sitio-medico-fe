import React from 'react'

interface IDivider {
  color?: string
}

const Divider = ({
  color = '#E5E7EB'
}: IDivider) => {
  return (
    <div style={{ borderColor: color }} className='border-t'></div>
  )
}

export default React.memo(Divider)