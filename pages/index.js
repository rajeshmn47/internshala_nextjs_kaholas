import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import intern from '../public/intern.png'

export default function Home() {
  return (

    <div className='p-12' style={{fontFamily:'Musio Sans 500'}}>
     <h5 className='text-4xl font-black capitalize'>Summer art camp! 5 days of artists and 
     painting monet,Van Gogh,Matisse,& More</h5>
     <h5 className='text-2xl font-bold font-roboto capitalize text-grey-50 mt-1' >Multi day course ?</h5>
     <div className='flex justify-between mt-12'>
      <div className='w-1/2'>
        <p className='font-bold font-verdana font-roboto' style={{fontFamily:'Musio Sans 500'}}>
In this 5 day class we will explore artists Monet,Matisse, Van
Gogh, among others and then recreate paintings using crayon and water color.students will 
have fun learning about artists & creating their own art inspired by their work.
</p>
<h5 className='mt-6 mb-6 text-blue-500 font-bold capitalize'>kimberly r moseler</h5>
<div className='flex'>
<Rating name="read-only" value={5} readOnly /> 
<p className='ml-2 text-black-400 font-bold'>467 total reviews for this teacher</p>
</div>
<div className='flex'>
<Rating name="read-only" value={5} readOnly />
<p className='text-grey-100 ml-2 font-bold'>5 reviews for this class</p>
</div>
<h2 className='font-bold mt-6 mb-6'>completed by 21 learners</h2>
<div className='flex justify-between mt-12'>
<button className='bg-blue-600 text-white  px-4 py-2 font-bold capitalize rounded-full'>see class schedle
 <ArrowForwardIosIcon style={{fontSize:'17px',marginLeft:'5px'}}/></button>
<button className='text-blue-600 font-bold capitalize'><FavoriteBorderIcon/>  save</button>
<button className='text-blue-600 font-bold capitalize'><ShareOutlinedIcon/> share</button>
</div>
      </div>
      
      <div className='w-1/2 ml-12'>
  
    <Image alt="Vercel logo" src={intern} width={600} height={350} />

      </div>
      </div>
    </div>

  )
}
