import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import { Mymap } from './Map/Map.jsx';
import AuthuserContextProvider from './Contextapi/AuthuserContext.jsx';
import CartProvider from './Contextapi/CartContext.jsx';

createRoot(document.getElementById('root')).render(
    <AuthuserContextProvider>
        <CartProvider>
            <RouterProvider router={Mymap} />
        </CartProvider>
    </AuthuserContextProvider>
)
