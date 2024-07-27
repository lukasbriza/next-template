import createClient from "openapi-fetch"
import type { paths } from "./api"

const client = createClient<paths>({ baseUrl: "https://my-api.cz/" })
export default client