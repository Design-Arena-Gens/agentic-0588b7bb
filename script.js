async function loadStrategy() {
  const codeEl = document.getElementById('code');
  try {
    const res = await fetch('/strategy.pine', { cache: 'no-store' });
    const text = await res.text();
    codeEl.textContent = text;
  } catch (e) {
    codeEl.textContent = 'Failed to load strategy.';
  }
}

async function copyStrategy() {
  const pre = document.getElementById('code');
  const text = pre.textContent;
  try {
    await navigator.clipboard.writeText(text);
    const btn = document.getElementById('copyBtn');
    const old = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => (btn.textContent = old), 1200);
  } catch (_) {}
}

document.getElementById('copyBtn').addEventListener('click', copyStrategy);
loadStrategy();
