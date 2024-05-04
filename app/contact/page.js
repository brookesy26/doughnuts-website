import MenuArea from "../components/menu";
import Stores from "../components/stores";
import Form from "../components/form";
import Styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      {/*menu component*/}
      <MenuArea />
      <section className={Styles.hero}>
        <h2>Doughnut Addiction Hotline</h2>
        <img src="/images/leavesDougnut.webp" alt="nutty doughnut with caramel center on a plate, leaves slightly in front" />
      </section>

      <main className={Styles.main}>
        <article>
          <h1>Contact Us</h1>
          <p>We’re pretty busy baking doughnuts – up to our eyeballs in cookie crumbs and caramel sauce – but you can always give us a call to find out more.</p>
          <p>Simply check which store you want and pick up the phone to have a chat, or better yet, get in touch by filling in our form and we’ll get back to you.</p>
          <a href="#contactForm">Enquire Now</a>
        </article>

        {/*stores component*/}
        <Stores className={Styles.stores} />
        {/*form component*/}
        <Form className={Styles.enquireForm} id="contactForm" />
      </main>
    </>
  );
}
