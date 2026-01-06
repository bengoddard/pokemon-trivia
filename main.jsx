import React from 'react';
import { createRoot } from "react-dom/client";
import App from './src/components/App';
import './index.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <ChakraProvider value={defaultSystem}>
        <App />
    </ChakraProvider>
</React.StrictMode>
)