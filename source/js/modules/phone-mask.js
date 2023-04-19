export default function phoneMask(event) {
  if (!event || !event.target) {
    return;
  }

  let phoneMatches = event.target.value.replace(/\D/g, '').match(/\+?(\d{0,1}) ?\(?(\d{0,3})\)? ?(\d{0,3})? ?(\d{0,2})? ?(\d{0,2})?/);
  let value = '+7';

  if (!event.target.value) {
    return;
  } else if (!phoneMatches[1]) {
    event.target.value = value;
    return;
  }

  value += ' (' + phoneMatches[2];
  if (phoneMatches[3]) {
    value += ') ' + phoneMatches[3];
  }
  if (phoneMatches[4]) {
    value += '-' + phoneMatches[4];
  }
  if (phoneMatches[5]) {
    value += '-' + phoneMatches[5];
  }

  event.target.value = value;
}

