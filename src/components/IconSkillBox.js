export function IconSkillBox( { text, image, className } ){
  
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            <img className="w-16 mb-2" src={image} alt={text} />
            <span className="text-white text-lg md:text-xl">{text}</span>
        </div>
      );
}