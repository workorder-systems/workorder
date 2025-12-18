import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        subtle:
          "border-transparent bg-muted text-muted-foreground [a&]:hover:bg-muted/80",
        soft:
          "border-transparent bg-muted text-muted-foreground [a&]:hover:bg-muted/80",
      },
      size: {
        xs: "px-1.5 py-0 text-[0.68rem]",
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-[0.8rem]",
      },
      tone: {
        neutral: "",
        info: "",
        success: "",
        warning: "",
        destructive: "",
      },
    },
    compoundVariants: [
      // soft + tone → soft status chips
      {
        variant: "soft",
        tone: "neutral",
        className:
          "bg-status-neutral-bg text-muted-foreground border-status-neutral-border",
      },
      {
        variant: "soft",
        tone: "info",
        className:
          "bg-status-info-bg text-status-info border-status-info-border",
      },
      {
        variant: "soft",
        tone: "success",
        className:
          "bg-status-success-bg text-status-success border-status-success-border",
      },
      {
        variant: "soft",
        tone: "warning",
        className:
          "bg-status-warning-bg text-status-warning border-status-warning-border",
      },
      {
        variant: "soft",
        tone: "destructive",
        className:
          "bg-destructive/10 text-destructive border-destructive/30 dark:bg-destructive/20",
      },

      // outline + tone → tinted outline chips
      {
        variant: "outline",
        tone: "neutral",
        className: "text-muted-foreground border-status-neutral-border",
      },
      {
        variant: "outline",
        tone: "info",
        className: "text-status-info border-status-info-border",
      },
      {
        variant: "outline",
        tone: "success",
        className: "text-status-success border-status-success-border",
      },
      {
        variant: "outline",
        tone: "warning",
        className: "text-status-warning border-status-warning-border",
      },
      {
        variant: "outline",
        tone: "destructive",
        className: "text-destructive border-destructive/60",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "sm",
      tone: undefined,
    },
  }
)

function Badge({
  className,
  variant,
  size,
  tone,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, tone }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
