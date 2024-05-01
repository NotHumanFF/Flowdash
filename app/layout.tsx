import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}




// Secrets
// POSTGRES_URL="postgres://default:keLjysF5Y7po@ep-morning-water-a4d1bpsw-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
// POSTGRES_PRISMA_URL="postgres://default:keLjysF5Y7po@ep-morning-water-a4d1bpsw-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
// POSTGRES_URL_NO_SSL="postgres://default:keLjysF5Y7po@ep-morning-water-a4d1bpsw-pooler.us-east-1.aws.neon.tech:5432/verceldb"
// POSTGRES_URL_NON_POOLING="postgres://default:keLjysF5Y7po@ep-morning-water-a4d1bpsw.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
// POSTGRES_USER="default"
// POSTGRES_HOST="ep-morning-water-a4d1bpsw-pooler.us-east-1.aws.neon.tech"
// POSTGRES_PASSWORD="keLjysF5Y7po"
// POSTGRES_DATABASE="verceldb"