export default function Stores({ className }) {
  return (
    <section className={className}>
      <div>
        <a href="https://maps.app.goo.gl/5aRsFkzi6TLm5iwSA" target="_blank">Manchester</a>
        <img src="/images/manchester.webp" alt="Manchester store" draggable="false" />
      </div>
      <div>
        <a href="https://maps.app.goo.gl/P3wLowDNPTgUPjFXA" target="_blank">Stockport</a>
        <img src="/images/stockport.webp" alt="Stockport store" draggable="false" />
      </div>
      <div>
        <a href="https://maps.app.goo.gl/3rt71XjjW9YcBMCM8" target="_blank">Bolton</a>
        <img src="/images/bolton.webp" alt="Bolton Store" draggable="false" />
      </div>
      <div>
        <a href="https://maps.app.goo.gl/4vsCA8x8t3BMMu8q7" target="_blank">Bury</a>
        <img src="/images/bury.webp" alt="Bury Store" draggable="false" />
      </div>
    </section>
  );
}