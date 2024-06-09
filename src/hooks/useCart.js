import react from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => {
   
    const ctx = react.useContext(CartContext)

    return {
        ...ctx
    }
}