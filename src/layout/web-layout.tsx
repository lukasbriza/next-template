import { AsyncWebLayout } from "@/shared/types";
import { EmotionRegistry } from "./registry";

export const RootWebLayout: AsyncWebLayout = ({ children }) => (
  <EmotionRegistry>{children}</EmotionRegistry>
)
