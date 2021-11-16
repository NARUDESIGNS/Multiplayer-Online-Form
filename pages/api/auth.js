import { authorize } from "@liveblocks/node";

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;

export default async function auth(req, res) {
  if (!API_KEY) {
    return res.status(403).end();
  }

  // For the avatar example, we're generating random users
  // and set their info from the authentication endpoint
  // See https://liveblocks.io/docs/api-reference/liveblocks-node#authorize for more information

  const response = await authorize({
    room: req.body.room,
    secret: API_KEY,
    userInfo: {
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      picture: `/assets/avatars/${Math.floor(Math.random() * 10)}.png`,
    }
  });
  return res.status(response.status).end(response.body);
}

const NAMES = [
  "Ikeh Akinyemi",
  "Naru Designs",
  "Steve Fabre",
  "Guillaume Salles",
  "Fortune Kay"
];
