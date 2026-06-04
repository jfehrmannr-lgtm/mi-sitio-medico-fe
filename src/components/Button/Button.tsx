import React, { useState } from 'react'
import clsx from 'clsx'

import type { CSSTailwindProperties } from '@/types/CSSTailwindProperties'
import { hexToRgba } from '@/utils/hexToRGBA'

interface IButton {
  color: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
  size?: 'small' | 'large'
  type?: 'outlined' | 'filled'
  onClick?: () => void
}

const Button = ({
  color,
  children,
  className,
  disabled = false,
  size = 'large',
  type = 'filled',
  onClick
}: IButton) => {
  const [wave, setWave] = useState<{
    x: number
    y: number
    size: number
    id: number
  } | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return

    const rect = event.currentTarget.getBoundingClientRect()

    const waveSize =
      Math.max(rect.width, rect.height) * 2

    setWave({
      x: event.clientX - rect.left - waveSize / 2,
      y: event.clientY - rect.top - waveSize / 2,
      size: waveSize,
      id: Date.now()
    })

    onClick?.()
  }

  const ringColor = hexToRgba(color, 0.5)

  const waveColor =
    type === 'outlined'
      ? hexToRgba(color, 0.25)
      : hexToRgba('#FFFFFF', 0.35)

  const style: CSSTailwindProperties = {
    backgroundColor: disabled
      ? '#DDD'
      : type === 'filled'
        ? color
        : 'transparent',

    color: disabled
      ? '#999'
      : type === 'filled'
        ? '#FFF'
        : color,

    borderColor: disabled
      ? '#DDD'
      : color,

    '--tw-ring-color': ringColor
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={clsx(
        'relative overflow-hidden border transition duration-300',
        !disabled
          ? 'cursor-pointer'
          : 'cursor-not-allowed',
        size === 'large'
          ? 'p-2 px-6 font-semibold'
          : 'p-1 px-4',
        type === 'filled' 
          ? 'focus:ring-3 ring-offset-1'
          : 'focus:ring-4',
        className
      )}
      style={style}
    >
      {wave && (
        <span
          key={wave.id}
          className="pointer-events-none absolute rounded-full"
          onAnimationEnd={() => setWave(null)}
          style={{
            left: wave.x,
            top: wave.y,
            width: wave.size,
            height: wave.size,
            backgroundColor: waveColor,
            animation:
              'button-wave 500ms ease-out forwards'
          }}
        />
      )}

      <span className="relative z-10">
        {children}
      </span>
    </button>
  )
}

export default Button