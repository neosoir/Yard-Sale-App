FROM node:22-slim

# Establecer directorio de trabajo
WORKDIR /app

# Instalar ngrok globalmente antes de cambiar de usuario
RUN npm install -g @expo/ngrok --unsafe-perm

# Asignar permisos adecuados al usuario node
RUN chown -R node:node /app

# Cambiar al usuario node
USER node

# Exponer los puertos de Expo
EXPOSE 8081 19000 19001 19002

# Mantener el contenedor corriendo
CMD ["tail", "-f", "/dev/null"]
