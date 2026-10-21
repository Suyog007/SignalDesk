import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    setupFiles: ["tests/setup.ts"],
    env: {
      DATABASE_URL: process.env.TEST_DATABASE_URL ?? "postgres://signaldesk@localhost:54329/signaldesk_test",
      TOKEN_ENCRYPTION_KEY: Buffer.alloc(32, 7).toString("base64"),
      FIREWORKS_API_KEY: "test",
      FIREWORKS_MODEL: "test-model",
      TELEGRAM_CHAT_ID: "42",
      VITEST: "1",
    },
    fileParallelism: false,
    testTimeout: 30000,
  },
});
