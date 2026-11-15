# weiter. – Gestaltung und Prüfung

## Eigene Richtung

Das Bücherregal ergänzt den freigegebenen Entwurf als neue Standardansicht. Farbige Buchrücken in unterschiedlichen Höhen stehen auf einem warmen Holzregal. Bücher öffnen dieselben echten Lernseiten wie die Karten. Ein kurzes Herausziehen legt beim Hover oder Tastaturfokus das Cover frei; daneben stehen eine Cover-Vorschau und die Öffnen-Aktion. Auf kleinen Bildschirmen verteilen sich die Bücher auf mehrere Regalböden. Die Kartenansicht bleibt über einen Schalter erreichbar und die Auswahl wird im Browser gespeichert. Der ursprüngliche Entwurf ist zusätzlich im Git-Verlauf und als separates ZIP gesichert.

Eine persönliche Sammlung mit dem Charakter eines beweglichen Stapels von Lernblättern. Nachtblau `#152238`, Elfenbein `#f3ede1` und Gold `#d6ad60` bilden die Hauptpalette. Die Fächerillustrationen besitzen eigene, gedämpfte Papierfarben. Syne bringt eine eigenständige, breite Typografie; Instrument Sans trägt die kleinen Oberflächentexte. Beide Schriften werden lokal geladen.

Die Übersicht ist unmittelbar nutzbar. Der Stapel öffnet eine echte Lernseite; die Sammlung enthält die sieben verifizierten Links. Es gibt keine erfundenen Lernerfolge oder vorausgefüllten Favoriten. „Zuletzt geöffnet“ erscheint erst nach einer tatsächlichen Linköffnung aus dem Portal.

## Interaktionen

- Der Fächerstapel reagiert als räumliches Objekt auf Mausbewegungen. Sieben beschriftete Auswahlbuttons sowie Vor-/Zurück-Buttons ermöglichen auch Tastatur- und Touch-Bedienung.
- Beim Wechsel einer Vorschau gleitet die jeweilige Illustration kurz ein. Vorige Animationen werden abgebrochen, sodass kein Animationsstau entsteht.
- Eine kreisförmige helle Fläche folgt der Pointerposition auf den Fächerillustrationen. Die Zeichnung reagiert leicht auf die Maus. Die äußere Karte hebt sich beim Hover.
- Die goldfarbene Hauptaktion besitzt eine fließende Füllung und leichte magnetische Bewegung. Links und Favoriten haben klare Fokuszustände.
- Such- und Filterergebnisse erhalten eine kurze gestaffelte Einblendung. Es gibt keine künstlichen Ladezustände für sofort verfügbare Inhalte.

## 20 UI-Regeln

| Nr. | Prüfung |
|---|---|
| 1 | Keine Füll-Badges. Fach, Themenbereich und Anzahl dienen der Orientierung. |
| 2 | Fach, Seitentitel und Beschreibung haben unterschiedliche Aufgaben. Keine wiederholten Überschriftenlabels. |
| 3 | Keine zufällige Kursivschrift. Mathematische Zeichen erscheinen in Cambria. |
| 4 | Keine dekorative Monospace-Schrift. Der Slash als Tastaturhinweis ist in der Oberflächenschrift gesetzt. |
| 5 | Gemeinsame Farb-, Schrift-, Abstands-, Radius- und Interaktionsregeln in einer CSS-Datei. |
| 6 | Der Einstieg öffnet direkt eine echte Lernseite; alle sieben Seiten sind über den Stapel verfügbar. |
| 7 | Sammlung und direkter Einstieg erhalten den meisten Platz. |
| 8 | Fach, Beschreibung, Illustration und Öffnen-Aktion sind als eine Einheit gruppiert. Favoriten bleiben getrennt bedienbar. |
| 9 | „Womit legst du heute los?“ führt zu den konkreten Fächern und Seitentiteln. |
| 10 | Die Hauptaktion im Einstieg ist goldfarben; Karten öffnen ihre jeweilige Lernseite. |
| 11 | Gold markiert aktive Zustände auf Nachtblau. Fachfarben bleiben zurückhaltend und wiedererkennbar. |
| 12 | Sterne und Suchsymbol nutzen einheitliche SVG-Strichstärke; Richtungspfeile haben einheitliche Textformen. |
| 13 | Die Illustration vermittelt das jeweilige Fach. Keine Glanzflächen, kein Autoplay-Video und keine endlosen Partikeleffekte. |
| 14 | Karten, Innenflächen, Buttons und kleine Kreisaktionen besitzen abgestimmte Radien. |
| 15 | Creme auf Nachtblau, dunkle Schrift auf hellen Fachflächen. Kein Text hinter einer verzerrten Glasfläche. |
| 16 | Umbrüche und Seitenbreite bei 1440, 1024, 768, 390 und 320 px geprüft. |
| 17 | Buttontext, Pfeile, Suchsymbol und Favoriten sind mittig ausgerichtet. |
| 18 | Tabellarische Ziffern global für Zähler und wechselnde Vorschauwerte. |
| 19 | Katalog ist sofort lokal verfügbar. Webfonts werden vorgeladen und haben einen Fallback. |
| 20 | Kurze Übergänge und hilfreiche Reaktionen. Reduzierte Bewegung und Touch schalten Hover-Abhängigkeiten aus. |

## Hintergründe

Die 22 Ideen wurden auch für den Portalzweck berücksichtigt. Ruhiges Papierweiß/Creme (12) passt zur Sammlung, kleine geometrische Umlaufbahnen erinnern an ein technisches Raster (7), ohne ein Muster hinter Texte zu legen. Filz (1), geriffeltes Glas (2), Wärmebild (3), Wasserwellen (4), Graphit (5), Landschaften (6), Halbton (8), Körnung (9), Gras (10), Dithering (11), Höhenlinien (13), Wolken (14), Pixelmosaike (15), Linsenverzerrung (16), Punktverlauf (17), Quadratraster (18), unscharfe Fotos (19), schillernde Formen (20), Gemälde (21) und ASCII-Muster (22) würden die konkreten Fächerillustrationen und das Finden einer Lernseite unnötig überlagern. Sie werden nicht eingesetzt.

## Geprüft

- Sieben reale Lernseiten mit HTTP 200; Titel und Beschreibungen mit vorhandenen Quellen abgeglichen.
- Vorschau vor/zurück, Fachfilter, Suche ohne Umlaut, Such- und Favoriten-Leerzustände.
- Favoriten nach Neuladen erhalten. Verlauf wird nur bei Linköffnung ergänzt und bleibt ebenfalls erhalten; Leeren funktioniert.
- Öffnen in neuem Tab, Suche per Tastatur, fünf Bildschirmbreiten ohne seitlichen Überlauf.
- Pointereffekte und reduzierte Bewegung. Keine JavaScript-Seitenfehler.

## Veröffentlichung

Eigenes öffentliches GitHub-Pages-Repository: `schafermax809-arch/lernzettel`. Einstieg unter `https://schafermax809-arch.github.io/lernzettel/`. Die sieben verlinkten Lernseiten behalten ihre eigenen Adressen. Schriftdateien, Lizenzen und sämtliche benötigten Quelldateien gehören zum Paket.
