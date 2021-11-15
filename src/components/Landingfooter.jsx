
import {Link} from 'react-router-dom'

function Landingfooter(){
    return(
        <footer className="border-top text-center small text-muted py-3">
        <p>
          <Link to="/" className="mx-1">Home</Link> |
          <Link to="/about-us" className="mx-1">About Us</Link> |
          <Link className="mx-1" to="/terms">Terms</Link>
        </p>
        <p className="m-0">
          Copyright &copy; 2021 <Link to="/" className="text-muted">AMS</Link>. All
          rights NOT YET reserved.
        </p>
      </footer>
    )
}

export default Landingfooter