import data from '../db.json'

function Header({ header }) {
  return (
    <section className="header-section">
      <div className="text-header">
        <h1>{data.header.title}</h1>
        <h3>{data.header.subheading}</h3>
        <p>{data.header.paragraph}</p>
        <button>{data.header.button}</button>
      </div>
      <div>
        <img src="../../public/students.png" alt="students" />
      </div>
    </section>
  )
}
export default Header
