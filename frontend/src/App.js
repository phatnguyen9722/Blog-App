import { RouterProvider } from 'react-router-dom';

import Router from './router/Router';

function App() {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={Router} />
            </div>
        </div>
    );
}

export default App;
