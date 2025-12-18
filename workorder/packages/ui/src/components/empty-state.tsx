import * as React from "react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

export interface EmptyStateActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export interface EmptyStateProps
  extends Omit<React.ComponentProps<typeof Empty>, "children"> {
  /**
   * Optional icon rendered above the title.
   */
  icon?: IconComponent
  /**
   * Main heading of the empty state.
   */
  title: React.ReactNode
  /**
   * Short description under the title.
   */
  description?: React.ReactNode
  /**
   * Primary call to action button.
   */
  primaryAction?: EmptyStateActionProps
  /**
   * Optional secondary action rendered as a subtle text button.
   */
  secondaryAction?: EmptyStateActionProps
  /**
   * Optional extra content (e.g. tips, links, small list).
   * Rendered under the actions.
   */
  children?: React.ReactNode
}

function EmptyState({
  icon: Icon,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  className,
  ...props
}: EmptyStateProps) {
  const {
    label: primaryLabel,
    className: primaryClassName,
    type: primaryType,
    ...primaryProps
  } = primaryAction ?? ({} as EmptyStateActionProps)

  const {
    label: secondaryLabel,
    className: secondaryClassName,
    ...secondaryProps
  } = secondaryAction ?? ({} as EmptyStateActionProps)

  return (
    <Empty className={cn("gap-4", className)} {...props}>
      <EmptyHeader>
        {Icon && (
          <EmptyMedia variant="icon">
            <Icon className="size-6" aria-hidden="true" />
          </EmptyMedia>
        )}
        <EmptyTitle>{title}</EmptyTitle>
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>

      <EmptyContent>
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {primaryAction && (
              <Button
                size="sm"
                type={primaryType ?? "button"}
                className={primaryClassName}
                {...primaryProps}
              >
                {primaryLabel}
              </Button>
            )}
            {secondaryAction && (
              <button
                type="button"
                className={cn(
                  "text-xs text-muted-foreground underline underline-offset-4",
                  secondaryClassName
                )}
                {...secondaryProps}
              >
                {secondaryLabel}
              </button>
            )}
          </div>
        )}

        {children}
      </EmptyContent>
    </Empty>
  )
}

export { EmptyState }


