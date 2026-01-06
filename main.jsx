import React from 'react';
import { createRoot } from "react-dom/client";
import App from './src/components/App';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import './index.css'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <ChakraProvider value={defaultSystem}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>
</React.StrictMode>
)