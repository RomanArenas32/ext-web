'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createProduct } from '@/actions/products'


const serviceSchema = z.object({
  img: z.string().url(),
  name: z.string().min(1, "El nombre es requerido"),
  price: z.number().positive("El precio debe ser positivo"),
  category: z.string().min(1, "La categoría es requerida"),
  description: z.string().min(1, "La descripción es requerida"),
})

type ProductFormValues = z.infer<typeof serviceSchema>

export default function ServicePost() {
  const router = useRouter()

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      img: '',
      name: '',
      price: 0,
      category: '',
      description: '',
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
      if (response.success) {
        toast.success("Service has created")
      }
      setTimeout(() => {
        router.push("/sell")
      }, 2000);

    } catch (error) {
      toast.error("Error creating service")
    }
  }


  return (
    <>


      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
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
                  <FormLabel>Nombre del servicio</FormLabel>
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
                        if (e.target.value === "0") {
                          e.target.value = "";
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value === "") {
                          e.target.value = "0";
                          field.onChange(0);
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
                      <SelectItem value="transporte">Transporte</SelectItem>
                      <SelectItem value="servicio-tecnico">Servicio Técnico</SelectItem>
                      <SelectItem value="limpieza-mantenimiento">Limpieza y Mantenimiento</SelectItem>
                      <SelectItem value="educacion">Educación</SelectItem>
                      <SelectItem value="salud-bienestar">Salud y Bienestar</SelectItem>
                      <SelectItem value="consultoria">Consultoría</SelectItem>
                      <SelectItem value="entretenimiento">Entretenimiento</SelectItem>
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



            <Button type="submit" className="w-full">Publicar</Button>
          </form>

        </Form>

      </div>

    </>
  )
}
