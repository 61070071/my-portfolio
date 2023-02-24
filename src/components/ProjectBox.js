export function ProjectBox({ text, image, url }){
    
    const openNewTab = (link) => {
        console.log(link);
        window.open(link, '_blank', 'noreferrer');
      };
      
    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <img onClick={() => openNewTab(url)} className="md:w-3/5 mb-4 cursor-pointer rounded drop-shadow-lg transition hover:scale-105" src={image} alt={text} />
            <span onClick={() => openNewTab(url)} className="text-white text-lg md:text-xl text-center cursor-pointer underline">{text}</span>
            
        </div>
      );
}