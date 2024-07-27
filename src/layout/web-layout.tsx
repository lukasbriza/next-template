import { AsyncWebLayout } from "@/shared/types";
import { EmotionRegistry } from "./registry";

export const RootWebLayout: AsyncWebLayout = async ({ children }) => (
  <EmotionRegistry>{children}</EmotionRegistry>
)
