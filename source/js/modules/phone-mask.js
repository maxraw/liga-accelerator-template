export default function phoneMask(e) {
  let phoneMatches = e.target.value.replace(/\D/g, '').match(/\+?(\d{0,1}) ?\(?(\d{0,3})\)? ?(\d{0,3})? ?(\d{0,2})? ?(\d{0,2})?/);
  let value = '+';
  if (!e.target.value) {
    return;
  } else if (!phoneMatches[1]) {
    e.target.value = value;
    return;
  }
  value += phoneMatches[1];
  if (phoneMatches[2]) {
    value += phoneMatches[2] ? ' (' : ' ';
  }
  if (phoneMatches[2]) {
    value += phoneMatches[2];
  }
  if (phoneMatches[3]) {
    value += phoneMatches[3] ? ') ' : ' ';
  }
  if (phoneMatches[3]) {
    value += phoneMatches[3];
  }
  if (phoneMatches[4]) {
    value += '-';
  }
  if (phoneMatches[4]) {
    value += phoneMatches[4];
  }
  if (phoneMatches[5]) {
    value += '-';
  }
  if (phoneMatches[5]) {
    value += phoneMatches[5];
  }
  e.target.value = value;
}
document.getElementById('phone-mask').addEventListener('input', phoneMask);
document.getElementById('phone-mask-modal').addEventListener('input', phoneMask);
