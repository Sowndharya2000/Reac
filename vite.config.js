import {defineconfig} from "vite"
import react from '@vitejs/plugin-react'

//https://vitajs.dev/config/
export default defineconfig({
    base:"/deploy-github/",
    plugins : [react()],
    
})