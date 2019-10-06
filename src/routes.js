import { createAppContainer, createSwitchNavigattor } from 'react-navigation';

import Book from './pages/Book';
import List from './pages/List';
import Login from './pages/Login';

const Routes = createAppContainer(
    createSwitchNavigattor({
        Book,
        List,
        Login
    })
);

export default Routes;

