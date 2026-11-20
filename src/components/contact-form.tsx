"use client";

import { useState } from "react";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

const whatsappNumber = site.whatsappUrl?.match(/wa\.me\/(\d+)/)?.[1] ?? null;

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const composed = () => {
    const intro = name.trim() ? `Olá, Bruno! Aqui é ${name.trim()}.` : "Olá, Bruno!";
    const body = message.trim() || "Vi seu portfólio e gostaria de conversar.";
    return `${intro}\n\n${body}`;
  };

  const sendWhatsapp = () => {
    if (!whatsappNumber) return;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(composed())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    const subject = name.trim() ? `Contato pelo portfólio: ${name.trim()}` : "Contato pelo portfólio";
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composed())}`;
  };

  const copyEmail = async () => {
    setError("");
    try {
      await navigator.clipboard.writeText(site.contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setError("Não deu para copiar automaticamente. Selecione o e-mail acima e copie.");
    }
  };

  const field =
    "w-full rounded-sm border border-line bg-ink/70 px-4 py-3 text-base text-bone placeholder:text-muted/70 focus:border-cyan focus:outline-none";

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        sendWhatsapp();
      }}
    >
      <label className="grid gap-2 text-sm font-medium text-bone">
        Seu nome
        <input
          className={field}
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          placeholder="Como posso te chamar?"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-bone">
        Mensagem
        <textarea
          className={`${field} min-h-32 resize-y`}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Vaga, projeto, site para o seu negócio, dúvida sobre algum projeto..."
        />
      </label>

      <div className="flex flex-wrap gap-3">
        {whatsappNumber ? (
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-sm bg-red px-5 py-3 text-sm font-semibold text-white shadow-[4px_4px_0_0_rgba(241,239,233,0.9)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(241,239,233,0.9)]"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar pelo WhatsApp
          </button>
        ) : null}
        <button
          type="button"
          onClick={sendEmail}
          className="inline-flex items-center gap-2 rounded-sm border border-bone/80 px-5 py-3 text-sm font-semibold text-bone transition hover:bg-bone hover:text-ink"
        >
          <Mail className="h-4 w-4" />
          Enviar por e-mail
        </button>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-line pt-4 text-sm text-muted">
        <span>
          Sem programa de e-mail? Escreva para{" "}
          <span className="select-all font-semibold text-bone">{site.contactEmail}</span>
        </span>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 border border-line px-3 py-1.5 font-semibold text-bone transition hover:border-bone/50"
        >
          {copied ? <Check className="h-4 w-4 text-cyan" /> : <Copy className="h-4 w-4" />}
          {copied ? "E-mail copiado" : "Copiar e-mail"}
        </button>
        <span role="status" aria-live="polite" className="w-full text-red empty:hidden">
          {error}
        </span>
      </div>
    </form>
  );
}
