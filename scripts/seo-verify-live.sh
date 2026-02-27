#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://www.peruinjapan.org}"

pass() {
  echo "PASS: $1"
}

fail() {
  echo "FAIL: $1"
}

check_contains() {
  local haystack="$1"
  local needle="$2"
  local label="$3"
  if printf '%s' "$haystack" | rg -q --fixed-strings "$needle"; then
    pass "$label"
  else
    fail "$label"
  fi
}

check_not_contains() {
  local haystack="$1"
  local needle="$2"
  local label="$3"
  if printf '%s' "$haystack" | rg -q --fixed-strings "$needle"; then
    fail "$label"
  else
    pass "$label"
  fi
}

echo "Base URL: $BASE_URL"
echo

SITEMAP_XML="$(curl -sS -L "$BASE_URL/sitemap.xml")"
ROBOTS_TXT="$(curl -sS -L "$BASE_URL/robots.txt")"
ADMIN_HTML="$(curl -sS -L "$BASE_URL/admin")"

echo "== Sitemap checks =="
check_contains "$SITEMAP_XML" "<loc>${BASE_URL}/sitemap-0.xml</loc>" "sitemap index points to sitemap-0.xml"
check_not_contains "$SITEMAP_XML" "<loc>${BASE_URL}/sitemap.xml</loc>" "sitemap index does not self-reference sitemap.xml"
echo

echo "== Robots checks =="
check_contains "$ROBOTS_TXT" "Disallow: /admin" "robots disallow /admin"
check_contains "$ROBOTS_TXT" "Sitemap: ${BASE_URL}/sitemap.xml" "robots includes sitemap URL"
echo

echo "== Admin noindex checks =="
check_contains "$ADMIN_HTML" 'name="robots" content="noindex,nofollow"' "admin includes noindex,nofollow"
if printf '%s' "$ADMIN_HTML" | rg -q 'name="robots" content="noindex, nofollow, noarchive, nosnippet"'; then
  pass "admin includes defensive robots meta"
else
  fail "admin includes defensive robots meta"
fi
echo

echo "== Canonical checks =="
for path in / /investing-in-peru /products /pisco; do
  URL="${BASE_URL}${path}"
  HTML="$(curl -sS -L "$URL")"
  if [[ "$path" == "/" ]]; then
    EXPECTED='<link rel="canonical" href="'"$BASE_URL"'"'
  else
    EXPECTED='<link rel="canonical" href="'"$BASE_URL$path"'"'
  fi
  check_contains "$HTML" "$EXPECTED" "canonical for $path"
done

