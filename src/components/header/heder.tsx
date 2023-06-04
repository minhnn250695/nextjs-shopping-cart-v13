import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.scss';

function Header() {
  const pathName = usePathname(); 
  return (
    <div style={{ marginBottom: '85px' }}>
      <header>
        <div className="container-menu-desktop">
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              <a  className="logo">
                <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
              </a>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li>
                    <Link  className={`nav-link ${pathName.endsWith('/') ? 'active' : ''}`} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link  className={`nav-link ${pathName.endsWith('/product') ? 'active' : ''}`} href="/product">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link  className={`nav-link ${pathName.endsWith('/cart') ? 'active' : ''}`} href="/cart">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link  className={`nav-link ${pathName.endsWith('/about') ? 'active' : ''}`} href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link  className={`nav-link ${pathName.endsWith('/contact') ? 'active' : ''}`} href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>

                <Link
                  href="/cart"
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify="2"
                >
                  <i className="zmdi zmdi-shopping-cart"></i>
                </Link>

                <button
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify="0"
                >
                  <i className="zmdi zmdi-favorite-outline"></i>
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <div className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input className="plh3" type="text" name="search" placeholder="Search..." />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
