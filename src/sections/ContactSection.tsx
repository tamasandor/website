import { Github, Linkedin, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const socials = [
  { label: "GitHub", value: "@yourhandle", href: "https://github.com/yourhandle", Icon: Github },
  { label: "LinkedIn", value: "in/yourhandle", href: "https://linkedin.com/in/yourhandle", Icon: Linkedin },
  { label: "WhatsApp", value: "+1 555 000 0000", href: "https://wa.me/15550000000", Icon: MessageCircle },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full px-4 py-24 sm:px-8 sm:py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="w-full overflow-hidden">
          <h2
            className="hero-heading text-center font-black uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 9.5vw, 10rem)" }}
          >
            Let's build
            <br />
            something.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base opacity-60 sm:text-lg md:text-xl" style={{ color: "var(--page-fg)" }}>
            Want to connect?
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {socials.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm opacity-60 transition-opacity hover:opacity-100"
                style={{ color: "var(--page-fg)" }}
              >
                <Icon size={16} />
                {value}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
