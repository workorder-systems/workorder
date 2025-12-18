"use client"

import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

type ActionBarVariant = "primary" | "secondary" | "destructive"

interface ActionBarAction {
  label: React.ReactNode
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
  variant?: ActionBarVariant
}

interface StickyActionBarProps {
  primaryAction?: ActionBarAction
  secondaryActions?: ActionBarAction[]
  className?: string
  children?: React.ReactNode
}

/**
 * StickyActionBar
 *
 * A domain-agnostic, sticky action area meant for mobile-first layouts.
 * - Sits at the bottom of the viewport or container.
 * - Makes available actions obvious (primary + secondary).
 * - Does NOT handle closing; that's owned by the shell/header.
 */
function StickyActionBar({
  primaryAction,
  secondaryActions,
  className,
  children,
}: StickyActionBarProps) {
  const hasDefaultLayout = primaryAction || (secondaryActions && secondaryActions.length > 0)

  return (
    <div
      className={cn(
        "sticky inset-x-0 bottom-0 z-20 border-t bg-background/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-1px_0_rgba(0,0,0,0.06)]",
        className
      )}
    >
      {children && !hasDefaultLayout ? (
        children
      ) : (
        <div className="flex items-center gap-2">
          {secondaryActions?.length ? (
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {secondaryActions.map((action, index) => (
                <Button
                  key={index}
                  type="button"
                  variant={
                    action.variant === "destructive"
                      ? "destructive"
                      : action.variant === "secondary"
                        ? "outline"
                        : "ghost"
                  }
                  size="sm"
                  disabled={action.disabled}
                  onClick={action.onClick}
                >
                  {action.icon}
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}

          {primaryAction ? (
            <Button
              type="button"
              className="min-w-[120px]"
              variant="default"
              disabled={primaryAction.disabled}
              onClick={primaryAction.onClick}
            >
              {primaryAction.icon}
              {primaryAction.label}
            </Button>
          ) : null}
        </div>
      )}
    </div>
  )
}

export { StickyActionBar }


