import Link from "next/link";

const tests=[1,2,3,4,5];

export default function Writing(){
  return <main style={{minHeight:"100vh",background:"#fafafa"}}>
    <div style={{maxWidth:1080,margin:"0 auto",padding:"42px 24px 70px"}}>
      <Link href="/course?level=A2" style={{color:"#333"}}>← A2 Nederlands</Link>

      <section style={{background:"#111",color:"#fff",borderRadius:24,padding:32,margin:"24px 0 30px"}}>
        <small style={{opacity:.75,fontWeight:700}}>A2 · SCHRIJVEN</small>
        <h1 style={{fontSize:40,margin:"10px 0"}}>Schrijfvaardigheid</h1>
        <p style={{fontSize:18,lineHeight:1.6,maxWidth:760,opacity:.88}}>
          Train e-mails, formulieren en korte teksten met volledige A2-oefentoetsen.
        </p>
        <div style={{display:"flex",gap:18,marginTop:20,flexWrap:"wrap"}}>
          <b>5 oefentoetsen</b>
          <b>20 opdrachten</b>
          <b>38 punten per toets</b>
        </div>
      </section>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}>
        {tests.map(n=><Link
          key={n}
          href={n===1?"/a2/schrijven/oefentoets-1":`/a2/schrijven/oefentoets/${n}`}
          style={{background:"#fff",border:"1px solid #ddd",borderRadius:18,padding:22,textDecoration:"none",color:"#111",boxShadow:"0 2px 10px rgba(0,0,0,.04)"}}
        >
          <div style={{fontSize:30}}>✍️</div>
          <small style={{color:"#777"}}>OEFENTOETS {n}</small>
          <h2 style={{fontSize:21,margin:"8px 0"}}>Schrijfvaardigheid</h2>
          <p style={{color:"#666",lineHeight:1.5}}>4 opdrachten · 38 punten · richttijd 40 minuten</p>
          <b>Start toets →</b>
        </Link>)}
      </div>
    </div>
  </main>
}