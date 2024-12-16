import type { CapacitorConfig } from '@capacitor/cli';
import { Share } from "@capacitor/share";
const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'poligono-vacios',
  webDir: 'build'
};

export default config;

await Share.share({
  title: "Mi PDF",
  text: "Aquí está mi PDF generado desde Capacitor",
  url: "path-to-your-file",
  dialogTitle: "Compartir archivo PDF",
});
