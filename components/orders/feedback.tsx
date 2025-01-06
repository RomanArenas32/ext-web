'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Cat } from 'lucide-react'
import { toast } from "sonner"

interface FeedbackDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (feedback: { type: 'positive' | 'negative', comment: string }) => void
}

export function FeedbackDrawer({ open, onOpenChange, onSubmit }: FeedbackDrawerProps) {
  const [selectedType, setSelectedType] = useState<'positive' | 'negative' | null>(null)
  const [comment, setComment] = useState('')

  const sendFeedback = () => {
    toast.success('Thanks for you colaboration!')
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
      
      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-12 h-1 bg-gray-200 rounded-full mb-2" />
          
          <h2 className="text-xl font-semibold">Rate your experience</h2>
          
          <div className="grid grid-cols-2 gap-4 w-full">
            <button
              onClick={() => setSelectedType('positive')}
              className={`flex items-center gap-2 p-4 rounded-lg border transition-colors ${
                selectedType === 'positive' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Cat className="w-6 h-6 text-amber-500" />
              <div className="text-left">
                <div className="font-medium">Positive</div>
                <div className="text-sm text-muted-foreground">Great!</div>
              </div>
            </button>

            <button
              onClick={() => setSelectedType('negative')}
              className={`flex items-center gap-2 p-4 rounded-lg border transition-colors ${
                selectedType === 'negative' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Cat className="w-6 h-6 text-blue-500" />
              <div className="text-left">
                <div className="font-medium">Negative</div>
                <div className="text-sm text-muted-foreground">Nope</div>
              </div>
            </button>
          </div>

          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave your comments here (Optional)"
            className="w-full min-h-[100px] resize-none"
          />

          <Button 
            className="w-full py-6 rounded-full"
            onClick={() => {
              if (selectedType) {
                onSubmit({
                  type: selectedType,
                  comment
                })
                sendFeedback()
                onOpenChange(false)
              }
            }}
            disabled={!selectedType}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

