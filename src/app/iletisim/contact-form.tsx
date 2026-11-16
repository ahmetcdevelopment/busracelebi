"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Icon } from "@/components/icons";
import { practiceAreas } from "@/lib/practice-areas";
import { sendContact, type ContactState } from "./actions";

const initial: ContactState = { status: "idle" };

const fieldBase =
  "peer w-full border-0 border-b bg-transparent px-0 pb-3 pt-7 text-[1.05rem] text-navy-900 outline-none transition-colors placeholder:text-transparent focus:ring-0";
const labelBase =
  "pointer-events-none absolute left-0 top-7 origin-left text-navy-500 transition-all duration-300 peer-focus:top-1 peer-focus:text-[0.68rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-brass-700 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[0.68rem] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]";

function Field({
  name,
  label,
  type = "text",
  error,
  required,
  autoComplete,
  defaultValue,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
}) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={label}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${fieldBase} ${error ? "border-red-700" : "border-navy-900/20 focus:border-brass-500"}`}
      />
      <label htmlFor={name} className={labelBase}>
        {label}
        {required && <span className="text-brass-600"> *</span>}
      </label>
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const v = state.values;

  if (state.status === "success") {
    return (
      <div role="status" className="flex min-h-[28rem] flex-col items-start justify-center">
        <span className="grid size-16 place-items-center bg-brass-500 text-navy-950">
          <Icon name="check" className="size-7" strokeWidth={2} />
        </span>
        <h3 className="display mt-8 text-4xl md:text-5xl">Teşekkür ederiz.</h3>
        <p className="mt-4 max-w-md leading-8 text-navy-500">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-8">
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Web sitesi <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Field name="name" label="Ad Soyad" required autoComplete="name" error={state.errors?.name} defaultValue={v?.name} />
        <Field
          name="phone"
          label="Telefon"
          type="tel"
          required
          autoComplete="tel"
          error={state.errors?.phone}
          defaultValue={v?.phone}
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Field
          name="email"
          label="E-posta"
          type="email"
          autoComplete="email"
          error={state.errors?.email}
          defaultValue={v?.email}
        />
        <div className="relative">
          <label htmlFor="subject" className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy-500">
            Konu
          </label>
          <select
            id="subject"
            name="subject"
            key={v?.subject ?? ""}
            defaultValue={v?.subject ?? ""}
            className="mt-1 w-full appearance-none border-0 border-b border-navy-900/20 bg-transparent px-0 pb-3 pt-2 text-[1.05rem] text-navy-900 outline-none focus:border-brass-500 focus:ring-0"
          >
            <option value="">Seçiniz</option>
            {practiceAreas.map((a) => (
              <option key={a.slug} value={a.title}>
                {a.title}
              </option>
            ))}
            <option value="Diğer">Diğer</option>
          </select>
          <Icon name="arrow" className="pointer-events-none absolute bottom-4 right-0 size-4 rotate-90 text-brass-600" />
        </div>
      </div>

      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={v?.message}
          placeholder="Mesajınız"
          required
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={`${fieldBase} resize-none ${
            state.errors?.message ? "border-red-700" : "border-navy-900/20 focus:border-brass-500"
          }`}
        />
        <label htmlFor="message" className={labelBase}>
          Talebinizi kısaca açıklayınız<span className="text-brass-600"> *</span>
        </label>
        {state.errors?.message && (
          <p id="message-error" className="mt-2 text-xs text-red-700">
            {state.errors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-navy-700">
          <input
            type="checkbox"
            name="consent"
            aria-describedby={state.errors?.consent ? "consent-error" : undefined}
            className="mt-1 size-4 shrink-0 cursor-pointer accent-brass-600"
          />
          <span>
            Kişisel verilerimin{" "}
            <Link href="/kvkk" target="_blank" className="font-semibold text-brass-700 underline underline-offset-4">
              KVKK Aydınlatma Metni
            </Link>{" "}
            kapsamında, talebime dönüş yapılması amacıyla işlenmesini kabul ediyorum.
          </span>
        </label>
        {state.errors?.consent && (
          <p id="consent-error" className="mt-2 text-xs text-red-700">
            {state.errors.consent}
          </p>
        )}
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="border-l-2 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn btn-navy w-full disabled:opacity-60 md:w-auto">
        {pending ? "Gönderiliyor…" : "Talebi Gönder"}
        <Icon name="arrow" className="size-4" />
      </button>
    </form>
  );
}
