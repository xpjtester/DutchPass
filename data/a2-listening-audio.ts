export type ListeningTrack={file:string;label:string;kind:"Dialoog"|"Dialoog met pauzes"|"Intensief"|"Intensief met pauzes"|"Opdracht"|"Extra"};
export type ListeningChapter={chapter:number;title:string;tracks:ListeningTrack[]};

const names=["h1-alfabet.mp3","h1-alfabet-pauzes.mp3","h1-dialoog.mp3","h1-dialoog-pauzes.mp3","h1-intens.mp3","h1-intens-pauzes.mp3","h1-opdr10.mp3","h1-telwoorden.mp3","h1-telwoorden-pauzes.mp3","h2-dialoog.mp3","h2-dialoog-pauzes.mp3","h2-intens.mp3","h2-intens-pauzes.mp3","h2-opdr15.mp3","h2-opdr16.mp3","h3-dialoog.mp3","h3-dialoog-pauzes.mp3","h3-intens.mp3","h3-intens-pauzes.mp3","h3-opdr12.mp3","h3-opdr13.mp3","h4-dialoog.mp3","h4-dialoog-pauzes.mp3","h4-intens.mp3","h4-intens-pauzes.mp3","h4-opdr9.mp3","h4-opdr10.mp3","h5-dialoog.mp3","h5-dialoog-pauzes.mp3","h5-intens.mp3","h5-intens-pauzes.mp3","h5-opdr14.mp3","h5-opdr15.mp3","h5-opdr16.mp3","h6-dialoog.mp3","h6-dialoog-pauzes.mp3","h6-intens.mp3","h6-intens-pauzes.mp3","h6-opdr12.mp3","h7-dialoog.mp3","h7-dialoog-pauzes.mp3","h7-intens.mp3","h7-intens-pauzes.mp3","h7-opdr15.mp3","h8-dialoog.mp3","h8-dialoog-pauzes.mp3","h8-intens.mp3","h8-intens-pauzes.mp3","h8-opdr13.mp3","h8-opdr14.mp3","h9-dialoog.mp3","h9-dialoog-pauzes.mp3","h9-intens.mp3","h9-intens-pauzes.mp3","h9-opdr17a.mp3","h9-opdr17b.mp3","h15-dialoog-pauzes.mp3","h15-intens.mp3","h15-intens-pauzes.mp3","h15-opdr14.mp3","h16-dialoog.mp3","h16-dialoog-pauzes.mp3","h16-intens.mp3","h16-intens-pauzes.mp3","h16-opdr10.mp3","h17-dialoog.mp3","h17-dialoog-pauzes.mp3","h17-intens.mp3","h17-opdr4a.mp3","h17-opdr4b.mp3","h17-opdr4c.mp3","h17-opdr4d.mp3","h17-opdr4e.mp3","h17-opdr4f.mp3","h17-opdr12.mp3","h17-opdr13.mp3","h18-dialoog.mp3","h18-dialoog-pauzes.mp3","h18-intens.mp3","h18-intens-pauzes.mp3","h18-opdr11.mp3","h10-dialoog.mp3","h10-dialoog-pauzes.mp3","h10-intens.mp3","h10-intens-pauzes.mp3","h10-opdr14.mp3","h11-dialoog.mp3","h11-dialoog-pauzes.mp3","h11-intens.mp3","h11-intens-pauzes.mp3","h11-opdr13b.mp3","h12-dialoog.mp3","h12-dialoog-pauzes.mp3","h12-intens.mp3","h12-intens-pauzes.mp3","h12-opdr10.mp3","h12-opdr11.mp3","h13-dialoog.mp3","h13-dialoog-pauzes.mp3","h13-intens.mp3","h13-intens-pauzes.mp3","h14-dialoog.mp3","h14-dialoog-pauzes.mp3","h14-intens.mp3","h14-opdr12.mp3","h14-opdr13.mp3","h15-dialoog.mp3"];
function labelFor(file:string){
  if(file.includes("dialoog-pauzes")) return "Dialoog met pauzes";
  if(file.includes("dialoog")) return "Dialoog";
  if(file.includes("intens-pauzes")) return "Intensief met pauzes";
  if(file.includes("intens")) return "Intensief luisteren";
  if(file.includes("alfabet-pauzes")) return "Alfabet met pauzes";
  if(file.includes("alfabet")) return "Alfabet";
  if(file.includes("telwoorden-pauzes")) return "Telwoorden met pauzes";
  if(file.includes("telwoorden")) return "Telwoorden";
  const m=file.match(/opdr([0-9]+[a-z]?)/);
  return m ? `Opdracht ${m[1].toUpperCase()}` : file;
}
function kindFor(file:string):ListeningTrack["kind"]{
  if(file.includes("dialoog-pauzes")) return "Dialoog met pauzes";
  if(file.includes("dialoog")) return "Dialoog";
  if(file.includes("intens-pauzes")) return "Intensief met pauzes";
  if(file.includes("intens")) return "Intensief";
  if(file.includes("opdr")) return "Opdracht";
  return "Extra";
}
export const listeningChapters:ListeningChapter[]=Array.from({length:18},(_,i)=>{
  const chapter=i+1;
  return {
    chapter,
    title:`Hoofdstuk ${chapter}`,
    tracks:names.filter(f=>f.startsWith(`h${chapter}-`)).map(file=>({file,label:labelFor(file),kind:kindFor(file)}))
  };
});
export const listeningTrackCount=names.length;
