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
        <div>
            <div className='flex justify-between items-center mb-4
            font-merriweather'
            >
                <div>
                    <label className='mr-2'>Kategoria:</label>
                    <select
                        className='p-2 border rounded'
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">Wszystko</option>
                        <option value="neckleases">Naszyjniki</option>
                        <option value="rings">Pierścionki</option>
                        <option value="bracelets">Bransoletki</option>
                        <option value="sets">Zestawy</option>
                    </select>
                </div>
                <div>
                    <button
                        className='p-2 border rounded'
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    >
                        Sortuj: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
                    </button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                >
                    {sortedProducts.map(product => (
                        <div
                            key={product.id}
                            className='border p-4 rounded shadow'
                        >
                            <img
                                src={product.imageSrc}
                                alt={product.prodName}
                                className='w-full h-48 object-cover mb-4'
                            />
                            <h2 className='text-lg font-semibold'>
                                {product.prodName}
                            </h2>
                            <p className='text-yellow-800'>
                                {product.prodPrice}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default JewellerySection;