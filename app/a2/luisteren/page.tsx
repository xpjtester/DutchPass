import Link from "next/link";
import {listeningChapters,listeningTrackCount} from "../../../data/a2-listening-audio";

export default function Luisteren(){
  return <main style={{minHeight:"100vh",background:"#fafafa"}}>
    <div style={{maxWidth:1080,margin:"0 auto",padding:"42px 24px 70px"}}>
      <Link href="/course?level=A2" style={{color:"#333"}}>← A2 Nederlands</Link>

      <section style={{background:"#111",color:"#fff",borderRadius:24,padding:32,margin:"24px 0 30px"}}>
        <small style={{opacity:.75,fontWeight:700}}>A2 · LUISTEREN</small>
        <h1 style={{fontSize:40,margin:"10px 0"}}>Luistervaardigheid</h1>
        <p style={{fontSize:18,lineHeight:1.6,maxWidth:760,opacity:.88}}>
          Oefen met dialogen, intensief luisteren, pauzeversies en opdrachten uit hoofdstuk 1–9.
        </p>
        <div style={{display:"flex",gap:18,marginTop:20,flexWrap:"wrap"}}>
          <b>9 hoofdstukken</b>
          <b>{listeningTrackCount} audiofragmenten</b>
        </div>
      </section>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16}}>
        {listeningChapters.map(ch=><section key={ch.chapter} style={{background:"#fff",border:"1px solid #ddd",borderRadius:18,padding:22,boxShadow:"0 2px 10px rgba(0,0,0,.04)"}}>
          <div style={{fontSize:30}}>🎧</div>
          <small style={{color:"#777"}}>HOOFDSTUK {ch.chapter}</small>
          <h2 style={{fontSize:21,margin:"8px 0 14px"}}>{ch.title}</h2>
          <div style={{display:"grid",gap:12}}>
            {ch.tracks.map(track=><div key={track.file} style={{padding:"12px 0",borderTop:"1px solid #eee"}}>
              <div style={{fontWeight:700,marginBottom:8}}>{track.label}</div>
              <audio controls preload="none" style={{width:"100%"}}>
                <source src={`/audio/nig/${track.file}`} type="audio/mpeg"/>
              </audio>
            </div>)}
          </div>
        </section>)}
      </div>
      <p style={{fontSize:13,color:"#777",marginTop:28}}>Plaats de MP3-bestanden lokaal in <code>public/audio/nig/</code>. De pagina koppelt daarna automatisch aan alle 56 bestanden.</p>
    </div>
  </main>
}
