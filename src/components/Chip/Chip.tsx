import clsx from 'clsx'
import React from 'react'

interface IChip {
  label?: string
  size?: 'small' | 'large'
  color?: string
}

const Chip = ({
  label,
  size = 'large',
  color
}: IChip) => {
  return (
    <div className='flex'>
      <div
        style={{ backgroundColor: color }}
        className={clsx(
          'rounded-full',
          size === 'large' 
            ? 'py-1 px-3' 
            : 'py-0 px-2'
        )}
      >
        {label}
      </div>
    </div>
  )
}

export default React.memo(Chip)