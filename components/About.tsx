import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const About = () => {
  return (
    <section id="about" className="mb-12 mx-4">
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName})=> 
        <BentoGridItem 
        id={id}
        key={id}
        title={title} 
        description={description}
        img={img}
        imgClassName={imgClassName}
        titleClassName={titleClassName}
        className={
          id === 1  ? "md:col-span-2 md:row-span-2" : id === 5 
          ? "md:col-span-2 md:row-span-1" 
          : "" 
        }
        />
        )}
      </BentoGrid>
    </section>

  )
}

export default About
