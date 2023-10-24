

type ShoeCardProps = {
  index: number;
  imgURL: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (image: string) => void;
  bigShoeImg: string;
};



const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    // COMPONENT LOGIC
    <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
        ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}`}
      onClick={handleClick}>

      {/* DISPLAY OF THE IMAGE */}
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} alt='shoe colletion' width={127} height={103} className='object-contain'/>
      </div>
    </div>
  );
};

export default ShoeCard;
