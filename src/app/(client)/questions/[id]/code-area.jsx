"use client"

import { Textarea } from '@/components/ui/textarea'
import { Code } from 'lucide-react'
import React from 'react'
import Editor from '@monaco-editor/react';

export default function CodeArea() {
  return (
    <div className='size-full'>
      <div className="p-xs bg-secondary/30">
        <div className="flex items-center gap-1">
          <Code className='size-4 shrink-0' />
          <span className="text-sm">Code</span>
        </div>
      </div>

      <div className="relative size-full">
        <Editor
          className='relative'
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme='vs-dark'
           />
      </div>
    </div>
  )
}
