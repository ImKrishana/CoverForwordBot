export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("OK");
    }

    try {
      const update = await request.json();
      const message = update.message;

      if (!message) {
        return new Response("OK");
      }

      await copyMessage(
        env.BOT_TOKEN,
        message.chat.id,
        message.message_id
      );

      return new Response("OK");
    } catch {
      return new Response("Internal Server Error", {
        status: 500
      });
    }
  }
};

async function copyMessage(token, chatId, messageId) {
  const response = await fetch(
    `https://api.telegram.org/bot${token}/copyMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        from_chat_id: chatId,
        message_id: messageId
      })
    }
  );

  return response.json();
}
