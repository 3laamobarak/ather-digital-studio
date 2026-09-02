import { ChevronDown, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Country = { name: string; nameAr?: string; iso2: string; dial: string };

// Full world list. Arab world + Gulf (GCC) are pinned to the top; the rest are
// alphabetical by English name. Arabic names are provided for the region and
// major countries and fall back to the English name elsewhere. The search box
// keeps the long list usable.
const COUNTRIES: Country[] = [
  // --- Egypt + Gulf (GCC) ---
  { name: "Egypt", nameAr: "مصر", iso2: "eg", dial: "20" },
  { name: "Saudi Arabia", nameAr: "السعودية", iso2: "sa", dial: "966" },
  { name: "United Arab Emirates", nameAr: "الإمارات", iso2: "ae", dial: "971" },
  { name: "Kuwait", nameAr: "الكويت", iso2: "kw", dial: "965" },
  { name: "Qatar", nameAr: "قطر", iso2: "qa", dial: "974" },
  { name: "Bahrain", nameAr: "البحرين", iso2: "bh", dial: "973" },
  { name: "Oman", nameAr: "عُمان", iso2: "om", dial: "968" },
  // --- Rest of the Arab world ---
  { name: "Jordan", nameAr: "الأردن", iso2: "jo", dial: "962" },
  { name: "Lebanon", nameAr: "لبنان", iso2: "lb", dial: "961" },
  { name: "Iraq", nameAr: "العراق", iso2: "iq", dial: "964" },
  { name: "Palestine", nameAr: "فلسطين", iso2: "ps", dial: "970" },
  { name: "Syria", nameAr: "سوريا", iso2: "sy", dial: "963" },
  { name: "Yemen", nameAr: "اليمن", iso2: "ye", dial: "967" },
  { name: "Libya", nameAr: "ليبيا", iso2: "ly", dial: "218" },
  { name: "Sudan", nameAr: "السودان", iso2: "sd", dial: "249" },
  { name: "Morocco", nameAr: "المغرب", iso2: "ma", dial: "212" },
  { name: "Algeria", nameAr: "الجزائر", iso2: "dz", dial: "213" },
  { name: "Tunisia", nameAr: "تونس", iso2: "tn", dial: "216" },
  { name: "Mauritania", nameAr: "موريتانيا", iso2: "mr", dial: "222" },
  { name: "Djibouti", nameAr: "جيبوتي", iso2: "dj", dial: "253" },
  { name: "Somalia", nameAr: "الصومال", iso2: "so", dial: "252" },
  { name: "Comoros", nameAr: "جزر القمر", iso2: "km", dial: "269" },
  // --- Rest of the world (A→Z) ---
  { name: "Afghanistan", nameAr: "أفغانستان", iso2: "af", dial: "93" },
  { name: "Albania", iso2: "al", dial: "355" },
  { name: "Andorra", iso2: "ad", dial: "376" },
  { name: "Angola", iso2: "ao", dial: "244" },
  { name: "Antigua and Barbuda", iso2: "ag", dial: "1268" },
  { name: "Argentina", nameAr: "الأرجنتين", iso2: "ar", dial: "54" },
  { name: "Armenia", iso2: "am", dial: "374" },
  { name: "Australia", nameAr: "أستراليا", iso2: "au", dial: "61" },
  { name: "Austria", nameAr: "النمسا", iso2: "at", dial: "43" },
  { name: "Azerbaijan", nameAr: "أذربيجان", iso2: "az", dial: "994" },
  { name: "Bahamas", iso2: "bs", dial: "1242" },
  { name: "Bangladesh", nameAr: "بنغلاديش", iso2: "bd", dial: "880" },
  { name: "Barbados", iso2: "bb", dial: "1246" },
  { name: "Belarus", iso2: "by", dial: "375" },
  { name: "Belgium", nameAr: "بلجيكا", iso2: "be", dial: "32" },
  { name: "Belize", iso2: "bz", dial: "501" },
  { name: "Benin", iso2: "bj", dial: "229" },
  { name: "Bhutan", iso2: "bt", dial: "975" },
  { name: "Bolivia", iso2: "bo", dial: "591" },
  { name: "Bosnia and Herzegovina", iso2: "ba", dial: "387" },
  { name: "Botswana", iso2: "bw", dial: "267" },
  { name: "Brazil", nameAr: "البرازيل", iso2: "br", dial: "55" },
  { name: "Brunei", iso2: "bn", dial: "673" },
  { name: "Bulgaria", iso2: "bg", dial: "359" },
  { name: "Burkina Faso", iso2: "bf", dial: "226" },
  { name: "Burundi", iso2: "bi", dial: "257" },
  { name: "Cambodia", iso2: "kh", dial: "855" },
  { name: "Cameroon", iso2: "cm", dial: "237" },
  { name: "Canada", nameAr: "كندا", iso2: "ca", dial: "1" },
  { name: "Cape Verde", iso2: "cv", dial: "238" },
  { name: "Central African Republic", iso2: "cf", dial: "236" },
  { name: "Chad", iso2: "td", dial: "235" },
  { name: "Chile", iso2: "cl", dial: "56" },
  { name: "China", nameAr: "الصين", iso2: "cn", dial: "86" },
  { name: "Colombia", iso2: "co", dial: "57" },
  { name: "Congo (Republic)", iso2: "cg", dial: "242" },
  { name: "Congo (DRC)", iso2: "cd", dial: "243" },
  { name: "Costa Rica", iso2: "cr", dial: "506" },
  { name: "Côte d'Ivoire", iso2: "ci", dial: "225" },
  { name: "Croatia", iso2: "hr", dial: "385" },
  { name: "Cuba", iso2: "cu", dial: "53" },
  { name: "Cyprus", nameAr: "قبرص", iso2: "cy", dial: "357" },
  { name: "Czechia", iso2: "cz", dial: "420" },
  { name: "Denmark", nameAr: "الدنمارك", iso2: "dk", dial: "45" },
  { name: "Dominica", iso2: "dm", dial: "1767" },
  { name: "Dominican Republic", iso2: "do", dial: "1809" },
  { name: "Ecuador", iso2: "ec", dial: "593" },
  { name: "El Salvador", iso2: "sv", dial: "503" },
  { name: "Equatorial Guinea", iso2: "gq", dial: "240" },
  { name: "Eritrea", iso2: "er", dial: "291" },
  { name: "Estonia", iso2: "ee", dial: "372" },
  { name: "Eswatini", iso2: "sz", dial: "268" },
  { name: "Ethiopia", iso2: "et", dial: "251" },
  { name: "Fiji", iso2: "fj", dial: "679" },
  { name: "Finland", nameAr: "فنلندا", iso2: "fi", dial: "358" },
  { name: "France", nameAr: "فرنسا", iso2: "fr", dial: "33" },
  { name: "Gabon", iso2: "ga", dial: "241" },
  { name: "Gambia", iso2: "gm", dial: "220" },
  { name: "Georgia", iso2: "ge", dial: "995" },
  { name: "Germany", nameAr: "ألمانيا", iso2: "de", dial: "49" },
  { name: "Ghana", iso2: "gh", dial: "233" },
  { name: "Greece", nameAr: "اليونان", iso2: "gr", dial: "30" },
  { name: "Grenada", iso2: "gd", dial: "1473" },
  { name: "Guatemala", iso2: "gt", dial: "502" },
  { name: "Guinea", iso2: "gn", dial: "224" },
  { name: "Guinea-Bissau", iso2: "gw", dial: "245" },
  { name: "Guyana", iso2: "gy", dial: "592" },
  { name: "Haiti", iso2: "ht", dial: "509" },
  { name: "Honduras", iso2: "hn", dial: "504" },
  { name: "Hong Kong", iso2: "hk", dial: "852" },
  { name: "Hungary", iso2: "hu", dial: "36" },
  { name: "Iceland", iso2: "is", dial: "354" },
  { name: "India", nameAr: "الهند", iso2: "in", dial: "91" },
  { name: "Indonesia", nameAr: "إندونيسيا", iso2: "id", dial: "62" },
  { name: "Iran", nameAr: "إيران", iso2: "ir", dial: "98" },
  { name: "Ireland", nameAr: "أيرلندا", iso2: "ie", dial: "353" },
  { name: "Israel", iso2: "il", dial: "972" },
  { name: "Italy", nameAr: "إيطاليا", iso2: "it", dial: "39" },
  { name: "Jamaica", iso2: "jm", dial: "1876" },
  { name: "Japan", nameAr: "اليابان", iso2: "jp", dial: "81" },
  { name: "Kazakhstan", nameAr: "كازاخستان", iso2: "kz", dial: "7" },
  { name: "Kenya", iso2: "ke", dial: "254" },
  { name: "Kiribati", iso2: "ki", dial: "686" },
  { name: "Kosovo", iso2: "xk", dial: "383" },
  { name: "Kyrgyzstan", iso2: "kg", dial: "996" },
  { name: "Laos", iso2: "la", dial: "856" },
  { name: "Latvia", iso2: "lv", dial: "371" },
  { name: "Lesotho", iso2: "ls", dial: "266" },
  { name: "Liberia", iso2: "lr", dial: "231" },
  { name: "Liechtenstein", iso2: "li", dial: "423" },
  { name: "Lithuania", iso2: "lt", dial: "370" },
  { name: "Luxembourg", iso2: "lu", dial: "352" },
  { name: "Macau", iso2: "mo", dial: "853" },
  { name: "Madagascar", iso2: "mg", dial: "261" },
  { name: "Malawi", iso2: "mw", dial: "265" },
  { name: "Malaysia", nameAr: "ماليزيا", iso2: "my", dial: "60" },
  { name: "Maldives", iso2: "mv", dial: "960" },
  { name: "Mali", iso2: "ml", dial: "223" },
  { name: "Malta", iso2: "mt", dial: "356" },
  { name: "Marshall Islands", iso2: "mh", dial: "692" },
  { name: "Mauritius", iso2: "mu", dial: "230" },
  { name: "Mexico", nameAr: "المكسيك", iso2: "mx", dial: "52" },
  { name: "Micronesia", iso2: "fm", dial: "691" },
  { name: "Moldova", iso2: "md", dial: "373" },
  { name: "Monaco", iso2: "mc", dial: "377" },
  { name: "Mongolia", iso2: "mn", dial: "976" },
  { name: "Montenegro", iso2: "me", dial: "382" },
  { name: "Mozambique", iso2: "mz", dial: "258" },
  { name: "Myanmar", iso2: "mm", dial: "95" },
  { name: "Namibia", iso2: "na", dial: "264" },
  { name: "Nauru", iso2: "nr", dial: "674" },
  { name: "Nepal", iso2: "np", dial: "977" },
  { name: "Netherlands", nameAr: "هولندا", iso2: "nl", dial: "31" },
  { name: "New Zealand", nameAr: "نيوزيلندا", iso2: "nz", dial: "64" },
  { name: "Nicaragua", iso2: "ni", dial: "505" },
  { name: "Niger", iso2: "ne", dial: "227" },
  { name: "Nigeria", nameAr: "نيجيريا", iso2: "ng", dial: "234" },
  { name: "North Korea", iso2: "kp", dial: "850" },
  { name: "North Macedonia", iso2: "mk", dial: "389" },
  { name: "Norway", nameAr: "النرويج", iso2: "no", dial: "47" },
  { name: "Pakistan", nameAr: "باكستان", iso2: "pk", dial: "92" },
  { name: "Palau", iso2: "pw", dial: "680" },
  { name: "Panama", iso2: "pa", dial: "507" },
  { name: "Papua New Guinea", iso2: "pg", dial: "675" },
  { name: "Paraguay", iso2: "py", dial: "595" },
  { name: "Peru", iso2: "pe", dial: "51" },
  { name: "Philippines", nameAr: "الفلبين", iso2: "ph", dial: "63" },
  { name: "Poland", nameAr: "بولندا", iso2: "pl", dial: "48" },
  { name: "Portugal", nameAr: "البرتغال", iso2: "pt", dial: "351" },
  { name: "Puerto Rico", iso2: "pr", dial: "1787" },
  { name: "Romania", iso2: "ro", dial: "40" },
  { name: "Russia", nameAr: "روسيا", iso2: "ru", dial: "7" },
  { name: "Rwanda", iso2: "rw", dial: "250" },
  { name: "Saint Kitts and Nevis", iso2: "kn", dial: "1869" },
  { name: "Saint Lucia", iso2: "lc", dial: "1758" },
  { name: "Saint Vincent and the Grenadines", iso2: "vc", dial: "1784" },
  { name: "Samoa", iso2: "ws", dial: "685" },
  { name: "San Marino", iso2: "sm", dial: "378" },
  { name: "São Tomé and Príncipe", iso2: "st", dial: "239" },
  { name: "Senegal", iso2: "sn", dial: "221" },
  { name: "Serbia", iso2: "rs", dial: "381" },
  { name: "Seychelles", iso2: "sc", dial: "248" },
  { name: "Sierra Leone", iso2: "sl", dial: "232" },
  { name: "Singapore", nameAr: "سنغافورة", iso2: "sg", dial: "65" },
  { name: "Slovakia", iso2: "sk", dial: "421" },
  { name: "Slovenia", iso2: "si", dial: "386" },
  { name: "Solomon Islands", iso2: "sb", dial: "677" },
  { name: "South Africa", nameAr: "جنوب أفريقيا", iso2: "za", dial: "27" },
  { name: "South Korea", nameAr: "كوريا الجنوبية", iso2: "kr", dial: "82" },
  { name: "South Sudan", nameAr: "جنوب السودان", iso2: "ss", dial: "211" },
  { name: "Spain", nameAr: "إسبانيا", iso2: "es", dial: "34" },
  { name: "Sri Lanka", iso2: "lk", dial: "94" },
  { name: "Suriname", iso2: "sr", dial: "597" },
  { name: "Sweden", nameAr: "السويد", iso2: "se", dial: "46" },
  { name: "Switzerland", nameAr: "سويسرا", iso2: "ch", dial: "41" },
  { name: "Taiwan", iso2: "tw", dial: "886" },
  { name: "Tajikistan", iso2: "tj", dial: "992" },
  { name: "Tanzania", iso2: "tz", dial: "255" },
  { name: "Thailand", nameAr: "تايلاند", iso2: "th", dial: "66" },
  { name: "Timor-Leste", iso2: "tl", dial: "670" },
  { name: "Togo", iso2: "tg", dial: "228" },
  { name: "Tonga", iso2: "to", dial: "676" },
  { name: "Trinidad and Tobago", iso2: "tt", dial: "1868" },
  { name: "Turkey", nameAr: "تركيا", iso2: "tr", dial: "90" },
  { name: "Turkmenistan", iso2: "tm", dial: "993" },
  { name: "Tuvalu", iso2: "tv", dial: "688" },
  { name: "Uganda", iso2: "ug", dial: "256" },
  { name: "Ukraine", nameAr: "أوكرانيا", iso2: "ua", dial: "380" },
  { name: "United Kingdom", nameAr: "المملكة المتحدة", iso2: "gb", dial: "44" },
  { name: "United States", nameAr: "الولايات المتحدة", iso2: "us", dial: "1" },
  { name: "Uruguay", iso2: "uy", dial: "598" },
  { name: "Uzbekistan", nameAr: "أوزبكستان", iso2: "uz", dial: "998" },
  { name: "Vanuatu", iso2: "vu", dial: "678" },
  { name: "Vatican City", iso2: "va", dial: "379" },
  { name: "Venezuela", iso2: "ve", dial: "58" },
  { name: "Vietnam", nameAr: "فيتنام", iso2: "vn", dial: "84" },
  { name: "Zambia", iso2: "zm", dial: "260" },
  { name: "Zimbabwe", iso2: "zw", dial: "263" },
];

const DEFAULT_COUNTRY: Country = { name: "Egypt", nameAr: "مصر", iso2: "eg", dial: "20" };

const flagSrc = (iso2: string) => `https://flagcdn.com/w20/${iso2}.png`;
const flagSrc2x = (iso2: string) => `https://flagcdn.com/w40/${iso2}.png`;

export function PhoneField({
  id,
  required,
  onChange,
}: {
  id?: string;
  required?: boolean;
  /** Emits the full international number, e.g. "+20 1559011073". */
  onChange: (value: string) => void;
}) {
  const { t, dir } = useI18n();
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [local, setLocal] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside it.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const emit = (c: Country, l: string) => onChange(l ? `+${c.dial} ${l}` : "");

  const setDigits = (raw: string) => {
    // Validation: keep digits only (accepts spaces the user types, strips them).
    const digits = raw.replace(/\D/g, "");
    setLocal(digits);
    emit(country, digits);
  };

  const pick = (c: Country) => {
    setCountry(c);
    setOpen(false);
    setQuery("");
    emit(c, local);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    const digits = q.replace(/\D/g, "");
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.nameAr ?? "").includes(query.trim()) ||
        (digits !== "" && c.dial.includes(digits)),
    );
  }, [query]);

  return (
    <div ref={wrapRef} className="relative mt-2">
      <div className="flex items-stretch gap-2">
        {/* Country selector */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-3 py-3 text-sm text-ink outline-none transition-colors hover:bg-secondary focus:border-accent"
        >
          <img
            src={flagSrc(country.iso2)}
            srcSet={`${flagSrc2x(country.iso2)} 2x`}
            width={20}
            height={14}
            alt=""
            className="h-[14px] w-[20px] rounded-[2px] object-cover"
          />
          <span dir="ltr" className="font-semibold">
            +{country.dial}
          </span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Local number */}
        <input
          id={id}
          required={required}
          type="tel"
          inputMode="numeric"
          dir="ltr"
          autoComplete="tel-national"
          value={local}
          onChange={(e) => setDigits(e.target.value)}
          placeholder="155 901 1073"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
        />
      </div>

      {/* Dropdown panel */}
      {open && (
        <div
          role="listbox"
          className="absolute z-30 mt-2 max-h-72 w-72 overflow-hidden rounded-xl border border-border bg-card shadow-xl"
          style={dir === "rtl" ? { right: 0 } : { left: 0 }}
        >
          <div className="flex items-center gap-2 border-b border-border px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t({ ar: "ابحث عن الدولة", en: "Search country" })}
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted-foreground/70"
            />
          </div>
          <ul className="max-h-60 overflow-y-auto py-1">
            {filtered.map((c) => (
              <li key={`${c.iso2}-${c.dial}`}>
                <button
                  type="button"
                  onClick={() => pick(c)}
                  className={cn(
                    "flex w-full items-center gap-3 px-3 py-2 text-start text-sm transition-colors hover:bg-secondary",
                    c.iso2 === country.iso2 && c.dial === country.dial && "bg-secondary",
                  )}
                >
                  <img
                    src={flagSrc(c.iso2)}
                    srcSet={`${flagSrc2x(c.iso2)} 2x`}
                    width={20}
                    height={14}
                    alt=""
                    className="h-[14px] w-[20px] rounded-[2px] object-cover"
                  />
                  <span className="flex-1 truncate text-ink">
                    {t({ ar: c.nameAr ?? c.name, en: c.name })}
                  </span>
                  <span dir="ltr" className="font-semibold text-muted-foreground">
                    +{c.dial}
                  </span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-3 py-3 text-sm text-muted-foreground">
                {t({ ar: "لا توجد نتائج", en: "No results" })}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
