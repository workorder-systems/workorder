import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

type Overlap = "sm" | "md" | "lg"

export interface AvatarStackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * How much the avatars overlap horizontally.
   * This only affects the gap between items, not their size.
   */
  overlap?: Overlap
  /**
   * Whether to render avatars in grayscale to de‑emphasize them.
   */
  grayscale?: boolean
}

const overlapClasses: Record<Overlap, string> = {
  sm: "-space-x-1.5",
  md: "-space-x-2",
  lg: "-space-x-3",
}

function AvatarStack({
  overlap = "md",
  grayscale = false,
  className,
  ...props
}: AvatarStackProps) {
  return (
    <div
      className={cn(
        "flex items-center",
        overlapClasses[overlap],
        "[&>[data-slot=avatar]]:ring-2",
        "[&>[data-slot=avatar]]:ring-background",
        grayscale && "[&>[data-slot=avatar]]:grayscale",
        className
      )}
      {...props}
    />
  )
}

export { AvatarStack }


