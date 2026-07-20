#!/usr/bin/env bash
# Baut index.html als Übersicht aller Briefings unter briefings/*.html
set -e
cd "$(dirname "$0")/.."
files=$(ls -1 briefings/*.html 2>/dev/null | sort -r || true)
latest=$(echo "$files" | head -1)
{
cat <<'HEAD'
<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KI Tech News — Executive AI Intelligence Briefing</title>
<style>
:root{--bg:#0b0e14;--panel:#141922;--line:#26304180;--ink:#e8ecf3;--muted:#94a0b4;--accent:#6ea8fe;--accent2:#8b7bff}
*{box-sizing:border-box}
body{margin:0;background:linear-gradient(180deg,#0b0e14,#0d1119 40%,#0b0e14);color:var(--ink);
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height:1.55}
.wrap{max-width:760px;margin:0 auto;padding:36px 20px 80px}
.kicker{font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:var(--accent);font-weight:700}
h1{margin:8px 0 4px;font-size:28px;font-weight:800;letter-spacing:-.3px}
.sub{color:var(--muted);font-size:14.5px;margin:6px 0 26px}
a.latest{display:block;background:linear-gradient(135deg,#182033,#12161f);border:1px solid #33488a;
border-radius:14px;padding:18px 20px;text-decoration:none;color:var(--ink);font-size:18px;font-weight:700;margin-bottom:28px}
a.latest span{display:block;color:var(--accent);font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;margin-bottom:4px}
h2{font-size:16px;color:var(--muted);font-weight:700;margin:0 0 10px}
ul{list-style:none;padding:0;margin:0}
li{border-bottom:1px solid var(--line)}
li a{display:block;padding:12px 4px;color:var(--ink);text-decoration:none;font-size:15px}
li a:hover{color:var(--accent)}
footer{margin-top:34px;color:#57606f;font-size:12px}
</style></head><body><div class="wrap">
<div class="kicker">Executive AI Intelligence</div>
<h1>Tägliches KI-Briefing</h1>
<div class="sub">Automatisch erstellt jeden Morgen ~09:00 Uhr (Europe/Berlin). Ein HTML pro Tag.</div>
HEAD
if [ -n "$latest" ]; then
  d=$(basename "$latest" .html)
  echo "<a class='latest' href='$latest'><span>Neuestes Briefing</span>➜ $d</a>"
fi
echo "<h2>Archiv</h2><ul>"
for f in $files; do
  d=$(basename "$f" .html)
  echo "<li><a href='$f'>$d</a></li>"
done
echo "</ul>"
echo "<footer>Inhalte sind Analyse, keine Anlage-, Rechts- oder Steuerberatung.</footer>"
echo "</div></body></html>"
} > index.html
echo "index.html gebaut ($(echo "$files" | grep -c . 2>/dev/null || echo 0) Briefings)"
