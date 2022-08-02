import { useSelector } from "react-redux";
import Main from "./Main";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { productSearch } from '../redux/productAction';

const Header = () => {

  const result = useSelector((state) => state.cartData)
  console.warn("Redux data in header", result);

  const dispatch = useDispatch();

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>E-comm</Link>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Pricing</a>
              </li>
              <li className="search-box">
                <input type='text' onChange={(event) => dispatch(productSearch(event.target.value))} placeholder="Search Product" />
              </li>
              <Link to='/cart'>
                <li className="header-icon"><i className="bi bi-cart icon" ></i><span>{result.length}</span></li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header