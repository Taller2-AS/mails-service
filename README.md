# 👨‍💻 Microservicio de Usuarios – StreamFlow

Este microservicio forma parte del proyecto **StreamFlow**, De la asignatura **Arquitectura de Sistemas**. Administra la información relacionada a los usuarios disponibles, permitiendo su creación, actualización, eliminación lógica y consulta.

---

## 📋 Requisitos

- Node.js v18.x o superior  
- Docker  
- RabbitMQ   
- MongoDB   
- Postman 

---

## 🚀 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/Taller2-AS/mails-service.git
cd mailsService
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Crea el archivo `.env`

Ejemplo:

```env
RABBITMQ_URL=amqp://admin:admin@localhost:5672

EMAIL_FROM=test@test.com
SEND_EMAIL=YES

EMAIL_HOST='sandbox.smtp.mailtrap.io'
EMAIL_PORT=2525
EMAIL_USERNAME=acd42e2fc35bdf
EMAIL_PASSWORD=****1f3f

SERVER_URL=localhost
SERVER_PORT=3003
```

> ⚠️ Asegúrate de que RabbitMQ esté corriendo en tu entorno local.

---

### 4. Levanta RabbitMQ con Docker

```bash
docker-compose up -d
```

---

### 5. Inicia el microservicio

```bash
npm start
```
---

## 👨‍💻 Desarrollado por

**Desarrollador A - Martin Becerra**  
Universidad Católica del Norte – Arquitectura de Sistemas