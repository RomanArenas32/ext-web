import React from 'react';
import { CheckCircle, Mail, Smartphone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const UserProfile = () => {
  const products = [
    {
      image: "img/blanco.png",
      price: 3.5,
      stock: 90,
      deliveryTime: "24hrs",
    },
    {
      image: "img/negro.png",
      price: 5.8,
      stock: 140,
      deliveryTime: "36hrs",
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4 space-y-6 py-">
      <div className="grid grid-cols-3 gap-4 p-4 border rounded-lg">
        <div className="text-center">
          <p className="text-lg font-semibold">2</p>
          <p className="text-xs text-muted-foreground">Ventas</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">S/ 34.00</p>
          <p className="text-xs text-muted-foreground">Ingresos</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">90%</p>
          <p className="text-xs text-muted-foreground">Calificación</p>
        </div>
      </div>

      {/* Main Button */}
      <div className="text-center">
        <Link href={`/sell/post`}>
          <button className="w-[280px] h-[52px] px-6 py-3 bg-[#1A4B3D] text-white font-semibold rounded-full">
            Publicar aviso
          </button>
        </Link>

      </div>

      {/* Product List */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Mis productos</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-2">
              <img
                src={product.image}
                alt={`Product ${index + 1}`}
                className="h-24 w-full object-cover rounded-lg mb-2"
              />
              <div className="text-center">
                <p className="text-2xl font-semibold">S/ {product.price.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">
                  Stock: {product.stock} UN
                </p>
                <p className="text-xs text-muted-foreground">
                  Envío: {product.deliveryTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
