import React from 'react';
import PageHeader from './sections/page-header/page-header';
import CategoryPills from './components/category/CategoryPills';
import { categories } from './data/home';

function App() {
 
  return (
    <>
     <section className='max-h-screen flex flex-col'>
      <PageHeader/>
      <main className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
        <section>
          sidebar
        </section>
        <section className='sticky top-0 bg-white z-10 pb-4'>
          <CategoryPills categories={categories}/>

        </section>
      </main>

     </section>
    </>
   
  )
}

export default App
