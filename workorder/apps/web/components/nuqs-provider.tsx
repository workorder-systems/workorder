'use client';

// Import from shared package to ensure same module instance across monorepo
import { NuqsAdapter } from '@workspace/ui/nuqs-adapter';

export function NuqsProvider({ children }: { children: React.ReactNode }) {
  return <NuqsAdapter>{children}</NuqsAdapter>;
}
