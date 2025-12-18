import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"

export interface ListItemProps extends React.ComponentProps<typeof Item> {
  leading?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  meta?: React.ReactNode
  trailing?: React.ReactNode
}

function ListItem({
  leading,
  title,
  description,
  meta,
  trailing,
  className,
  ...itemProps
}: ListItemProps) {
  return (
    <Item
      className={cn(className)}
      {...itemProps}
    >
      {leading ? (
        <ItemMedia className="shrink-0 w-9 justify-center">
          {leading}
        </ItemMedia>
      ) : null}

      <ItemContent className="min-w-0 gap-0.5">
        <ItemTitle className="truncate">{title}</ItemTitle>

        {description ? (
          <ItemDescription className="truncate">
            {description}
          </ItemDescription>
        ) : null}

        {meta ? (
          <p className="text-xs text-muted-foreground">
            {meta}
          </p>
        ) : null}
      </ItemContent>

      {trailing ? (
        <ItemActions>{trailing}</ItemActions>
      ) : null}
    </Item>
  )
}

export { ListItem }

