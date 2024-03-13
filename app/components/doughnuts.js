export default function Doughnuts({ className }) {
  return (
    <section className={className}>
      <div>
        <img src="/images/caramel.webp" alt="large caramel doughnut" draggable="false" />
      </div>
      <div>
        <img src="/images/nutella.webp" alt="large nutella doughnut" draggable="false" />
      </div>
      <div>
        <img src="/images/bakewell.webp" alt="large bakewell doughnut with jam in the middle" draggable="false" />
      </div>
      <div>
        <img src="/images/biscoff.webp" alt="large biscoff doughnut" draggable="false" />
      </div>
    </section>
  );
}