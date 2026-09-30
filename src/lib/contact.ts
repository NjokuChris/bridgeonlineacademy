import { siteConfig } from "@/config/site";

/**
 * Returns a WhatsApp click-to-chat URL.
 * Pass an optional prefilled message; it will be URI-encoded automatically.
 *
 * @example
 * whatsappLink()
 * // "https://wa.me/2347056590881"
 *
 * @example
 * whatsappLink("Hello, I'd like to enrol my child.")
 * // "https://wa.me/2347056590881?text=Hello%2C%20I%27d%20like..."
 */
export function whatsappLink(message?: string): string {
  const base = siteConfig.contact.whatsapp.base;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns a `tel:` URL from an E.164 phone number string.
 *
 * @example
 * telLink("+2347056590881")
 * // "tel:+2347056590881"
 */
export function telLink(phone: string): string {
  return `tel:${phone}`;
}

/**
 * Returns a `mailto:` URL for the BOA contact email.
 * Pass an optional subject; it will be URI-encoded automatically.
 *
 * @example
 * mailtoLink()
 * // "mailto:Bridgeonlineacademy@gmail.com"
 *
 * @example
 * mailtoLink("Enrolment enquiry")
 * // "mailto:Bridgeonlineacademy@gmail.com?subject=Enrolment%20enquiry"
 */
export function mailtoLink(subject?: string): string {
  const email = siteConfig.contact.email;
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
