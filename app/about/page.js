import aboutStyle from "./about.module.css";
import MenuArea from "../components/menu";
import Doughnuts from "../components/doughnuts";

export default function About() {
  return (
    <>
      <MenuArea />
      <section className={aboutStyle.hero}>
        <h3>Our Story</h3>
        <img src="/images/sprinkle.webp" alt="Sugar being sprinkled onto a large doughnut" />
      </section>

      <main className={aboutStyle.main}>
        <article className={aboutStyle.article}>
          <h1>About Us</h1>
          <p>Down to your final quid? The obvious thing to do is to start making and selling delicious doughnuts. Well, that’s what we did back in 2015 anyway.</p>
          <p>John Simpson and Harriet Jones kicked things off in mum’s kitchen with a tenner and a wok. Before they knew it, they had themselves a micro-bakery and their own coffee and doughnut shop in Manchester.</p>
          <p>We’re not talking your usual doughnuts either, oh no. These doughnuts are handmade, coming rough and ready with all manner of mouth-watering toppings. We’ve even got vegan doughnuts, because we’ve got your backs, you vegan champs.</p>
          <p>With stores in the city centres of Manchester, Stockport, Bolton and Bury, these are doughnuts made different. Get yourself along to one of our doughnut shops for the full dipped, dusted and deep-filled experience. You’re in for a treat!</p>
        </article>

        <section className={aboutStyle.doughnutRange}>
          <h2>Doughnuts</h2>
          <p>Find our extensive range below</p>
          <Doughnuts className={aboutStyle.doughnuts} />
        </section>
      </main>
    </>

  );
}
