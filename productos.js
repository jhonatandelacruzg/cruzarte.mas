// ============================================================
// CATÁLOGO DE PRODUCTOS — CRUZARTE+
// ============================================================
// Este archivo se puede editar a mano, PERO lo más fácil es usar
// admin-productos.html: llenas el formulario y te genera este
// archivo actualizado automáticamente, listo para subir a GitHub.
//
// "cat" debe ser: "pisco", "vino", "Wisky", "Ron" o "licor"
// "sub" (solo vinos): "tinto", "blanco", "rosado", "espumante" o ""
// "masVendido: true" muestra el producto en el carrusel de más vendidos
// ============================================================
        const productosCatalogo = [
    
            // ---------- PRODUCTO 1 Wisky ----------
            {
                id: 1,
                nombre: "Johnnie Walker Red Label (750ml)",
                categoria: "",
                cat: "Wisky",
                sub: "",
                stock: 1000,                 // 👈 cambia la cantidad disponible aquí
                precio: "S/60",     // 👈 cambia el precio aquí
                tag: "Más Vendido",        // 👈 etiqueta visible (deja "" para ninguna)
                masVendido: true,
                desc: "El whisky escocés más vendido. Sabor audaz y ahumado, ideal con hielo o en cocteles",
                img: "imagenes/whisky/johnnie-walker-red-label.jpg"
            },
            {
                id: 15,
                nombre: "Whisky Johnnie Walker Blue Label, Escocia 750ml",
                categoria: "",
                cat: "Wisky",
                sub: "",
                stock: 1000,                 // 👈 cambia la cantidad disponible aquí
                precio: "S/60",     // 👈 cambia el precio aquí
                tag: "Más Vendido",        // 👈 etiqueta visible (deja "" para ninguna)
                masVendido: true,
                desc: "El whisky escocés más vendido. Sabor audaz y ahumado, ideal con hielo o en cocteles",
                img: "imagenes/whisky/whisky-johnnie-walker-blue-label-escocia-750ml.jpg"
            },  
            {
                id: 16,
                nombre: "Whisky JOHNNIE WALKER Double Black Botella 750ml",
                categoria: "",
                cat: "Wisky",
                sub: "",
                stock: 1000,
                precio: "S/140.00",
                tag: "Más Vendido",
                masVendido: true,
                desc: "El whisky escocés más vendido. Sabor audaz y ahumado, ideal con hielo o en cocteles",
                img: "imagenes/whisky/whisky-johnnie-walker-double-black-label.png"
            },
            // ---------- PRODUCTO 2 ----------
            {
                id: 2,
                nombre: "Gran Reserva Malbec",
                categoria: "VINO TINTO • VALLE DE MAJES",
                cat: "vino",
                sub: "tinto",
                stock: 12,
                precio: "$85.00 USD",
                tag: "Más Vendido",
                masVendido: true,
                desc: "Cuerpo robusto con taninos elegantes y final persistente a frutos rojos.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJjqWvVIiFRznzCLAR-14n1eIaYL9yPcuoQdR0BMi_Mo8XyCN054Zy5ih9VgKQOkZWp510TpXLnQA7x_BMkjQ0gS8UD_C0m3XGzjgVHxHS65PK93-GfA47eP5IAj4RsQO1aE0M9Qh5bKYv3dsyN8cPqv7Kn742ql9sJbHDA9BQ_VN6MdLefVYD3yPNYhBpdhgK92Act6j-884rXDT6ijr2FPk_5HWUCr6mOhJ5enYhGxLtsM2SRmregwVQNetkO9fL7B4ZtBY3jiNF"
            },
    
            // ---------- PRODUCTO 3 ----------
            {
                id: 3,
                nombre: "Acholado Centenario",
                categoria: "PISCO • LUNAHUANÁ",
                cat: "pisco",
                sub: "",
                stock: 5,
                precio: "$240.00 USD",
                tag: "Edición Limitada",
                masVendido: true,
                desc: "Mezcla maestra de uvas selectas con 2 años de reposo en barrica.",
                img: "imagenes/acholado-centenario.jpg"
            },
    
            // ---------- PRODUCTO 4 ----------
            {
                id: 4,
                nombre: "Quebranta Pura",
                categoria: "PISCO • CAÑETE",
                cat: "pisco",
                sub: "",
                stock: 24,
                precio: "$95.00 USD",
                tag: "Más Vendido",
                masVendido: true,
                desc: "Pisco puro de aroma sobrio y sabor a frutas maduras de pepa grande.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJjqWvVIiFRznzCLAR-14n1eIaYL9yPcuoQdR0BMi_Mo8XyCN054Zy5ih9VgKQOkZWp510TpXLnQA7x_BMkjQ0gS8UD_C0m3XGzjgVHxHS65PK93-GfA47eP5IAj4RsQO1aE0M9Qh5bKYv3dsyN8cPqv7Kn742ql9sJbHDA9BQ_VN6MdLefVYD3yPNYhBpdhgK92Act6j-884rXDT6ijr2FPk_5HWUCr6mOhJ5enYhGxLtsM2SRmregwVQNetkO9fL7B4ZtBY3jiNF"
            },
    
            // ---------- PRODUCTO 5 ----------
            {
                id: 5,
                nombre: "Cabernet Sauvignon Reserva",
                categoria: "VINO TINTO • ICA",
                cat: "vino",
                sub: "tinto",
                stock: 9,
                precio: "$78.00 USD",
                tag: "",
                desc: "Notas de cassis y especias con un envejecimiento de 12 meses en roble francés.",
                img: "imagenes/cabernet-sauvignon-reserva.jpg"
            },
    
            // ---------- PRODUCTO 6 ----------
            {
                id: 6,
                nombre: "Licor de Autor Edición Dorada",
                categoria: "LICOR • LIMA",
                cat: "licor",
                sub: "",
                stock: 7,
                precio: "$150.00 USD",
                tag: "Colección",
                desc: "Elaboración artesanal en lotes pequeños con infusión de hierbas andinas.",
                img: "imagenes/licor-edicion-dorada.jpg"
            },
    
            // ---------- PRODUCTO 7 ----------
            {
                id: 7,
                nombre: "Sauvignon Blanc Costa Sur",
                categoria: "VINO BLANCO • CHINCHA",
                cat: "vino",
                sub: "blanco",
                stock: 15,
                precio: "$68.00 USD",
                tag: "",
                desc: "Fresco y mineral, con notas cítricas y un final crujiente ideal para mariscos.",
                img: "imagenes/sauvignon-blanc-costa-sur.jpg"
            },
    
            // ---------- PRODUCTO 8 ----------
            {
                id: 8,
                nombre: "Chardonnay Barrica de Roble",
                categoria: "VINO BLANCO • CAÑETE",
                cat: "vino",
                sub: "blanco",
                stock: 10,
                precio: "$92.00 USD",
                tag: "",
                desc: "Untuoso, con notas de vainilla y mantequilla por su crianza en barrica francesa.",
                img: "imagenes/chardonnay-barrica-roble.jpg"
            },
    
            // ---------- PRODUCTO 9 ----------
            {
                id: 9,
                nombre: "Rosé de Verano",
                categoria: "VINO ROSADO • ICA",
                cat: "vino",
                sub: "rosado",
                stock: 20,
                precio: "$62.00 USD",
                tag: "Nuevo",
                desc: "Ligero y afrutado, con aromas a fresa y un color rosa pálido elegante.",
                img: "imagenes/rose-de-verano.jpg"
            },
    
            // ---------- PRODUCTO 10 ----------
            {
                id: 10,
                nombre: "Malvasía Rosado Suave",
                categoria: "VINO ROSADO • MOQUEGUA",
                cat: "vino",
                sub: "rosado",
                stock: 14,
                precio: "$58.00 USD",
                tag: "",
                desc: "Semi-dulce, con notas florales y un perfil suave perfecto para brindis.",
                img: "imagenes/malvasia-rosado-suave.jpg"
            },
    
            // ---------- PRODUCTO 11 ----------
            {
                id: 11,
                nombre: "Espumante Brut Nature",
                categoria: "VINO ESPUMANTE • ICA",
                cat: "vino",
                sub: "espumante",
                stock: 6,
                precio: "$98.00 USD",
                tag: "Edición Limitada",
                desc: "Burbuja fina y persistente, elaborado con método tradicional sin azúcar añadida.",
                img: "imagenes/espumante-brut-nature.jpg"
            },
    
            // ---------- PRODUCTO 12 ----------
            {
                id: 12,
                nombre: "Espumante Rosé Demi-Sec",
                categoria: "VINO ESPUMANTE • TACNA",
                cat: "vino",
                sub: "espumante",
                stock: 0,
                precio: "$104.00 USD",
                tag: "",
                desc: "Aromas a frutos rojos y un toque dulce equilibrado, ideal para celebraciones.",
                img: "imagenes/espumante-rose-demi-sec.jpg"
            },
            // ---------- PRODUCTO 13 ----------
            {
                id: 13,
                nombre: "Vino LUCA Old Wine Vintage Malbec Botella 750ml",
                categoria: "",
                cat: "vino",
                sub: "",
                stock: 50,
                precio: "S/140.00",
                tag: "Más Vendido",
                masVendido: true,
                desc: "Aromas a frutos rojos y un toque dulce equilibrado, ideal para celebraciones.",
                img: "https://licorerias.com.pe/wp-content/uploads/2026/06/LUCA-OLD-WINE-.png"
            },
            // ---------- PRODUCTO 14 ----------
            {
                id: 14,
                nombre: "Ron CARTAVIO Black Botella 750ml",
                categoria: "",
                cat: "Ron",
                sub: "",
                stock: 50,
                precio: "S/29.90",
                tag: "Más Vendido",
                masVendido: true,
                desc: "Profundos aromas de melazas, mieles y especias dulces, de canela y vainilla,con un envolvente final de granos de café recién tostados, cacao y chocolate negro.",
                img: "https://licoreriasunidas.pe/cdn/shop/products/21fb79e6f712438391bff427b5e48dce.webp?v=1677698170&width=500"

            }
        ]
