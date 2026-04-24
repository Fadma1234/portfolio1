import Link from "next/link";
import type { ReactElement } from "react";

export function Footer(): ReactElement {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p className="footer-name">Fadma Belkhouraf</p>
        <div className="footer-links">
          <Link href="https://github.com/Fadma1234" rel="noreferrer" target="_blank">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/fadma-belkhouraf/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
        <p className="footer-copy">© 2026 Fadma Belkhouraf. All rights reserved.</p>
      </div>
    </footer>
  );
}
