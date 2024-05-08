import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from './Styled';

const Navbar = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // If on the home page, return null to avoid displaying breadcrumbs
    if (location.pathname === '/') {
        return null;
    }

    return (
        <>
            <Wrapper>
                <section className='breadcrumb-section mt-4'>
                <nav className='breadcrumb-nav'>
                    <ol className='breadcrumb'>
                        {/* Start with the home link */}
                        <li className='breadcrumb-item'>
                            <Link to='/'>Home</Link>
                        </li>
                        {/* Build the breadcrumbs dynamically */}
                        {pathnames.map((name, index) => {
                             const decodedName = decodeURIComponent(name);
                             const to = `/${pathnames.slice(0, index + 1).map(decodeURIComponent).join('/')}`;
                             const isLast = index === pathnames.length - 1;
                            return (
                                <li key={to} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                                    {isLast ? (
                                            decodedName.charAt(0).toUpperCase() + decodedName.slice(1)
                                        ) : (
                                            <Link to={to}>
                                            {decodedName.charAt(0).toUpperCase() + decodedName.slice(1)}
                                        </Link>                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
                </section>
            </Wrapper>
        </>
    );
};

export default Navbar;
