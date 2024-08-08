import { questions } from '@/lib/datas/questions';
import { NotepadText } from 'lucide-react'
import React from 'react'

export default function QuestionPane({ questionId }) {
  const question = questions.find(item => item.id === questionId);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <div className="p-xs bg-secondary/30">
        <div className="flex items-center gap-1">
          <NotepadText className='size-4 shrink-0' />
          <span className="text-sm">Detail</span>
        </div>
      </div>

      <div className="p-xs py-base">
        <div className="text-xl capitalize">{question.title}</div>
        <p className="mt-base leading-6">{question.description}</p>
      </div>
    </div>
  )
}
