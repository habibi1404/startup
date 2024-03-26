import Image from "next/image"
import pic from './cool-wallpaper.png'
import styles from './components/styles.module.css'


export default function Home() {

  const user = 'francis'
  return (
    <div className={styles.home}>
      <div className='grid grid-cols-3'>
      <Image src='/cool-wallpaper.png' alt='cool-wallpaper' width='500' height='400'/>

      <Image src={pic} alt='cool-wallpaper' width='500' height='200'/>

      <Image src='https://images.pexels.com/photos/14701898/pexels-photo-14701898.jpeg' alt='forest picture' width='500' height='300'/>


      </div>

    <section>
      
      <p>this is the first text by {user}</p>
      <p>this is the second text by {user}</p>
    </section>
    </div>
  )


}