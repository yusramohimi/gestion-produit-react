import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProduitForm from './ProduitForm';

export default function AjouterProduit({ ajouterProduit, categories }) {
  const [produit, setProduit] = useState({
    libelle: '',
    categorie: null,
    prix: '',
    quantiteStock: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    ajouterProduit(produit);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ajouter un nouveau produit</h1>
      <ProduitForm
        produit={produit}
        setProduit={setProduit}
        handleSubmit={handleSubmit}
        submitButtonText="Ajouter"
        categories={categories}
      />
    </div>
  );
}