import { SiteFooter } from '@/components/site-footer'
import { About } from '@/templates/about'
import { Hero } from '@/templates/hero'
import { Menu } from '@/templates/menu'
import Schedule from '@/templates/schedule'

export default function IndexPage() {
  return (
    <div className='relative h-full min-h-screen w-full bg-[radial-gradient(circle_500px_at_50%_350px,#181818,transparent)] '>
      <Hero />
      <About />
      <Menu />
      <Schedule />
      <div className='absolute bottom-0  w-full'>
        <SiteFooter />
      </div>
    </div>
  )
}
