"use client"

import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@workspace/ui/components/drawer"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet"

interface ResponsiveSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: React.ReactNode
  description?: React.ReactNode
  children: React.ReactNode
  side?: "right" | "left"
  mobileSnapPoints?: number[]
  className?: string
  footer?: React.ReactNode
  headerExtra?: React.ReactNode
  onClose?: () => void
}

const MOBILE_BREAKPOINT = 768

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const mql = window.matchMedia(query)
    const update = () => setMatches(mql.matches)

    update()
    mql.addEventListener("change", update)

    return () => mql.removeEventListener("change", update)
  }, [query])

  return matches
}

function ResponsiveSheet({
  open,
  onOpenChange,
  title,
  description,
  children,
  side = "right",
  mobileSnapPoints,
  className,
  footer,
  headerExtra,
  onClose,
}: ResponsiveSheetProps) {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
  const previousOpenRef = React.useRef(open)

  // Call onClose when the sheet/drawer transitions from open → closed.
  React.useEffect(() => {
    if (previousOpenRef.current && !open) {
      onClose?.()
    }
    previousOpenRef.current = open
  }, [open, onClose])

  if (isMobile === null) {
    return null
  }

  if (isMobile) {
    return (
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
      >
        {/* One-scroll-container layout:
            - Header: sticky, holds title/description and optional headerExtra
            - Body: scrolls
            - Footer: sticky actions area (optional) */}
        <DrawerContent className="flex h-[90vh] max-h-[90vh] flex-col">
          {(title || description || headerExtra) && (
            <DrawerHeader className="flex items-start justify-between gap-2 border-b bg-background">
              <div className="space-y-0.5">
                {title ? <DrawerTitle>{title}</DrawerTitle> : null}
                {description ? (
                  <DrawerDescription>{description}</DrawerDescription>
                ) : null}
              </div>
              {headerExtra ? (
                <div className="shrink-0">{headerExtra}</div>
              ) : null}
            </DrawerHeader>
          )}

          <div className={cn("flex-1 overflow-auto bg-background p-4", className)}>
            {children}
          </div>

          {footer ?? null}
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {/* One-scroll-container layout for desktop:
          - Header: sticky, with optional headerExtra
          - Body: scrolls
          - Footer: sticky actions area (optional) */}
      <SheetContent
        side={side}
        className="flex h-full flex-col"
      >
        {(title || description || headerExtra) && (
          <SheetHeader className="flex items-start justify-between gap-2 border-b bg-background">
            <div className="space-y-0.5">
              {title ? <SheetTitle>{title}</SheetTitle> : null}
              {description ? (
                <SheetDescription>{description}</SheetDescription>
              ) : null}
            </div>
            {headerExtra ? (
              <div className="shrink-0">{headerExtra}</div>
            ) : null}
          </SheetHeader>
        )}

        <div className={cn("flex-1 overflow-auto bg-background p-4", className)}>
          {children}
        </div>

        {footer ?? null}
      </SheetContent>
    </Sheet>
  )
}

export { ResponsiveSheet }


