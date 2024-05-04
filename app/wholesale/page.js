import Style from "./ws.module.css"
import MenuArea from "../components/menu";
import Doughnuts from "../components/doughnuts";
import Form from "../components/form"
export default function Wholesale() {
  return (
    <>
      {/*menu component*/}
      <MenuArea />
      <section className={Style.hero}>
        <h2><span>Stock</span> Our Stuff</h2>
        <img src="/images/caramelNoBackground.webp" alt="Caramel filled white chocolate drizzled large doughnut" />
      </section>
      <main className={Style.main}>

        <article>
          <h1>Wholesale Doughnuts</h1>
          <p>We’ve already got a number of stockists outside of our stores – including coffee shops and eateries – so why not join the club? </p>
          <a href="#formLoc">Join Now!</a>
          <p>You can have our bright, bold and curvaceous buns to add to your store, offering your customers something extra when you bulk buy wholesale doughnuts.</p>
        </article>

        <section className={Style.doughnutRange}>
          <h2>Doughnuts</h2>
          <p>Find our extensive range below</p>
          {/*doughnuts component*/}
          <Doughnuts className={Style.doughnuts} />
        </section>

        <section className={Style.enquire} id="formLoc">
          <p>Whether you need bulk doughnuts or a regular wholesale doughnut supplier, chuck your details in our form and we’ll get back to you. We’re knee-deep in batter at the moment, but we’ll be in touch about the doughnuts wholesale process.</p>
        </section>
        {/*form component*/}
        <Form className={Style.enquireForm}></Form>
      </main>
    </>
  );
}
