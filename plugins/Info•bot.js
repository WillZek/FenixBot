import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `💛 ¡Hola! Soy Fenix, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}

if (chat.isBaneed) return
if (/^fenix|watanabe$/i.test(m.text)) {
conn.reply(m.chat, `> *Hola soy FenixBot y fui creado por*\n> *WillZek* \n\n> Escribe *.menu* para ver mis comandos, recuerda no hagas spam a la bot, Disfrute de *FenixBot*\n\nPσɯҽɾҽԃ Bყ Team Brawlights`, m, rcanal, )
}

if (chat.isBaneed) return
if (/^reglas$/i.test(m.text)) {
conn.reply(m.chat, `*Hola si quieres unir al bot deberas seguir las reglas basicas* 👇\n\n> No hacer spam al bot\n\n> No llamar al bot\n\n> El grupo debe de tener un minimo de 30 miembros o no sera otorgado el bot\n\n> No añadir a la bot sin permisos del creador \n\n> Wa.me/50557865603\n\n> Disfrute de *FenixBot Powered By WillZek*`, m, rcanal, )
}

if (/^WillZek$/i.test(m.text)) {
conn.reply(m.chat, `Hola WillZek es mi creador, si deseas unir al bot puedes contactarte con el aqui te dejo su numero\n\n> wa.me/50557865603`, m, rcanal, )
}
return !0;
};
export default handler;