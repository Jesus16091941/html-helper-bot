/* VeciRed — navegación del prototipo. Asocia textos de botones/enlaces con pantallas. */
(function () {
  var page = (location.pathname.split("/").pop() || "index.html").replace(".html", "");
  var P = function (t) { return "provisional.html?t=" + encodeURIComponent(t) + "&from=" + page; };

  // Reglas globales: [texto contenido (minúsculas), destino]
  var global = [
    ["iniciar sesión", "INT-04.html"],
    ["ir a la pantalla de acceso", "INT-04.html"],
    ["regístrate aquí", "INT-02.html"],
    ["cómo funciona", P("Cómo funciona")],
    ["conoce cómo funciona", P("Cómo funciona")],
    ["categorías", "INT-11.html"],
    ["garantía", P("Garantía de confianza")],
    ["términos", P("Términos de Servicio")],
    ["política de privacidad", P("Política de Privacidad")],
    ["política de tratamiento", P("Política de Tratamiento de Datos")],
    ["protección de datos", P("Protección de Datos")],
    ["centro de ayuda", P("Centro de Ayuda")],
    ["soporte", P("Soporte VeciRed")],
    ["mediación", P("Soporte VeciRed")],
    ["whatsapp", P("Soporte VeciRed")],
    ["línea de enlace", P("Soporte VeciRed")],
    ["hablar con soporte", P("Soporte VeciRed")],
    ["ver perfil", "INT-13.html"],
    ["ver ficha", "INT-13.html"],
    ["ver detalle y postular", "INT-17.html"],
    ["enviar propuesta", "INT-16.html"],
    ["publicar nueva solicitud", "INT-14.html"],
    ["publicar requerimiento", "INT-14.html"],
    ["solicitar nuevo servicio", "INT-14.html"],
    ["solicitar presupuesto", "INT-14.html"],
    ["solicitar técnico", "INT-14.html"],
    ["solicitar visita", "INT-14.html"],
    ["buscar técnicos", "INT-11.html"],
    ["mapa", "INT-12.html"],
    ["chat", "INT-21.html"],
    ["chatear", "INT-21.html"],
    ["mensajes", "INT-21.html"],
    ["agenda", "INT-22.html"],
    ["ver propuestas", "INT-18.html"],
    ["comparar", "INT-19.html"],
    ["contratar", "INT-20.html"],
    ["elegir ", "INT-20.html"],
    ["seleccionar trabajador", "INT-20.html"],
    ["finalizar y calificar", "INT-23.html"],
    ["comprobante", P("Comprobante digital")],
    ["google", P("Acceso con Google")],
    ["facebook", P("Acceso con Facebook")],
  ];

  // Reglas específicas por pantalla (tienen prioridad)
  var perPage = {
    "INT-01": [["registrarme como profesional", "INT-02.html"], ["requisitos de validación", "INT-06.html"], ["técnicos en mi zona", "INT-11.html"], ["cobertura", "INT-12.html"], ["ver las 24", "INT-11.html"], ["técnicos", "INT-11.html"], ["maestros", "INT-11.html"], ["jardineros", "INT-11.html"], ["urgencias", "INT-11.html"], ["fuga", "INT-11.html"], ["cerradura", "INT-11.html"], ["cortocircuito", "INT-11.html"], ["calefón", "INT-11.html"], ["tu barrio", "INT-12.html"]],
    "INT-02": [["crear cuenta", "INT-03.html"]],
    "INT-03": [["continuar", "INT-06.html"]],
    "INT-04": [["olvidaste", "INT-05.html"], ["ingresar a vecired", "INT-10.html"]],
    "INT-05": [["volver a iniciar", "INT-04.html"]],
    "INT-06": [["enviar documentos", "INT-07.html"], ["guardar borrador", "INT-07.html"], ["modificar especialidad", "INT-08.html"]],
    "INT-07": [["mi perfil", "INT-08.html"], ["mis servicios", "INT-09.html"], ["historial", P("Historial y Pagos")], ["emergencias", "INT-16.html"], ["certificado", "INT-08.html"], ["dashboard", "INT-07.html"]],
    "INT-08": [["inicio", "INT-07.html"], ["vista previa", "INT-13.html"], ["descartar", "INT-07.html"], ["póliza", P("Póliza y certificaciones")]],
    "INT-09": [["inicio", "INT-07.html"], ["panel del técnico", "INT-07.html"], ["mis servicios", "INT-07.html"], ["cancelar y volver", "INT-07.html"], ["borrador", "INT-07.html"], ["publicar servicio", "INT-07.html"]],
    "INT-10": [["mis solicitudes", "INT-18.html"], ["inicio / panel", "INT-10.html"], ["plomería", "INT-11.html"], ["electricidad", "INT-11.html"], ["cerrajería", "INT-11.html"], ["pintura", "INT-11.html"], ["jardinería", "INT-11.html"], ["electrodomésticos", "INT-11.html"], ["historial", "INT-22.html"], ["gestionar solicitud", "INT-15.html"], ["notifications", P("Notificaciones")]],
    "INT-11": [["ver perfil y cotizar", "INT-13.html"]],
    "INT-12": [["notifications", P("Notificaciones")]],
    "INT-13": [["inicio", "INT-10.html"], ["técnicos en los laureles", "INT-11.html"], ["ver las 135", P("Todas las opiniones")]],
    "INT-14": [["veci red", "INT-10.html"], ["publicar y buscar", "INT-15.html"], ["borrador", "INT-10.html"]],
    "INT-15": [["inicio", "INT-10.html"], ["mis solicitudes", "INT-18.html"], ["modificar detalles", "INT-14.html"], ["ir al panel", "INT-10.html"]],
    "INT-16": [["inicio", "INT-07.html"], ["panel del técnico", "INT-07.html"], ["guía del profesional", P("Guía del Profesional VeciRed")]],
    "INT-17": [["inicio", "INT-07.html"], ["panel del técnico", "INT-07.html"], ["solicitudes cercanas", "INT-16.html"], ["pregunta previa", "INT-21.html"]],
    "INT-18": [["inicio", "INT-10.html"], ["mis solicitudes", "INT-10.html"], ["solicitud original", "INT-15.html"], ["seleccionar", "INT-20.html"], ["chat / perfil", "INT-13.html"]],
    "INT-19": [["inicio", "INT-10.html"], ["mis solicitudes", "INT-18.html"], ["volver a propuestas", "INT-18.html"], ["cambiar selección", "INT-18.html"]],
    "INT-20": [["volver al inicio", "INT-10.html"]],
    "INT-21": [["solicitud #", "INT-18.html"]],
    "INT-22": [["inicio", "INT-10.html"], ["mi cuenta", "INT-10.html"], ["cancelar / reprogramar", P("Cancelar o reprogramar servicio")], ["volver a contratar", "INT-14.html"], ["términos de protección", P("Garantía de confianza")], ["sincronizar", P("Sincronizar calendario")]],
    "INT-23": [["inicio", "INT-10.html"], ["mis servicios", "INT-22.html"], ["omitir", "INT-22.html"], ["enviar evaluación", "INT-22.html"]],
  };

  // Botones que son controles dentro de la pantalla: no navegan
  var skip = /^(close$|cancelar$|add$|remove$|star$|visibility$|delete$|✕|chevron_left|chevron_right|[0-9]|guardar$|todas|todos|menor|estándar|avanzada|lista|mensual|limpiar|aplicar|cambiar|modificar$|buscar$|search buscar|eliminar|cambiar foto|\+ agregar|layers|near_me$|my_location|mic|photo_camera|add_photo|enviar send|ya |¿necesitas|por favor|check |\d+ km|hoy|mañana|otra fecha|con fotos|5 estrellas|thumb_up|solo urgentes|verified_user|schedule|person_outline|bolt urgencias|near_me <|gasfitería|disponibles|mejor|más cercano|grid_view|payments|plumbing plomería$|electricidad$|cerrajería$|download$|explorar archivos|\?|fuga en llave|desagüe|reemplazo|presión|guardar cambios|save guardar|check_circle guardar|pause|bookmark|share compartir|refresh|tune$|detectar por gps|reenviar|enviar instrucciones|llamar|share_location|campaign)/;

  function find(rules, t) {
    for (var i = 0; i < rules.length; i++) if (t.indexOf(rules[i][0]) !== -1) return rules[i][1];
    return null;
  }

  document.addEventListener("click", function (ev) {
    var el = ev.target.closest("a, button");
    if (!el) return;
    var href = el.getAttribute("href");
    if (href && href !== "#" && href.indexOf("#") !== 0) return; // enlaces reales (tel:, etc.)
    if (el.type === "submit" && el.closest("form")) ev.preventDefault();
    var t = (el.innerText || el.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim().toLowerCase();
    if (!t) return;
    var dest = find(perPage[page] || [], t);
    if (!dest && skip.test(t)) { if (href === "#") ev.preventDefault(); return; }
    dest = dest || find(global, t);
    if (!dest && el.tagName === "A") dest = P(el.innerText.trim());
    if (dest) { ev.preventDefault(); location.href = dest; }
    else if (href === "#") ev.preventDefault();
  }, true);

  // Botón flotante para volver al índice
  if (page !== "index") {
    var b = document.createElement("a");
    b.href = "index.html";
    b.textContent = "☰ Índice de pantallas";
    b.style.cssText = "position:fixed;right:16px;bottom:16px;z-index:99999;background:#001428;color:#fff;padding:10px 14px;border-radius:999px;font:700 13px Arial,sans-serif;text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,.25)";
    document.body.appendChild(b);
  }
})();
