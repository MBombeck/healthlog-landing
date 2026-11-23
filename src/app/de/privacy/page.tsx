import type { Metadata } from "next";
import Link from "next/link";

import { SITE_ORIGIN } from "@/content/learn/locales";
import {
  LAST_UPDATED,
  POLICY_VERSION,
  PRIVACY_PATH_DE,
  PRIVACY_PATH_EN,
  privacyHreflang,
} from "@/content/privacy/meta";
import {
  Code,
  ExternalLink,
  PrivacyShell,
  Section,
  SubHeading,
  SubProcessor,
  type SubProcessorLabels,
} from "@/components/privacy/privacy-layout";
import { AnalyticsSettingsButton } from "@/components/analytics";

/**
 * Deutsche Fassung der Datenschutzerklaerung (/de/privacy).
 *
 * Strukturgleich zur englischen Fassung unter /privacy: dieselben dreizehn
 * Abschnitte unter denselben Ankern, damit ein Wechsel der Sprache die
 * Lesestelle nicht verliert. Das <html lang> setzt der Postbuild-Schritt
 * `scripts/fix-html-lang.mjs` fuer alle Seiten unter out/de/ auf "de".
 */

const TITLE = "Datenschutzerklärung";
const DESCRIPTION =
  "Was beim Besuch von healthlog.dev geschieht und wie die Software HealthLog mit Gesundheitsdaten umgeht: externe Dienste, Verschlüsselung, Betroffenenrechte nach DSGVO und die Abgrenzung zum Medizinprodukt nach EU-MDR.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_ORIGIN}${PRIVACY_PATH_DE}`,
    languages: privacyHreflang(),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}${PRIVACY_PATH_DE}`,
    type: "website",
    siteName: "HealthLog",
    locale: "de_DE",
    images: ["/og-image-source-available.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image-source-available.png"],
  },
};

const LABELS: SubProcessorLabels = {
  role: "Rolle.",
  data: "Übermittelte Daten.",
  location: "Speicherort.",
  policy: "Datenschutzerklärung",
};

const TOC = [
  { href: "#intro", label: "1. Überblick" },
  { href: "#self-hosted", label: "2. Selbsthosting als Bauprinzip" },
  { href: "#website-analytics", label: "3. Diese Website (healthlog.dev)" },
  { href: "#data-we-collect", label: "4. Erhobene Daten" },
  { href: "#purpose", label: "5. Warum jede Kategorie erhoben wird" },
  {
    href: "#sub-processors",
    label: "6. Externe Dienste, die die Software ansprechen kann",
  },
  { href: "#storage", label: "7. Speicherung, Verschlüsselung, Aufbewahrung" },
  { href: "#rights", label: "8. Ihre Rechte (Art. 15 bis 22 DSGVO)" },
  {
    href: "#medical-boundary",
    label: "9. Abgrenzung zum Medizinprodukt (EU-MDR)",
  },
  {
    href: "#apple-categories",
    label: "10. Datenschutzkategorien im Apple App Store",
  },
  { href: "#children", label: "11. Kinder" },
  { href: "#changes", label: "12. Änderungen dieser Erklärung" },
  { href: "#contact", label: "13. Kontakt" },
];

export default function DatenschutzSeite() {
  return (
    <PrivacyShell
      supportLabel="Support"
      switchHref={PRIVACY_PATH_EN}
      switchLabel="English"
      switchHrefLang="en"
      versionLine={`Fassung ${POLICY_VERSION}`}
      heading="Datenschutzerklärung"
      updatedLine={`Zuletzt aktualisiert: ${LAST_UPDATED}`}
      tocLabel="Inhalt"
      tocAriaLabel="Inhaltsverzeichnis der Datenschutzerklärung"
      toc={TOC}
      footer={
        <p>
          HealthLog, Quelltext verfügbar unter{" "}
          <a
            href="https://github.com/MBombeck/HealthLog/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary underline-offset-2 hover:underline"
          >
            PolyForm Noncommercial 1.0.0
          </a>
          . Fassung {POLICY_VERSION}. Zuletzt aktualisiert {LAST_UPDATED}.
        </p>
      }
    >
      <Section id="intro" title="1. Überblick">
        <p>
          HealthLog ist eine quelloffen einsehbare, selbst hostbare Anwendung
          zur Erfassung persönlicher Gesundheitsdaten unter der{" "}
          <ExternalLink href="https://polyformproject.org/licenses/noncommercial/1.0.0/">
            PolyForm Noncommercial License 1.0.0
          </ExternalLink>
          . Der Quelltext ist unter{" "}
          <ExternalLink href="https://github.com/MBombeck/HealthLog">
            github.com/MBombeck/HealthLog
          </ExternalLink>{" "}
          veröffentlicht.
        </p>
        <p>
          HealthLog ist Software, kein gehosteter Dienst. Der Entwickler hostet
          keine Gesundheitsakten anderer Personen, und es gibt keinen zentralen
          HealthLog-Server, der Daten aus den installierten Instanzen empfängt.
          Der einzige Dienst, den das Projekt für Instanzen betreibt, ist das
          optionale Push-Relay (Abschnitt 6), das verschlüsselte
          Benachrichtigungen weiterleitet, die es nicht lesen kann. Wer eine
          Instanz betreibt, entscheidet, welche Daten sie hält und welche
          externen Dienste sie nutzt, und ist für diese Daten verantwortlich.
        </p>
        <p>
          Diese Seite hat zwei Teile. Abschnitt 3 behandelt diese Website,
          healthlog.dev, die der Entwickler betreibt und verantwortet. Die
          Abschnitte 2 und 4 bis 11 beschreiben, was die Software mit
          personenbezogenen Daten tut, in der Webanwendung ab Fassung{" "}
          {POLICY_VERSION} und in der zugehörigen iOS-Anwendung{" "}
          <em className="text-text-primary not-italic">HealthLog for iOS</em>{" "}
          (Bundle-Kennung <Code>dev.healthlog.app</Code>) ab Version 0.3, damit
          Nutzerinnen und Nutzer sehen, was eine Instanz tut, und Betreiber eine
          Grundlage für ihre eigene Datenschutzerklärung haben. Fragen zu Daten
          in einer bestimmten Instanz richten Sie an deren Betreiber.
        </p>
      </Section>

      <Section id="self-hosted" title="2. Selbsthosting als Bauprinzip">
        <p>
          HealthLog läuft auf Infrastruktur, die der Betreiber kontrolliert. Es
          gibt keine zentrale HealthLog-Cloud, keine gemeinsame
          Mandantendatenbank und kein Analyse-Backend eines Dritten. Wer
          HealthLog auf dem eigenen Server installiert, dessen Gesundheitsdaten
          verlassen diesen Server nur, wenn der Betreiber oder die Nutzerin bzw.
          der Nutzer ausdrücklich eine ausgehende Verbindung einrichtet (einen
          KI-Anbieter, eine Geräteanbindung, einen Telegram-Bot, ntfy,
          Push-Benachrichtigungen, ein externes Backup-Ziel). In der
          Voreinstellung sendet der Server außerdem einen Hash-Anfang neuer
          Passwörter an Have I Been Pwned, fragt die GitHub-Releases-API nach
          der aktuellen Version und ermittelt den Ort von Anmelde-Adressen;
          keine dieser Anfragen enthält Gesundheitsdaten, und jede lässt sich
          abschalten. Abschnitt 6 führt jedes dieser Ziele auf.
        </p>
        <p>
          Sie können außerdem einem anderen Konto auf derselben Instanz Zugriff
          auf Ihre eigene Akte geben. Diese Offenlegung geschieht nur auf Ihre
          eigene Anweisung, erst nachdem die andere Person sie angenommen hat,
          nur auf der Stufe, die die Einladung genannt hat, und nur über die
          Teile der Akte, die sie genannt hat. Sie bleibt auf demselben Server
          und kann von beiden Seiten jederzeit widerrufen werden, mit Wirkung
          auf die nächste Anfrage der empfangenden Person. Weder Stufe noch
          Umfang lassen sich an einem bereits erteilten Zugriff anheben; ein
          weitergehender Zugriff verlangt eine neue Einladung, die erneut
          angenommen wird. Es kommt kein Empfänger außerhalb der Instanz und
          kein Auftragsverarbeiter hinzu.
        </p>
        <p>
          Die zweite Stufe erlaubt der empfangenden Person, Einträge aus einer
          geschlossenen Liste hinzuzufügen, nicht aber, bereits Erfasstes zu
          ändern oder zu löschen. Die dritte erlaubt zusätzlich das Ändern und
          Löschen von Einträgen, auch solcher der Akteninhaberin oder des
          Akteninhabers, sowie das Erfassen des zur Akte gehörenden
          gesundheitlichen Hintergrunds. Keine Stufe erweitert den Lesezugriff
          über die in der Einladung genannten Teile hinaus, und keine Stufe
          reicht an das Konto um die Akte herum: Zugangsdaten, zweiter Faktor,
          verbundene Dienste, API-Token, Zustellwege für Benachrichtigungen,
          Modul- und Schwellenwerteinstellungen, Exporte und die Frage, wer
          sonst Zugriff hat, bleiben bei der Kontoinhaberin oder dem
          Kontoinhaber. Einträge, die unter einem Zugriff entstehen, werden als
          Daten der Akteninhaberin oder des Akteninhabers gespeichert, weil sie
          diese Person beschreiben und nicht die eintragende; die Identität der
          eintragenden Person bleibt im Protokoll erhalten, das die
          Akteninhaberin oder der Akteninhaber einsehen kann und das nach der
          auf der Instanz eingestellten Aufbewahrungsfrist gelöscht wird. Die
          Oberfläche nennt diese Frist ausdrücklich, statt eine unbegrenzte
          Aufbewahrung nahezulegen.
        </p>
        <p>
          Eine Instanz kann außerdem eine Akte für eine Person führen, die kein
          eigenes Konto hat, etwa ein Kind oder eine betreute Person. Eine
          solche Akte hat keinen Login, keine E-Mail-Adresse und überhaupt kein
          Anmeldemerkmal; sie wird von einer oder mehreren betreuenden Personen
          verwaltet, die jeweils einen Zugriff der dritten Stufe darauf halten.
          Die Daten darin werden auf derselben Grundlage und auf derselben
          Infrastruktur verarbeitet wie jede andere Akte der Instanz.
          Benachrichtigungen aus ihr gehen an die betreuenden Personen über die
          Kanäle, die diese selbst eingerichtet haben, weil die Akte keinen
          eigenen Kontaktweg besitzt. Eine betreuende Person kann in einer
          solchen Akte auch Dokumente ablegen, sie lesen lassen und die darin
          gefundenen Laborwerte bestätigen; Dateien und Werte gehören zur Akte,
          deren Aktivitätsprotokoll die betreuende Person nennt, die sie
          hinzugefügt oder bestätigt hat, und jedes Lesen per KI folgt den
          Einstellungen und Einwilligungen der Akte selbst. Das Löschen der Akte
          löscht die darin gehaltenen Daten.
        </p>
        <p>
          Der Betreiber einer Instanz ist Verantwortlicher im Sinne der DSGVO.
          Die Software setzt Voreinstellungen, die unten beschrieben sind; der
          Betreiber wählt den Server, die Aufbewahrungsfristen, die Sicherungen
          und die eingeschalteten externen Dienste.
        </p>
      </Section>

      <Section id="website-analytics" title="3. Diese Website (healthlog.dev)">
        <p>
          Diese Website betreibt der Entwickler; Name und Postanschrift stehen
          im{" "}
          <Link
            href="/imprint"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            Impressum
          </Link>
          . Sie besteht aus statischen Seiten. Sie setzt keine Cookies und keine
          Werbe- oder seitenübergreifenden Kennungen, und sie zählt Besuche,
          ohne etwas auf Ihrem Gerät zu speichern. Im lokalen Speicher des
          Browsers legt sie höchstens zwei Einträge ab, die jeweils erst
          geschrieben werden, wenn Sie etwas anstoßen, und deshalb nach § 25
          Abs. 2 Nr. 2 TDDDG keine Einwilligung brauchen: eine ausdrückliche
          Sprachwahl über den Umschalter der Ratgeber, damit sie beim nächsten
          Besuch gilt, und, wenn Sie die Besuchszählung abschalten, diesen
          Wunsch (<Code>hl-analytics-optout</Code>), damit er auf jeder Seite
          gilt.
        </p>
        <p>
          Die Seiten werden von einem Server ausgeliefert, den der Entwickler
          bei der{" "}
          <ExternalLink href="https://www.hetzner.com/de/legal/privacy-policy">
            Hetzner Online GmbH
          </ExternalLink>{" "}
          in Nürnberg mietet; Hetzner ist Hoster dieser Website und verarbeitet
          Daten im Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung
          (Art. 28 DSGVO). Anfragen erreichen ihn über{" "}
          <ExternalLink href="https://www.cloudflare.com/de-de/privacypolicy/">
            Cloudflare
          </ExternalLink>
          , das die DNS-Auflösung der Domain übernimmt und als Reverse Proxy vor
          der Website steht. Cloudflare verarbeitet daher jede Anfrage an diese
          Website, einschließlich IP-Adresse, angefragter Adresse und der
          Anfragekopfzeilen des Browsers, in seinem weltweiten Netz.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, das berechtigte Interesse
          an einer zuverlässigen Auslieferung der Website und ihrem Schutz vor
          Angriffen.
        </p>
        <p>
          Schriften und Bilder gehören zur Website selbst und werden von ihrer
          eigenen Adresse geladen. Keine Schrift, kein Skript und kein Bild
          kommt aus einem fremden Auslieferungsnetz, und die
          Content-Security-Policy der Seiten erlaubt für Skripte, Stile,
          Schriften und Verbindungen nur die eigene Adresse dieser Website.
        </p>
        <p>
          Besuche werden mit{" "}
          <ExternalLink href="https://rybbit.com">Rybbit</ExternalLink> gezählt,
          einem quelloffenen Analysewerkzeug auf einem Server, den der
          Entwickler betreibt. Das Mess-Skript von Rybbit wird nicht verwendet.
          Stattdessen schicken ein paar Zeilen Code dieser Website zwei Arten
          von Ereignissen an die eigene Adresse der Website unter{" "}
          <Code>/insight/</Code>, und die Website leitet sie an den
          Analyseserver weiter, wie jede andere Anfrage über Cloudflare. Kein
          Analyseanbieter erhält die Daten. Die Ereignisse sind:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            ein Seitenaufruf, auch ein Seitenwechsel ohne Neuladen, mit der
            Seitenadresse ohne URL-Parameter außer den Kampagnenkennungen{" "}
            <Code>ref</Code>, <Code>utm_source</Code>, <Code>utm_medium</Code>{" "}
            und <Code>utm_campaign</Code>, die angeben, wo ein Link geteilt
            wurde, dem Seitentitel und, für die erste Seite eines Besuchs, der
            Adresse der verweisenden Website, gekürzt auf ihre Domain;
          </li>
          <li>
            ein Klick auf einen Link, der zu einer anderen Website führt, mit
            der Zieladresse ohne URL-Parameter.
          </li>
        </ul>
        <p>
          Der Analyseserver leitet Browser, Betriebssystem und Gerätetyp aus der
          Browserkennung ab, die Ihr Browser mit jeder Anfrage mitschickt, und
          Land, Region und Stadt aus Ihrer IP-Adresse. Die IP-Adresse wird nicht
          gespeichert; das Speichern von IP-Adressen ist für diese Website
          abgeschaltet. Um Besucher auseinanderzuhalten, bildet der Server einen
          kurzen Hashwert aus IP-Adresse und Browserkennung mit einem Schlüssel,
          der jeden Tag wechselt. Besuche lassen sich deshalb nicht über einen
          Tag hinaus verknüpfen, und auf Ihrem Gerät wird dafür nichts
          gebraucht. Es wird kein Cookie gesetzt, für die Zählung nichts im
          Browser gespeichert oder ausgelesen, und es gibt keine
          Sitzungsaufzeichnung und keine Erfassung von Klicks innerhalb der
          Seite, kopiertem Text, Formularnutzung oder Fehlern. Die Daten bleiben
          auf dem Analyseserver des Entwicklers und dienen nur dazu zu sehen,
          welche Seiten gelesen werden und welche Links weiterführen.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, das berechtigte Interesse
          daran zu wissen, wie die Website genutzt wird, um sie zu verbessern.
          Auf Ihrem Gerät wird dafür nichts gespeichert, deshalb wird keine
          Einwilligung nach § 25 Abs. 1 TDDDG abgefragt. Sie können jederzeit
          widersprechen (Art. 21 DSGVO): Öffnen Sie die{" "}
          <AnalyticsSettingsButton className="text-purple hover:text-cyan cursor-pointer underline underline-offset-2">
            Analyse-Einstellungen
          </AnalyticsSettingsButton>{" "}
          (auch am Ende jeder Seite) und wählen Sie „Nicht mitzählen“. Dieser
          Wunsch wird wie oben beschrieben in diesem Browser gespeichert; wenn
          Sie die Daten dieser Website löschen, ist er entfernt. Ein Browser,
          der Global Privacy Control oder Do Not Track sendet, wird gar nicht
          gezählt.
        </p>
        <p>
          Derselbe Server betreibt hinter derselben Cloudflare-Einrichtung zwei
          weitere Seiten. docs.healthlog.dev ist die statische Dokumentation.
          Sie setzt keine Cookies; sie speichert eine Wahl zwischen hellem und
          dunklem Design sowie den gewählten Reiter in Codebeispielen im lokalen
          Speicher des Browsers. Sie zählt Besuche genauso wie oben beschrieben,
          mit demselben Widerspruch am Seitenende, nur schicken ihre paar Zeilen
          Code die Ereignisse direkt an den Analyseserver unter
          rybbit.bombeck.io statt über ihre eigene Adresse. demo.healthlog.dev
          ist eine öffentliche Demo-Instanz der Software, angemeldet mit
          gemeinsamen Demo-Zugangsdaten und gefüllt mit erzeugten Beispieldaten.
          Sie arbeitet wie jede in den Abschnitten 4 bis 7 beschriebene Instanz;
          eine Anmeldung legt also eine Sitzung und einen Protokolleintrag in
          der eigenen Datenbank der Demo auf diesem Server an. Geben Sie dort
          keine echten Gesundheitsdaten ein.
        </p>
        <p>
          Wenn Sie an die Kontaktadresse in Abschnitt 13 schreiben, werden die
          Nachricht und Ihre E-Mail-Adresse aufbewahrt, um Ihnen zu antworten
          und das Anliegen weiterzuverfolgen. Rechtsgrundlage: Art. 6 Abs. 1
          lit. f DSGVO, das berechtigte Interesse an der Beantwortung, oder lit.
          b, wenn es um einen Kauf der iOS-Anwendung geht.
        </p>
        <p>
          Nichts auf dieser Website verbindet sich mit einer HealthLog-Instanz,
          und keine HealthLog-Instanz nimmt Verbindung zu dieser Website auf.
        </p>
      </Section>

      <Section id="data-we-collect" title="4. Erhobene Daten">
        <p>
          HealthLog erfasst Beobachtungen, die Sie selbst eingeben, und die
          Gesundheitssignale, die Sie ausdrücklich über eine Anbindung an einen
          Dritten verbunden haben. Die folgenden Kategorien sind für den
          veröffentlichten Funktionsumfang abschließend.
        </p>

        <SubHeading>4.1 Konto und Anmeldung</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>E-Mail-Adresse und gewählter Benutzername.</li>
          <li>
            Passwort-Hash (Argon2id; das Klartextpasswort wird nie gespeichert
            oder protokolliert).
          </li>
          <li>
            Optionale WebAuthn- beziehungsweise Passkey-Merkmale (öffentlicher
            Schlüssel, Anmeldedaten-Kennung, Signaturzähler).
          </li>
          <li>
            Sitzungskennungen (HTTP-only-Cookie im Web; undurchsichtige
            API-Token unter iOS, im Schlüsselbund des Geräts abgelegt).
          </li>
          <li>
            Profildaten: Sprache, Zeitzone, Geburtsdatum (optional),
            biologisches Geschlecht (optional), Körpergröße (optional). Dienen
            der Berechnung altersangepasster Zielbereiche und des BMI.
          </li>
          <li>
            Beim Setzen oder Ändern eines Passworts werden die ersten fünf
            Zeichen seines SHA-1-Hashes gegen die Range-API von Have I Been
            Pwned geprüft. Was das konkret bedeutet, steht in Abschnitt 6.
          </li>
        </ul>

        <SubHeading>4.2 Selbst eingegebene Gesundheitsdaten</SubHeading>
        <p>
          Jeder über die Formulare eingegebene Wert samt Zeitpunkt, optionaler
          Notiz und Messgröße. Dazu gehören Körpergewicht, Körperfettanteil,
          Körpertemperatur, BMI (abgeleitet); Blutdruck mit Puls; Blutzucker mit
          Messkontext; Ruhepuls, Herzratenvariabilität, VO₂max,
          Sauerstoffsättigung; Schlafdauer mit Phasenaufteilung (wach, REM,
          Kernschlaf, Tiefschlaf); Schrittzahl, Distanz, Aktivitätsenergie,
          Etagen; Umgebungs- und Kopfhörer-Lautstärke; Zeit im Tageslicht;
          Stimmung (Skala 1 bis 5) mit optionaler Freitextnotiz;
          Trainingseinheiten mit optional selbst angehängter GPS-Strecke;
          Nahrungsenergie, Makronährstoffe (Eiweiß, Kohlenhydrate, Fett, Zucker,
          Ballaststoffe), Natrium, Kalium und Alkohol als Tagessummen mit Ihren
          eigenen Tageszielen; Einträge im optionalen Anfallstagebuch
          (Anfallsart, Beginn und Dauer, gegebene Notfallmedikation, Umstände
          und wer den Eintrag gemacht hat); sowie persönliche Bestwerte, die
          daraus automatisch abgeleitet werden. Eine Ernährungs-App, die Sie
          einrichten, kann Tagessummen mit einem Messwert-Token senden; dieses
          Token schreibt nur in Ihre eigene Akte und kann nichts zurücklesen.
        </p>
        <p>
          Dateien, die Sie zum Import hochladen, werden auf der Instanz gelesen
          und erreichen keinen fremden Dienst: ein Apple-Health-Export (seit
          Version 1.48.0 einschließlich der Laborwerte unter seinen klinischen
          Datensätzen aus Health Records), ein Health-Connect-Export, ein
          Datenbank-Export aus Gadgetbridge, eine Patientenakte als
          FHIR-R4-Bundle aus einem Patientenportal und Aktivitätsdateien im
          FIT-Format von einer Uhr oder einem Fahrradcomputer. Deren Einheiten
          werden zu Trainings mit Herzfrequenz-, Geschwindigkeits-, Leistungs-
          und Trittfrequenzverlauf und, wenn Sie Trainingsstrecken eingeschaltet
          haben, mit ihrer verschlüsselt gespeicherten GPS-Strecke. Eine
          hochgeladene Gadgetbridge-, FHIR- oder FIT-Datei wird gelöscht, sobald
          ihr Import endet. Seit Version 1.49.0 können Sie den geplanten
          Health-Connect-Export auch von der Instanz aus einem WebDAV- oder
          Nextcloud-Ordner abholen lassen, den Sie selbst angeben (Abschnitt 6).
        </p>

        <SubHeading>4.3 Apple Health (iOS-Anwendung)</SubHeading>
        <p>
          Wenn Sie der iOS-Anwendung Lesezugriff auf Apple HealthKit erteilen,
          liest HealthLog Datensätze zu einer festen Liste von Kennungen
          (Körpermasse, Körperfettanteil, Körpertemperatur, Blutdruck systolisch
          und diastolisch, Blutzucker, Sauerstoffsättigung, Herzfrequenz,
          Ruhepuls, Herzratenvariabilität SDNN, VO₂max, Schrittzahl,
          Aktivitätsenergie, Etagen, Geh- und Laufstrecke, Umgebungs- und
          Kopfhörer-Lautstärke, Zeit im Tageslicht sowie Schlafanalyse mit
          voller Phasengenauigkeit). Die HealthKit-Daten bleiben auf Ihrem Gerät
          und in Ihrem iCloud-gestützten Health-Speicher; die iOS-Anwendung
          kopiert die einschlägigen Datensätze in Ihr HealthLog-Konto, damit die
          Weboberfläche dieselben Verläufe zeigen kann.
        </p>
        <p>
          Die iOS-Anwendung liest außerdem Laborwerte aus Apple Health Records,
          den klinischen Datensätzen, die eine Praxis oder Klinik in der
          Health-App bereitstellt, aber erst, nachdem Sie in der App dafür auf
          Verbinden tippen und den Lesezugriff erteilen. Die gelesenen
          Laborwerte gehen an Ihre eigene HealthLog-Instanz und nirgendwohin
          sonst und werden dort wie jeder andere Laborwert gespeichert. Andere
          Arten klinischer Datensätze werden nicht gelesen.
        </p>
        <p>
          Schreibzugriff wird für eine Teilmenge angefragt (Körpermasse,
          Blutdruck systolisch und diastolisch, Blutzucker), damit in der
          iOS-App erfasste Werte zurück nach HealthKit fließen können. Beide
          Richtungen steuern Sie in der Berechtigungsansicht der iOS-App
          &quot;Health&quot; und können sie jederzeit widerrufen.
        </p>

        <SubHeading>4.4 Verbundene Geräte und Dienste (optional)</SubHeading>
        <p>
          Jede Verbindung ist eine bewusste Entscheidung und wird von Ihnen über
          den Einwilligungsdialog des jeweiligen Anbieters hergestellt.
          HealthLog speichert die OAuth-Token zur Erneuerung und für den Zugriff
          (spaltenweise verschlüsselt) sowie die Kennung, die der Anbieter dem
          Konto gibt, und ruft dann die Daten ab, die der erteilte Umfang
          abdeckt: Withings (Gewicht und Körperzusammensetzung, Blutdruck,
          Blutzucker, Körpertemperatur, Aktivitätssummen, Schlafphasen, SpO₂,
          Herzratenvariabilität, EKG-Aufzeichnungen soweit vorhanden), WHOOP
          (Erholung, Schlaf, Training, Zyklen, Profil, Körpermaße), Google
          Health (Aktivität und Fitness, Gesundheitswerte und Messungen, Schlaf,
          Profil), Oura (Tageswerte und Profil), Polar (die Lesebereiche von
          Accesslink), Strava (Aktivitäten, auch als privat markierte) und
          Nightscout (Sensor-Glukosewerte von Ihrer eigenen Nightscout-Instanz).
          Garmin kommt ohne OAuth aus: Sie erstellen in Garmin Connect einen
          Personal-API-Schlüssel und fügen ihn in HealthLog ein. HealthLog
          speichert ihn verschlüsselt, schickt ihn nur an den gewählten
          Garmin-Dienst und ruft Tageswerte, Schlaf, Herzratenvariabilität,
          Wiegungen, Aktivitäten samt der Originaldatei jeder neuen Aktivität
          (für ihren Herzfrequenzverlauf) und eingetragene Periodentage ab. Eine
          Verbindung lässt sich in HealthLog und beim Anbieter widerrufen;
          danach wird nichts mehr abgerufen. Google hat die Fitbit-Web-API am
          30. Oktober 2026 abgeschaltet; seit Version 1.48.0 hat HealthLog keine
          Fitbit-Verbindung mehr und speichert keine Fitbit-Token oder
          -Zugangsdaten. Zuvor aus Fitbit importierte Daten bleiben in der Akte.
          Fitbit- und Pixel-Geräte werden über Google Health verbunden.
        </p>

        <SubHeading>4.5 Medikamente</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Laufende Verordnungen: Wirkstoff- oder Präparatname, Stärke,
            Darreichungsweg, Einnahmeplan, Kennzeichnung der Behandlungsklasse.
          </li>
          <li>
            Einnahmen: geplanter Zeitpunkt, tatsächlicher Zeitpunkt, Status
            (genommen, ausgelassen, versäumt).
          </li>
          <li>
            Bei GLP-1-Therapien: Verlauf der Dosisänderungen, Injektionen mit
            optionaler Einstichstelle und Pen-Kennung, Nebenwirkungen nach einer
            festen Systematik, Bestand an Pens und Ampullen.
          </li>
        </ul>

        <SubHeading>4.6 KI-Coach und Insights</SubHeading>
        <p>
          Die KI-Funktionen sind ausgeschaltet, bis Sie sie einschalten und der
          KI-Nutzung zustimmen. Vorher geht nichts aus diesem oder dem nächsten
          Abschnitt an ein Sprachmodell. Danach wird ein Modell auf einem von
          drei Wegen erreicht.
        </p>
        <p>
          <span className="text-text-primary font-medium">
            Über den HealthLog-Server.
          </span>
          Sie wählen einen auf der Instanz eingerichteten Anbieter: Anthropic,
          OpenAI mit API-Schlüssel, Ihr eigenes verknüpftes ChatGPT-Konto, ein
          lokales Modell oder einen OpenAI-kompatiblen Endpunkt, den Sie oder
          der Betreiber eingerichtet haben. App oder Browser senden die Anfrage
          an den HealthLog-Server, der das Kontextpaket bildet und an diesen
          Anbieter weiterleitet.
        </p>
        <p>
          <span className="text-text-primary font-medium">
            Direkt aus der iOS-App mit eigenem Schlüssel.
          </span>
          In der iOS-App können Sie stattdessen einen eigenen API-Schlüssel für
          OpenAI, Anthropic oder Google Gemini eintragen, oder die HTTPS-Adresse
          eines beliebigen OpenAI-kompatiblen
          <Code>/chat/completions</Code>-Endpunkts, etwa eines selbst
          betriebenen Gateways. Die App sendet die Anfrage dann direkt vom
          Telefon an diesen Anbieter, nicht über den HealthLog-Server. Der
          Schlüssel liegt im Schlüsselbund des Geräts und wird nie an den
          HealthLog-Server gesendet. Akzeptiert werden nur https://-Adressen.
        </p>
        <p>
          <span className="text-text-primary font-medium">Auf dem Gerät.</span>
          Auf einem iPhone mit Apple Intelligence können das tägliche Briefing
          und kurze Coach-Antworten mit Apples geräteinternen Foundation Models
          laufen. Dann bleiben Gesundheitskontext und Antwort auf dem Telefon.
        </p>
        <p>
          Auf beiden Wegen, die das Gerät verlassen, wird dasselbe gesendet: aus
          den obigen Daten abgeleiteter Gesundheitskontext (Aggregate, jüngste
          Beobachtungen, Zielbereiche, optional Medikationskontext) und Ihre
          Eingabe, für jede Anfrage neu gebildet. Was der jeweilige Anbieter
          damit tut, steht in Abschnitt 6. Zustimmung und jeden einzelnen
          Anbieter können Sie jederzeit in den KI-Einstellungen widerrufen.
        </p>
        <p>
          Sie können jede KI-Aufgabe an eine benannte Kette Ihrer eingerichteten
          Anbieter binden, etwa das Lesen von Dokumenten nur an ein lokales
          Modell. Eine so gebundene Aufgabe sendet Daten nur an die Anbieter
          dieser Kette und bricht mit einer Begründung ab, wenn keiner von ihnen
          antworten kann, statt auf einen anderen Anbieter auszuweichen.
          Einwilligung und die Schalter des Betreibers gelten für jede Kette
          gleich.
        </p>
        <p>
          Coach-Unterhaltungen werden auf der Instanz gespeichert. Jede
          Nachricht liegt in der Datenbank mit AES-256-GCM verschlüsselt, unter
          einem vom Datenbankschlüssel getrennten Schlüssel, und wird nur
          entschlüsselt, um Ihnen den Verlauf anzuzeigen oder ihn fortzusetzen.
          Aus einer Unterhaltung werden drei weitere Dinge abgeleitet und auf
          dieselbe Weise gespeichert: eine fortlaufende Zusammenfassung der
          älteren Züge dieses Verlaufs, damit ein langes Gespräch seinen Kontext
          behält, ohne jeden Zug erneut zu senden; kurze, dauerhafte Angaben,
          die Sie über sich selbst gemacht haben, etwa eine feste Vorliebe oder
          ein Ziel; und Wenn-dann-Vorsätze, die Sie zugesagt haben und die
          zunächst nur als Vorschlag festgehalten und erst mit Ihrer Bestätigung
          aktiv werden. Erzeugt wird all das im Hintergrund von demselben
          Sprachmodell-Anbieter, den Sie eingerichtet haben, aus den Zügen
          dieser Unterhaltung, und es dient allein der Fortsetzung des
          Coach-Gesprächs. Es wird nicht zum Training eines Modells verwendet,
          nicht mit anderen Nutzern geteilt und an keinen weiteren Empfänger
          gesendet.
        </p>
        <p>
          Sie können eine einzelne Unterhaltung, eine einzelne Angabe und einen
          einzelnen Vorsatz in der Anwendung löschen, womit der gespeicherte
          Text entfernt wird; das Löschen des Kontos entfernt alles davon. Bis
          v1.38 stand an dieser Stelle, der Coach halte keinen dauerhaften
          Gesprächszustand vor. Das hat die Software nie so gemacht.
        </p>

        <SubHeading>4.7 Laborscan und Dokumenten-KI</SubHeading>
        <p>
          Das Scannen eines Laborbefunds oder eines Medikamentenetiketts in der
          iOS-App geschieht auf dem Gerät. Aufnahme und Texterkennung nutzen
          Apples geräteinternes Vision-Framework; weder das Foto noch der
          erkannte Text werden irgendwohin gesendet. Sie prüfen die erkannten
          Zeilen, und nur die Werte, die Sie speichern, landen in Ihrem
          HealthLog-Konto, wie ein von Hand eingetragener Wert. Ein KI-Anbieter
          ist an diesem Schritt nicht beteiligt.
        </p>
        <p>
          Ein Ablagevorschlag, eine Zusammenfassung oder ein Chat zu einem
          gespeicherten Dokument ist etwas anderes: Dabei geht der gespeicherte
          Text dieses Dokuments über den HealthLog-Server an den auf der Instanz
          eingerichteten KI-Anbieter, und zwar erst, wenn Sie der KI-Nutzung
          zugestimmt und die Funktion aufgerufen haben.
        </p>

        <SubHeading>4.8 Geräte- und Integrationsdaten</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Eine Gerätekennung (zufällige UUID, auf dem Gerät erzeugt, im
            iOS-Schlüsselbund abgelegt), gesendet als Kopfzeile{" "}
            <Code>X-Device-Id</Code>. Dient der Synchronisation mehrerer Geräte
            und der Missbrauchsabwehr.
          </li>
          <li>
            Gerätetoken und Umgebungskennzeichen für den Apple Push Notification
            service (APNs), nur erfasst, wenn Sie Push-Benachrichtigungen
            aktivieren.
          </li>
          <li>
            Angaben zum Web-Push-Abonnement (die vom Browser ausgegebene
            Endpunkt-Adresse und deren zwei öffentliche Schlüssel), nur erfasst,
            wenn Sie einen Browser anmelden.
          </li>
          <li>
            Telegram-Chat-Kennung, ntfy-Serveradresse und Thema oder eine
            ausgehende Webhook-Adresse, jeweils nur, wenn Sie diesen
            Benachrichtigungskanal ausdrücklich verbunden haben.
          </li>
          <li>
            Heimatort für das optionale Umweltkontext-Modul: ein von Ihnen
            gewählter Ort, gespeichert als auf zwei Nachkommastellen gerundete
            Koordinaten (etwa ein Kilometer) samt Zeitzone.
          </li>
        </ul>

        <SubHeading>4.9 Sicherheit und Protokolle</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Anmeldeereignisse: erfolgreiche und fehlgeschlagene Anmeldung,
            Passkey-Registrierung, Passwortänderung, Sitzungswiderruf.
            Aufbewahrt zur Sicherheitsanalyse.
          </li>
          <li>
            Anfrageprotokolle: Zeitpunkt, angefragter Pfad, Statuscode,
            User-Agent und IP-Adresse, bereinigt um Geheimnisse, in die
            Protokollausgabe des Servers geschrieben für Anfragebegrenzung und
            Fehlersuche. Wie lange sie aufbewahrt werden, hängt von der
            Protokolleinrichtung des Betreibers ab.
          </li>
          <li>
            Die IP-Adresse einer Anmeldung wird zu einer groben Ortsangabe und
            einem Netzbetreiber aufgelöst, damit die Sicherheitsseite zeigen
            kann, woher Ihre Sitzungen kamen. Sofern der Betreiber nicht die
            Offline-Datenbanken GeoLite2 bereitstellt, ist diese Auflösung eine
            ausgehende Abfrage; siehe Abschnitt 6.
          </li>
        </ul>

        <SubHeading>4.10 Nicht erhobene Daten</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Keine Werbekennungen Dritter, keine Fingerabdrücke, keine
            app-übergreifende Verfolgung.
          </li>
          <li>
            Keine Zahlungsdaten (die Anwendung hat keinen kostenpflichtigen
            Tarif).
          </li>
          <li>
            Kein genauer Standort im Hintergrund (Trainingseinheiten tragen GPS
            nur, wenn Sie eine Strecke anhängen, und das Umweltmodul speichert
            nur einen groben Heimatort).
          </li>
          <li>
            Keine Kennungen sozialer Netzwerke, kein Auslesen von Kontakten.
          </li>
          <li>
            Keine Produktanalyse durch Dritte und keine Nutzungstelemetrie. Die
            Anwendung enthält kein Analyse-SDK. Ein Betreiber kann eine eigene
            Umami-Installation für Seitenstatistiken anbinden: Die Instanz
            liefert dann ein cookiefreies Umami-Skript über ihre eigene Adresse
            aus und leitet die Ereignisse an diese Installation weiter. Das ist
            abgeschaltet, bis der Betreiber es einschaltet.
          </li>
        </ul>
      </Section>

      <Section id="purpose" title="5. Warum jede Kategorie erhoben wird">
        <p>
          Die Zwecke sind die, für die die Software gebaut ist. Die genannten
          Rechtsgrundlagen sind die, die nach der DSGVO zu diesen Zwecken
          passen; auf sie stützt sich der Betreiber der jeweiligen Instanz.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-text-primary font-medium">Anmeldedaten</span>:
            Sie zu identifizieren und die Sitzung abzusichern. Rechtsgrundlage:
            Art. 6 Abs. 1 lit. b DSGVO, Erfüllung des Vertrags.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Gesundheitsdaten
            </span>
            : Verläufe darstellen, Zielerreichung berechnen, auf Ihren Abruf hin
            das Coach-Kontextpaket bilden. Rechtsgrundlage: Art. 9 Abs. 2 lit. a
            DSGVO, ausdrückliche Einwilligung in die Verarbeitung besonderer
            Kategorien personenbezogener Daten.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Coach-Kontextpakete und gespeicherte Unterhaltungen
            </span>
            : persönlich zugeschnittene schriftliche Rückmeldung erzeugen und
            einen von Ihnen begonnenen Gesprächsfaden fortsetzen. Das Paket geht
            für die Dauer der Anfrage an den eingerichteten Anbieter; die
            Unterhaltung bleibt verschlüsselt auf der Instanz.
          </li>
          <li>
            <span className="text-text-primary font-medium">Gerätedaten</span>:
            Push-Benachrichtigungen, Missbrauchsabwehr und Ordnung bei Sitzungen
            über mehrere Geräte.
          </li>
          <li>
            <span className="text-text-primary font-medium">Protokolle</span>:
            Nachvollziehen sicherheitsrelevanter Ereignisse und Begrenzung der
            Anfragerate. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO,
            berechtigtes Interesse am sicheren Betrieb des Dienstes.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Passwortprüfung und Ortsangabe zur Anmeldung
            </span>
            : Konten gegen das Ausprobieren geleakter Zugangsdaten schützen und
            Ihnen erlauben, eine fremde Sitzung zu erkennen. Rechtsgrundlage:
            Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse am sicheren
            Betrieb des Dienstes. Beides sind Voreinstellungen und keine
            Nutzerentscheidung; beides kann der Betreiber abschalten.
          </li>
          <li>
            <span className="text-text-primary font-medium">Wetterkontext</span>
            : selbst erfasste Werte zu den Bedingungen des Tages in Beziehung
            setzen, für die Nutzer, die das Umweltmodul einschalten.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Produktanalyse
            </span>
            : findet durch Dritte nicht statt.
          </li>
        </ul>
      </Section>

      <Section
        id="sub-processors"
        title="6. Externe Dienste, die die Software ansprechen kann"
      >
        <p>
          Die folgenden externen Dienste erhalten personenbezogene Daten von
          einer Instanz, wenn die zugehörige Funktion genutzt wird. Die Liste
          ist für den veröffentlichten Funktionsumfang abschließend. Jedes
          verbundene Gerät oder jeder verbundene Dienst und jeder KI-Anbieter
          wird nur für eine Funktion eingesetzt, die ausdrücklich eingeschaltet
          wurde, und die Off-Host-Sicherung nur, wenn der Betreiber sie
          einrichtet. Die Passwortprüfung, die Aktualisierungsprüfung und die
          Ortsangabe zur Anmeldung sind Voreinstellungen, die ohne
          Einzelentscheidung gelten; der Betreiber kann jede davon abschalten.
          Wo eine Instanz läuft und welchen Hoster sie nutzt, entscheidet der
          Betreiber und legt es in seiner eigenen Erklärung offen.
        </p>
        <ul className="grid gap-3">
          <SubProcessor
            labels={LABELS}
            name="Anthropic, PBC"
            role="Anbieter für KI-Coach und Insights, wenn Sie Anthropic Claude wählen. Erreicht über den HealthLog-Server oder direkt aus der iOS-App, wenn Sie dort einen eigenen Anthropic-Schlüssel eintragen; dann läuft die Anfrage nicht über den HealthLog-Server. Setzt Ihre ausdrückliche KI-Einwilligung voraus."
            data="Coach-Kontextpaket (Gesundheitskontext) und die Züge der Unterhaltung, für die Dauer der Anfrage."
            location="Vereinigte Staaten. Anthropic nennt ein Aufbewahrungsfenster von 30 Tagen zur Missbrauchskontrolle."
            policyUrl="https://www.anthropic.com/legal/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="OpenAI, L.L.C. (API-Schlüssel)"
            role="Alternativer Anbieter für KI-Coach und Insights, wenn Sie ein OpenAI-Modell wählen. Erreicht über den HealthLog-Server oder direkt aus der iOS-App, wenn Sie dort einen eigenen OpenAI-Schlüssel eintragen. Setzt Ihre ausdrückliche KI-Einwilligung voraus."
            data="Coach-Kontextpaket in derselben Form wie bei Anthropic."
            location="Vereinigte Staaten. Die Aufbewahrung richtet sich nach der für den hinterlegten API-Schlüssel geltenden Regelung von OpenAI."
            policyUrl="https://openai.com/policies/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="OpenAI, L.L.C. (ChatGPT-Konto)"
            role="Dritter Weg zu einem Modell: statt eines API-Schlüssels melden Sie sich an Ihrem eigenen ChatGPT-Konto an, und HealthLog spricht im Namen dieses Kontos mit dem ChatGPT-Backend. Die Anmeldung selbst läuft über auth.openai.com. Setzt Ihre ausdrückliche KI-Einwilligung voraus."
            data="Die OAuth-Token dieses ChatGPT-Kontos (verschlüsselt auf der Instanz gespeichert), die Kennung des ChatGPT-Kontos sowie dasselbe Coach-Kontextpaket und dieselben Gesprächszüge wie oben."
            location="Vereinigte Staaten. Die Nutzung fällt unter die Bedingungen Ihres eigenen ChatGPT-Tarifs."
            policyUrl="https://openai.com/policies/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="Google LLC (Gemini API)"
            role="Anbieter für KI-Coach und Insights, wenn Sie in der iOS-App einen eigenen Google-Gemini-Schlüssel eintragen. Die Anfrage geht direkt von der iOS-App an Gemini und läuft nicht über den HealthLog-Server. Setzt Ihre ausdrückliche KI-Einwilligung voraus. Getrennt vom Eintrag Google Health weiter unten."
            data="Dasselbe Kontextpaket und dieselben Gesprächszüge wie oben, für die Dauer der Anfrage."
            location="Vereinigte Staaten und weitere Länder, in denen Google Infrastruktur betreibt."
            policyUrl="https://policies.google.com/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="Ein von Ihnen angegebener OpenAI-kompatibler Endpunkt"
            role="Anbieter für KI-Coach und Insights, wenn Sie die iOS-App oder die Instanz auf einen eigenen OpenAI-kompatiblen HTTPS-Endpunkt richten, etwa ein selbst betriebenes Gateway. Das ist keine feste Firma: Ziel ist die Adresse, die Sie eintragen. Setzt Ihre ausdrückliche KI-Einwilligung voraus."
            data="Dasselbe Kontextpaket und dieselben Gesprächszüge wie oben, dazu der API-Schlüssel, falls Sie einen hinterlegt haben."
            location="Dort, wo der eingerichtete Endpunkt läuft."
            policyUrl="https://docs.healthlog.dev/"
          />
          <SubProcessor
            labels={LABELS}
            name="Withings SAS"
            role="Geräte-Synchronisation, wenn Sie ein Withings-Konto verbinden."
            data="OAuth-Token zur Erneuerung und für den Zugriff, Withings-Nutzerkennung, Webhook-Meldungen über neue Messungen sowie die Messwerte selbst."
            location="Frankreich (Europäische Union)."
            policyUrl="https://www.withings.com/de/de/legal/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="WHOOP, Inc."
            role="Geräte-Synchronisation, wenn Sie ein WHOOP-Konto verbinden. Angefragter Umfang: Erholung, Schlaf, Training, Zyklen, Profil, Körpermaße."
            data="OAuth-Token, die WHOOP-Nutzerkennung und die von diesem Umfang erfassten Datensätze."
            location="Infrastruktur des Anbieters. Die Anbindung legt keine Region fest."
            policyUrl="https://www.whoop.com/privacy/"
          />
          <SubProcessor
            labels={LABELS}
            name="Google LLC (Google Health)"
            role="Geräte-Synchronisation, wenn Sie Google Health verbinden. Angefragter Umfang: Aktivität und Fitness, Gesundheitswerte und Messungen, Schlaf, Profil, jeweils nur lesend."
            data="OAuth-Token, die Kennung des für die Freigabe genutzten Google-Kontos und die von diesem Umfang erfassten Datensätze."
            location="Infrastruktur des Anbieters. Die Anbindung legt keine Region fest."
            policyUrl="https://policies.google.com/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="Oura Health Oy"
            role="Geräte-Synchronisation, wenn Sie ein Oura-Konto verbinden. Angefragter Umfang: Tageswerte und Profil."
            data="OAuth-Token, die Oura-Nutzerkennung und die von diesem Umfang erfassten Datensätze."
            location="Infrastruktur des Anbieters. Die Anbindung legt keine Region fest."
            policyUrl="https://ouraring.com/privacy-policy"
          />
          <SubProcessor
            labels={LABELS}
            name="Garmin (Garmin Connect)"
            role="Geräte-Synchronisation, wenn Sie einen Garmin-Personal-API-Schlüssel einfügen. Nur lesend, stündlicher Abruf."
            data="Der Personal-API-Schlüssel, damit erzeugte kurzlebige Zugriffstoken sowie Tageswerte, Schlaf, Herzratenvariabilität, Wiegungen, Aktivitäten (mit der Originaldatei jeder neuen Aktivität) und eingetragene Periodentage dieses Kontos."
            location="Infrastruktur des Anbieters: Garmin Connect oder, wenn Sie es wählen, Garmin Connect China."
            policyUrl="https://www.garmin.com/privacy/"
          />
          <SubProcessor
            labels={LABELS}
            name="Polar Electro Oy"
            role="Geräte-Synchronisation, wenn Sie ein Polar-Konto über Polar Accesslink verbinden."
            data="OAuth-Token, die Polar-Nutzerkennung und die von Accesslink gelieferten Trainings- und Aktivitätsdaten."
            location="Infrastruktur des Anbieters. Die Anbindung legt keine Region fest."
            policyUrl="https://www.polar.com/de/rechtliches/datenschutzerklaerung"
          />
          <SubProcessor
            labels={LABELS}
            name="Strava, Inc."
            role="Trainings-Synchronisation, wenn Sie ein Strava-Konto verbinden. Angefragter Umfang: alle Aktivitäten lesen, auch die von Ihnen als privat markierten."
            data="OAuth-Token, die Strava-Athletenkennung und die Aktivitäten selbst."
            location="Infrastruktur des Anbieters. Die Anbindung legt keine Region fest."
            policyUrl="https://www.strava.com/legal/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="Nightscout-Instanz (von Ihnen betrieben)"
            role="Anbindung eines kontinuierlichen Glukosemesssystems, wenn Sie HealthLog auf einen Nightscout-Server richten. Nightscout ist kein Unternehmen: Die Adresse ist die, die Sie eintragen, meist ein Server, den Sie selbst betreiben."
            data="Das Nightscout-API-Geheimnis oder Zugriffstoken (verschlüsselt auf der Instanz gespeichert) und bei jedem Abgleich eine Leseanfrage nach Sensor-Glukosewerten."
            location="Dort, wo Sie diese Nightscout-Instanz betreiben."
            policyUrl="https://nightscout.github.io/"
          />
          <SubProcessor
            labels={LABELS}
            name="WebDAV- oder Nextcloud-Server (Adresse von Ihnen angegeben)"
            role="Optionales Abholen des geplanten Health-Connect-Exports, wenn Sie eine Ordneradresse eintragen. Die Instanz liest etwa alle sechs Stunden und auf Ihren Abruf hin eine Datei aus diesem Ordner. Der Server ist der, den Sie angeben, meist Ihre eigene Nextcloud."
            data="Der WebDAV-Benutzername und das Passwort oder App-Passwort (auf der Instanz verschlüsselt gespeichert und nur an den Server gesendet, für den es eingetragen wurde) und bei jedem Abruf eine Leseanfrage für die Exportdatei. In den Ordner wird nichts geschrieben."
            location="Wo Sie diesen Server betreiben."
            policyUrl="https://docs.healthlog.dev/guides/import-health-connect/"
          />
          <SubProcessor
            labels={LABELS}
            name="Apple, Inc."
            role="HealthKit (Speicher auf dem Gerät; Datensätze verlassen Gerät und iCloud nicht, solange Sie HealthLog keinen Lesezugriff erteilen) und Apple Push Notification service (bei aktivierten Benachrichtigungen)."
            data="Der HealthKit-Zugriff bleibt lokal auf dem Gerät. APNs erhält ein Gerätetoken, die Bundle-Kennung der Anwendung und den Inhalt der Benachrichtigung. Hat die App einen Schlüssel hinterlegt, ist der Inhalt ein für dieses Gerät verschlüsselter Umschlag mit einem neutralen Text."
            location="Vereinigte Staaten. HealthKit-Daten liegen auf Ihrem Gerät und in iCloud-verschlüsselten Sicherungen unter Ihrer Apple-ID."
            policyUrl="https://www.apple.com/legal/privacy/"
          />
          <SubProcessor
            labels={LABELS}
            name="HealthLog-Push-Relay (push.healthlog.dev)"
            role="Optionale Zustellung von Benachrichtigungen an die HealthLog-iPhone-App aus dem App Store, für eine Instanz ohne eigenen Apple-Push-Schlüssel. Aus, bis der Betreiber einer Instanz es einschaltet, und dann nur für Personen, die es in der App einschalten. Betrieben vom Entwickler des HealthLog-Projekts als eigenständig Verantwortlicher für die Metadaten des Relays."
            data="Ein auf der Instanz für ein Gerät verschlüsselter Umschlag, den das Relay nicht öffnen kann, und die in Abschnitt 6.1 beschriebenen Zustelldaten. Keine Gesundheitsdaten, Namen oder Kontodaten."
            location="Deutschland."
            policyUrl="https://push.healthlog.dev/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="Telegram FZ-LLC"
            role="Optionaler Benachrichtigungskanal, wenn Sie die Telegram-Bot-Anbindung aktivieren."
            data="Telegram-Chat-Kennung und der Inhalt der Benachrichtigung."
            location="Vereinigte Arabische Emirate / globale Infrastruktur von Telegram."
            policyUrl="https://telegram.org/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="ntfy-Server (Adresse von Ihnen angegeben)"
            role="Optionaler Benachrichtigungskanal. HealthLog sendet jede Benachrichtigung an die Serveradresse und das Thema, die Sie eingetragen haben. Das kann der öffentliche Dienst ntfy.sh sein oder eine ntfy-Instanz, die Sie oder der Betreiber selbst führen."
            data="Der Text der Benachrichtigung (Titel und Nachricht, von Auszeichnungen befreit), deren Priorität und Schlagworte sowie der Themenname. Ein von Ihnen hinterlegtes Zugriffstoken wird als Autorisierungs-Kopfzeile gesendet."
            location="Dort, wo der eingetragene Server betrieben wird. Wer ein öffentliches Thema kennt, kann darin veröffentlichte Nachrichten mitlesen; der Text wird deshalb kurz gehalten, und der diskrete Modus lässt Einzelheiten weg."
            policyUrl="https://docs.ntfy.sh/privacy/"
          />
          <SubProcessor
            labels={LABELS}
            name="Web-Push-Dienst Ihres Browser-Herstellers"
            role="Optionaler Benachrichtigungskanal, wenn Sie einen Browser anmelden. Den Endpunkt nennt der Browser selbst (je nach Browser Mozilla, Google, Apple oder Microsoft), und HealthLog kann nur an genau diesen Endpunkt zustellen."
            data="Der Inhalt der Benachrichtigung, vor dem Verlassen des Servers mit den vom Browser gelieferten Schlüsseln für dieses Abonnement verschlüsselt, dazu die VAPID-Signatur, die diese Instanz als Absender ausweist. Der Push-Dienst sieht den Endpunkt sowie Größe und Zeitpunkt der Nachricht, nicht ihren Inhalt."
            location="Betrieben vom jeweiligen Browser-Hersteller."
            policyUrl="https://datatracker.ietf.org/doc/html/rfc8291"
          />
          <SubProcessor
            labels={LABELS}
            name="Ausgehender Webhook (Adresse von Ihnen angegeben)"
            role="Optionaler Benachrichtigungskanal für einen Dienst, den Sie betreiben oder nutzen, etwa Gotify, eine Chat-Brücke oder eine Hausautomatisierung."
            data="Ein kleines JSON-Paket mit Titel, Klartextnachricht und Ereignisart sowie eine optionale, von Ihnen eingerichtete Kopfzeile (üblicherweise ein gemeinsames Geheimnis)."
            location="Dort, wohin die eingetragene Adresse zeigt. Private Adressen und Loopback werden abgewiesen."
            policyUrl="https://github.com/MBombeck/HealthLog"
          />
          <SubProcessor
            labels={LABELS}
            name="Have I Been Pwned (Range-API für geleakte Passwörter)"
            role="Prüft ein neues Passwort gegen bekannte Leak-Sammlungen, wenn ein Konto angelegt wird, wenn Sie Ihr Passwort ändern und wenn eine Administratorin oder ein Administrator es zurücksetzt. Niemand schaltet das ein: Es ist eine Voreinstellung, die ein Betreiber mit PASSWORD_BREACH_CHECK_DISABLED=1 abschalten kann. Die Prüfung ist fehlertolerant, ein nicht erreichbarer Dienst blockiert also nie eine Passwortänderung."
            data="Die ersten fünf Zeichen des SHA-1-Hashes des Passworts, sonst nichts. Die übrigen 35 Zeichen werden auf dem Server verglichen, sodass weder der vollständige Hash noch das Passwort die Instanz verlässt; die Anfrage verlangt Auffüllbytes, damit die Antwortgröße nicht verrät, welcher Bereich abgefragt wurde. Eine Kontokennung wird nicht gesendet."
            location="Infrastruktur des Anbieters."
            policyUrl="https://haveibeenpwned.com/Privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="ipwho.is oder der vom Betreiber gesetzte Anbieter (Ortsangabe zur Anmeldung)"
            role="Ordnet der IP-Adresse einer Anmeldung einen groben Ort zu, damit die Sicherheitsseite zeigen kann, woher Ihre Sitzungen kamen. Niemand schaltet das ein: Es läuft für jede Anmeldung, die die Instanz nicht aus einer lokalen Datenbank zuordnen kann. Ein Betreiber kann das mit IP_GEO_LOOKUP_DISABLED=1 ganz abschalten, mit IP_GEO_LOOKUP_URL einen anderen Anbieter wie ip-api.com einsetzen oder die unten genannten Offline-Datenbanken bereitstellen und die Zuordnung auf dem eigenen Server halten."
            data="Die IP-Adresse der Anmeldung, sonst nichts. Keine Kontokennung, keine Sitzung, keine Gesundheitsdaten."
            location="Infrastruktur des Anbieters. Für den kostenlosen voreingestellten Endpunkt gibt es keinen veröffentlichten Auftragsverarbeitungsvertrag."
            policyUrl="https://ipwho.is/"
          />
          <SubProcessor
            labels={LABELS}
            name="MaxMind, Inc. (GeoLite2, optional)"
            role="Die Offline-Alternative zur vorstehenden Abfrage. Ein Betreiber, der einen MaxMind-Lizenzschlüssel hinterlegt, lässt die Instanz die Datenbanken GeoLite2 City und ASN herunterladen; danach werden Anmelde-Adressen lokal zugeordnet, und zwar zuerst, sodass der Online-Anbieter nur noch zu einer Adresse befragt wird, die die Datenbanken nicht zuordnen konnten."
            data="Der Lizenzschlüssel und die Download-Anfrage. Anmelde-IP-Adressen werden nie gesendet: Die Datenbanken sind Dateien, und die Zuordnung geschieht auf dem eigenen Server."
            location="Die Downloads kommen vom Verteilserver von MaxMind. Die Datenbanken selbst liegen auf dem Server des Betreibers."
            policyUrl="https://www.maxmind.com/en/privacy_policy"
          />
          <SubProcessor
            labels={LABELS}
            name="Open-Meteo"
            role="Historisches Wetter und Ortssuche für das optionale Umweltkontext-Modul, das ausgeschaltet bleibt, bis Sie es aktivieren und einen Heimatort setzen. Ein nächtlicher Lauf holt dann die Tage des Rückblickfensters."
            data="Die groben Heimatkoordinaten (auf zwei Nachkommastellen gerundet, etwa ein Kilometer), die Zeitzone und der Datumsbereich. Keine Kontokennung und keine Gesundheitsdaten. Beim Setzen des Heimatorts geht der von Ihnen eingegebene Suchbegriff an den Geocoding-Endpunkt desselben Anbieters."
            location="Infrastruktur des Anbieters. Die gehosteten Endpunkte sind die Voreinstellung; ein Betreiber kann das Modul stattdessen auf eine selbst betriebene Open-Meteo-Instanz richten."
            policyUrl="https://open-meteo.com/en/terms"
          />
          <SubProcessor
            labels={LABELS}
            name="GitHub, Inc."
            role="Aktualisierungsprüfung: Die Instanz fragt die GitHub-Releases-API nach der aktuellen Version, höchstens einmal am Tag je Browser, wenn ein angemeldetes Konto die Seite „Über“ oder die Admin-Übersicht öffnet. Ein Betreiber kann das mit UPDATE_CHECK_DISABLED=1 abschalten. GitHub hostet außerdem das öffentliche Quelltext-Repository und den in Abschnitt 13 genannten Issue-Tracker."
            data="Die IP-Adresse des Servers und eine Anfrage nach der neuesten Version. Keine Kontodaten und keine Gesundheitsdaten."
            location="Vereinigte Staaten."
            policyUrl="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
          />
          <SubProcessor
            labels={LABELS}
            name="Der Kalenderdienst, mit dem Sie abonnieren (optional)"
            role="Zyklusprognose und seit Version 1.49.0 gebuchte Termine, fällige Vorsorgeuntersuchungen und Auffrischimpfungen als Kalender-Abos, jedes ausgeschaltet, bis die Person, der die Akte gehört, oder bei einem betreuten Profil die Betreuungsperson es einschaltet. Sie tragen einen privaten Feed-Link in eine Kalender-App Ihrer Wahl ein, etwa Google Kalender, Apple iCloud-Kalender oder Microsoft Outlook. Dieser Dienst holt den Feed in eigenem Takt von der Instanz ab und behält eine Kopie. Der Link lässt sich jederzeit erneuern oder abschalten; eine Passwortänderung oder ein Löschantrag schaltet ihn ab."
            data="Beim Zyklus-Abo die geschätzten Startfenster der nächsten Zyklen und, wenn Sie es einschalten, vergangene Zyklen und das fruchtbare Fenster. Beim Termin-Abo die Daten gebuchter Termine, Vorsorgeuntersuchungen und Auffrischungen, nie der Grund oder das Ergebnis eines Termins. Termine heißen nur „●“, solange Sie keine beschreibenden Titel wählen. Keine Symptome, Notizen oder andere Einträge, und außer dem geheimen Link selbst keine Kontokennung."
            location="Wo der gewählte Kalenderdienst Kalender speichert. HealthLog kontaktiert den Dienst nicht, sondern beantwortet nur dessen Abrufe des Feeds."
            policyUrl="https://docs.healthlog.dev/guides/cycle-calendar-feed/"
          />
          <SubProcessor
            labels={LABELS}
            name="Off-Host-Sicherungsspeicher (Adresse vom Betreiber)"
            role="Optionale nächtliche Sicherung aller Konten in einen S3-kompatiblen Bucket, etwa AWS S3, Cloudflare R2 oder einen selbst betriebenen MinIO-Server. Ausgeschaltet, bis der Betreiber die BACKUP_*-Umgebungsvariablen setzt."
            data="Eine Kopie der Akte jedes Kontos, vor dem Hochladen auf der Instanz mit AES-256-GCM unter einem vom Datenbankschlüssel getrennten Schlüssel verschlüsselt. Der Speicheranbieter besitzt keinen Schlüssel, der sie lesen kann."
            location="Wo der Bucket des Betreibers liegt."
            policyUrl="https://docs.healthlog.dev"
          />
        </ul>
        <p>
          Die Software unterstützt weitere ausgehende Ziele, die jeweils aus
          bleiben, bis ein Betreiber sie einrichtet: Fehlerberichte an eine
          GlitchTip-Installation (Fehlermeldung und Aufrufstapel, angefragter
          Pfad, User-Agent und eine Anfragekennung, durch eine Bereinigungsstufe
          geführt, die Geheimnisse entfernt, und ohne Gesundheitsdaten),
          Seitenstatistiken an eine Umami-Installation, die strukturierten
          Protokolle an einen Loki-Endpunkt, Benachrichtigungs-E-Mails über ein
          SMTP-Relay und die Anmeldung über einen
          OpenID-Connect-Identitätsanbieter. Welche davon eine Instanz nutzt,
          entscheidet der Betreiber und legt es selbst offen.
        </p>

        <SubHeading>6.1 Das HealthLog-Push-Relay</SubHeading>
        <p>
          Das Push-Relay unter <Code>push.healthlog.dev</Code> stellt
          Benachrichtigungen einer selbst betriebenen Instanz an die
          HealthLog-iPhone-App aus dem App Store zu. Apple nimmt solche
          Benachrichtigungen nur an, wenn sie mit dem Schlüssel des Kontos
          signiert sind, das die App veröffentlicht. Betrieben wird das Relay
          vom Entwickler des HealthLog-Projekts (siehe Impressum) als
          eigenständig Verantwortlichem für die Metadaten des Relays, auf einem
          Server in Deutschland, gemietet bei der Hetzner Online GmbH, die dabei
          auf Grundlage eines Vertrags zur Auftragsverarbeitung (Art. 28 DSGVO)
          tätig ist. Maßgeblich ist seine eigene Datenschutzerklärung unter{" "}
          <ExternalLink href="https://push.healthlog.dev/privacy">
            push.healthlog.dev/privacy
          </ExternalLink>
          ; dieser Abschnitt fasst sie zusammen.
        </p>
        <p>
          Die Zustimmung erfolgt zweimal. Über das Relay geht nichts, bis der
          Administrator einer Instanz es einschaltet; dafür muss er die
          Bedingungen des Relays annehmen und bestätigen, dass er die Instanz
          privat für sich oder seinen Haushalt betreibt. Danach entscheidet jede
          Person auf ihrem eigenen iPhone, und nur deren Geräte werden
          angebunden. Sie widerrufen, indem Sie das Relay in der App
          ausschalten; die App meldet das direkt dem Relay, und die Anbindung
          des Geräts wird sofort gelöscht, auch wenn die Instanz gerade nicht
          erreichbar ist. Schaltet der Administrator das Relay aus, wird die
          Instanz beim Relay mit allen Geräteanbindungen gelöscht.
        </p>
        <p>
          Was das Relay erhält: das APNs-Token des Geräts, während es eine
          Benachrichtigung weiterleitet, einen Hash des Anbindungsschlüssels,
          den die App erzeugt hat, Fassung und Tag Ihrer Zustimmung für diese
          Instanz, Kennung, öffentlichen Schlüssel und gemeldete Softwareversion
          der Instanz und je Benachrichtigung ihre Art, ihre feste Größe und den
          Zeitpunkt des Versands. Der Inhalt jeder Mitteilung und jeder
          Hintergrundbenachrichtigung wird auf der Instanz Ende zu Ende für das
          eine Gerät verschlüsselt, für das er bestimmt ist, und das Relay hat
          keinen Schlüssel, der ihn öffnet. Die Adresse der Instanz, und die des
          Geräts, wenn die App direkt mit dem Relay spricht, wird nur im
          Arbeitsspeicher gehalten und weder gespeichert noch protokolliert.
        </p>
        <p>
          Eine Live-Aktivität auf dem Sperrbildschirm lässt sich so nicht
          verschlüsseln. Sie über das Relay von der Instanz aus zu starten und
          zu aktualisieren, braucht eine zweite, eigene Zustimmung auf dem Gerät
          und eine Einstellung des Administrators; beides ist ab Werk aus. Mit
          dieser Zustimmung können das Relay und Apple den angezeigten Zustand
          jedes Starts und jeder Aktualisierung lesen: den Stand einer Dosis,
          ihren Countdown und das Zeitformat, nie einen Medikamentennamen, eine
          Dosis oder freien Text. Ohne sie kann die Instanz eine Live-Aktivität
          nur beenden, und das Relay sieht nichts von ihrem Inhalt.
        </p>
        <p>
          Apple stellt jede Benachrichtigung zu, sieht das Gerätetoken, die Art
          der Benachrichtigung und den Zeitpunkt der Zustellung und kann das
          Token einer Apple-ID zuordnen. Den Zeitpunkt kann keine
          Verschlüsselung verbergen: Er kann zum Beispiel verraten, dass in
          diesem Moment auf einem anderen Gerät eine Einnahme erfasst wurde.
        </p>
        <p>
          Speicherdauer: Das Token speichert das Relay nur als Hash mit geheimem
          Schlüssel. Eine Geräteanbindung wird gelöscht, wenn Sie widerrufen,
          wenn die Instanz sie entfernt oder das Relay verlässt, wenn Apple das
          Token als ungültig meldet oder nach etwa 13 Wochen ohne
          Benachrichtigung. Der Eintrag einer Instanz, die nie etwas zugestellt
          hat, wird nach zwei Tagen gelöscht, einer ohne Kontakt nach etwa 13
          Wochen. Tageszähler je Instanz werden 7 Tage aufbewahrt, Tagessummen
          für das ganze Relay ohne Instanz oder Gerät 400 Tage. Widerrufen Sie
          direkt in der App, wird ein Hash aus Gerätetoken und Instanz 365 Tage
          aufbewahrt, damit diese Instanz das Gerät nicht erneut anbinden kann,
          solange Sie das Relay für sie nicht wieder einschalten. Ein
          Zugriffsprotokoll führt das Relay nicht. In den Relay-Einstellungen
          der App sehen Sie, was das Relay über das Gerät gespeichert hat.
          Fragen zum Relay richten Sie an{" "}
          <a
            href="mailto:privacy@healthlog.dev"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            privacy@healthlog.dev
          </a>
          .
        </p>
      </Section>

      <Section
        id="storage"
        title="7. Speicherung, Verschlüsselung, Aufbewahrung"
      >
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <span className="text-text-primary font-medium">
              Kein iCloud, kein CloudKit.
            </span>{" "}
            HealthLog legt keine eigenen Daten in iCloud oder CloudKit ab. Die
            Server-Datenbank bleibt auf dem Server des Betreibers. Die lokalen
            Speicher der iOS-App (Caches, die Offline-Warteschlange,
            Coach-Nachrichten) liegen im App-Speicher mit abgeschaltetem
            CloudKit, und sensible lokale Dateien sind von der Gerätesicherung
            ausgenommen. Apple Health kann HealthKit-Daten über Ihre eigenen
            iCloud-Einstellungen synchronisieren; das ist Apples Verhalten,
            keine Speicherung durch HealthLog.
          </li>
          <li>
            Primärer Datenspeicher: PostgreSQL auf dem Server des Betreibers.
            Sensible Spalten sind einzeln mit AES-256-GCM verschlüsselt, unter
            einem von der Datenbank getrennten Schlüssel: Geheimnisse von
            Anbindungen und Anbieterschlüssel, Notizen und andere Freitexte,
            Dokumente samt extrahiertem Text und Zusammenfassungen, Antworten in
            Fragebögen, KI-geschriebene Texte, Coach-Unterhaltungen und das
            daraus abgeleitete Gedächtnis, Allergiereaktionen und Notizen zur
            Familienanamnese. Mess- und Laborwerte, Medikamentennamen,
            Stimmungswerte sowie Namen von Allergenen und Erkrankungen liegen
            unverschlüsselt vor, damit sie abgefragt und dargestellt werden
            können. Ob der Datenträger selbst verschlüsselt ist, entscheidet der
            Betreiber.
          </li>
          <li>
            Verschlüsselungsschlüssel sind versioniert und im laufenden Betrieb
            ohne Wartungsfenster wechselbar.
          </li>
          <li>
            API-Token werden als HMAC-SHA-256-Hashes mit Schlüssel gespeichert,
            nie im Klartext.
          </li>
          <li>
            Sicherungen: Die Anwendung hält jede Woche eine verschlüsselte Kopie
            jedes Kontos in ihrer eigenen Datenbank. Sie kann außerdem jede
            Nacht eine verschlüsselte Off-Host-Sicherung unter einem vom
            Datenbankschlüssel getrennten Schlüssel auf ein S3-kompatibles Ziel
            schreiben, sobald der Betreiber sie über die
            BACKUP_*-Umgebungsvariablen einrichtet. Wie lange Off-Host-Kopien
            bestehen, bestimmt die Lebenszyklusregel des Buckets des Betreibers.
            Was auf Ebene des Servers oder des Hosters gesichert wird, liegt
            außerhalb der Software und beim Betreiber.
          </li>
          <li>
            Aufbewahrung: Kontodaten bleiben, bis Sie die Löschung verlangen
            (siehe Abschnitt 8) oder das Konto administrativ geschlossen wird.
            Sicherheitsprotokolle werden in der Voreinstellung 365 Tage
            aufbewahrt, Zustellversuche von Benachrichtigungen 90 Tage,
            Anfrageprotokolle so lange, wie die Protokolleinrichtung des
            Betreibers sie hält. Bis August 2026 stand hier eine Frist von 90
            Tagen für das Sicherheitsprotokoll, was die Software nie so gemacht
            hat: 365 Tage sind die eingebaute Voreinstellung, und jeder
            Betreiber setzt seine eigene Frist mit{" "}
            <Code>AUDIT_LOG_RETENTION_DAYS</Code>.
          </li>
          <li>
            Löschung: Die Kontolöschung greift durch alle nutzerbezogenen
            Tabellen, darunter Gesundheitsbeobachtungen, Sitzungen,
            Sicherheitsprotokoll, Token von Anbindungen, Abonnements für
            Benachrichtigungen, Coach-Unterhaltungen, Angaben und Vorsätze,
            Erfolge, hochgeladene Dateien und die wöchentlichen Kopien in der
            Datenbank. Die Löschung wirkt in der laufenden Datenbank sofort. Hat
            der Betreiber Off-Host-Sicherungen eingerichtet, löscht ein
            Hintergrundauftrag nach der Löschung die Kopien des Kontos aus dem
            Bucket und versucht es jede Nacht erneut, bis keine mehr übrig ist.
          </li>
        </ul>
      </Section>

      <Section id="rights" title="8. Ihre Rechte (Art. 15 bis 22 DSGVO)">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-text-primary font-medium">
              Auskunft (Art. 15)
            </span>
            : Jeder gespeicherte Wert ist über die Verlaufsansichten der
            Anwendung erreichbar. Einen zusammengefassten JSON-Export gibt es
            unter{" "}
            <em className="not-italic">Einstellungen → Daten &amp; Export</em>.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Berichtigung (Art. 16)
            </span>
            : Jeder Datensatz lässt sich in der Anwendung bearbeiten und
            löschen.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Löschung (Art. 17)
            </span>
            :{" "}
            <em className="not-italic">
              Einstellungen → Konto → Konto löschen
            </em>
            . Die Aktion greift sofort durch alle nutzerbezogenen Tabellen; wie
            mit Sicherungen umgegangen wird, steht in Abschnitt 7.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Einschränkung der Verarbeitung (Art. 18)
            </span>
            : Eine administrative Aussetzung können Sie unter der Adresse in
            Abschnitt 13 verlangen.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Widerruf der Einwilligung (Art. 7 Abs. 3)
            </span>
            : Die KI-Funktionen laufen auf ausdrückliche Einwilligung, und
            dieser Widerruf ist auf derselben Oberfläche möglich, die sie
            erteilt, unter <em className="not-italic">Einstellungen → KI</em>.
            Der Widerruf wirkt sofort: Die Einwilligungsprüfung fällt ohne
            gültigen Nachweis auf Verweigerung zurück, sodass jede KI-Oberfläche
            in ihren Zustand ohne Einwilligung zurückgeht. Der Widerruf löscht
            nichts bereits Erfasstes; dafür ist der Löschweg oben da.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Datenübertragbarkeit (Art. 20)
            </span>
            : Der JSON-Export unter{" "}
            <em className="not-italic">Einstellungen → Daten &amp; Export</em>{" "}
            liefert den gesamten Datenbestand in einem strukturierten,
            maschinenlesbaren Format.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Automatisierte Entscheidungen im Einzelfall (Art. 22)
            </span>
            : Der KI-Coach trifft keine automatisierten Entscheidungen im Sinne
            von Art. 22. Er erzeugt schriftliche Anregungen zum Lesen; ohne
            ausdrückliche Bestätigung wird nichts in Ihrem Namen ausgeführt.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Beschwerderecht
            </span>
            : bei der Aufsichtsbehörde Ihres gewöhnlichen Aufenthalts oder der
            für den Betreiber der Instanz zuständigen Behörde. Für diese Website
            gehört dazu die Bundesbeauftragte oder der Bundesbeauftragte für den
            Datenschutz und die Informationsfreiheit (BfDI) auf Bundesebene.
          </li>
        </ul>
      </Section>

      <Section
        id="medical-boundary"
        title="9. Abgrenzung zum Medizinprodukt (EU-MDR 2017/745, MDCG 2021-24)"
      >
        <p>
          HealthLog ist{" "}
          <strong className="text-text-primary">kein Medizinprodukt</strong> im
          Sinne der Verordnung (EU) 2017/745 (MDR). Die Anwendung erfasst und
          zeigt Beobachtungen, die Sie eingegeben haben; sie diagnostiziert
          nicht, behandelt nicht, verordnet nicht und überwacht keinen
          bestimmten Krankheitszustand.
        </p>
        <p>
          Der KI-Coach ist durch ausdrückliche Grundregeln in seiner
          Systemanweisung eingeschränkt: Er empfiehlt keine GLP-1-Dosierungen
          und erzeugt keine wirkstoffbezogenen Schätzungen. Das Diagramm im
          GLP-1-Forschungsmodus ist eine reine Anzeige hinter einer
          versionierten Bestätigung, die Ihnen die MDR-Grenze vor dem
          Freischalten nennt. Keine dieser Oberflächen gibt klinische
          Empfehlungen.
        </p>
        <p>
          Für medizinischen Rat wenden Sie sich an eine ärztliche Fachperson.
          HealthLog soll dieses Gespräch stützen, indem es selbst erfasste Daten
          sichtbar macht, und nicht ersetzen.
        </p>
      </Section>

      <Section
        id="apple-categories"
        title="10. Datenschutzkategorien im Apple App Store"
      >
        <p>
          Die Privacy Nutrition Labels der iOS-Anwendung in App Store Connect
          entsprechen den folgenden Kategorien:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <span className="text-text-primary font-medium">
              Gesundheit &amp; Fitness
            </span>
            : mit dem Konto verknüpft; für die Funktion der App.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Sensible Daten
            </span>{" "}
            (Blutdruck, Blutzucker, Medikamente): mit dem Konto verknüpft; für
            die Funktion der App.
          </li>
          <li>
            <span className="text-text-primary font-medium">Kontaktdaten</span>{" "}
            (E-Mail-Adresse): mit dem Konto verknüpft; für die Funktion der App
            und die Kontoverwaltung.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Benutzerinhalte
            </span>{" "}
            (Notizen an Messwerten, Stimmungsnotizen, Coach-Unterhaltungen,
            Fehlerberichte): mit dem Konto verknüpft; für die Funktion der App.
          </li>
          <li>
            <span className="text-text-primary font-medium">Kennungen</span>{" "}
            (Gerätekennung, Nutzerkennung): mit dem Konto verknüpft; für die
            Funktion der App.
          </li>
          <li>
            <span className="text-text-primary font-medium">Diagnose</span>:
            wird nicht erhoben.
          </li>
          <li>
            <span className="text-text-primary font-medium">Nutzungsdaten</span>
            : werden nicht erhoben.
          </li>
          <li>
            <span className="text-text-primary font-medium">Standort</span>:
            wird nicht erhoben, außer einer optionalen GPS-Strecke, die Sie
            selbst an eine Trainingseinheit hängen, und dem groben Heimatort des
            optionalen Umweltmoduls.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Browserverlauf
            </span>
            : wird nicht erhoben.
          </li>
          <li>
            <span className="text-text-primary font-medium">Suchverlauf</span>:
            wird nicht erhoben.
          </li>
          <li>
            <span className="text-text-primary font-medium">
              Sonstige Daten
            </span>
            : werden nicht erhoben.
          </li>
        </ul>
      </Section>

      <Section id="children" title="11. Kinder">
        <p>
          HealthLog richtet sich nicht an Kinder unter 16 Jahren. Ohne
          nachweisbare Aufsicht der Sorgeberechtigten sollte die Anwendung von
          Personen unter 16 Jahren nicht genutzt werden. Der Betreiber erhebt
          wissentlich keine personenbezogenen Daten von Kindern unter 16 Jahren;
          werden solche Daten entdeckt, werden sie bei Feststellung gelöscht.
          Eine betreuende Person kann eine Akte für ein Kind führen, wie in
          Abschnitt 2 beschrieben; sie ist dann für die Eintragungen
          verantwortlich.
        </p>
      </Section>

      <Section id="changes" title="12. Änderungen dieser Erklärung">
        <p>
          Dieses Dokument trägt oben eine Fassungsnummer. Wesentliche Änderungen
          werden in den Versionshinweisen der Anwendung und im öffentlichen
          Changelog zusammengefasst. Die veröffentlichte Fassung ist an die
          Programmversion gebunden, mit der sie eingeführt wurde.
        </p>
      </Section>

      <Section id="contact" title="13. Kontakt">
        <p>
          Anliegen zu Daten in einer HealthLog-Instanz richten Sie an deren
          Betreiber, der über diese Daten verfügt. Der Entwickler hat keinen
          Zugang zu Instanzen, die andere betreiben.
        </p>
        <p>
          Für Datenschutzfragen zu dieser Website, zur Software oder zur
          iOS-Anwendung schreiben Sie an{" "}
          <a
            href="mailto:support@healthlog.dev?subject=DSGVO-Anfrage"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            support@healthlog.dev
          </a>
          . Dieses Postfach erreicht den Entwickler unmittelbar und ist der
          richtige Weg für alles, was personenbezogene Daten enthält.
        </p>
        <p>
          Alternativ können Sie ein Anliegen als öffentliches Issue unter{" "}
          <ExternalLink href="https://github.com/MBombeck/HealthLog/issues">
            github.com/MBombeck/HealthLog/issues
          </ExternalLink>{" "}
          einstellen. GitHub, Inc. betreibt den Issue-Tracker unter seiner
          eigenen{" "}
          <ExternalLink href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">
            Datenschutzerklärung
          </ExternalLink>
          . Schreiben Sie dort keine personenbezogenen Daten hinein; ein nicht
          öffentlicher Weg für den eigentlichen Austausch wird in der ersten
          Antwort angeboten.
        </p>
        <p>
          Allgemeine Supportfragen gehören auf die{" "}
          <Link
            href="/support"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            Support-Seite
          </Link>
          . Die Postanschrift des Betreibers steht im{" "}
          <Link
            href="/imprint"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            Impressum
          </Link>
          .
        </p>
      </Section>
    </PrivacyShell>
  );
}
