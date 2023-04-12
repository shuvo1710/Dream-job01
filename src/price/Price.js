import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import { RiCupFill } from 'react-icons/ri';
import dream from '../assets/shakib.jpg'
import { GiSelfLove} from 'react-icons/gi';


const Price = () => {
    return (
        <div className='grid grid-cols-2'>
            <div><h1>price</h1>
            <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="price…" className="input input-bordered" />
    <button className="btn btn-success ml-5">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  <h1>Rating</h1>
  <div className='flex gap-12'>
    <p>0+</p>
    <p>1+</p>
    <p>2+</p>
    <p>3+</p>
    <p>4+</p>
    <p>5+</p>
  </div>
  <div className="divider"></div> 
  
  <h1>Freevies</h1>
  <div>
    <li>Free breakfast</li>
    <li>Free parking</li>
    <li>Free internet</li>
    <li>Free airport shuttle</li>
    <li>Free cancellation</li>
  </div>
  <div className="divider"></div> 
  
  <h1>Animents</h1>
  <div>
    <li>Free breakfast</li>
    <li>Free parking</li>
    <li>Free internet</li>
    <li>Free airport shuttle</li>
    <li>Free cancellation</li>
  </div>
</div>
            </div>
           <div>
           <div className='m-4'><p>Showing 4 of 257 places</p>
            <div className='mt-6'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={dream} alt="Movie"/></figure>
  <div className="card-body">
   <div className='grid grid-cols-2'>
    <div>
    <h1>CVK Park Bosphorus Hotel Istanbul</h1>
    <div className='flex'>
        <ImLocation2></ImLocation2>

        <p>
Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
</p>
    </div>
    <div className='flex'>
        <div>
           <div className='flex'> <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar></div>
            <p>5 star Hotel</p>
        </div>
        <div className='flex'>
            <RiCupFill></RiCupFill>
            <p>20+ animents</p>
        </div>
        <p>very good 371 reviews</p>
    </div>
    </div>
    <div>
    <div>
    <p>starting</p>
            <h1>$ 240 /night</h1>
            <p>ext .tax</p>
               

            </div>
    </div>
    
   </div>
    {/* <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div> */}
    <div className='flex'> <GiSelfLove></GiSelfLove>
                <button className='btn btn-success'>View place</button></div>
  </div>
</div>
           </div>
            <div className='mt-6'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={dream} alt="Movie"/></figure>
  <div className="card-body">
   <div className='grid grid-cols-2'>
    <div>
    <h1>CVK Park Bosphorus Hotel Istanbul</h1>
    <div className='flex'>
        <ImLocation2></ImLocation2>

        <p>
Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
</p>
    </div>
    <div className='flex'>
        <div>
           <div className='flex'> <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar></div>
            <p>5 star Hotel</p>
        </div>
        <div className='flex'>
            <RiCupFill></RiCupFill>
            <p>20+ animents</p>
        </div>
        <p>very good 371 reviews</p>
    </div>
    </div>
    <div>
    <div>
    <p>starting</p>
            <h1>$ 240 /night</h1>
            <p>ext .tax</p>
               

            </div>
    </div>
    
   </div>
    {/* <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div> */}
    <div className='flex'> <GiSelfLove></GiSelfLove>
                <button className='btn btn-success'>View place</button></div>
  </div>
</div>
           </div>
           


            </div>
            
           </div>
           
            
        </div>
    );
};

export default Price;