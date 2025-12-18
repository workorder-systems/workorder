import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

type Direction = "up" | "down" | "neutral"

type IconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { className?: string }
>

export interface StatCardTrend {
  value: React.ReactNode
  direction?: Direction
  icon?: IconComponent
  /**
   * Screen reader label describing what the trend means,
   * e.g. "12.5% increase compared to last period".
   */
  srLabel?: string
}

export interface StatCardHelper {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: IconComponent
}

export interface StatCardProps extends React.ComponentProps<typeof Card> {
  /**
   * Short label describing what the metric represents,
   * e.g. "Total revenue" or "Open work orders".
   */
  label: React.ReactNode
  /**
   * The primary value to display, e.g. "1,250" or "4.5%".
   */
  value: React.ReactNode
  /**
   * Optional trend information shown in the top-right badge.
   */
  trend?: StatCardTrend
  /**
   * Optional helper text shown in the footer.
   */
  helper?: StatCardHelper
}

const directionClasses: Record<Direction, string> = {
  up: "text-primary",
  down: "text-destructive",
  neutral: "text-muted-foreground",
}

function StatCard({
  label,
  value,
  trend,
  helper,
  className,
  ...props
}: StatCardProps) {
  const TrendIcon = trend?.icon
  const HelperIcon = helper?.icon
  const direction: Direction = trend?.direction ?? "neutral"

  return (
    <Card
      className={cn("@container/stat-card", className)}
      {...props}
    >
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/stat-card:text-3xl">
          {value}
        </CardTitle>
        {trend && (
          <CardAction>
            <Badge
              variant="outline"
              className={cn("gap-1", directionClasses[direction])}
            >
              {TrendIcon && <TrendIcon className="size-3" aria-hidden="true" />}
              <span aria-hidden={!!trend.srLabel}>{trend.value}</span>
              {trend.srLabel ? (
                <span className="sr-only">{trend.srLabel}</span>
              ) : null}
            </Badge>
          </CardAction>
        )}
      </CardHeader>
      {(helper?.title || helper?.description) && (
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          {helper?.title && (
            <div className="line-clamp-1 flex items-center gap-2 font-medium">
              {HelperIcon && (
                <HelperIcon className="size-4" aria-hidden="true" />
              )}
              <span>{helper.title}</span>
            </div>
          )}
          {helper?.description && (
            <div className="text-muted-foreground">{helper.description}</div>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

export { StatCard }


