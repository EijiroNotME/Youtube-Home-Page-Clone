import React from 'react'
import Button from '../buttons/Button'
import { categories } from '../../data/home'

type CategoryPillProps = {
  categories: string[]
}

export default function CategoryPills({categories}: CategoryPillProps) {
  return (
    <section className='overflow-x-hidden relative'>
        <section className='flex whitespace-nowrap gap-3 transition-transform w-[max-content]'>
            {categories.map(category => (
                <Button key={category} variant="dark" className='py-1 px-3 rounded-large whitespace-nowrap'>{category}</Button>
            ))}
        </section>
    </section>
  )
}
