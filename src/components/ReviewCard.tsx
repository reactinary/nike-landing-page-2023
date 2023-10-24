import { star } from "../assets/icons";


type ReviewCardProps = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}


const ReviewCard = ({ imgURL, customerName, rating, feedback }: ReviewCardProps) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img className='rounded-full object-cover w-[120px] h-[120px]'
          src={imgURL} alt='customer'/>
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img className='object-contain m-0' width={24} height={24}
            src={star} alt='rating star'/>
        <p className='text-xl font-montserrat text-slate-gray'>
          ({rating})
        </p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
