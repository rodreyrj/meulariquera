import React from 'react';

const MenuItem = ({ name, price }) => (
    <div className="item-row text-lg sm:text-xl font-normal py-1">
        <span className="item-name text-gray-200">{name}</span>
        <span className="item-price text-accent-gold ml-2 flex-shrink-0">{price} CUP</span>
    </div>
);

const MenuSection = ({ section, isOpen, toggleSection }) => {
    return (
        <div className="bg-secondary-dark rounded-xl shadow-custom overflow-hidden border border-accent-gold/20">
            
            <button
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none transition duration-300 hover:bg-accent-gold/10"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isOpen}
            >
                <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {section.category}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{section.description}</p>
                </div>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    &#9660; 
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={!isOpen}
            >
                <div className="p-5 sm:p-6 pt-0 space-y-4">
                    
                    {section.items && section.items.map((item, i) => (
                        <MenuItem key={i} name={item.name} price={item.price} />
                    ))}

                    {section.subcategories && section.subcategories.map((sub, i) => (
                        <div key={i}>
                            <h4 className="text-xl sm:text-2xl font-semibold text-accent-orange mt-4 mb-2 border-b border-gray-600 pb-1">
                                {sub.name}
                            </h4>
                            {sub.items.map((item, j) => (
                                <MenuItem key={j} name={item.name} price={item.price} />
                            ))}
                        </div>
                    ))}

                    {section.addons && (
                        <div>
                            <h4 className="text-xl sm:text-2xl font-semibold text-accent-orange mt-4 mb-2 border-b border-gray-600 pb-1">
                                {section.addonsTitle}
                            </h4>
                            <p className="text-gray-400 text-sm mb-2">{section.addonsDescription}</p>
                            {section.addons.map((item, k) => (
                                <MenuItem key={k} name={item.name} price={item.price} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuSection;
