import { AnimateIn } from "@/components/AnimateIn";

export default function LegalPage() {
  const lastUpdated = "February 11, 2026";

  return (
    <div className="space-y-8 pt-[5px]">
      <AnimateIn variant="fade-in-up" className="space-y-2">
        <header>
          <p className="page-intro-eyebrow">Legal</p>
          <h1 className="page-title">Privacy policy & terms</h1>
          <p className="page-subtitle">
            The following information provides a high-level overview of how A&D
            Groups approaches privacy and the use of this website. These are
            template-style sections and should be reviewed by qualified legal
            counsel before production use.
          </p>
        </header>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-3 text-sm text-[#a1a1aa]">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#fafafa]">Privacy policy</h2>
        <p className="text-xs text-[#a1a1aa]">Last updated: {lastUpdated}</p>
        <p>
          A&D Groups (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your
          privacy and handling your personal data with care, transparency, and
          responsibility. This Privacy Policy explains how we collect, use, and
          protect information when you visit our website, contact us, or engage
          with our services.
        </p>
        <ul className="space-y-1.5 text-xs">
          <li>
            <span className="font-bold text-[#fafafa]">Information we collect: </span>
            We may collect information you voluntarily provide (such as name,
            email, company, and message details) as well as technical
            information (such as browser type, device information, IP address,
            and usage data) through cookies and similar technologies.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">How we use your information: </span>
            To respond to inquiries, provide and improve our services,
            personalize user experience, maintain website security, and comply
            with legal obligations.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Sharing of information: </span>
            We do not sell your personal data. We may share information within
            A&D Groups&apos; companies and with trusted service providers who
            assist us in operating our website or delivering services, under
            appropriate confidentiality and data protection obligations.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Data security: </span>
            We implement reasonable technical and organizational measures to
            protect your personal data from unauthorized access, loss, or misuse.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Your rights: </span>
            Depending on your jurisdiction, you may have rights to access,
            correct, or delete your personal data, or to object to certain
            processing activities. You may contact us via the details on our
            Contact page to exercise these rights.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Cookies: </span>
            Our website may use cookies to enhance your experience and analyze
            usage. You can manage your cookie preferences through your browser
            settings.
          </li>
        </ul>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" className="section-card space-y-3 text-sm text-[#a1a1aa]">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#fafafa]">
          Terms & conditions
        </h2>
        <p className="text-xs text-[#a1a1aa]">Last updated: {lastUpdated}</p>
        <p>
          By accessing or using the A&D Groups website (the &ldquo;Site&rdquo;), you
          agree to be bound by these Terms & Conditions (&ldquo;Terms&rdquo;). If you do
          not agree to these Terms, please do not use the Site.
        </p>
        <ul className="space-y-1.5 text-xs">
          <li>
            <span className="font-bold text-[#fafafa]">Use of the Site: </span>
            The Site and its content are provided for general information about
            A&D Groups and its companies. You agree to use the Site lawfully
            and not to engage in any activity that could damage, disable, or
            impair the Site or interfere with others&apos; use.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Intellectual property: </span>
            Unless otherwise stated, all content on the Site is owned or
            licensed by A&D Groups and protected by applicable intellectual
            property laws. You may not reproduce or use the content beyond
            personal, non-commercial purposes without our prior written consent.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">No professional or binding advice: </span>
            The information on the Site is for general informational purposes
            only and does not constitute professional, legal, financial, or
            other advice. Any specific engagement will be governed by separate
            written agreements.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Third-party links: </span>
            The Site may contain links to third-party websites. We are not
            responsible for the content, privacy practices, or terms of such
            external sites.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Limitation of liability: </span>
            To the maximum extent permitted by law, A&D Groups is not liable
            for any direct, indirect, incidental, or consequential damages
            arising from your use of, or inability to use, the Site.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Changes to terms & governing law: </span>
            We may update these Terms from time to time. Continued use of the
            Site after changes are posted constitutes your acceptance. These
            Terms shall be governed by the laws of the jurisdiction where
            A&D Groups is registered, unless otherwise required by local law.
          </li>
        </ul>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" className="section-card space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#fafafa]">Contact for legal inquiries</h2>
        <p className="text-sm text-[#a1a1aa]">
          For questions about this Privacy Policy or these Terms & Conditions, or to exercise your privacy rights, please contact us via the <a href="/contact" className="font-medium text-[#fafafa] underline underline-offset-4 hover:underline">Contact</a> page. Specify &ldquo;Legal / Privacy&rdquo; in your message so we can route your request to the appropriate team. We will respond in accordance with applicable law.
        </p>
      </AnimateIn>
    </div>
  );
}
