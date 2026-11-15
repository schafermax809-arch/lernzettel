# weiter. – Deine Lernzentrale

Eine deutschsprachige persönliche Startseite für sieben vorhandene Lernwebsites in fünf Fächern. Eigenständige Gestaltung in tiefem Bordeaux, Creme und hellem Zitronenton, ergänzt durch passende Illustrationen je Fach.

## Nutzen

- Umschaltbare Ansichten „Regal“ und „Karten“. Das Bücherregal ist der neue Einstieg; die freigegebene Kartenansicht bleibt erhalten. Die Auswahl wird lokal gespeichert.
- Jede Lernseite ist ein Buch. Beim Hover oder Tastaturfokus zieht es sich heraus; die Vorschau zeigt Cover, Beschreibung, Favorit und Website-Link. Auf Touch-Geräten wechseln die Vorschaupfeile das Buch.
- Direkter Einstieg über einen beweglichen Fächerstapel mit sieben auswählbaren Vorschauen.
- Alle Lernseiten nach Fach filtern und nach Namen oder Themen durchsuchen. Die Suche berücksichtigt auch Begriffe wie „Ökologie“ ohne Umlaut.
- Favoriten setzen und im eigenen Bereich wiederfinden.
- Zuletzt geöffnete Seiten wieder öffnen. Die vier jüngsten Seiten bleiben in diesem Browser gespeichert; der Verlauf lässt sich leeren.
- Links öffnen in einem neuen Tab. Die Lernzentrale bleibt als Startpunkt erhalten.
- Keine Konten, keine Analyse-Skripte und kein Versand von Favoriten oder Verlauf an einen Server.

## Dateien und lokale Nutzung

Statische Website ohne Build-Schritt. Zum Vorschauen im Ordner einen HTTP-Server starten, zum Beispiel `python -m http.server 4174`, und die ausgegebene Adresse öffnen.

- `index.html`: Struktur und sichtbarer Einstieg.
- `sites.js`: Katalog und geometrische SVG-Illustrationen.
- `app.js`: Suche, Filter, Favoriten, Verlauf, Vorschauen und Pointer-Effekte.
- `styles.css`: Gestaltung, mobile Ansichten und reduzierte Bewegung.
- `shelf.js` und `shelf.css`: Bücherregal, Cover-Vorschau und mobile Regalböden.
- `DESIGN-PREFERENCES.md`: Festgehaltene Designvorlieben und Referenz auf die gesicherte Ausgangsversion.
- `fonts/`: Selbst gehostete Syne und Instrument Sans mit vollständigen OFL-Lizenzen.

## Neue Lernseite ergänzen

In `sites.js` einen weiteren Eintrag mit eindeutiger `id`, `subject`, `title`, `kicker`, `description`, `tags`, `url`, `art`, `theme` und `label` hinzufügen. Neue Fachkategorien zusätzlich in `subjects` in `app.js` ergänzen. Aktuell stehen sieben Vorschauen und fünf Fächer im Einführungstext; diese Zahlen bei einer Erweiterung ebenfalls anpassen.

## GitHub Pages

Alle Quelldateien einschließlich `fonts/` und `.nojekyll` ins Stammverzeichnis des eigenen Repositories hochladen. Im Repository unter Settings → Pages den Branch `main` und den Ordner `/ (root)` auswählen. Dieses Projekt liegt im Repository `schafermax809-arch/lernzettel`. Die GitHub-Pages-Adresse lautet `https://schafermax809-arch.github.io/lernzettel/`. Alle lokalen Assets verwenden relative Pfade und funktionieren unter diesem Projektpfad. Die bestehenden Lernseiten bleiben unter ihren bisherigen Adressen erreichbar.

## Verifizierte Links

Alle sieben öffentlichen Seiten wurden am 15.11.2026 mit HTTP 200 geprüft:

- Mathe Klausur 2: https://schafermax809-arch.github.io/mathe-klausur2/
- Biotop: https://schafermax809-arch.github.io/biotop-lernplattform/
- BRC Lernwelt: https://schafermax809-arch.github.io/brc-lernwelt/
- VWL Studio: https://schafermax809-arch.github.io/VWL/
- Informatik Lernstudio: https://schafermax809-arch.github.io/Informatik/
- Mathe Lerncenter: https://schafermax809-arch.github.io/mathe/
- BRC Lernraum: https://schafermax809-arch.github.io/BRC/

## Bewegung und Bedienung

Parallax-Bewegung, kreisförmige Hoverflächen, magnetische Hauptaktion und kurze Übergänge. Kein WebGL und keine permanent laufende Render-Schleife. Pointer-Ereignisse werden über einzelne Animationsframes verarbeitet. `prefers-reduced-motion` schaltet bewegte Effekte aus. Vorschauen haben echte Buttons und sind auch ohne Hover bedienbar; `/` fokussiert die Suche, Escape leert eine aktive Suche. Ohne JavaScript steht eine Linkliste zur Verfügung.

SVG-Vorschauen sind eigens gezeichnete thematische Illustrationen. Sie sind keine Screenshots der verlinkten Seiten. Die Normalverteilungsfläche ist für Z ≤ 1 mathematisch richtig dargestellt (84,13 %).
