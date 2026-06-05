import clsx from 'clsx'
import React from 'react'

interface IDivider {
  color?: string
  side?: 'horizontal' | 'verical'
}

const Divider = ({
  color = '#E5E7EB',
  side = 'horizontal'
}: IDivider) => {
  return (
    <div style={{ borderColor: color }} className={clsx(side === 'horizontal' ? 'border-t' : 'border-l')}></div>
  )
}

export default React.memo(Divider)