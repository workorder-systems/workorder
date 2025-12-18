import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

type Tone = "neutral" | "info" | "success" | "warning" | "destructive"

type IconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { className?: string }
>

export const statusBadgeVariants = cva(
  "inline-flex items-center gap-1 whitespace-nowrap rounded-full border font-medium",
  {
    variants: {
      tone: {
        neutral:
          "bg-status-neutral-bg text-muted-foreground border-status-neutral-border",
        info:
          "bg-status-info-bg text-status-info border-status-info-border",
        success:
          "bg-status-success-bg text-status-success border-status-success-border",
        warning:
          "bg-status-warning-bg text-status-warning border-status-warning-border",
        destructive:
          "bg-destructive/10 text-destructive border-destructive/30 dark:bg-destructive/20",
      },
      size: {
        sm: "px-1.5 py-0 text-[0.68rem]",
        md: "px-2 py-0.5 text-xs",
      },
    },
    defaultVariants: {
      tone: "neutral",
      size: "md",
    },
  }
)

export interface StatusBadgeProps
  extends React.ComponentProps<typeof Badge>,
    VariantProps<typeof statusBadgeVariants> {
  label?: React.ReactNode
  tone?: Tone
  size?: "sm" | "md"
  icon?: IconComponent
  srLabel?: string
}

function StatusBadge({
  children,
  label,
  tone = "neutral",
  size = "md",
  icon: Icon,
  srLabel,
  className,
  variant,
  ...props
}: StatusBadgeProps) {
  const content = label ?? children
  if (content == null && !srLabel) return null

  const hideVisualForSr = !!srLabel

  return (
    <Badge
      variant={variant ?? "outline"}
      className={cn(statusBadgeVariants({ tone, size }), className)}
      {...props}
    >
      {Icon && (
        <Icon
          className="size-3"
          aria-hidden="true"
        />
      )}
      <span aria-hidden={hideVisualForSr}>{content}</span>
      {srLabel ? <span className="sr-only">{srLabel}</span> : null}
    </Badge>
  )
}

export { StatusBadge }


