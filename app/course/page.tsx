"use client";

import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {curriculum} from "../../data/curriculum";

const skillCards = [
  {title:"Schrijven",icon:"✍️",desc:"E-mails, formulieren en korte teksten.",href:"/a2/schrijven",meta:"5 oefentoetsen · 20 opdrachten",active:true},
  {title:"Spreken",icon:"🎙️",desc:"Korte antwoorden, situaties en extra spreektraining.",href:"/a2/spreken",meta:"7 oefentoetsen · 84 vragen",active:true},
  {title:"Lezen",icon:"📖",desc:"Korte teksten, berichten en praktische leesvragen.",href:"/a2/lezen",meta:"Leesvaardigheid",active:true},
  {title:"Luisteren",icon:"🎧",desc:"Gesprekken, mededelingen en luistervragen.",href:"/a2/luisteren",meta:"18 hoofdstukken · 107 audiofragmenten",active:true},
  {title:"KNM",icon:"🇳🇱",desc:"Kennis van de Nederlandse Maatschappij: wonen, werk, zorg, overheid en dagelijks leven.",href:"/a2/knm",meta:"KNM-cursus · oefenvragen · proefexamens",active:true},
];

export default function Course(){
  const params=useSearchParams();
  const level=params.get("level")==="A2"?"A2":"A1";
  const modules=curriculum.filter(m=>m.level===level);

  return <main style={{minHeight:"100vh",background:"#fafafa"}}>
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 7%",borderBottom:"1px solid #e8e8e8",background:"#fff",position:"sticky",top:0,zIndex:10,flexWrap:"wrap",gap:16}}>
      <Link href="/" style={{fontWeight:800,fontSize:24,textDecoration:"none",color:"#111"}}>DutchPass</Link>
      <div style={{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"}}>
        <Link href="/course?level=A1" style={{fontWeight:level==="A1"?800:500,color:"#111",textDecoration:"none",borderBottom:level==="A1"?"3px solid #111":"3px solid transparent",padding:"8px 2px"}}>A1</Link>
        <Link href="/course?level=A2" style={{fontWeight:level==="A2"?800:500,color:"#111",textDecoration:"none",borderBottom:level==="A2"?"3px solid #111":"3px solid transparent",padding:"8px 2px"}}>A2</Link>
        <Link href="/practice" style={{color:"#333",textDecoration:"none"}}>Oefenen</Link>
        <Link href="/dashboard" style={{color:"#333",textDecoration:"none"}}>Voortgang</Link>
      </div>
    </nav>

    <div style={{maxWidth:1080,margin:"0 auto",padding:"42px 24px 70px"}}>
      {level==="A2" ? <>
        <section style={{background:"#111",color:"#fff",borderRadius:24,padding:"34px",marginBottom:28}}>
          <small style={{opacity:.75,fontWeight:700,letterSpacing:1}}>A2 NEDERLANDS</small>
          <h1 style={{fontSize:42,margin:"10px 0 10px"}}>Kies wat je vandaag wilt oefenen</h1>
          <p style={{fontSize:18,lineHeight:1.6,maxWidth:700,margin:0,opacity:.88}}>Ga direct naar examenvaardigheden of werk verder aan dagelijks Nederlands. Geen lange lijst meer: eerst kiezen, daarna oefenen.</p>
        </section>

        <h2 style={{margin:"10px 0 14px"}}>Examentraining</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16,marginBottom:36}}>
          {skillCards.map(card=>card.active?
            <Link key={card.title} href={card.href} style={{display:"block",background:"#fff",border:"1px solid #ddd",borderRadius:18,padding:22,textDecoration:"none",color:"#111",boxShadow:"0 2px 10px rgba(0,0,0,.04)"}}>
              <div style={{fontSize:30}}>{card.icon}</div>
              <h3 style={{fontSize:22,margin:"12px 0 6px"}}>{card.title}</h3>
              <p style={{color:"#555",lineHeight:1.5,minHeight:48}}>{card.desc}</p>
              <div style={{fontSize:14,color:"#777",marginBottom:16}}>{card.meta}</div>
              <b>Open oefenen →</b>
            </Link>
          :
            <div key={card.title} style={{background:"#f3f3f3",border:"1px solid #e1e1e1",borderRadius:18,padding:22,color:"#777"}}>
              <div style={{fontSize:30}}>{card.icon}</div>
              <h3 style={{fontSize:22,margin:"12px 0 6px",color:"#444"}}>{card.title}</h3>
              <p style={{lineHeight:1.5,minHeight:48}}>{card.desc}</p>
              <div style={{fontSize:14}}>{card.meta}</div>
            </div>
          )}
        </div>

        <section style={{background:"#fff",border:"1px solid #ddd",borderRadius:20,padding:26}}>
          <div style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"flex-start",flexWrap:"wrap"}}>
            <div>
              <small style={{fontWeight:700,color:"#666"}}>A2 · DAGELIJKS NEDERLANDS</small>
              <h2 style={{margin:"8px 0"}}>Dagelijks leven</h2>
              <p style={{color:"#666",marginTop:0}}>Praktische thema's voor wonen, werk, gezondheid en instanties.</p>
            </div>
            <Link href="/learn" style={{padding:"10px 14px",border:"1px solid #111",borderRadius:10,textDecoration:"none",color:"#111"}}>Open lessen →</Link>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginTop:18}}>
            {["Wonen en buurt","Werk en opleiding","Gemeente en instanties","Dokter en apotheek","Reizen en verkeer","Telefoon en e-mail","Formulieren invullen","Meningen en plannen"].map((x,i)=>
              <div key={x} style={{padding:"13px 14px",background:"#fafafa",borderRadius:12,border:"1px solid #eee"}}><b style={{marginRight:8}}>{i+1}.</b>{x}</div>
            )}
          </div>
        </section>
      </> : <>
        <section style={{marginBottom:28}}>
          <small style={{fontWeight:700,color:"#666"}}>A1 NEDERLANDS</small>
          <h1 style={{fontSize:40,margin:"8px 0"}}>Begin met de basis</h1>
          <p style={{fontSize:18,color:"#666"}}>Leer Nederlands voor eenvoudige dagelijkse situaties.</p>
        </section>
        {modules.map(m=><section key={m.slug} style={{background:"#fff",border:"1px solid #ddd",borderRadius:18,padding:24,margin:"18px 0"}}>
          <h2>{m.title}</h2>
          <p style={{color:"#666"}}>{m.description}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:10,marginTop:16}}>
            {m.lessons.map((x,i)=><div key={x} style={{padding:"13px 14px",background:"#fafafa",border:"1px solid #eee",borderRadius:12}}><b>{i+1}.</b> {x}</div>)}
          </div>
        </section>)}
      </>}
    </div>
  </main>
}
