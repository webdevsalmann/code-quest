import Section from '@/components/ui/section'
import { IC, IJava, IPython } from '@/components/ui/svgs'
import { questions } from '@/lib/datas/questions'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <main>
            <Section>
                <div className="flex flex-col gap-base">
                    {questions.map((item, i) => (
                        <Link className="p-base rounded-md border overflow-hidden" key={item + "Card"} href={"/questions/" + item.id}>
                            <div className='leading-2'>{item.title}</div>
                            <div className="mt-base flex gap-sm">
                                <span className='p-1 size-xl border rounded'><IJava /></span>
                                <span className='p-1 size-xl border rounded'><IPython /></span>
                                <span className='p-1 size-xl border rounded'><IC /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    )
}
