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
    <div className="max-w-md mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          K
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Kimoda</h1>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              Online
            </span>
            <span>| Verified user</span>
          </div>
          <div className="text-xs text-muted-foreground">
            <span>130 ventas</span> | <span>100.00%</span>
          </div>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" /> Email
            </span>
            <span className="flex items-center gap-1">
              <Smartphone className="w-4 h-4" /> SMS
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> KYC
            </span>
          </div>
        </div>
      </div>

      {/* Statistics */}
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
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700">
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
