import 'dotenv/config'
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19jRkV4XzZVUHJGNEkxNzNLZTlmOFAiLCJhcGlfa2V5IjoiMDFLOVlFTjhaQ0dOQVFUS1FERTMwSlI1RzQiLCJ0ZW5hbnRfaWQiOiI4OWRmMTM4N2RiMTgyMjM5NjFlM2NjOGI1MDI5MzY3MGM1ZmVjYzI0YmQ5ZjBiZGM1NjJkYjY2MjlmNTdiYzQyIiwiaW50ZXJuYWxfc2VjcmV0IjoiMzA3Y2RhNTYtZWM0MS00YmQ1LTk4MzgtNDk4YzEwODVlMDI2In0.Dh9Nv-mCOizwCLQX3RXVmbcjBjST6s2Xo2oFSxrJnSY",
  },
});
