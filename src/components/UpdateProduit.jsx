import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProduitForm from './ProduitForm';

export default function UpdateProduit({ produits, modifierProduit, categories }) {
  const [produit, setProduit] = useState({
    libelle: '',
    categorie: null,
    prix: '',
    quantiteStock: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const produitToUpdate = produits.find(p => p.id === parseInt(id));
    if (produitToUpdate) {
      setProduit(produitToUpdate);
    }
  }, [id, produits]);

  const handleSubmit = (e) => {
    e.preventDefault();
    modifierProduit(produit);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Modifier le produit</h1>
      <ProduitForm
        produit={produit}
        setProduit={setProduit}
        handleSubmit={handleSubmit}
        submitButtonText="Enregistrer"
        categories={categories}
      />
    </div>
  );
}