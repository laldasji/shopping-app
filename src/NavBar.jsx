import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  const [itemsAdded, setItemsAdded] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((response) => {
          setItemsList(response);
          setLoaded(true);
          return response;
      })
      .catch((error) => console.error(error));
  });
  return (
    <>
      <h1 className='w-full text-center bg-yellow-300 text-5xl pb-3 pt-3'>FakeShopping.com</h1>
      <div className="w-full text-center bg-slate-800 sticky top-0 z-10 flex items-center justify-center h-15">
        <div className='self-center justify-self-center'>
            <Link to="home" className="navButtons">
              <button>
                Home
                <hr className="hr-element" />
              </button>
            </Link>
            <Link to="store" className="navButtons">
              <button>
                Store
                <hr className="hr-element" />
              </button>
            </Link>
            <Link to="about" className="navButtons">
            <button>
                About Us
                <hr className="hr-element" />
              </button>
            </Link>
        </div>
        <Link to="cart" className="navButtons flex items-center justify-self-center absolute right-0">
          <button title='Cart'>
            <img src="/icons/svg/cart.svg" alt="Cart" className='w-8' />
          </button>
        </Link>
      </div>
      <Outlet context={{itemsList, loaded, itemsAdded, setItemsAdded}}/>
    </>
  );
}

export default NavBar;