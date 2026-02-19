// Esto es para que no se rompa el proyecto si no se tiene la variable de entorno:
// Y para que funcione en local y en producción
export const envVars = {
  STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
  STRAPI_TOKEN: process.env.STRAPI_API_TOKEN,
};
