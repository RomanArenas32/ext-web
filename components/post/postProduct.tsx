'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createProduct } from '@/actions/products'
import { TermsDrawer } from '@/components/sell/terms-drawer'


const productSchema = z.object({
  img: z.string().url(),
  name: z.string().min(1, "El nombre es requerido"),
  price: z.number().positive("El precio debe ser positivo"),
  category: z.string().min(1, "La categoría es requerida"),
  description: z.string().min(1, "La descripción es requerida"),
  unities: z.number().int().positive("Las unidades deben ser un número positivo"),
  color: z.string().min(1, "El color es requerido"),
  seller: z.string().min(1, "El vendedor es requerido")
})

type ProductFormValues = z.infer<typeof productSchema>

export default function ProductPost({user}: any) {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [showDrawer, setShowDrawer] = useState(true)

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      img: '',
      name: '',
      price: 0,
      category: '',
      description: '',
      unities: 0,
      color: '',
      seller: user?.marketName || "",
    },
  })

  async function onSubmit(values: ProductFormValues) {
    try {
      const response = await createProduct(values);
      if (response.success) {
        toast.success("Producto creado correctamente")
      }
      setTimeout(() => {
        router.push("/sell")
      }, 2000);

    } catch (error) {
      toast.error("Error al subir producto")
    }
  }

  const handleAgree = () => {
    setShowDrawer(false)
    setShowForm(true)
  }

  return (
    <div className='mb-28'>

      {showForm && (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg space-y-6">
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
                name="name"
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
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Precio en soles (PEN)</FormLabel>
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
                name="category"
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
                name="description"
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
                name="unities"
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
              <div className='w-full flex justify-center'>
                <Button type="submit" className="w-[280px] h-[52px] bg-[#1A4B3D] rounded-3xl">Publicar</Button>
              </div>
            </form>

          </Form>

        </div>
      )}
      {showDrawer && (
        <div>
          <TermsDrawer
            open={showDrawer}
            onOpenChange={setShowDrawer}
            onAgree={handleAgree}
          />
        </div>
      )}
    </div>
  )
}

