import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import GlobalLoading from '../../components/GlobalLoading';
import theme from './../../commons/Theme';
import Modal from './../../components/Modal';
import { ADMIN_ROUTES } from './../../contants';
import configureStore from './../../redux/configureStore';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './styles.js';

const store = configureStore();

const rederAdminroutes = () =>{
  let xhtml = null;
  xhtml = (
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
            name={route.name}
        />
      );
    })
  );
  return xhtml ;
}

function App() {
  return (
    <Provider store={store}>   {/* kết nốt store của redux*/}
      <Router>
        <ThemeProvider theme={theme}> {/* dùng để màu sắc và css chung cho cả dự án */}
          <CssBaseline/>
          <ToastContainer/>  {/* hiện thị thông báo*/}
          <Modal/>
          <Switch>
            {rederAdminroutes()}        {/* phương thức trả về các route */}
          </Switch>
          <GlobalLoading/>     {/* hiện thị loading */}
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default withStyles(styles)(App);
