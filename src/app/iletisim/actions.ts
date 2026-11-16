"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "email" | "message" | "consent", string>>;
  /** Echoed back so React's post-action form reset doesn't wipe the user's input. */
  values?: Record<"name" | "phone" | "email" | "subject" | "message", string>;
};

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: bots fill hidden fields, humans don't.
  if (formData.get("website")) return { status: "success", message: "Talebiniz alındı." };

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const errors: ContactState["errors"] = {};
  if (name.length < 3) errors.name = "Lütfen adınızı ve soyadınızı giriniz.";
  if (!/^[0-9+()\s-]{10,}$/.test(phone)) errors.phone = "Lütfen geçerli bir telefon numarası giriniz.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "E-posta adresi geçersiz görünüyor.";
  if (message.length < 20) errors.message = "Lütfen talebinizi en az 20 karakterle kısaca açıklayınız.";
  if (!consent) errors.consent = "Devam etmek için aydınlatma metnini onaylamanız gerekir.";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Lütfen işaretli alanları kontrol ediniz.",
      errors,
      values: { name, phone, email, subject, message },
    };
  }

  // TODO: connect a mail provider (e.g. Resend, SMTP via nodemailer) and send to site.email.
  console.info("[contact]", { name, phone, email, subject, length: message.length });

  return {
    status: "success",
    message: "Talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.",
  };
}
