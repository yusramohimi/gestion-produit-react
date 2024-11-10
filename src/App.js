import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Produits from "./components/Produits";
import Ventes from "./components/Ventes";
import Clients from "./components/Clients";
import AjouterProduit from "./components/AjouterProduit";
import UpdateProduit from "./components/UpdateProduit";
import categoriesData from "./data/categories.json";

function App() {
  const [produits, setProduits] = useState([
    {
      id: 1,
      libelle: 'pc',
      categorie: { id: 5, libelle: "informatique" },
      prix: 5000,
      quantiteStock: 10
    }
  ]);

  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const ajouterProduit = (nouveauProduit) => {
    setProduits([...produits, { ...nouveauProduit, id: produits.length + 1 }]);
  };

  const modifierProduit = (produitModifie) => {
    setProduits(produits.map(p => p.id === produitModifie.id ? produitModifie : p));
  };

  const supprimerProduit = (id) => {
    setProduits(produits.filter(p => p.id !== id));
    setMessage('Produit supprimé avec succès');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Produits produits={produits} supprimerProduit={supprimerProduit} message={message} />} />
        <Route path="/ventes" element={<Ventes />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/ajouter-produit" element={<AjouterProduit ajouterProduit={ajouterProduit} categories={categories} />} />
        <Route path="/modifier-produit/:id" element={<UpdateProduit produits={produits} modifierProduit={modifierProduit} categories={categories} />} />
      </Routes>
    </>
  );
}

export default App;