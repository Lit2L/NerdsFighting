import Logos from '../../public/2.png'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href='/' className=''>
      <Image
        src={Logos}
        alt='Nerds Kickboxing Club'
        width={75}
        height={75}
        className='rounded-full border'
      />
    </Link>
  )
}

export default Logo
