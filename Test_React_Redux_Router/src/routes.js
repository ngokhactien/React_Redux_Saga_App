import Contact  from './component/Contact';
import NotFound  from './component/NotFound';
import Home  from './component/Home';
import About  from './component/About';
import Products  from './component/Products';
import Login  from './component/Login'

const routes = [
    {
        path : '/',
        exact : true ,
        main : () => <Home /> 
    },
    {
        path : '/about',
        exact : false ,
        main : () => <About /> 
    },
    {
        path : '/contact',
        exact : false ,
        main : () => <Contact /> 
    },
    {
        path : '/products',
        exact : false ,
        main : ({match , location}) => <Products match={match} location={location}/> 
    },
    {
        path : '/login',
        exact : false ,
        main : ({location}) => <Login  location={location}/> 
    },
    {
        path : '',
        exact : false ,
        main : () => <NotFound /> 
    }
];

export default routes ;