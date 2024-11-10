
import { Link } from 'react-router-dom';

export default function Produits({ produits, supprimerProduit, message }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des Produits</h1>
      {message && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">{message}</div>}
      <Link to="/ajouter-produit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Ajouter un nouveau produit</Link>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Identifiant</th>
              <th className="py-3 px-6 text-left">Libelle</th>
              <th className="py-3 px-6 text-center">Categorie</th>
              <th className="py-3 px-6 text-center">Quantité en stock</th>
              <th className="py-3 px-6 text-center">Prix</th>
              <th className="py-3 px-6 text-center">Prix total</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {produits.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{item.id}</td>
                <td className="py-3 px-6 text-left">{item.libelle}</td>
                <td className="py-3 px-6 text-center">{item.categorie.libelle}</td>
                <td className="py-3 px-6 text-center">{item.quantiteStock}</td>
                <td className="py-3 px-6 text-center">{item.prix}</td>
                <td className="py-3 px-6 text-center">{item.prix * item.quantiteStock}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center space-x-2">
                    <Link to={`/modifier-produit/${item.id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Modifier</Link>
                    <button onClick={() => supprimerProduit(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Supprimer</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}