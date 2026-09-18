Write-Host "Starting DutchPass local backend..."
npx supabase start
if (!(Test-Path ".env.local")) { Copy-Item ".env.local.example" ".env.local"; Write-Host "Created .env.local. Run 'npx supabase status' and paste the local anon key into it." }
Write-Host "Supabase Studio: http://127.0.0.1:54323"
Write-Host "Starting Next.js..."
npm run dev
