export default function EnquireForm({ className, id }) {
  return (
    <form className={className} id={id}>
      <label>
        Name
        <input type="text" id="name" required />
      </label>

      <label>
        Email Address
        <input type="text" id="email" required />
      </label>

      <label>
        Phone Number
        <input type="number" id="phoneNumber" required />
      </label>

      <label>
        Enquiry Details
        <input type="textarea" id="details" required />
      </label>
      <button className="submit" type="submit">Send Enquiry</button>
    </form >
  )
}