import { Code } from 'lucide-react'
import React from 'react'

export default function CodeArea() {
  return (
    <div>
      <div className="p-xs bg-secondary/30">
        <div className="flex items-center gap-1">
          <Code className='size-4 shrink-0' />
          <span className="text-sm">Detail</span>
        </div>
      </div>
    </div>
  )
}
