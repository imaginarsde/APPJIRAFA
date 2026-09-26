# Compatibilidad del TV Box

Esta app replica la arquitectura que resultó estable en el desarrollo de **Ruleta Termas**.

## Perfil Android

- Orientación: **landscape**
- `minSdk 21`
- `targetSdk 25`
- `compileSdk 35`
- Java nativo, sin Kotlin ni AndroidX
- Una sola `Activity`
- `WebView` local con `file:///android_asset/index.html`
- Sin permiso `INTERNET`
- Modo inmersivo y pantalla encendida

## Motivo de targetSdk 25

El TV Box de producción informa `SDK_INT = 25`. Aunque algunos firmwares muestran un nombre de versión Android inconsistente, el SDK efectivo es el dato utilizado para compatibilidad.

## WebView antiguo

El frontend fue adaptado para evitar sintaxis y APIs problemáticas en WebView de Android 7/API 25:

- JavaScript ES5
- sin async/await
- sin arrow functions
- sin dependencias CDN
- sin APIs remotas
- sin CSS moderno crítico como `aspect-ratio` o `backdrop-filter`

## Resolución

Diseño original: **1920 × 1080, 16:9 horizontal**.
La interfaz ocupa el viewport completo, sin scroll ni zoom.
