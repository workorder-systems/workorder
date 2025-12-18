import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
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
  label?: React.ReactNode
  /**
   * Optional secondary label shown under the main label.
   * Useful for units, time ranges, or short context.
   */
  subtitle?: React.ReactNode
  /**
   * The primary value to display, e.g. "1,250" or "4.5%".
   */
  value?: React.ReactNode
  /**
   * Optional trend information shown in the top-right badge.
   */
  trend?: StatCardTrend
  /**
   * Optional helper text shown in the footer.
   */
  helper?: StatCardHelper
  /**
   * Optional leading visual in the header (icon, avatar, logo).
   */
  leading?: React.ReactNode
  /**
   * Optional additional meta text under the value.
   */
  meta?: React.ReactNode
  /**
   * Optional trailing visual in the header (sparkline, mini chart, etc.).
   */
  trailing?: React.ReactNode
  /**
   * Optional action in the top-right of the header (e.g. button or icon).
   */
  headerAction?: React.ReactNode
  /**
   * Optional custom footer content on the left side.
   * If provided, this takes precedence over `helper`.
   */
  footerLeft?: React.ReactNode
  /**
   * Optional custom footer content on the right side.
   */
  footerRight?: React.ReactNode
}

const directionClasses: Record<Direction, string> = {
  up: "bg-emerald-50 text-emerald-700 border-transparent dark:bg-emerald-500/10 dark:text-emerald-300",
  down: "bg-red-50 text-red-700 border-transparent dark:bg-red-500/10 dark:text-red-300",
  neutral: "bg-muted text-muted-foreground border-transparent",
}

const gradientClasses: Record<Direction, string> = {
  up: "bg-gradient-to-t from-emerald-500/10 via-emerald-500/5 to-card dark:from-emerald-500/5",
  down: "bg-gradient-to-t from-destructive/10 via-destructive/5 to-card dark:from-destructive/10",
  neutral: "bg-gradient-to-t from-muted to-card",
}

function StatCard({
  label,
  subtitle,
  value,
  trend,
  helper,
  leading,
  meta,
  trailing,
  headerAction,
  footerLeft,
  footerRight,
  className,
  ...props
}: StatCardProps) {
  const TrendIcon = trend?.icon
  const HelperIcon = helper?.icon
  const direction: Direction = trend?.direction ?? "neutral"

  return (
    <Card
      className={cn(
        "@container/stat-card h-full",
        gradientClasses[direction],
        className
      )}
      {...props}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {leading ? <div className="shrink-0">{leading}</div> : null}
            <div className="space-y-0.5">
              {label ? <CardDescription>{label}</CardDescription> : null}
              {subtitle ? (
                <div className="text-xs text-muted-foreground">
                  {subtitle}
                </div>
              ) : null}
            </div>
          </div>
          {headerAction ? (
            <div className="shrink-0">{headerAction}</div>
          ) : null}
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="space-y-1">
            {value ? (
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/stat-card:text-3xl">
                {value}
              </CardTitle>
            ) : null}
            {meta ? (
              <div className="text-xs text-muted-foreground">{meta}</div>
            ) : null}
            {trend && (
              <Badge
                variant="outline"
                className={cn("mt-1 inline-flex gap-1", directionClasses[direction])}
              >
                {TrendIcon && (
                  <TrendIcon className="size-3" aria-hidden="true" />
                )}
                <span aria-hidden={!!trend.srLabel}>{trend.value}</span>
                {trend.srLabel ? (
                  <span className="sr-only">{trend.srLabel}</span>
                ) : null}
              </Badge>
            )}
          </div>
          {trailing ? (
            <div className="h-16 w-24 @[250px]/stat-card:w-28">{trailing}</div>
          ) : null}
        </div>
      </CardHeader>
      {(footerLeft ||
        footerRight ||
        helper?.title ||
        helper?.description) && (
        <CardFooter className="mt-auto flex items-center justify-between gap-4 text-sm">
          <div className="min-w-0 flex-1">
            {footerLeft ??
              (helper?.title || helper?.description ? (
                <div className="flex flex-col gap-1">
                  {helper?.title && (
                    <div className="line-clamp-1 flex items-center gap-2 font-medium">
                      {HelperIcon && (
                        <HelperIcon className="size-4" aria-hidden="true" />
                      )}
                      <span>{helper.title}</span>
                    </div>
                  )}
                  {helper?.description && (
                    <div className="text-muted-foreground">
                      {helper.description}
                    </div>
                  )}
                </div>
              ) : null)}
          </div>
          {footerRight ? (
            <div className="flex shrink-0 items-center gap-2">
              {footerRight}
            </div>
          ) : null}
        </CardFooter>
      )}
    </Card>
  )
}

export { StatCard }


