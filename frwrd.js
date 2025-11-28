export default {
  async fetch(request, env) {
    const u = await request.json();
    if (!u.message) return new Response("ok");

    const m = u.message;
    const c = m.chat.id;
    const cap = m.caption || "";

    if (m.text)
      return send("sendMessage", env.BOT_TOKEN, { chat_id: c, text: m.text });

    if (m.photo)
      return send("sendPhoto", env.BOT_TOKEN, { chat_id: c, photo: m.photo.pop().file_id, caption: cap });

    if (m.video)
      return send("sendVideo", env.BOT_TOKEN, { chat_id: c, video: m.video.file_id, caption: cap });

    if (m.audio)
      return send("sendAudio", env.BOT_TOKEN, { chat_id: c, audio: m.audio.file_id, caption: cap });

    if (m.document)
      return send("sendDocument", env.BOT_TOKEN, { chat_id: c, document: m.document.file_id, caption: cap });

    if (m.sticker)
      return send("sendSticker", env.BOT_TOKEN, { chat_id: c, sticker: m.sticker.file_id });

    return new Response("ok");
  }
};

async function send(method, token, body) {
  await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return new Response("ok");
}
