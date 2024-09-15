import z from 'zod'

const envSchema = z.object({
    NEXT_PUBLIC_SUPABASE_URL: z.string(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
})

// export const env = envSchema.parse(process.env)
export const env = {
    NEXT_PUBLIC_SUPABASE_URL: "https://eqdkzqeeatxdmcenjyjo.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZGt6cWVlYXR4ZG1jZW5qeWpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjQxMTE2MiwiZXhwIjoyMDQxOTg3MTYyfQ.mqKvHIDM3ID1JA8T2yE3j4VZ9duaOm6xHrSVBe5C_N8"
}