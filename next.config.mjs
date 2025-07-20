import path from 'path';
import { fileURLToPath } from 'url';

// لأن ES Modules مفيهاش __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `
      @use "@/styles/variables" as *;`,
  },
};

export default nextConfig;
