import MenuArea from "./components/menu";
import Stores from "./components/stores";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      {/*menu component */}
      <MenuArea />
      {/*module css styles */}
      <main className={styles.main}>

        <article className={styles.homeArticle}>
          <h1>Doughnuts Made Different</h1>
          <p>Dipped, dusted and deep-filled doughnuts. Made by hand in Manchester, delivered across England, Wales and Scotland!</p>
          <a href="https://deliveroo.co.uk/">Order Now</a>
          <img src="/images/caramelNoBackground.webp" alt="Caramel filled white chocolate drizzled large doughnut" />
        </article>

        <section className={styles.bakerySection}>
          <h2>Take a peek inside our Manchester bakery</h2>
          <p>We spend our time baking handmade doughnuts for you to fill your hole with. Take a peek inside our Manchester bakery to see how they’re made.</p>
          <img src="/images/bakery.webp" alt="man making doughnuts in a bakery" />
        </section>

        <section className={styles.locationsSection}>
          <h2>You can find our delish Ds in more places than ever!</h2>
          <p>Obey your rumble and tuck in at any of our Manchester, Stockport, Bolton or Bury stores - either box it up and go, or stick around with a coffee,
            it’s totally up to you.</p>
          {/*stores component */}
          <Stores className={styles.stores} />
          <p> Not near a store? Fear not! Doughnuts Delivered lets you get your favourite doughnut flavours right to your door!</p>
          <a href="https://deliveroo.co.uk/">Order Now</a>
        </section>

        <section className={styles.celerbrateSection}>
          <h2>Celebrate with something different</h2>
          <p>Whether you’re celebrating a birthday, a wedding or just making it through to Friday, say it with fresh doughnuts. Order doughnuts online for events and occasions or pick up something special from our stores just for you - we even hand-make vegan doughnuts.
          </p>
          {/*Link component */}
          <Link href="/contact">Special Occasions</Link>
        </section>
      </main>
    </>
  );
}
