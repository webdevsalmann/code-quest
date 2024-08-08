import { SquareTerminal } from 'lucide-react'
import React from 'react'

export default function Terminal() {
  return (
    <div>
      <div className="p-xs bg-secondary/30">
        <div className="flex items-center gap-1">
          <SquareTerminal className='size-4 shrink-0' />
          <span className="text-sm">Terminal</span>
        </div>
      </div>
    </div>
  )
}
