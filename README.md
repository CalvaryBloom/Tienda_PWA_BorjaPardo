# 🛒 Tienda Demo - Progressive Web App (PWA)

Una aplicación web progresiva moderna que simula una tienda online con carrito de compras, búsqueda de productos y funcionalidad offline.

## 📋 Características Principales

- **✅ Progressive Web App (PWA)**: Funciona offline gracias al Service Worker
- **🔍 Búsqueda de Productos**: Filtrado en tiempo real de artículos
- **🛒 Carrito de Compras**: Gestión completa del carrito con persistencia local
- **📱 Responsive Design**: Optimizado para dispositivos móviles y de escritorio
- **⚡ Rendimiento**: Caché inteligente y carga rápida de contenidos
- **🎨 Interfaz Moderna**: Diseño limpio y atractivo con Teal/Verde oscuro

## 📁 Estructura del Proyecto

```
Tienda_BorjaPardo/
├── index.html           # Página principal con galería de productos
├── carrito.html         # Página del carrito de compras
├── script.js            # Lógica principal de la aplicación
├── style.css            # Estilos generales
├── sw.js                # Service Worker para funcionalidad offline
├── manifest.json        # Configuración PWA
├── assets/              # Imágenes de productos y capturas
│   ├── headphones.png
│   ├── smartwatch.png
│   ├── keyboard.png
│   ├── mouse.png
│   ├── speaker.png
│   ├── stand.png
│   ├── earbuds.png
│   ├── screenshot-movil.png
│   └── screenshot-pc.png
└── icons/               # Iconos para instalación
    ├── icon-192.png     # Icono 192x192px
    └── icon-512.png     # Icono 512x512px
```

## 📦 Productos Disponibles

La tienda incluye una variedad de productos electrónicos y accesorios:

- **Audio**: Auriculares, auriculares inalámbricos, altavoces
- **Wearables**: Smartwatches y dispositivos portátiles
- **Periféricos**: Teclados mecánicos y ratones ergonómicos
- **Accesorios**: Soportes ajustables y otros complementos

## 🚀 Cómo Usar

### Instalación Local

1. Clona o descarga el proyecto
2. Abre `index.html` en un navegador moderno
3. El Service Worker se registrará automáticamente al cargar la página

### Como Progressive Web App

- **En Chrome/Edge**: Haz clic en el icono de instalación (esquina superior derecha)
- **En dispositivos móviles**: Abre el menú y selecciona "Instalar app"
- Una vez instalada, la app funcionará como una aplicación nativa con acceso offline

### Funcionalidades

#### 🔍 Buscar Productos
- Escribe en la barra de búsqueda para filtrar productos en tiempo real
- La búsqueda funciona por nombre y categoría

#### 🛒 Agregar al Carrito
- Haz clic en cualquier producto para ver detalles
- Usa el botón "Agregar al Carrito" para añadir items
- El contador del carrito se actualiza automáticamente

#### 📋 Gestionar Carrito
- Accede al carrito mediante el botón en la cabecera
- Modifica cantidades o elimina productos
- Visualiza el total de compra

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos responsivos y modernos
- **JavaScript (Vanilla)**: Lógica sin frameworks externos
- **Service Worker API**: Funcionalidad offline y caché
- **Web App Manifest**: Configuración PWA
- **LocalStorage**: Persistencia de datos del carrito

## 🔧 Configuración PWA

El archivo `manifest.json` configura:

```json
{
  "name": "Tienda Demo",
  "display": "standalone",
  "theme_color": "#00897B",
  "start_url": "index.html"
}
```

## 📱 Compatibilidad

- ✅ Chrome 76+
- ✅ Firefox 67+
- ✅ Safari 15.1+ (iOS)
- ✅ Edge 79+
- ✅ Dispositivos móviles y tablets

## 🛡️ Características de Seguridad

- El servicio worker controla qué recursos se cachean
- Los datos del carrito se almacenan localmente (no se envían a servidores)
- Validación de entrada en el buscador

## 📝 Autor

Borja Pardo - Actividad de Evaluación (AEV03) - Tema 3 SSP

**Curso**: 2º FP DAM (Desarrollo de Aplicaciones Multiplataforma)

## 📄 Licencia

Este proyecto es un trabajo educativo para propósitos de formación.

---

**Nota**: Esta es una aplicación de demostración. Los productos y precios son ficticios.
