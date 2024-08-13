import { AnimatedJoinButton } from '@/components/lit2l/AnimatedJoinButton'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const Instructor: React.FC = () => {
  return (
    <section
      id='schedule'
      className=' relative min-h-full w-full py-36 dark:bg-[radial-gradient(circle_400px_at_50%_350px,#144437,transparent)]'
    >
      <div className='mx-auto flex flex-col items-center justify-center sm:container'>
        <div className='space-y-9 text-center'>
          <Link
            href='/schedule'
            className='font-logo text-3xl tracking-wide text-black/80 dark:text-white  md:text-6xl'
          >
            Class Schedule
          </Link>
          <p className='font-heading font-light text-black dark:text-white'>
            Find the schedule that works for you.
          </p>
        </div>

        <Card className='m-12'>
          <CardContent className='p-6'>
            <h3 className='font-heading text-2xl'>Location: Williams MMA</h3>
            <Separator className='my-3' />
            Address: 8780 Warner Ave, Suite 7 Fountain Valley, CA 92708
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Instructor
