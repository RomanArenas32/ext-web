'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SubmitFormButton } from "@/components/ui/form-drawer";
import { VisuallyHidden } from "@reach/visually-hidden";
import { useState } from "react";

export function AlertMessage({ form, onSubmit, text }: any) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await form.handleSubmit(onSubmit)();
    } finally {
      setIsSubmitting(false);
      setIsDialogOpen(false);
    }
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <SubmitFormButton
          type="button"
          size="lg"
          className="w-[280px] h-[52px] bg-[#1A4B3D] text-white text-[16px] font-[500] rounded-3xl"
          disabled={isSubmitting }
        >
          {text || "Confirm"}
        </SubmitFormButton>
      </AlertDialogTrigger>
      <AlertDialogContent  className="top-1/4 md:top-1/2 w-[90%] rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Estas seguro/a?</AlertDialogTitle>
          <VisuallyHidden>
            <AlertDialogDescription>
              Are you sure? This action is irreversible.
            </AlertDialogDescription>
          </VisuallyHidden>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit} disabled={isSubmitting} className="bg-[#1A4B3D] text-white">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}