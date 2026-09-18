"use client";
import Link from "next/link";
import {useState} from "react";
import {a2WritingTests} from "../../../../data/a2-writing-tests";

export default function WritingTestPage({params}:{params:{number:string}}){
 const n=Number(params.number); const tasks=a2WritingTests[n]; const[answers,setAnswers]=useState<Record<number,string>>({});const[show,setShow]=useState<Record<number,boolean>>({});
 if(!tasks)return <main style={{maxWidth:820,margin:"50px auto",padding:24}}><Link href="/a2/schrijven">← Schrijven</Link><h1>Toets niet gevonden</h1></main>;
 return <main style={{maxWidth:820,margin:"50px auto",padding:24}}><Link href="/a2/schrijven">← Schrijfvaardigheid</Link><h1>A2 Schrijfvaardigheid · Oefentoets {n}</h1><p>4 opdrachten · maximaal 38 punten · richttijd 40 minuten</p>{tasks.map(t=><section key={t.id} style={{border:"1px solid #ddd",borderRadius:16,padding:22,margin:"22px 0"}}><div style={{display:"flex",justifyContent:"space-between",gap:16}}><h2>{t.id}. {t.title}</h2><b>{t.maxScore} punten</b></div><p>{t.instructions}</p>{t.to&&<p><b>Aan:</b> {t.to}<br/><b>Onderwerp:</b> {t.subject}</p>}{t.prompts&&<ul>{t.prompts.map(p=><li key={p}>{p}</li>)}</ul>}<textarea value={answers[t.id]||""} onChange={e=>setAnswers({...answers,[t.id]:e.target.value})} placeholder="Schrijf hier uw antwoord..." style={{width:"100%",minHeight:150,padding:12,boxSizing:"border-box"}}/><div style={{marginTop:12}}><button onClick={()=>setShow({...show,[t.id]:!show[t.id]})}>{show[t.id]?"Verberg voorbeeld":"Bekijk voorbeeldantwoord"}</button></div>{show[t.id]&&<pre style={{whiteSpace:"pre-wrap",background:"#f6f6f6",padding:14,borderRadius:10}}>{t.sampleAnswer}</pre>}</section>)}</main>
}
