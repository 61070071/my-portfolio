export function ActivityBox({ text, image }){
    
    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <img className="md:w-3/5 mb-4 rounded drop-shadow-lg aspect-video object-cover" src={image} alt={text} />
            <span className="text-white text-lg md:text-xl text-center">{text}</span>  
        </div>
      );
}