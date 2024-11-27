import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { siteLanguage as locales } from '@repo/common';
import { defaultLocale } from '@repo/common';
export const routing = defineRouting({
  locales,
  defaultLocale,
});
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
