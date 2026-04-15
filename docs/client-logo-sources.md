# Client Logo Sources

Tikslas: surinkti oficialius arba kuo arčiau oficialių kliento logotipo šaltinius, kad galėtume pakeisti esamus netvarkingus assetus į skaidrius ir teisingų spalvų variantus.

## Status legend

- `Official site found`: radome oficialią svetainę
- `Likely official source`: radome stipriai tikėtiną oficialų šaltinį, bet dar reikia patvirtinti logo failą
- `Needs extraction`: oficiali svetainė rasta, bet logo failą dar reikia išsitraukti
- `Needs verification`: reikia papildomai patikrinti brandą ar šaltinį

## Current brands in the site

### Agrija

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/agrija-logotipas.svg`
- Official site: https://agrija.lt/en/
- Notes: gera žinia ta, kad projekte jau yra SVG. Pirmiausia reikėtų patikrinti, ar jis sutampa su dabartiniu oficialiu variantu iš svetainės headerio/footerio.

### Alfadenta

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/alfadenta-logotipas.webp`
- Official site: https://alfadenta.com/
- Notes: dabartinis assetas yra `webp`, todėl verta pakeisti į oficialų `svg` arba skaidrų `png`.

### Amadenta

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/amadenta-horizontal-logo.svg`
- Official site: https://amadenta.lt/
- Notes: projekte jau yra SVG, todėl pirmas žingsnis būtų palyginti su dabartiniu oficialiu svetainės logotipu.

### Autoglass Service

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/autoglass.jpg`
- Official site: https://www.autoglass-service.lt/
- Notes: čia turime aiškiausią problemą, nes dabar naudojamas `jpg`, kuris negali turėti skaidraus fono. Šį logo beveik būtinai reikia perkelti į `svg` arba bent skaidrų `png`.

### Artfiksa

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/artfiksa.png`
- Official site: https://artfiksa.lt/
- Example indexed page: https://artfiksa.lt/produktas/harmony/
- Notes: paieškoje matosi aktyvus domenas `artfiksa.lt`, todėl logotipas greičiausiai paimamas iš ten. Reikia išsitraukti oficialų header logo failą.

### Auto Vela

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/auto-vela.png`
- Official site: https://autovela.lt/
- Contact page: https://autovela.lt/kontaktai/autoservisas-vilniuje/
- Notes: oficiali svetainė rasta. Dabartinis logotipas atrodo labai išblukęs dėl filtro ir galimai netinkamo asseto varianto.

### Clinic DPC

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/clinic-dpc.png`
- Official site: https://clinicdpc.lt/
- Notes: labai tikėtina, kad jie turi tvarkingą horizontalų logo savo svetainėje. Reikia paimti iš oficialaus headerio ar brand asseto.

### Eco Resort Trakai

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/eco-resort.png`
- Official site: https://ecoresortrakai.lt/
- Contact page: https://ecoresortrakai.lt/kontaktai/
- Notes: dabar puslapyje logo beveik nematomas. Reikia rasti oficialų variantą iš jų svetainės, geriausia su skaidriu fonu.

### Fast Car Shop

- Status: `Official site found`, `Needs extraction`
- Current asset: `src/assets/brands/fast-car.png`
- Official site: https://fastcar.shop/
- Contact page: https://fastcar.shop/contact/
- Notes: oficiali svetainė rasta. Tikėtina, kad logotipas yra WordPress header assetas, kurį bus galima perkelti tvarkingesniu formatu.

## Practical next step

1. Atsidaryti kiekvieną oficialią svetainę ir išsitraukti tikrą logo failą iš headerio.
2. Kur įmanoma, rinktis `svg`.
3. Jei `svg` nėra, imti skaidrų `png`.
4. Senus `jpg` ir netvarkingus `png` pakeisti naujais assetais `src/assets/brands/`.
5. Po assetų pakeitimo pašalinti `grayscale contrast brightness` filtrus iš `BrandsSection`.

## Priority order

1. `autoglass`
2. `eco-resort`
3. `auto-vela`
4. `artfiksa`
5. `fast-car`
6. `clinic-dpc`
7. `alfadenta`
8. `agrija`
9. `amadenta`
