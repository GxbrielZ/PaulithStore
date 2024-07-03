import React, { useState } from 'react';
import products from '../../data/products';

const JewellerySection = () => {
    const [filter, setFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('asc');

    const filteredProducts = products.filter(product =>
        filter === 'all' || product.category === filter    
    );

    const sortedProducts = filteredProducts.sort((a, b) =>
        sortOrder === 'asc' ? parseInt(a.prodPrice) - parseInt(b.prodPrice) : parseInt(b.prodPrice) - parseInt(a.prodPrice)
    );

    return (
        <div className="container my-5">
            <div className="flex justify-between items-center mb-4 font-merriweather text-yellow-900 text-sm">
                <div>
                    <label className="mr-2">Kategoria:</label>
                    <select
                        className="p-1 border rounded text-yellow-700 bg-gray-100 cursor-pointer"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option
                            value="all"
                            className='cursor-pointer'>Wszystko</option>
                        <option value="neckleases">Naszyjniki</option>
                        <option value="rings">Pierścionki</option>
                        <option value="bracelets">Bransoletki</option>
                        <option value="sets">Zestawy</option>
                    </select>
                </div>
                <div>
                    <button
                        className="bg-yellow-800 hover:bg-yellow-900 text-white p-1 rounded text-sm"
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    >
                        Sortuj: {sortOrder === 'asc' ? 'cena - malejąco' : 'cena - rosnąco'}
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {sortedProducts.map(product => (
                    <div
                        key={product.id}
                        className="border p-4 rounded shadow flex flex-col items-center"
                    >
                        <img
                            src={product.imageSrc}
                            alt={product.prodName}
                            className="w-full h-96 object-cover mb-4"
                        />
                        <h2 className="text-center text-lg font-semibold mb-2">
                            {product.prodName}
                        </h2>
                        <p className="text-center text-yellow-800 font-bold">
                            ${product.prodPrice}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default JewellerySection;