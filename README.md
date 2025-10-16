## Expo + React Native (ReState) — Proyecto

Bienvenido a ReState: una plantilla Expo + React Native pensada para explorar patrones de estado, navegación de rutas por archivos y componentes reutilizables.

Este README está escrito en español y diseñado para ser claro, rápido de leer y útil tanto para desarrolladores que arrancan como para quienes quieren contribuir.

---

## ¿Qué hay en este proyecto?

- Estructura moderna basada en Expo y Router por archivos.
- Carpetas principales: `app/` (rutas y pantallas), `components/`, `lib/`, `assets/`, `constants/`.
- Integraciones útiles ya preparadas: tipado TypeScript, Tailwind con NativeWind, fonts e imágenes en `assets/`.

---

## Comenzar rápido

1) Instalar dependencias

```bash
npm install
```

2) Iniciar el servidor de desarrollo

```bash
npx expo start
```

3) Opciones comunes (desde la interfaz de Expo):

- Abrir en Android/iOS (emulador o dispositivo físico).
- Abrir en Expo Go para pruebas rápidas.

---

## Estructura clave (resumen)

- `app/` — Rutas y pantallas. Usa file-based routing; revisa `_layout.tsx` en la raíz y en subcarpetas.
- `components/` — Componentes UI reutilizables (Cards, Search, Filters, etc.).
- `lib/` — Lógica compartida y hooks (p. ej. `useAppwrite.ts`, proveedor global, semillas de datos).
- `assets/` — Fuentes, íconos y imágenes.

---

## Flujo de desarrollo recomendado

1. Crear una rama con nombre claro: `feature/<descripcion>` o `fix/<descripcion>`.
2. Mantener commits pequeños y enfocados.
3. Añadir unit/integration tests cuando el cambio altera la lógica compartida.

---

## Consejos rápidos y buenas prácticas

- Aprovecha el tipado TS para evitar errores en tiempo de compilación.
- Mantén los componentes puros y divide responsabilidades (presentación vs. lógica).
- Usa `lib/global-provider.tsx` para estado o contexto compartido en lugar de props-drilling.

---

## Scripts útiles (package.json)

- `npm start` — alias para `expo start`.
- `npm run ios` / `npm run android` — lanzar en emuladores si están configurados.
- `npm run reset-project` — reponer plantilla de inicio (ver `README` original si lo necesitas).

---

## ¿Cómo contribuir?

1. Abre un issue si detectas bugs o tienes ideas de mejora.
2. Haz un fork y envía un PR con una descripción clara de los cambios.
3. Añade pruebas cuando modifies la lógica de negocio.

---

## Recursos y documentación útil

- Expo: https://expo.dev
- React Native: https://reactnative.dev
- NativeWind (Tailwind para RN): https://www.nativewind.dev

---

Si quieres, puedo:

- Añadir secciones específicas (API, arquitectura, guías de estilo).
- Crear ejemplos de componentes o tests.

Indícame qué prefieres y continúo.
