# Next.js API Scaffold

This subdirectory is the start of the gradual migration from the static concept site in the repo root into a production-ready Next.js app.

Current scope:

- Supabase schema in `supabase/schema.sql`
- local menu seed in `lib/menu-data.ts`
- `GET /api/menu` endpoint in `app/api/menu/route.ts`

The static front-end files in the repo root are intentionally untouched.

## Planned next steps

1. Add a Supabase client in this sub-app.
2. Swap `local-seed` for database-backed reads.
3. Move location and menu UI into Next.js gradually.
