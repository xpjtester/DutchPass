"use client";

import Link from "next/link";
import { useState } from "react";
import { curriculum } from "../../data/curriculum";

export default function Course() {
  const [level, setLevel] = useState<"A1" | "A2">("A1");
  const modules = curriculum.filter((m) => m.level === level);

  return (
    <main style={{ maxWidth: 980, margin: "50px auto", padding: 24 }}>
      <Link href="/">← DutchPass</Link>
      <h1>Nederlandse cursus</h1>

      <div style={{ display: "flex", gap: 8, margin: "28px 0", borderBottom: "1px solid #ddd" }}>
        {(["A1", "A2"] as const).map((item) => (
          <button
            key={item}
            onClick={() => setLevel(item)}
            style={{
              border: 0,
              borderBottom: level === item ? "3px solid #111" : "3px solid transparent",
              background: "transparent",
              padding: "12px 28px",
              fontSize: 20,
              fontWeight: level === item ? 700 : 500,
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <p style={{ color: "#666" }}>
        {level === "A1"
          ? "Begin met de basis van het Nederlands voor dagelijks gebruik."
          : "Werk verder aan zelfstandig Nederlands en bereid je voor op het A2-examen."}
      </p>

      {modules.map((m) => (
        <section key={m.slug} style={{ border: "1px solid #ddd", borderRadius: 16, padding: 22, margin: "20px 0" }}>
          <small>{m.level}</small>
          <h2>{m.title}</h2>
          <p>{m.description}</p>
          <p><b>Vaardigheden:</b> {m.skills.join(" · ")}</p>
          <ol>
            {m.lessons.map((x) => <li key={x} style={{ margin: "8px 0" }}>{x}</li>)}
          </ol>
          {m.slug === "a2-examen" && <Link href="/a2/schrijven">Open A2 examentraining →</Link>}
        </section>
      ))}
    </main>
  );
}
