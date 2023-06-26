import styles from './page.module.css'

import ActiveFrames from '@/components/ActiveFrame'
import Hero from './hero/hero'
import Promo from './promo/Promo'
import Info from './info/info'
import Tour from './tours/tour'
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
      <div className={styles.separateContainers}></div>
      <section id="Info">
        <Info />
      </section>
      <div className={styles.reverseSeparateContainers}></div>
      <section id="Tour">
        <Tour />
      </section>
      <div className={styles.separateContainers}></div>
      <section id="Nosotros">
        <Nosotros />
      </section>

    </main>
  )
}
