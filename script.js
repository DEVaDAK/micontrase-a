const i18n = {
  es: {
    title: "Generador de Contraseñas",
    subtitle: "Crea contraseñas seguras en segundos.",
    languageLabel: "Idioma",
    passwordLabel: "Contraseña generada",
    copy: "Copiar",
    copied: "Copiado.",
    lengthLabel: "Longitud",
    includeLabel: "Incluir texto (opcional)",
    includePh: "Ej: david, auto, 6",
    includeNote: "Podés usar coma “,” para incluir más de una palabra. Se insertará tal cual.",
    optionsLabel: "Opciones",
    lower: "Minúsculas",
    upper: "Mayúsculas",
    nums: "Números",
    syms: "Símbolos",
    generate: "Generar",
    footer: "Privado: la contraseña se genera en tu dispositivo.",
    tip: "Tip: usa más de 10 caracteres para mayor seguridad.",
    pickOne: "Seleccioná al menos una opción.",
    strengthWeak: "Débil",
    strengthMed: "Media",
    strengthStrong: "Fuerte",
    strengthVStrong: "Muy fuerte",
    crackLabel: "Tiempo estimado (offline): "
  },
  en: {
    title: "Password Generator",
    subtitle: "Create strong passwords in seconds.",
    languageLabel: "Language",
    passwordLabel: "Generated password",
    copy: "Copy",
    copied: "Copied.",
    lengthLabel: "Length",
    includeLabel: "Include text (optional)",
    includePh: "e.g. david, car, 6",
    includeNote: "You can use commas “,” to include more than one term. It will be inserted as typed.",
    optionsLabel: "Options",
    lower: "Lowercase",
    upper: "Uppercase",
    nums: "Numbers",
    syms: "Symbols",
    generate: "Generate",
    footer: "Private: generated on your device.",
    tip: "Tip: use more than 10 characters for better security.",
    pickOne: "Select at least one option.",
    strengthWeak: "Weak",
    strengthMed: "Medium",
    strengthStrong: "Strong",
    strengthVStrong: "Very strong",
    crackLabel: "Estimated crack time (offline): "
  },
  pt: {
    title: "Gerador de Senhas",
    subtitle: "Crie senhas fortes em segundos.",
    languageLabel: "Idioma",
    passwordLabel: "Senha gerada",
    copy: "Copiar",
    copied: "Copiado.",
    lengthLabel: "Comprimento",
    includeLabel: "Incluir texto (opcional)",
    includePh: "Ex: david, carro, 6",
    includeNote: "Você pode usar vírgula “,” para incluir mais de um termo. Será inserido como digitado.",
    optionsLabel: "Opções",
    lower: "Minúsculas",
    upper: "Maiúsculas",
    nums: "Números",
    syms: "Símbolos",
    generate: "Gerar",
    footer: "Privado: gerado no seu dispositivo.",
    tip: "Dica: use mais de 10 caracteres para mais segurança.",
    pickOne: "Selecione pelo menos uma opção.",
    strengthWeak: "Fraca",
    strengthMed: "Média",
    strengthStrong: "Forte",
    strengthVStrong: "Muito forte",
    crackLabel: "Tempo estimado (offline): "
  },
  fr: {
    title: "Générateur de mots de passe",
    subtitle: "Créez des mots de passe robustes en quelques secondes.",
    languageLabel: "Langue",
    passwordLabel: "Mot de passe généré",
    copy: "Copier",
    copied: "Copié.",
    lengthLabel: "Longueur",
    includeLabel: "Inclure du texte (optionnel)",
    includePh: "Ex : david, voiture, 6",
    includeNote: "Vous pouvez utiliser des virgules “,” pour inclure plusieurs termes. Inséré tel quel.",
    optionsLabel: "Options",
    lower: "Minuscules",
    upper: "Majuscules",
    nums: "Chiffres",
    syms: "Symboles",
    generate: "Générer",
    footer: "Privé : généré sur votre appareil.",
    tip: "Astuce : utilisez plus de 10 caractères pour plus de sécurité.",
    pickOne: "Sélectionnez au moins une option.",
    strengthWeak: "Faible",
    strengthMed: "Moyenne",
    strengthStrong: "Forte",
    strengthVStrong: "Très forte",
    crackLabel: "Temps estimé (offline) : "
  },
  it: {
    title: "Generatore di Password",
    subtitle: "Crea password robuste in pochi secondi.",
    languageLabel: "Lingua",
    passwordLabel: "Password generata",
    copy: "Copia",
    copied: "Copiato.",
    lengthLabel: "Lunghezza",
    includeLabel: "Includi testo (opzionale)",
    includePh: "Es: david, auto, 6",
    includeNote: "Puoi usare la virgola “,” per includere più termini. Verrà inserito così com'è.",
    optionsLabel: "Opzioni",
    lower: "Minuscole",
    upper: "Maiuscole",
    nums: "Numeri",
    syms: "Simboli",
    generate: "Genera",
    footer: "Privato: generato sul tuo dispositivo.",
    tip: "Consiglio: usa più di 10 caratteri per maggiore sicurezza.",
    pickOne: "Seleziona almeno un'opzione.",
    strengthWeak: "Debole",
    strengthMed: "Media",
    strengthStrong: "Forte",
    strengthVStrong: "Molto forte",
    crackLabel: "Tempo stimato (offline): "
  },
  de: {
    title: "Passwort-Generator",
    subtitle: "Erstelle starke Passwörter in Sekunden.",
    languageLabel: "Sprache",
    passwordLabel: "Generiertes Passwort",
    copy: "Kopieren",
    copied: "Kopiert.",
    lengthLabel: "Länge",
    includeLabel: "Text einfügen (optional)",
    includePh: "z.B. david, auto, 6",
    includeNote: "Du kannst Kommas “,” nutzen, um mehrere Begriffe einzufügen. Wird genau so eingefügt.",
    optionsLabel: "Optionen",
    lower: "Kleinbuchstaben",
    upper: "Großbuchstaben",
    nums: "Zahlen",
    syms: "Symbole",
    generate: "Generieren",
    footer: "Privat: wird auf deinem Gerät erzeugt.",
    tip: "Tipp: Verwende mehr als 10 Zeichen für mehr Sicherheit.",
    pickOne: "Wähle mindestens eine Option.",
    strengthWeak: "Schwach",
    strengthMed: "Mittel",
    strengthStrong: "Stark",
    strengthVStrong: "Sehr stark",
    crackLabel: "Geschätzte Zeit (offline): "
  }
};

const els = {
  language: document.getElementById("language"),
  password: document.getElementById("password"),
  copyBtn: document.getElementById("copyBtn"),
  genBtn: document.getElementById("genBtn"),
  lengthRange: document.getElementById("lengthRange"),
  lengthValue: document.getElementById("lengthValue"),
  include: document.getElementById("include"),
  lower: document.getElementById("lower"),
  upper: document.getElementById("upper"),
  nums: document.getElementById("nums"),
  syms: document.getElementById("syms"),
  strengthBar: document.getElementById("strengthBar"),
  strengthText: document.getElementById("strengthText"),
  crackTime: document.getElementById("crackTime")
};

function t() {
  return i18n[els.language.value] || i18n.es;
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function applyLanguage() {
  const tr = t();
  document.documentElement.lang = els.language.value;

  setText("t_title", tr.title);
  setText("t_subtitle", tr.subtitle);
  setText("t_languageLabel", tr.languageLabel);
  setText("t_passwordLabel", tr.passwordLabel);
  setText("t_copy", tr.copy);
  setText("t_lengthLabel", tr.lengthLabel);
  setText("t_includeLabel", tr.includeLabel);
  setText("t_includeNote", tr.includeNote);
  setText("t_optionsLabel", tr.optionsLabel);
  setText("t_lower", tr.lower);
  setText("t_upper", tr.upper);
  setText("t_nums", tr.nums);
  setText("t_syms", tr.syms);
  setText("t_generate", tr.generate);
  setText("t_footer", tr.footer);
  setText("t_tip", tr.tip);

  els.include.placeholder = tr.includePh;

  if (els.password.value) {
    checkStrengthAndCrack(els.password.value);
  }
}

function secureRandomInt(maxExclusive) {
  if (maxExclusive <= 0) return 0;
  const uint32Max = 0xFFFFFFFF;
  const limit = uint32Max - (uint32Max % maxExclusive);
  const arr = new Uint32Array(1);

  while (true) {
    crypto.getRandomValues(arr);
    const x = arr[0];
    if (x < limit) return x % maxExclusive;
  }
}

function buildCharset() {
  let charset = "";
  if (els.lower.checked) charset += "abcdefghijklmnopqrstuvwxyz";
  if (els.upper.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (els.nums.checked) charset += "0123456789";
  if (els.syms.checked) charset += "!@#$%^&*()_+-={}[]<>?~|:;,.";
  return charset;
}

function parseIncludeTerms(raw) {
  return raw
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);
}

function generatePassword() {
  const tr = t();

  let length = parseInt(els.lengthRange.value, 10);
  if (Number.isNaN(length)) length = 10;
  length = Math.min(24, Math.max(6, length));
  els.lengthRange.value = String(length);
  els.lengthValue.textContent = String(length);

  const charset = buildCharset();
  if (!charset) {
    alert(tr.pickOne);
    return;
  }

  const terms = parseIncludeTerms(els.include.value || "");
  const includeBlock = terms.join("");

  if (includeBlock.length > length) {
    length = Math.min(24, Math.max(6, includeBlock.length));
    els.lengthRange.value = String(length);
    els.lengthValue.textContent = String(length);
  }

  const remaining = Math.max(0, length - includeBlock.length);

  let randomPart = "";
  for (let i = 0; i < remaining; i++) {
    randomPart += charset[secureRandomInt(charset.length)];
  }

  if (!includeBlock) {
    els.password.value = randomPart;
  } else {
    const pos = secureRandomInt(randomPart.length + 1);
    els.password.value = randomPart.slice(0, pos) + includeBlock + randomPart.slice(pos);
  }

  checkStrengthAndCrack(els.password.value);
}

async function copyPassword() {
  const tr = t();
  const value = els.password.value || "";
  if (!value) return;

  try {
    await navigator.clipboard.writeText(value);
    els.copyBtn.textContent = tr.copied;
    setTimeout(() => { els.copyBtn.textContent = tr.copy; }, 900);
  } catch {
    els.password.focus();
    els.password.select();
    document.execCommand("copy");
    els.copyBtn.textContent = tr.copied;
    setTimeout(() => { els.copyBtn.textContent = tr.copy; }, 900);
  }
}

function checkStrengthAndCrack(password) {
  const tr = t();

  let score = 0;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) {
    els.strengthBar.style.width = "25%";
    els.strengthBar.style.background = "red";
    els.strengthText.textContent = tr.strengthWeak;
  } else if (score === 2) {
    els.strengthBar.style.width = "50%";
    els.strengthBar.style.background = "orange";
    els.strengthText.textContent = tr.strengthMed;
  } else if (score === 3) {
    els.strengthBar.style.width = "75%";
    els.strengthBar.style.background = "#2ecc71";
    els.strengthText.textContent = tr.strengthStrong;
  } else {
    els.strengthBar.style.width = "100%";
    els.strengthBar.style.background = "#00ff9c";
    els.strengthText.textContent = tr.strengthVStrong;
  }

  const charsetSize = estimateCharsetSize(password);
  const guessesPerSecond = 1e10; // offline rápido
  const seconds = estimateBruteforceSeconds(password.length, charsetSize, guessesPerSecond);

  els.crackTime.textContent = tr.crackLabel + formatDuration(seconds, els.language.value);
}

function estimateCharsetSize(pw) {
  let size = 0;
  if (/[a-z]/.test(pw)) size += 26;
  if (/[A-Z]/.test(pw)) size += 26;
  if (/[0-9]/.test(pw)) size += 10;
  if (/[^A-Za-z0-9]/.test(pw)) size += 33;
  return Math.max(size, 1);
}

function estimateBruteforceSeconds(length, charsetSize, guessesPerSecond) {
  const log10N = length * Math.log10(charsetSize);
  const log10T = log10N - Math.log10(2) - Math.log10(guessesPerSecond);
  return Math.pow(10, log10T);
}

function formatDuration(seconds, lang) {
  if (!Number.isFinite(seconds)) {
    return lang === "es" ? "muchísimo tiempo" :
           lang === "pt" ? "muito tempo" :
           lang === "fr" ? "très longtemps" :
           lang === "it" ? "molto tempo" :
           lang === "de" ? "sehr lange" : "a very long time";
  }

  if (seconds < 1) {
    return lang === "es" ? "menos de 1 segundo" :
           lang === "pt" ? "menos de 1 segundo" :
           lang === "fr" ? "moins d’1 seconde" :
           lang === "it" ? "meno di 1 secondo" :
           lang === "de" ? "unter 1 Sekunde" : "less than 1 second";
  }

  if (seconds < 60) return `${Math.round(seconds)} ${pluralize("second", Math.round(seconds), lang)}`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.round(minutes)} ${pluralize("minute", Math.round(minutes), lang)}`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.round(hours)} ${pluralize("hour", Math.round(hours), lang)}`;
  const days = hours / 24;
  if (days < 365) return `${Math.round(days)} ${pluralize("day", Math.round(days), lang)}`;
  const years = days / 365;

  if (years < 1000) return `${Math.round(years)} ${pluralize("year", Math.round(years), lang)}`;
  if (years < 1e6) return `${(years/1e3).toFixed(1)}k ${pluralize("year", 2, lang)}`;
  if (years < 1e9) return `${(years/1e6).toFixed(1)}M ${pluralize("year", 2, lang)}`;
  return `${(years/1e9).toFixed(1)}B ${pluralize("year", 2, lang)}`;
}

function unitName(base, lang) {
  const map = {
    es: { second:"segundo", minute:"minuto", hour:"hora", day:"día", year:"año" },
    en: { second:"second", minute:"minute", hour:"hour", day:"day", year:"year" },
    pt: { second:"segundo", minute:"minuto", hour:"hora", day:"dia", year:"ano" },
    fr: { second:"seconde", minute:"minute", hour:"heure", day:"jour", year:"an" },
    it: { second:"secondo", minute:"minuto", hour:"ora", day:"giorno", year:"anno" },
    de: { second:"Sekunde", minute:"Minute", hour:"Stunde", day:"Tag", year:"Jahr" }
  };
  return (map[lang] && map[lang][base]) || map.en[base];
}

function pluralize(base, n, lang) {
  const singular = unitName(base, lang);
  if (n === 1) return singular;

  if (lang === "es") {
    if (base === "year") return "años";
    if (base === "day") return "días";
    return singular + "s";
  }
  if (lang === "fr") {
    if (base === "year") return "ans";
    return singular + "s";
  }
  if (lang === "pt") {
    if (base === "year") return "anos";
    return singular + "s";
  }
  if (lang === "it") {
    if (base === "hour") return "ore";
    if (base === "year") return "anni";
    if (base === "day") return "giorni";
    if (base === "minute") return "minuti";
    if (base === "second") return "secondi";
    return singular;
  }
  if (lang === "de") {
    return singular;
  }
  return singular + "s";
}

// Events
els.lengthRange.addEventListener("input", () => {
  els.lengthValue.textContent = els.lengthRange.value;
});

els.language.addEventListener("change", applyLanguage);
els.genBtn.addEventListener("click", generatePassword);
els.copyBtn.addEventListener("click", copyPassword);

// Init
applyLanguage();
els.lengthValue.textContent = els.lengthRange.value;
generatePassword();

