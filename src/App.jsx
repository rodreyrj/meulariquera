import React, { useState } from 'react';
import MenuSection from './components/MenuSection.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import menuData from './data/products.json'; // Importa los datos

const App = () => {
    // Estado para manejar qué sección del acordeón está abierta
    const [openSection, setOpenSection] = useState(menuData[0].id); // Abre la primera por defecto

    const toggleSection = (id) => {
        setOpenSection(openSection === id ? null : id); // Cierra si ya está abierto, si no, abre el nuevo
    };

    return (
        <div className="bg-primary-dark text-gray-100 font-sans min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow max-w-4xl mx-auto w-full p-4 sm:p-6">
                
                {/* Título y Subtítulo Central */}
                <section className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                        Nuestros Manjares
                    </h2>
                    <p className="text-accent-orange text-lg sm:text-xl font-light">
                        Descubre el sabor que nos hace únicos.
                    </p>
                </section>

                {/* Contenedor del Menú Acordeón */}
                <div className="space-y-6">
                    {menuData.map((section) => (
                        <MenuSection
                            key={section.id}
                            section={section}
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