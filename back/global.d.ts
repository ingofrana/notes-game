declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: number
        CLIENT_ID: string
        CLIENT_SECRET: string
        CLIENT_URL: string
        SPOTIFY_AUTH_URL: string
        SPOTIFY_API_URL: string
    }
}