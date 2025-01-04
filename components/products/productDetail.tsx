"use client";

import { Product } from '@/interfaces/product';
import { Header } from '@/components/common/header';
import { Separator } from '@/components/ui/separator';
import { AlertMessage } from '@/components/ui/alert';
import Image from 'next/image';

interface ProductDetailProps {
    productDetails: Product;
}

const ProductDetail = ({ productDetails }: ProductDetailProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Cabecera */}
            <div>
                <Header text="Detalle de producto" />
                <Separator />
            </div>

            <div className="flex-grow bg-white rounded-lg p-6 w-full max-w-lg mx-auto">

                <div className="relative flex">
                    <Image
                        src="/img/pologris.jpg"
                        alt="Polo gris"
                        width={343}
                        height={343}
                        className="h-[343px] w-full object-contain"
                    />
                </div>
                <Image
                    src="/img/detalle/flechas.svg"
                    alt="arrows"
                    width={40}
                    height={40}
                    className="absolute top-1/2 right-12 transform -translate-y-1/2 h-10 w-10 object-contain cursor-pointer"
                />

                <div className="flex justify-center gap-4 mt-4 h-[78px]">
                    <Image
                        src="/img/detalle/vista1.jpg"
                        alt="Vista 1"
                        width={78}
                        height={78}
                        className="h-20 w-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-gray-500"
                    />
                    <Image
                        src="/img/detalle/vista2.jpg"
                        alt="Vista 2"
                        width={78}
                        height={78}
                        className="h-20 w-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-gray-500"
                    />
                    <Image
                        src="/img/detalle/vista3.jpg"
                        alt="Vista 3"
                        width={78}
                        height={78}
                        className="h-20 w-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-gray-500"
                    />
                    <Image
                        src="/img/detalle/vista4.jpg"
                        alt="Vista 360"
                        width={78}
                        height={78}
                        className="h-20 w-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-gray-500"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button className="px-4 py-2 text-sm font-bold rounded-full bg-gray-200 text-gray-700">
                        Descripción
                    </button>
                    <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-700">
                        Material
                    </button>
                    <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-700">
                        Reviews
                    </button>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                    <p>{productDetails?.description}</p>
                </div>
            </div>

            <div className="w-full p-4 mb-6 flex justify-center">
                <AlertMessage text="Me interesa" />
            </div>
        </div>
    );
};

export default ProductDetail;
