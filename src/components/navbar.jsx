import data from '../db.json'

function Navbar() {
  return (
    <header className="navbar">
      <h1>
        <img src={data.navbar.img} alt="data" />
      </h1>
      <nav>
        <ul>
          {data.navbar.links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
