import Link from "next/link";

const tests=[1,2,3,4,5,6,7];

export default function Spreken(){
  return <main style={{minHeight:"100vh",background:"#fafafa"}}>
    <div style={{maxWidth:1080,margin:"0 auto",padding:"42px 24px 70px"}}>
      <Link href="/course?level=A2" style={{color:"#333"}}>← A2 Nederlands</Link>

      <section style={{background:"#111",color:"#fff",borderRadius:24,padding:32,margin:"24px 0 30px"}}>
        <small style={{opacity:.75,fontWeight:700}}>A2 · SPREKEN</small>
        <h1 style={{fontSize:40,margin:"10px 0"}}>Spreekvaardigheid</h1>
        <p style={{fontSize:18,lineHeight:1.6,maxWidth:760,opacity:.88}}>
          Luister naar de vraag, antwoord hardop en controleer daarna het voorbeeldantwoord.
        </p>
        <div style={{display:"flex",gap:18,marginTop:20,flexWrap:"wrap"}}>
          <b>7 oefentoetsen</b>
          <b>84 spreekvragen</b>
          <b>Extra oefening</b>
        </div>
      </section>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}>
        {tests.map(n=><Link
          key={n}
          href={`/a2/spreken/oefentoets/${n}`}
          style={{background:"#fff",border:"1px solid #ddd",borderRadius:18,padding:22,textDecoration:"none",color:"#111",boxShadow:"0 2px 10px rgba(0,0,0,.04)"}}
        >
          <div style={{fontSize:30}}>🎙️</div>
          <small style={{color:"#777"}}>OEFENTOETS {n}</small>
          <h2 style={{fontSize:21,margin:"8px 0"}}>Spreekvaardigheid</h2>
          <p style={{color:"#666",lineHeight:1.5}}>12 spreekvragen · luisteren · antwoorden · controleren</p>
          <b>Start toets →</b>
        </Link>)}

        <Link
          href="/a2/spreken/extra"
          style={{background:"#fff",border:"2px solid #111",borderRadius:18,padding:22,textDecoration:"none",color:"#111",boxShadow:"0 2px 10px rgba(0,0,0,.04)"}}
        >
          <div style={{fontSize:30}}>💬</div>
          <small style={{color:"#777"}}>EXTRA OEFENING</small>
          <h2 style={{fontSize:21,margin:"8px 0"}}>Extra spreektraining</h2>
          <p style={{color:"#666",lineHeight:1.5}}>Algemene vragen en thematische foto-opdrachten.</p>
          <b>Open oefening →</b>
        </Link>
      </div>
    </div>
  </main>
}