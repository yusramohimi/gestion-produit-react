import React from 'react';

export default function ProduitForm({ produit, setProduit, handleSubmit, submitButtonText, categories }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "categorie") {
          const selectedCategory = categories.find(cat => cat.id.toString() === value);
          setProduit({...produit, categorie: selectedCategory
          });
        } else if (name === "libelle") {
          setProduit({...produit,libelle: value
          });
        } else if (name === "prix") {
          setProduit({...produit,prix: value
          });
        } else if (name === "quantiteStock") {
          setProduit({...produit,quantiteStock: value
          });
        }
      };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="libelle" className="block mb-1 font-medium text-gray-700">Libelle:</label>
        <input
          type="text"
          id="libelle"
          name="libelle"
          value={produit.libelle}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="categorie" className="block mb-1 font-medium text-gray-700">Catégorie:</label>
        <select
          id="categorie"
          name="categorie"
          value={produit.categorie?.id || ""}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Sélectionnez une catégorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id.toString()}>
              {category.libelle}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="prix" className="block mb-1 font-medium text-gray-700">Prix:</label>
        <input
          type="number"
          id="prix"
          name="prix"
          value={produit.prix}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div>
        <label htmlFor="quantiteStock" className="block mb-1 font-medium text-gray-700">Quantité en stock:</label>
        <input
          type="number"
          id="quantiteStock"
          name="quantiteStock"
          value={produit.quantiteStock}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {submitButtonText}
      </button>
    </form>
  );
}