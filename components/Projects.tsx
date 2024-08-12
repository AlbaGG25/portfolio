import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { projects } from '@/data'

const Projects = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl uppercase font-bold text-white">
        Selection of { ' ' }
        <span className="text-gold">projects</span>
      </h1>
       <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 text-white">
        {projects.map(({id, title, des, img, iconLists, link}) => ( 
        <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
          <PinContainer title={title} href={link}>
            <div className="relative flex  items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]">
                <img src={img} alt={title} className="z-10 absolute bottom-0"/>
            </div>
          </PinContainer>
        </div>
      ))
      }
       </div>
    </div>
  )
}

export default Projects
