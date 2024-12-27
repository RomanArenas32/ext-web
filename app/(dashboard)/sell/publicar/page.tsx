'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createProduct } from '@/actions/products'

const productSchema = z.object({
  img: z.string().url(),
  nombre: z.string().min(1, "El nombre es requerido"),
  precio: z.number().positive("El precio debe ser positivo"),
  categoria: z.string().min(1, "La categoría es requerida"),
  descripcion: z.string().min(1, "La descripción es requerida"),
  unidades: z.number().int().positive("Las unidades deben ser un número positivo"),
  color: z.string().min(1, "El color es requerido"),
})

type ProductFormValues = z.infer<typeof productSchema>

export default function Page() {
  const router = useRouter()

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      img: '',
      nombre: '',
      precio: 0,
      categoria: '',
      descripcion: '',
      unidades: 0,
      color: '',
    },
  })

  async function onSubmit(values: ProductFormValues) {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      console.log(formData)
      const response = await createProduct(formData);
      if(response.success){
        toast.success("Producto creado correctamente")
      }
      router.push("/sell")
    } catch (error) {
      toast.error("Error al subir producto")
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Publicar aviso</h2>
        <Link href={"/sell"}>
          <Button variant="ghost" size="icon">
            <X className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="img"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL de la imagen</FormLabel>
                <FormControl>
                  <Input placeholder="https://ejemplo.com/imagen.jpg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre producto</FormLabel>
                <FormControl>
                  <Input placeholder="Producto o Servicio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="precio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                <Input
                    type="number"
                    placeholder="200"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    onFocus={(e) => {
                      // Borra el valor "0" cuando el input obtiene el foco
                      if (e.target.value === "0") {
                        e.target.value = "";
                      }
                    }}
                    onBlur={(e) => {
                      // Si el campo está vacío, restablece el valor a "0"
                      if (e.target.value === "") {
                        e.target.value = "0";
                        field.onChange(0); // Asegúrate de actualizar el campo de formulario también
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoría</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="camisas">Camisas</SelectItem>
                    <SelectItem value="pantalones">Pantalones</SelectItem>
                    <SelectItem value="zapatos">Zapatos</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="descripcion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe tu producto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unidades"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unidades máximas</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="200"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    onFocus={(e) => {
                      // Borra el valor "0" cuando el input obtiene el foco
                      if (e.target.value === "0") {
                        e.target.value = "";
                      }
                    }}
                    onBlur={(e) => {
                      // Si el campo está vacío, restablece el valor a "0"
                      if (e.target.value === "") {
                        e.target.value = "0";
                        field.onChange(0); // Asegúrate de actualizar el campo de formulario también
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Colores disponibles</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un color" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="blanco">Blanco</SelectItem>
                    <SelectItem value="negro">Negro</SelectItem>
                    <SelectItem value="azul">Azul</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Publicar</Button>
        </form>
      </Form>
    </div>
  )
}

