import Link from "next/link";
import {listeningChapters,listeningTrackCount} from "../../../data/a2-listening-audio";
import styles from "./page.module.css";

export default function Luisteren(){
  return <main className={styles.page}>
    <div className={styles.container}>
      <Link href="/course?level=A2" className={styles.back}>← A2 Nederlands</Link>

      <section className={styles.hero}>
        <small>A2 · LUISTEREN</small>
        <h1>Luistervaardigheid</h1>
        <p>Oefen met dialogen, intensief luisteren, pauzeversies en opdrachten uit hoofdstuk 1–18.</p>
        <div className={styles.stats}>
          <b>18 hoofdstukken</b>
          <b>{listeningTrackCount} audiofragmenten</b>
        </div>
      </section>

      <div className={styles.chapterGrid}>
        {listeningChapters.map(ch=>
          <details key={ch.chapter} className={styles.chapterCard}>
            <summary className={styles.chapterSummary}>
              <div className={styles.chapterIcon}>🎧</div>
              <div className={styles.chapterText}>
                <small>HOOFDSTUK {ch.chapter}</small>
                <h2>{ch.title}</h2>
                <span>{ch.tracks.length} audiofragmenten</span>
              </div>
              <span className={styles.chevron}>⌄</span>
            </summary>

            <div className={styles.trackList}>
              {ch.tracks.map(track=>
                <div key={track.file} className={styles.track}>
                  <div className={styles.trackLabel}>{track.label}</div>
                  <audio controls preload="none" className={styles.audio}>
                    <source src={`/audio/nig/${track.file}`} type="audio/mpeg"/>
                  </audio>
                </div>
              )}
            </div>
          </details>
        )}
      </div>

      <p className={styles.note}>
        De audio wordt pas geladen wanneer je een fragment afspeelt. Dat houdt de pagina sneller op mobiel.
      </p>
    </div>
  </main>
}
