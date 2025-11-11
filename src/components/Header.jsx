import React from 'react';

const Header = () => {
    return (
        <header className="bg-secondary-dark shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl sm:text-4xl font-serif text-accent-gold tracking-widest">
                    La Riquera
                </h1>
                <div className="text-sm font-light text-gray-400">Menú Digital</div>
            </div>
        </header>
    );
};

export default Header;