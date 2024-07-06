import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";
import { i18nConfig } from "./i18n/config";

//Add i18n router middleware
export const middleware = (request: NextRequest) => {
  return i18nRouter(request, i18nConfig)
}

//Add RegExp for which routes avoid internationalisation
export const config = {
  macher: "/((?!api|static|.*\\..*|_next).*)"
}