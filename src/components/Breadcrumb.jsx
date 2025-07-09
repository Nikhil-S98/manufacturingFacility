import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Define the page hierarchy mapping
  const pageHierarchy = {
    '/': { name: 'home', parent: null },
    '/art-design': { name: 'art/design', parent: '/' },
    '/ux-ui': { name: 'ux/ui', parent: '/' },
    '/music': { name: 'music', parent: '/' },
    '/about': { name: 'about', parent: '/' },
    // Add subpages here as you create them
    '/ux-ui/pocket-session': { name: 'pocketSession', parent: '/ux-ui' },
  };

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [];
    
    // Always start with home
    breadcrumbs.push({
      path: '/',
      name: 'home',
      isActive: location.pathname === '/'
    });

    // Build the breadcrumb trail
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const pageInfo = pageHierarchy[currentPath];
      
      if (pageInfo) {
        breadcrumbs.push({
          path: currentPath,
          name: pageInfo.name,
          isActive: location.pathname === currentPath
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.path} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-separator">/</span>}
            {crumb.isActive ? (
              <span className="breadcrumb-current">{crumb.name}</span>
            ) : (
              <Link to={crumb.path} className="breadcrumb-link">
                {crumb.name}
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb; 