import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import process from "process"

export default defineConfig({
    base:process.env.NODE_ENV === "production" ? "/projectfinal8" : "/",
    plugins:[react()],
})