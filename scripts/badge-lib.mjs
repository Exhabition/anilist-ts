function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function textWidth(value) {
  return Math.ceil(String(value).length * 6.5 + 12);
}

export function coverageColor(percentage) {
  if (percentage >= 90) return '#4c1';
  if (percentage >= 80) return '#a4a61d';
  if (percentage >= 70) return '#dfb317';
  if (percentage >= 60) return '#fe7d37';
  return '#e05d44';
}

export function renderBadge(label, message, color) {
  const labelWidth = textWidth(label);
  const messageWidth = textWidth(message);
  const width = labelWidth + messageWidth;
  const labelCenter = labelWidth / 2;
  const messageCenter = labelWidth + messageWidth / 2;
  const accessible = `${label}: ${message}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="20" role="img" aria-label="${escapeXml(accessible)}">
  <title>${escapeXml(accessible)}</title>
  <mask id="round"><rect width="${width}" height="20" rx="3" fill="#fff"/></mask>
  <g mask="url(#round)">
    <path fill="#555" d="M0 0h${labelWidth}v20H0z"/>
    <path fill="${color}" d="M${labelWidth} 0h${messageWidth}v20H${labelWidth}z"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,sans-serif" font-size="11">
    <text x="${labelCenter}" y="15" fill="#010101" fill-opacity=".3">${escapeXml(label)}</text>
    <text x="${labelCenter}" y="14">${escapeXml(label)}</text>
    <text x="${messageCenter}" y="15" fill="#010101" fill-opacity=".3">${escapeXml(message)}</text>
    <text x="${messageCenter}" y="14">${escapeXml(message)}</text>
  </g>
</svg>
`;
}
