# syntax=docker/dockerfile:1

# ---- Base ----
# Base image with Node.js and pnpm
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ---- Pruner ----
# Prune the monorepo to get only the files needed for the 'web' app
FROM base AS pruner
WORKDIR /app
# Install turbo to use the prune command
RUN pnpm add -g turbo
COPY . .
RUN turbo prune --scope=@portfolio/web --docker

# ---- Builder ----
# Build the 'web' app from the pruned files
FROM base AS builder
WORKDIR /app

# Copy the pruned files from the pruner stage
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/full/ .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the app
RUN pnpm turbo run build --filter=@portfolio/web

# ---- Runner ----
# Create the final, small image for running the app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy the built Nuxt app from the builder stage
# The .output directory is self-contained for production
COPY --from=builder /app/apps/web/.output .

EXPOSE 3000

CMD ["node", "server/index.mjs"]
