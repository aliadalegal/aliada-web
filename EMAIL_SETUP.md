# Configuración de Email con Resend

## Pasos para recibir emails de inscripciones a la comunidad

### 1. Crear cuenta en Resend
1. Ir a https://resend.com
2. Crear una cuenta gratuita
3. Verificar tu email

### 2. Obtener tu API Key
1. Ir a Resend Dashboard
2. Ir a "API Keys"
3. Crear una nueva API key
4. Copiar la API key (empieza con `re_`)

### 3. Configurar tu dominio (opcional pero recomendado)
Para que los emails no vayan a la carpeta de spam:
1. Ir a "Domains" en Resend Dashboard
2. Agregar tu dominio (si tenés uno)
3. Seguir los pasos de verificación DNS

**Si no tenés dominio propio:**
Puedes usar el dominio por defecto de Resend (`onboarding@resend.dev`) pero los emails pueden ir a spam.

### 4. Configurar el proyecto
1. Copiar el contenido de `.env.local.example` a `.env.local`
2. Reemplazar `tu_api_key_aqui` con tu API key real
3. Asegurarte de que `RESEND_FROM` sea tu email (aliada.as.legal@gmail.com)

### 5. Reiniciar el servidor
```bash
npm run dev
```

### 6. Probar
1. Ir a http://localhost:3000
2. Ir a la sección "Comunidad"
3. Completar el formulario con datos de prueba
4. Revisá tu casilla de email (aliada.as.legal@gmail.com)

## ¿Cómo funciona?

Cada vez que alguien completa el formulario:
1. Los datos se envían a `/api/community` (POST)
2. La API valida los datos
3. Llama a `lib/email.ts` que usa Resend
4. Te llega un email con:
   - Nombre
   - Email
   - WhatsApp
   - Fecha y hora de inscripción

## Limitaciones gratuitas de Resend
- 3000 emails/mes en el plan gratuito
- Sin límite de envíos en el plan de pago

## FAQ

**¿Puedo cambiar el email de destino?**
Sí, editá la variable `RESEND_FROM` en `.env.local`

**¿Puedo recibir múltiples emails?**
Sí, cada inscripción genera un email nuevo

**¿Cómo veo el historial?**
Los emails se envían a tu casilla, así que podés buscarlos en Gmail o tu cliente de email favorito.
