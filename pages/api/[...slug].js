export default function handler(req, res) {
  const redirects = {
    youtube: "https://youtube.com/@blockcuan",
    garapan: "https://t.me/blockcuannews/30",
    binance: "https://accounts.binance.info/register?ref=857809206",
  };

  const slug = req.query.slug?.[0];

  if (slug in redirects) {
    res.writeHead(302, { Location: redirects[slug] });
    res.end();
  } else {
    res.statusCode = 404;
    res.end("Link tidak ditemukan");
  }
}
