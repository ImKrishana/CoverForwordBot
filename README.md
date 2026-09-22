## Deploy to Cloudflare

### 1. Click the button below:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ImKrishana/CoverForwordBot)

### 2. Set BOT_TOKEN

After creating the Worker, go to:

`Settings → Variables and Secrets`

Add a **Secret**:

```text
Name: BOT_TOKEN
Value: YOUR_TELEGRAM_BOT_TOKEN
```
### 3. Set Webhook

Replace `YOUR_BOT_TOKEN` and `YOUR_WORKER_URL`:

```bash
curl "https://api.telegram.org/botYOUR_BOT_TOKEN/setWebhook?url=YOUR_WORKER_URL"
```

Example:

```bash
curl "https://api.telegram.org/bot123456:ABCDEF/setWebhook?url=https://your-worker.workers.dev"
```

## Xtra

Live bot can be found here

**Demo Bot:** [@CoverForwordBot](https://t.me/CoverForwordBot)

---

[![License](https://img.shields.io/github/license/ImKrishana/CoverForwordBot)](https://github.com/ImKrishana/CoverForwordBot/blob/main/LICENSE)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=white)](https://t.me/TheZake)
