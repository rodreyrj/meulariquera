import React, { useState } from 'react';
import MenuSection from './components/MenuSection.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import menuData from './data/products.json'; 

const App = () => {
    // CAMBIO CLAVE: Inicializamos openSection a 'null'
    // Esto significa que, al inicio, ninguna sección tiene el ID que coincida con el estado,
    // por lo tanto, todas las secciones aparecerán cerradas.
    const [openSection, setOpenSection] = useState(null); 

    const toggleSection = (id) => {
        // La lógica del acordeón: si haces clic en una sección ya abierta (openSection === id), 
        // la cierras (poniendo el estado en null). Si no, abres la nueva sección (id).
        setOpenSection(prevId => prevId === id ? null : id); 
    };

    return (
        <div className="bg-primary-dark text-gray-100 font-sans min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow max-w-4xl mx-auto w-full p-4 sm:p-6">
                
                <section className="text-center mb-10 pt-4">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                        Nuestros Manjares
                    </h2>
                    <p className="text-accent-orange text-lg sm:text-xl font-light">
                        Descubre el sabor que nos hace únicos.
                    </p>
                </section>

                <div className="space-y-6">
                    {menuData.map((section) => (
                        <MenuSection
                            key={section.id}
                            section={section}
                            // openSection === section.id será 'false' para todas al inicio, ya que openSection es 'null'.
                            isOpen={openSection === section.id}
                            toggleSection={toggleSection}
                        />
                    ))}
                </div>
                
            </main>

            <Footer />
        </div>
    );
};

export default App;
