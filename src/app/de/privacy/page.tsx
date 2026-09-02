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
  "Wie HealthLog mit Gesundheitsdaten umgeht: Auftragsverarbeiter, Betroffenenrechte nach DSGVO und die Abgrenzung zum Medizinprodukt nach EU-MDR.";

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
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
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
  { href: "#sub-processors", label: "6. Auftragsverarbeiter" },
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
          Diese Erklärung gilt für die vom Betreiber selbst geführte
          Referenzinstanz und für die zugehörige iOS-Anwendung{" "}
          <em className="text-text-primary not-italic">HealthLog for iOS</em>{" "}
          (Bundle-Kennung <Code>io.bombeck.healthlog</Code>). Sie deckt die
          Webanwendung in Fassung {POLICY_VERSION} sowie die iOS-Anwendung ab
          Version 0.3 ab. Abschnitt 3 behandelt diese Website, healthlog.dev,
          die getrennt von der Anwendung betrieben wird.
        </p>
        <p>
          Für selbst gehostete Installationen unter fremder Kontrolle gilt die
          Datenschutzerklärung des jeweiligen Betreibers; dieses Dokument gilt
          nur für die Referenzinstanz.
        </p>
      </Section>

      <Section id="self-hosted" title="2. Selbsthosting als Bauprinzip">
        <p>
          HealthLog läuft auf Infrastruktur, die der Betreiber kontrolliert. Es
          gibt keine zentrale HealthLog-Cloud, keine gemeinsame
          Mandantendatenbank und kein Analyse-Backend eines Dritten. Wer
          HealthLog auf dem eigenen Server installiert, dessen Daten verlassen
          diesen Server nur, wenn der Betreiber ausdrücklich eine ausgehende
          Verbindung einrichtet (einen KI-Anbieter, eine Geräteanbindung, einen
          Telegram-Bot, ntfy, Push-Benachrichtigungen, ein externes Backup-Ziel).
          Abschnitt 6 führt jedes dieser Ziele auf.
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
          eigenen Kontaktweg besitzt. Das Löschen der Akte löscht die darin
          gehaltenen Daten.
        </p>
        <p>
          Bei einer selbst gehosteten Installation ist der Betreiber
          Verantwortlicher im Sinne der DSGVO. Der folgende Text beschreibt die
          eigene Instanz des Projektbetreibers; private Installationen folgen
          derselben Architektur, aber mit den Aufbewahrungs- und
          Auftragsverarbeiter-Entscheidungen ihres jeweiligen Betreibers.
        </p>
      </Section>

      <Section id="website-analytics" title="3. Diese Website (healthlog.dev)">
        <p>
          Diese Website wird getrennt von der oben beschriebenen Anwendung
          betrieben und speichert nichts auf Ihrem Gerät: keine Cookies, keinen
          lokalen Speicher, keine Werbe- oder seitenübergreifenden Kennungen und
          daher auch kein Einwilligungsbanner.
        </p>
        <p>
          Aggregierte Besuchszahlen werden mit{" "}
          <ExternalLink href="https://umami.is">Umami</ExternalLink> erhoben,
          einem cookiefreien Analysewerkzeug auf dem eigenen Server des
          Betreibers; es gelangen keine Analysedaten zu einem Dritten. Erfasst
          werden je Besuch die Seitenadresse, die verweisende Adresse, Browser,
          Betriebssystem, Gerätetyp und Land. Besucher werden über einen Hash
          gezählt, dessen Salt täglich neu gesetzt wird; die rohe IP-Adresse
          wird also nie gespeichert, und niemand lässt sich identifizieren oder
          über den Tag hinaus verfolgen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f
          DSGVO, das berechtigte Interesse daran zu wissen, welche Seiten
          tatsächlich gelesen werden. Da nichts auf Ihrem Gerät gelesen oder
          gespeichert wird, ist eine Einwilligung nach § 25 TTDSG nicht
          erforderlich.
        </p>
        <p>
          Die Anwendung selbst enthält kein Analyse-SDK eines Dritten und keine
          Telemetrie. Die Referenzinstanz liefert dasselbe cookiefreie
          Umami-Skript über ihre eigene Adresse aus und leitet die Ereignisse
          serverseitig an die Umami-Installation des Betreibers weiter, sodass
          der Analyse-Host keine Anfrage aus Ihrem Browser sieht. Bei einer
          selbst gehosteten Instanz ist das abgeschaltet, bis der Betreiber es
          einschaltet, und sie nimmt nie Verbindung zu dieser Website auf.
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
          Trainingseinheiten mit optional selbst angehängter GPS-Strecke; sowie
          persönliche Bestwerte, die daraus automatisch abgeleitet werden.
        </p>

        <SubHeading>4.3 Apple Health (iOS-Anwendung)</SubHeading>
        <p>
          Wenn Sie der iOS-Anwendung Lesezugriff auf Apple HealthKit erteilen,
          liest HealthLog Datensätze zu einer festen Liste von Kennungen
          (Körpermasse, Körperfettanteil, Körpertemperatur, Blutdruck
          systolisch und diastolisch, Blutzucker, Sauerstoffsättigung,
          Herzfrequenz, Ruhepuls, Herzratenvariabilität SDNN, VO₂max,
          Schrittzahl, Aktivitätsenergie, Etagen, Geh- und Laufstrecke,
          Umgebungs- und Kopfhörer-Lautstärke, Zeit im Tageslicht sowie
          Schlafanalyse mit voller Phasengenauigkeit). Die HealthKit-Daten
          bleiben auf Ihrem Gerät und in Ihrem iCloud-gestützten Health-Speicher;
          die iOS-Anwendung kopiert die einschlägigen Datensätze in Ihr
          HealthLog-Konto, damit die Weboberfläche dieselben Verläufe zeigen
          kann.
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
          (Erholung, Schlaf, Training, Zyklen, Profil, Körpermaße), Fitbit
          (Aktivität, kardiorespiratorische Fitness, Herzfrequenz,
          Sauerstoffsättigung, Atemfrequenz, Schlaf, Gewicht, Profil), Google
          Health (Aktivität und Fitness, Gesundheitswerte und Messungen, Schlaf,
          Profil), Oura (Tageswerte und Profil), Polar (die Lesebereiche von
          Accesslink), Strava (Aktivitäten, auch als privat markierte) und
          Nightscout (Sensor-Glukosewerte von Ihrer eigenen
          Nightscout-Instanz). Eine Verbindung lässt sich in HealthLog und beim
          Anbieter widerrufen; danach wird nichts mehr abgerufen.
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
          Wenn Sie den Coach aktivieren und einen Sprachmodell-Anbieter
          einrichten, sendet HealthLog auf Anforderung ein Kontextpaket an
          diesen Anbieter. Das Paket enthält aus den obigen Daten abgeleiteten
          Gesundheitskontext (Aggregate, jüngste Beobachtungen, Zielbereiche,
          optional Medikationskontext) und wird für jede Anfrage neu gebildet.
          Was der jeweilige Anbieter damit tut, steht in Abschnitt 6.
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

        <SubHeading>4.7 Geräte- und Integrationsdaten</SubHeading>
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

        <SubHeading>4.8 Sicherheit und Protokolle</SubHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Anmeldeereignisse: erfolgreiche und fehlgeschlagene Anmeldung,
            Passkey-Registrierung, Passwortänderung, Sitzungswiderruf.
            Aufbewahrt zur Sicherheitsanalyse.
          </li>
          <li>
            Server-Zugriffsprotokolle: Zeitpunkt, angefragter Pfad,
            Statuscode, User-Agent, IP-Adresse. 14 Tage aufbewahrt für
            Missbrauchsbegrenzung und Fehlersuche.
          </li>
          <li>
            Die IP-Adresse einer Anmeldung wird zu einer groben Ortsangabe und
            einem Netzbetreiber aufgelöst, damit die Sicherheitsseite zeigen
            kann, woher Ihre Sitzungen kamen. Auf der Referenzinstanz ist diese
            Auflösung eine ausgehende Abfrage; siehe Abschnitt 6.
          </li>
        </ul>

        <SubHeading>4.9 Nicht erhobene Daten</SubHeading>
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
          <li>Keine Kennungen sozialer Netzwerke, kein Auslesen von Kontakten.</li>
          <li>
            Keine Produktanalyse durch Dritte. Die Anwendung liefert kein
            Analyse-SDK für den Browser aus, und die in Abschnitt 3 beschriebene
            optionale Umami-Statistik geht an eine Installation, die der
            Betreiber selbst führt.
          </li>
        </ul>
      </Section>

      <Section id="purpose" title="5. Warum jede Kategorie erhoben wird">
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
            Betrieb des Dienstes. Beides sind Voreinstellungen des Betreibers
            und keine Nutzerentscheidung; beides kann der Betreiber abschalten.
          </li>
          <li>
            <span className="text-text-primary font-medium">Wetterkontext</span>
            : selbst erfasste Werte zu den Bedingungen des Tages in Beziehung
            setzen, für die Nutzer, die das Umweltmodul einschalten.
          </li>
          <li>
            <span className="text-text-primary font-medium">Produktanalyse</span>
            : findet durch Dritte nicht statt.
          </li>
        </ul>
      </Section>

      <Section id="sub-processors" title="6. Auftragsverarbeiter">
        <p>
          Die folgenden Anbieter können personenbezogene Daten im Auftrag der
          Referenzinstanz verarbeiten. Die Liste ist für den veröffentlichten
          Funktionsumfang abschließend. Alles unter &quot;verbundene Geräte und
          Dienste&quot; sowie jeder KI-Anbieter wird nur für eine Funktion
          eingesetzt, die Sie ausdrücklich eingeschaltet haben; die
          Passwortprüfung, die Ortsangabe zur Anmeldung und die Einträge zur
          Infrastruktur sind Voreinstellungen des Betreibers, die ohne
          Einzelentscheidung gelten. Selbst gehostete Instanzen anderer
          Betreiber können eine andere Auswahl verwenden.
        </p>
        <ul className="grid gap-3">
          <SubProcessor
            labels={LABELS}
            name="Anthropic, PBC"
            role="Anbieter für KI-Coach und Insights, wenn Sie in den Einstellungen Anthropic Claude wählen. Setzt Ihre ausdrückliche KI-Einwilligung voraus."
            data="Coach-Kontextpaket (Gesundheitskontext) und die Züge der Unterhaltung, für die Dauer der Anfrage."
            location="Vereinigte Staaten. Anthropic nennt ein Aufbewahrungsfenster von 30 Tagen zur Missbrauchskontrolle."
            policyUrl="https://www.anthropic.com/legal/privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="OpenAI, L.L.C. (API-Schlüssel)"
            role="Alternativer Anbieter für KI-Coach und Insights, wenn Sie ein OpenAI-Modell wählen. Setzt Ihre ausdrückliche KI-Einwilligung voraus."
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
            name="Fitbit (Google LLC)"
            role="Geräte-Synchronisation, wenn Sie ein Fitbit-Konto verbinden. Angefragter Umfang: Aktivität, kardiorespiratorische Fitness, Herzfrequenz, Sauerstoffsättigung, Atemfrequenz, Schlaf, Gewicht, Profil."
            data="OAuth-Token, die Fitbit-Nutzerkennung und die von diesem Umfang erfassten Datensätze."
            location="Infrastruktur des Anbieters. Die Anbindung legt keine Region fest."
            policyUrl="https://www.fitbit.com/global/de/legal/privacy-policy"
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
            name="Apple, Inc."
            role="HealthKit (Speicher auf dem Gerät; Datensätze verlassen Gerät und iCloud nicht, solange Sie HealthLog keinen Lesezugriff erteilen) und Apple Push Notification service (bei aktivierten Benachrichtigungen)."
            data="Der HealthKit-Zugriff bleibt lokal auf dem Gerät. APNs erhält ein Gerätetoken, die Bundle-Kennung der Anwendung und den Inhalt der Benachrichtigung."
            location="Vereinigte Staaten. HealthKit-Daten liegen auf Ihrem Gerät und in iCloud-verschlüsselten Sicherungen unter Ihrer Apple-ID."
            policyUrl="https://www.apple.com/legal/privacy/"
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
            role="Prüft ein neues Passwort gegen bekannte Leak-Sammlungen, wenn ein Konto angelegt wird, wenn Sie Ihr Passwort ändern und wenn eine Administratorin oder ein Administrator es zurücksetzt. Niemand schaltet das ein: Es ist eine Voreinstellung des Betreibers. Die Prüfung ist fehlertolerant, ein nicht erreichbarer Dienst blockiert also nie eine Passwortänderung."
            data="Die ersten fünf Zeichen des SHA-1-Hashes des Passworts, sonst nichts. Die übrigen 35 Zeichen werden auf dem Server verglichen, sodass weder der vollständige Hash noch das Passwort die Instanz verlässt; die Anfrage verlangt Auffüllbytes, damit die Antwortgröße nicht verrät, welcher Bereich abgefragt wurde. Eine Kontokennung wird nicht gesendet."
            location="Infrastruktur des Anbieters."
            policyUrl="https://haveibeenpwned.com/Privacy"
          />
          <SubProcessor
            labels={LABELS}
            name="ip-api.com (Ortsangabe zur Anmeldung)"
            role="Ordnet der IP-Adresse einer Anmeldung einen groben Ort zu, damit die Sicherheitsseite zeigen kann, woher Ihre Sitzungen kamen. Niemand schaltet das ein: Es läuft für jede Anmeldung, die die Instanz nicht aus einer lokalen Datenbank zuordnen kann. Auf der Referenzinstanz liegt derzeit keine lokale Datenbank vor, also erreicht jede Anmeldung den Anbieter. Ein Betreiber kann das mit IP_GEO_LOOKUP_DISABLED=1 ganz abschalten, mit IP_GEO_LOOKUP_URL einen anderen Anbieter einsetzen (die schlüssellose Voreinstellung ist ipwho.is) oder die unten genannten Offline-Datenbanken bereitstellen und die Zuordnung auf dem eigenen Server halten."
            data="Die IP-Adresse der Anmeldung, sonst nichts. Keine Kontokennung, keine Sitzung, keine Gesundheitsdaten."
            location="Infrastruktur des Anbieters. Für den kostenlosen Endpunkt gibt es keinen veröffentlichten Auftragsverarbeitungsvertrag."
            policyUrl="https://ip-api.com/docs/legal"
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
            role="Hosting des öffentlichen Quelltext-Repositorys und des Issue-Trackers, der als alternativer Support-Kanal dient. Die Aktualisierungsprüfung in der Anwendung fragt zudem die GitHub-Releases-API nach der aktuellen Version."
            data="Inhalte von Issues und freiwillig angehängte Dateien. Bitte keine personenbezogenen Daten in öffentliche Issues schreiben; ein nicht öffentlicher Weg wird in der ersten Antwort angeboten. Die Aktualisierungsprüfung sendet keine Kontodaten."
            location="Vereinigte Staaten."
            policyUrl="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
          />
          <SubProcessor
            labels={LABELS}
            name="Cloudflare, Inc."
            role="Autoritative DNS-Auflösung für die Zone healthlog.dev."
            data="Quell-IP-Adresse und User-Agent zum Zeitpunkt der DNS-Auflösung."
            location="Vereinigte Staaten; das übliche globale Anycast-Netz von Cloudflare."
            policyUrl="https://www.cloudflare.com/privacypolicy/"
          />
          <SubProcessor
            labels={LABELS}
            name="Hetzner Online GmbH"
            role="Hardware-Hoster für Anwendungsserver und PostgreSQL-Datenbank."
            data="Datenträger- und Netzverkehr zwischen den vom Betreiber kontrollierten virtuellen Maschinen und dem öffentlichen Internet."
            location="Deutschland (Europäische Union). Sämtliche Anwendungsdaten der Referenzinstanz liegen auf Hetzner-Infrastruktur unter deutscher Rechtsordnung."
            policyUrl="https://www.hetzner.com/de/legal/privacy-policy"
          />
        </ul>
        <p>
          Fehlerberichte der Referenzinstanz gehen an eine
          GlitchTip-Installation, die der Betreiber auf derselben Infrastruktur
          führt, nicht an einen fremden Anbieter für Fehlerauswertung. Ein
          Bericht enthält die Fehlermeldung und den Aufrufstapel, den
          angefragten Pfad, den User-Agent und eine Anfragekennung, jeweils
          durch eine Bereinigungsstufe geführt, die Geheimnisse entfernt.
          Gesundheitsdaten enthält er nicht.
        </p>
        <p>
          Die Software unterstützt weitere ausgehende Ziele, die die
          Referenzinstanz nicht nutzt: das Ausliefern der strukturierten
          Protokolle an einen Loki-Endpunkt, den Versand von
          Benachrichtigungs-E-Mails über ein SMTP-Relay und die Anmeldung über
          einen OpenID-Connect-Identitätsanbieter. Jedes davon bleibt aus, bis
          ein Betreiber es einrichtet, und bei einer selbst gehosteten
          Installation ist das dessen Entscheidung und dessen Sache, sie
          offenzulegen.
        </p>
      </Section>

      <Section id="storage" title="7. Speicherung, Verschlüsselung, Aufbewahrung">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Primärer Datenspeicher: PostgreSQL auf einem Server bei Hetzner in
            Deutschland. Datenträger verschlüsselt. Sensible Spalten
            (Anmeldetoken, Geheimnisse von Anbindungen, Coach-Unterhaltungen und
            das daraus abgeleitete Gedächtnis) sind zusätzlich spaltenweise mit
            AES-256-GCM verschlüsselt, unter einem vom Datenbankschlüssel
            getrennten Schlüssel.
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
            Sicherungen: Die Anwendung bringt eine eigene verschlüsselte
            Off-Host-Sicherung mit, die unter einem vom Datenbankschlüssel
            getrennten Schlüssel auf ein S3-kompatibles Ziel schreibt. Sie ist
            optional und auf der Referenzinstanz nicht eingerichtet. Was auf
            Ebene des Servers oder des Hosters gesichert wird, ist nicht
            Gegenstand dieser Erklärung.
          </li>
          <li>
            Aufbewahrung: Kontodaten bleiben, bis Sie die Löschung verlangen
            (siehe Abschnitt 8) oder das Konto administrativ geschlossen wird.
            Sicherheitsprotokolle werden 365 Tage aufbewahrt,
            Server-Zugriffsprotokolle 14 Tage, Zustellversuche von
            Benachrichtigungen 90 Tage. Bis August 2026 stand hier eine Frist
            von 90 Tagen für das Sicherheitsprotokoll, was die Software nie so
            gemacht hat: 365 Tage sind die eingebaute Voreinstellung, und jeder
            Betreiber setzt seine eigene Frist mit{" "}
            <Code>AUDIT_LOG_RETENTION_DAYS</Code>.
          </li>
          <li>
            Löschung: Die Kontolöschung greift durch alle nutzerbezogenen
            Tabellen, darunter Gesundheitsbeobachtungen, Sitzungen,
            Sicherheitsprotokoll, Token von Anbindungen, Abonnements für
            Benachrichtigungen, Coach-Unterhaltungen, Angaben und Vorsätze,
            Erfolge und hochgeladene Dateien. Die Löschung wirkt sofort, und
            da die Referenzinstanz keine eigene Off-Host-Sicherung vorhält, gibt
            es keine solche Kopie, aus der die Daten zurückkehren könnten.
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
            . Die Aktion greift sofort durch alle nutzerbezogenen Tabellen;
            wie mit Sicherungen umgegangen wird, steht in Abschnitt 7.
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
            : bei der Bundesbeauftragten oder dem Bundesbeauftragten für den
            Datenschutz und die Informationsfreiheit (BfDI) auf Bundesebene oder
            bei der Aufsichtsbehörde Ihres gewöhnlichen Aufenthalts.
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
          Für Datenschutzfragen und Anträge nach Art. 15 bis 22 DSGVO schreiben
          Sie an{" "}
          <a
            href="mailto:support@healthlog.dev?subject=DSGVO-Anfrage"
            className="text-purple hover:text-cyan underline-offset-2 hover:underline"
          >
            support@healthlog.dev
          </a>
          . Nennen Sie darin, welches Recht Sie geltend machen, und die
          E-Mail-Adresse des betroffenen Kontos. Dieses Postfach erreicht den
          Betreiber der Referenzinstanz unmittelbar und ist der richtige Weg für
          alles, was personenbezogene Daten enthält.
        </p>
        <p>
          Alternativ können Sie ein Anliegen als öffentliches Issue unter{" "}
          <ExternalLink href="https://github.com/MBombeck/HealthLog/issues">
            github.com/MBombeck/HealthLog/issues
          </ExternalLink>{" "}
          einstellen. Schreiben Sie dort keine personenbezogenen Daten hinein;
          ein nicht öffentlicher Weg für den eigentlichen Austausch wird in der
          ersten Antwort angeboten.
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
