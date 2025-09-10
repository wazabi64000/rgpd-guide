// Exemple : stockage du consentement utilisateur (sera utilisé sur pages consentement)
function setConsent(consent) {
  localStorage.setItem('rgpdConsent', consent);
}

function getConsent() {
  return localStorage.getItem('rgpdConsent') === 'true';
}
