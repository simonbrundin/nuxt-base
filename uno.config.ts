import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify(), presetWebFonts()],
});
