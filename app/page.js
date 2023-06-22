import styles from './page.module.css'

import ActiveFrames from '@/components/ActiveFrame'
import Hero from './hero/hero'
import Promo from './promo/Promo'
import Info from './info/info'
import Nosotros from './nosotros/nosotros'

export default function Home() {
  return (
    <main className={styles.main}>
      <ActiveFrames />

      <section id="Hero">
        <Hero />
      </section>

      <section id="Promos">
        <Promo />
      </section>

      <section id="Info">
        <Info />
      </section>

      <section id="Nosotros">
        <Nosotros />
      </section>

    </main>
  )
}
