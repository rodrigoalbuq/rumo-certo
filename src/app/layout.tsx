import type { Metadata } from "next";
import { cookies } from 'next/headers';
import Header from '@/app/components/Header';
import Script from 'next/script';
import Footer from '@/app/components/Footer';
import '@/app/styles/globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Rumo Certo - Portal de Viagens",
  description: "Descubra os melhores destinos turísticos do Brasil",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme')?.value || null;
  const effectiveTheme: 'dark' | 'light' = themeCookie === 'dark' ? 'dark' : 'light';
  return (
    <html lang="pt-BR" suppressHydrationWarning data-theme={effectiveTheme}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var m = document.cookie.match(/(?:^|;\s*)theme=(dark|light)/);
              var stored = m ? m[1] : null;
              var theme = stored === 'dark' || stored === 'light' ? stored : 'light';
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {}
          })();
        ` }} />
      </head>
      <body className="antialiased">
        <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
          <Script id="header-interactions" strategy="afterInteractive">
            {`
              (function(){
                try {
                  var btn = document.getElementById('theme-toggle');
                  if (btn) {
                    var getTheme = function(){
                      var t = document.documentElement.getAttribute('data-theme');
                      return t === 'dark' ? 'dark' : 'light';
                    };
                    var updateBtn = function(next){
                      btn.textContent = next === 'light' ? '🌙' : '☀️';
                      btn.setAttribute('aria-label', 'Alternar para tema ' + (next==='light'?'escuro':'claro'));
                    };
                    var setTheme = function(next){
                      document.documentElement.setAttribute('data-theme', next);
                      try { document.cookie = 'theme='+next+'; path=/; max-age=31536000; samesite=lax'; } catch {}
                      updateBtn(next);
                    };
                    updateBtn(getTheme());
                    btn.addEventListener('click', function(){
                      var next = getTheme() === 'light' ? 'dark' : 'light';
                      setTheme(next);
                    });
                  }

                  var menuBtn = document.getElementById('menu-toggle');
                  var nav = document.getElementById('nav-principal');
                  if (menuBtn && nav) {
                    menuBtn.addEventListener('click', function(){
                      var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
                      var next = !expanded;
                      menuBtn.setAttribute('aria-expanded', String(next));
                      if (next) {
                        nav.setAttribute('data-open','true');
                      } else {
                        nav.removeAttribute('data-open');
                      }
                    });
                  }
                } catch (e) {}
              })();
            `}
          </Script>
        </div>
      </body>
    </html>
  );
}
