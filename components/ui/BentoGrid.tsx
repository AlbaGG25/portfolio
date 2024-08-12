import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  spareImg,
  titleClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4 border border-white/[0.2]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
      }}
    >
   <div className={`${id === 5 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-cover ")}
            ></img>
          )}
        </div> 
        <div className={`absolute right-0 -bottom-5 ${id === 3} && 'w-full opacity-80'`}>
          {spareImg && (
            <img src={spareImg} alt={spareImg} className={'object-cover, object-center w-full h-full'}>
            </img>
          )}
        </div>
        {id === 5 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-40">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-40 text-neutral-200  ">
            {title}
          </div>
      
        { id === 2 && <GlobeDemo />}
        { id === 4 && (
          <div className="flex flex-col gap-3 p-3 top-6 right-2 xl:right-5">

            <div className="flex gap-2 ">
              {['React.js', 'Next.js', 'Nuxt.js'].map((item)=> (
              <span key={item} className="md:flex-wrap py-2 md:py-4 lg:py-3 px-3 text-xs lg:text-base text-white opacity-50 lg:opacity-100 rounded-full text-center bg-grey">
                {item}
              </span>
              ))}
            </div>
           
            <div className="flex gap-2 ">

              {['MongoDB', 'MySQL', 'Node.js'].map((item)=> (
              <span key={item} className="md:flex-wrap py-2 md:py-4 lg:py-3 px-3 text-xs lg:text-base text-white opacity-50 lg:opacity-100 rounded-full text-center bg-grey">
                {item}
              </span>
              ))}
            </div>
          </div>
        )}
        {id === 5 && (
          <div className="mt-5 relative">
            <div className='flex justify-center '>
                 <a title="Send me an email" type="submit" className="border border-white/[0.2] bg-[#04071d] text-white  rounded-lg p-1.5 md:p-5 mt-5" href="mailto:developerdrm@gmail.com">
                 Send me an email!
                 </a>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};
