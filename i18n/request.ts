import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const cookiesList = await cookies();

  const defaultLocale =
    headersList.get("accept-language")?.split(",")[0].split("-")[0] || "en";
  const locale = cookiesList.get("NEXT_LOCALE")?.value || defaultLocale || "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
