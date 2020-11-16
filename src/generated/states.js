'use strict';
const states = {
  "AFG": "Afghanistan",
  "AF": "Afghanistan",
  "ALA": "Åland Islands",
  "AX": "Åland Islands",
  "ALB": "Albania",
  "AL": "Albania",
  "DZA": "Algeria",
  "DZ": "Algeria",
  "ASM": "American Samoa",
  "AS": "American Samoa",
  "AND": "Andorra",
  "AD": "Andorra",
  "AGO": "Angola",
  "AO": "Angola",
  "AIA": "Anguilla",
  "AI": "Anguilla",
  "ATA": "Antarctica",
  "AQ": "Antarctica",
  "ATG": "Antigua and Barbuda",
  "AG": "Antigua and Barbuda",
  "ARG": "Argentina",
  "AR": "Argentina",
  "ARM": "Armenia",
  "AM": "Armenia",
  "ABW": "Aruba",
  "AW": "Aruba",
  "AUS": "Australia",
  "AU": "Australia",
  "AUT": "Austria",
  "AT": "Austria",
  "AZE": "Azerbaijan",
  "AZ": "Azerbaijan",
  "BHS": "Bahamas",
  "BS": "Bahamas",
  "BHR": "Bahrain",
  "BH": "Bahrain",
  "BGD": "Bangladesh",
  "BD": "Bangladesh",
  "BRB": "Barbados",
  "BB": "Barbados",
  "BLR": "Belarus",
  "BY": "Belarus",
  "BEL": "Belgium",
  "BE": "Belgium",
  "BLZ": "Belize",
  "BZ": "Belize",
  "BEN": "Benin",
  "BJ": "Benin",
  "BMU": "Bermuda",
  "BM": "Bermuda",
  "BTN": "Bhutan",
  "BT": "Bhutan",
  "BOL": "Bolivia, Plurinational State of",
  "BO": "Bolivia, Plurinational State of",
  "BES": "Bonaire, Sint Eustatius and Saba",
  "BQ": "Bonaire, Sint Eustatius and Saba",
  "BIH": "Bosnia and Herzegovina",
  "BA": "Bosnia and Herzegovina",
  "BWA": "Botswana",
  "BW": "Botswana",
  "BVT": "Bouvet Island",
  "BV": "Bouvet Island",
  "BRA": "Brazil",
  "BR": "Brazil",
  "IOT": "British Indian Ocean Territory",
  "IO": "British Indian Ocean Territory",
  "BRN": "Brunei Darussalam",
  "BN": "Brunei Darussalam",
  "BGR": "Bulgaria",
  "BG": "Bulgaria",
  "BFA": "Burkina Faso",
  "BF": "Burkina Faso",
  "BDI": "Burundi",
  "BI": "Burundi",
  "CPV": "Cabo Verde",
  "CV": "Cabo Verde",
  "KHM": "Cambodia",
  "KH": "Cambodia",
  "CMR": "Cameroon",
  "CM": "Cameroon",
  "CAN": "Canada",
  "CA": "Canada",
  "CYM": "Cayman Islands",
  "KY": "Cayman Islands",
  "CAF": "Central African Republic",
  "CF": "Central African Republic",
  "TCD": "Chad",
  "TD": "Chad",
  "CHL": "Chile",
  "CL": "Chile",
  "CHN": "China",
  "CN": "China",
  "CXR": "Christmas Island",
  "CX": "Christmas Island",
  "CCK": "Cocos (Keeling) Islands",
  "CC": "Cocos (Keeling) Islands",
  "COL": "Colombia",
  "CO": "Colombia",
  "COM": "Comoros",
  "KM": "Comoros",
  "COG": "Congo",
  "CG": "Congo",
  "COD": "Congo, Democratic Republic of the",
  "CD": "Congo, Democratic Republic of the",
  "COK": "Cook Islands",
  "CK": "Cook Islands",
  "CRI": "Costa Rica",
  "CR": "Costa Rica",
  "CIV": "Côte d’Ivoire",
  "CI": "Côte d’Ivoire",
  "HRV": "Croatia",
  "HR": "Croatia",
  "CUB": "Cuba",
  "CU": "Cuba",
  "CUW": "Curaçao",
  "CW": "Curaçao",
  "CYP": "Cyprus",
  "CY": "Cyprus",
  "CZE": "Czech Republic",
  "CZ": "Czech Republic",
  "DNK": "Denmark",
  "DK": "Denmark",
  "DJI": "Djibouti",
  "DJ": "Djibouti",
  "DMA": "Dominica",
  "DM": "Dominica",
  "DOM": "Dominican Republic",
  "DO": "Dominican Republic",
  "ECU": "Ecuador",
  "EC": "Ecuador",
  "EGY": "Egypt",
  "EG": "Egypt",
  "SLV": "El Salvador",
  "SV": "El Salvador",
  "GNQ": "Equatorial Guinea",
  "GQ": "Equatorial Guinea",
  "ERI": "Eritrea",
  "ER": "Eritrea",
  "EST": "Estonia",
  "EE": "Estonia",
  "ETH": "Ethiopia",
  "ET": "Ethiopia",
  "FLK": "Falkland Islands (Malvinas)",
  "FK": "Falkland Islands (Malvinas)",
  "FRO": "Faroe Islands",
  "FO": "Faroe Islands",
  "FJI": "Fiji",
  "FJ": "Fiji",
  "FIN": "Finland",
  "FI": "Finland",
  "FRA": "France",
  "FR": "France",
  "GUF": "French Guiana",
  "GF": "French Guiana",
  "PYF": "French Polynesia",
  "PF": "French Polynesia",
  "ATF": "French Southern Territories",
  "TF": "French Southern Territories",
  "GAB": "Gabon",
  "GA": "Gabon",
  "GMB": "Gambia",
  "GM": "Gambia",
  "GEO": "Georgia",
  "GE": "Georgia",
  "D": "Germany",
  "DE": "Germany",
  "GHA": "Ghana",
  "GH": "Ghana",
  "GIB": "Gibraltar",
  "GI": "Gibraltar",
  "GRC": "Greece",
  "GR": "Greece",
  "GRL": "Greenland",
  "GL": "Greenland",
  "GRD": "Grenada",
  "GD": "Grenada",
  "GLP": "Guadeloupe",
  "GP": "Guadeloupe",
  "GUM": "Guam",
  "GU": "Guam",
  "GTM": "Guatemala",
  "GT": "Guatemala",
  "GGY": "Guernsey",
  "GG": "Guernsey",
  "GIN": "Guinea",
  "GN": "Guinea",
  "GNB": "Guinea-Bissau",
  "GW": "Guinea-Bissau",
  "GUY": "Guyana",
  "GY": "Guyana",
  "HTI": "Haiti",
  "HT": "Haiti",
  "HMD": "Heard Island and McDonald Islands",
  "HM": "Heard Island and McDonald Islands",
  "VAT": "Holy See (Vatican City State)",
  "VA": "Holy See (Vatican City State)",
  "HND": "Honduras",
  "HN": "Honduras",
  "HKG": "Hong Kong Special Administrative Region of China",
  "HK": "Hong Kong Special Administrative Region of China",
  "HUN": "Hungary",
  "HU": "Hungary",
  "ISL": "Iceland",
  "IS": "Iceland",
  "IND": "India",
  "IN": "India",
  "IDN": "Indonesia",
  "ID": "Indonesia",
  "IRN": "Iran (Islamic Republic of)",
  "IR": "Iran (Islamic Republic of)",
  "IRQ": "Iraq",
  "IQ": "Iraq",
  "IRL": "Ireland",
  "IE": "Ireland",
  "IMN": "Isle of Man",
  "IM": "Isle of Man",
  "ISR": "Israel",
  "IL": "Israel",
  "ITA": "Italy",
  "IT": "Italy",
  "JAM": "Jamaica",
  "JM": "Jamaica",
  "JPN": "Japan",
  "JP": "Japan",
  "JEY": "Jersey",
  "JE": "Jersey",
  "JOR": "Jordan",
  "JO": "Jordan",
  "KAZ": "Kazakhstan",
  "KZ": "Kazakhstan",
  "KEN": "Kenya",
  "KE": "Kenya",
  "KYA": "Kenya",
  "KIR": "Kiribati",
  "KI": "Kiribati",
  "PRK": "Korea, Democratic People’s Republic of",
  "KP": "Korea, Democratic People’s Republic of",
  "KOR": "Korea, Republic of",
  "KR": "Korea, Republic of",
  "XKS": "Kosovo",
  "XK": "Kosovo",
  "KWT": "Kuwait",
  "KW": "Kuwait",
  "KGZ": "Kyrgyzstan",
  "KG": "Kyrgyzstan",
  "LAO": "Lao People’s Democratic Republic",
  "LA": "Lao People’s Democratic Republic",
  "LVA": "Latvia",
  "LV": "Latvia",
  "LBN": "Lebanon",
  "LB": "Lebanon",
  "LSO": "Lesotho",
  "LS": "Lesotho",
  "LBR": "Liberia",
  "LR": "Liberia",
  "LBY": "Libya",
  "LY": "Libya",
  "LIE": "Liechtenstein",
  "LI": "Liechtenstein",
  "LTU": "Lithuania",
  "LT": "Lithuania",
  "LUX": "Luxembourg",
  "LU": "Luxembourg",
  "MAC": "Macao Special Administrative Region of China",
  "MO": "Macao Special Administrative Region of China",
  "MKD": "Macedonia, the former Yugoslav Republic of",
  "MK": "Macedonia, the former Yugoslav Republic of",
  "MDG": "Madagascar",
  "MG": "Madagascar",
  "MWI": "Malawi",
  "MW": "Malawi",
  "MYS": "Malaysia",
  "MY": "Malaysia",
  "MDV": "Maldives",
  "MV": "Maldives",
  "MLI": "Mali",
  "ML": "Mali",
  "MLT": "Malta",
  "MT": "Malta",
  "MHL": "Marshall Islands",
  "MH": "Marshall Islands",
  "MTQ": "Martinique",
  "MQ": "Martinique",
  "MRT": "Mauritania",
  "MR": "Mauritania",
  "MUS": "Mauritius",
  "MU": "Mauritius",
  "MYT": "Mayotte",
  "YT": "Mayotte",
  "MEX": "Mexico",
  "MX": "Mexico",
  "FSM": "Micronesia (Federated States of)",
  "FM": "Micronesia (Federated States of)",
  "MDA": "Moldova, Republic of",
  "MD": "Moldova, Republic of",
  "MCO": "Monaco",
  "MC": "Monaco",
  "MNG": "Mongolia",
  "MN": "Mongolia",
  "MNE": "Montenegro",
  "ME": "Montenegro",
  "MSR": "Montserrat",
  "MS": "Montserrat",
  "MAR": "Morocco",
  "MA": "Morocco",
  "MOZ": "Mozambique",
  "MZ": "Mozambique",
  "MMR": "Myanmar",
  "MM": "Myanmar",
  "NAM": "Namibia",
  "NA": "Namibia",
  "NRU": "Nauru",
  "NR": "Nauru",
  "NPL": "Nepal",
  "NP": "Nepal",
  "NLD": "Netherlands",
  "NL": "Netherlands",
  "ANT": "Netherlands Antilles",
  "AN": "Netherlands Antilles",
  "NTZ": "Neutral Zone",
  "NT": "Neutral Zone",
  "NCL": "New Caledonia",
  "NC": "New Caledonia",
  "NZL": "New Zealand",
  "NZ": "New Zealand",
  "NIC": "Nicaragua",
  "NI": "Nicaragua",
  "NER": "Niger",
  "NE": "Niger",
  "NGA": "Nigeria",
  "NG": "Nigeria",
  "NIU": "Niue",
  "NU": "Niue",
  "NFK": "Norfolk Island",
  "NF": "Norfolk Island",
  "MNP": "Northern Mariana Islands",
  "MP": "Northern Mariana Islands",
  "NOR": "Norway",
  "NO": "Norway",
  "OMN": "Oman",
  "OM": "Oman",
  "PAK": "Pakistan",
  "PK": "Pakistan",
  "PLW": "Palau",
  "PW": "Palau",
  "PSE": "Palestine, State of",
  "PS": "Palestine, State of",
  "PAN": "Panama",
  "PA": "Panama",
  "PNG": "Papua New Guinea",
  "PG": "Papua New Guinea",
  "PRY": "Paraguay",
  "PY": "Paraguay",
  "PER": "Peru",
  "PE": "Peru",
  "PHL": "Philippines",
  "PH": "Philippines",
  "PCN": "Pitcairn",
  "PN": "Pitcairn",
  "POL": "Poland",
  "PL": "Poland",
  "PRT": "Portugal",
  "PT": "Portugal",
  "PRI": "Puerto Rico",
  "PR": "Puerto Rico",
  "QAT": "Qatar",
  "QA": "Qatar",
  "REU": "Réunion",
  "RE": "Réunion",
  "ROU": "Romania",
  "RO": "Romania",
  "RUS": "Russian Federation",
  "RU": "Russian Federation",
  "RWA": "Rwanda",
  "RW": "Rwanda",
  "BLM": "Saint Barthélemy",
  "BL": "Saint Barthélemy",
  "SHN": "Saint Helena, Ascension and Tristan da Cunha",
  "SH": "Saint Helena, Ascension and Tristan da Cunha",
  "KNA": "Saint Kitts and Nevis",
  "KN": "Saint Kitts and Nevis",
  "LCA": "Saint Lucia",
  "LC": "Saint Lucia",
  "MAF": "Saint Martin (French part)",
  "MF": "Saint Martin (French part)",
  "SPM": "Saint Pierre and Miquelon",
  "PM": "Saint Pierre and Miquelon",
  "VCT": "Saint Vincent and the Grenadines",
  "VC": "Saint Vincent and the Grenadines",
  "WSM": "Samoa",
  "WS": "Samoa",
  "SMR": "San Marino",
  "SM": "San Marino",
  "STP": "Sao Tome and Principe",
  "ST": "Sao Tome and Principe",
  "SAU": "Saudi Arabia",
  "SA": "Saudi Arabia",
  "SEN": "Senegal",
  "SN": "Senegal",
  "SRB": "Serbia",
  "RS": "Serbia",
  "SYC": "Seychelles",
  "SC": "Seychelles",
  "SLE": "Sierra Leone",
  "SL": "Sierra Leone",
  "SGP": "Singapore",
  "SG": "Singapore",
  "SXM": "Sint Maarten (Dutch part)",
  "SX": "Sint Maarten (Dutch part)",
  "SVK": "Slovakia",
  "SK": "Slovakia",
  "SVN": "Slovenia",
  "SI": "Slovenia",
  "SLB": "Solomon Islands",
  "SB": "Solomon Islands",
  "SOM": "Somalia",
  "SO": "Somalia",
  "ZAF": "South Africa",
  "ZA": "South Africa",
  "SGS": "South Georgia and the South Sandwich Islands",
  "GS": "South Georgia and the South Sandwich Islands",
  "SSD": "South Sudan",
  "SS": "South Sudan",
  "ESP": "Spain",
  "ES": "Spain",
  "LKA": "Sri Lanka",
  "LK": "Sri Lanka",
  "SDN": "Sudan",
  "SD": "Sudan",
  "SUR": "Suriname",
  "SR": "Suriname",
  "SJM": "Svalbard and Jan Mayen",
  "SJ": "Svalbard and Jan Mayen",
  "SWZ": "Swaziland",
  "SZ": "Swaziland",
  "SWE": "Sweden",
  "SE": "Sweden",
  "CHE": "Switzerland",
  "CH": "Switzerland",
  "SYR": "Syrian Arab Republic",
  "SY": "Syrian Arab Republic",
  "TWN": "Taiwan Province of China",
  "TW": "Taiwan Province of China",
  "TJK": "Tajikistan",
  "TJ": "Tajikistan",
  "TZA": "Tanzania, United Republic of",
  "TZ": "Tanzania, United Republic of",
  "THA": "Thailand",
  "TH": "Thailand",
  "TLS": "Timor-Leste",
  "TL": "Timor-Leste",
  "TGO": "Togo",
  "TG": "Togo",
  "TKL": "Tokelau",
  "TK": "Tokelau",
  "TON": "Tonga",
  "TO": "Tonga",
  "TTO": "Trinidad and Tobago",
  "TT": "Trinidad and Tobago",
  "TUN": "Tunisia",
  "TN": "Tunisia",
  "TUR": "Turkey",
  "TR": "Turkey",
  "TKM": "Turkmenistan",
  "TM": "Turkmenistan",
  "TCA": "Turks and Caicos Islands",
  "TC": "Turks and Caicos Islands",
  "TUV": "Tuvalu",
  "TV": "Tuvalu",
  "UGA": "Uganda",
  "UG": "Uganda",
  "UKR": "Ukraine",
  "UA": "Ukraine",
  "ARE": "United Arab Emirates",
  "AE": "United Arab Emirates",
  "GBR": "United Kingdom - British Citizen",
  "GB": "United Kingdom - British Protected person",
  "GBD": "United Kingdom - British Overseas Territories Citizen",
  "GBN": "United Kingdom - British National (Overseas)",
  "GBO": "United Kingdom - British Overseas Citizen",
  "GBP": "United Kingdom - British Protected person",
  "USA": "United States",
  "US": "United States",
  "UMI": "United States Minor Outlying Islands",
  "UM": "United States Minor Outlying Islands",
  "URY": "Uruguay",
  "UY": "Uruguay",
  "UZB": "Uzbekistan",
  "UZ": "Uzbekistan",
  "VUT": "Vanuatu",
  "VU": "Vanuatu",
  "VEN": "Venezuela, Bolivarian Republic of",
  "VE": "Venezuela, Bolivarian Republic of",
  "VNM": "Viet Nam",
  "VN": "Viet Nam",
  "VGB": "Virgin Islands (British)",
  "VG": "Virgin Islands (British)",
  "VIR": "Virgin Islands (U.S.)",
  "VI": "Virgin Islands (U.S.)",
  "WLF": "Wallis and Futuna",
  "WF": "Wallis and Futuna",
  "ESH": "Western Sahara",
  "EH": "Western Sahara",
  "YEM": "Yemen",
  "YE": "Yemen",
  "ZMB": "Zambia",
  "ZM": "Zambia",
  "ZWE": "Zimbabwe",
  "ZW": "Zimbabwe",
  "EUE": "European Union (EU)",
  "UNO": "United Nations Organization or one of its officials",
  "ZZ": "United Nations specialized agency or one of its officials",
  "UNA": "United Nations specialized agency or one of its officials",
  "UNK": "Resident of Kosovo to whom a travel document has been issued by the United Nations Interim Administration Mission in Kosovo (UNMIK)",
  "XBA": "African Development Bank (ADB)",
  "XIM": "African Export-Import Bank (AFREXIM bank)",
  "XCC": "Caribbean Community or one of its emissaries (CARICOM)",
  "XCO": "Common Market for Eastern and Southern Africa (COMESA)",
  "XEC": "Economic Community of West African States (ECOWAS)",
  "XPO": "International Criminal Police Organization (INTERPOL)",
  "XOM": "Sovereign Military Order of Malta or one of its emissaries",
  "XXA": "Stateless person, as defined in Article 1 of the 1954 Convention Relating to the Status of Stateless Persons",
  "XXB": "Refugee, as defined in Article 1 of the 1951 Convention Relating to the Status of Refugees as amended by the 1967 Protocol",
  "XXX": "Refugee, other than as defined under the code XXB above XXC Person of unspecified nationality, for whom issuing State does not consider it necessary to specify any of the codes XXA, XXB or XXC above, whatever that person’s status may be. This category may include a person who is neither stateless nor a refugee but who is of unknown nationality and legally residing in the State of issue.",
  "RKS": "Kosovo",
  "ZIM": "Zimbabwe",
  "DEU": "Germany",
  "ROM": "Romania"
};
Object.freeze(states);
module.exports = states;
