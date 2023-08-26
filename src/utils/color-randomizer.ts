function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// fixed saturation and brightness
export function getRandomColor(): string {
  const h = Math.random() * 360;
  const s = 70;  // 70%
  const l = 40;  // 40%

  return hslToHex(h, s, l);
}

