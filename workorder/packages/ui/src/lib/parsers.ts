import { parseAsArrayOf, parseAsString } from "nuqs";
import type { ExtendedColumnSort } from "@workspace/ui/types/data-table";

export function getSortingStateParser<TData>(
  columnIds: string[],
): ReturnType<typeof parseAsArrayOf<ExtendedColumnSort<TData>, string>> {
  return parseAsArrayOf(
    parseAsString.transform((value) => {
      const [id, direction] = value.split(":");
      return {
        id,
        desc: direction === "desc",
      } as ExtendedColumnSort<TData>;
    }),
    ",",
  ).transform((values) =>
    values
      .map((value) => {
        const [id, direction] = value.split(":");
        if (!id || !columnIds.includes(id)) return null;
        return {
          id,
          desc: direction === "desc",
        } as ExtendedColumnSort<TData>;
      })
      .filter((sort): sort is ExtendedColumnSort<TData> => sort !== null),
  ) as ReturnType<typeof parseAsArrayOf<ExtendedColumnSort<TData>, string>>;
}
