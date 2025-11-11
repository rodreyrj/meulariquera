import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary-dark mt-12 p-4 text-center text-sm border-t border-gray-700">
            <p className="text-gray-400">
                © 2025 La Riquera. Todos los derechos reservados.
            </p>
            <p className="mt-1 text-gray-500">
                Diseño y Desarrollo por: 
                <a 
                    href="https://rodreyrj.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-gold hover:text-white transition duration-300 font-semibold underline"
                >
                    Rodreyrj
                </a>
            </p>
        </footer>
    );
};

export default Footer;
