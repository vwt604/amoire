const BUNDLES = [
  {
    numeral: 'I',
    name: 'The First Night Away',
    occasion: 'Evening · Arrival · First night',
    tagline: 'A new environment asks something of your skin before it gives anything back.',
    copy: 'This set does the work of arrival — calming, settling, preparing you for wherever you\'ve landed.',
    price: '$195',
    includes: 'Calm Serum · Balance Lotion · Barrier Serum',
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-barrier.png?v=1777870060',
    imageAlt: 'Calm Serum — for reactive skin, redness, and first signs of sensitivity',
  },
  {
    numeral: 'II',
    name: 'The Long-Haul Recovery Set',
    occasion: 'Evening · Repair · After a long journey',
    tagline: 'For the nights when your skin needs more than maintenance.',
    copy: 'Recycled air. Lost hours. A body that has crossed too many timezones too many times. This set is for the nights when your skin needs recovery.',
    price: '$215',
    includes: 'Replenish Serum · Restore Oil · Shield Balm',
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-restore.png?v=1777611006',
    imageAlt: 'Restore Oil — for compromised barrier recovery overnight',
  },
  {
    numeral: 'III',
    name: 'The Morning After',
    occasion: 'Morning · Reset · The day after',
    tagline: 'Whatever yesterday asked of you, today begins clean.',
    copy: 'A gentle cleanse, a light layer of hydration, and you\'re ready — for the meeting, the flight, the next place.',
    price: '$195',
    includes: 'Reset Cleanser · Clarify Gel · Renew Oil',
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-clarify.png?v=1777611006',
    imageAlt: 'Clarify Gel — lightweight hydration for the morning reset',
  },
];

export function meta() {
  return [{title: 'Amoire — Folio'}];
}

export function loader() {
  return {};
}

export default function Design3Folio() {
  return (
    <div style={{background: '#F4EFE8', minHeight: '100vh', color: '#1C1714'}}>
      <style>{`
        .folio-hero-image {
          background: linear-gradient(135deg, #D4C8B8 0%, #C4B8A8 30%, #B8A898 60%, #A89888 100%);
        }
        .folio-bundle-btn:hover { background: #1C1714 !important; color: #F4EFE8 !important; }
        .folio-bundle-btn { transition: background 220ms ease, color 220ms ease; }
        .folio-concierge-link:hover { letter-spacing: 0.28em !important; }
        .folio-concierge-link { transition: letter-spacing 300ms ease; }
        a:focus-visible, button:focus-visible { outline: 2px solid #3A4A38; outline-offset: 4px; }
        @media (max-width: 900px) {
          .folio-hero { grid-template-columns: 1fr !important; }
          .folio-hero-image { min-height: 60vw !important; }
          .folio-hero-text { padding: 3rem 2rem !important; }
          .folio-bundle-entry { grid-template-columns: 2.5rem 1fr !important; }
          .folio-bundle-img-col { display: none !important; }
          .folio-concierge-inner { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto !important; } }
      `}</style>

      {/* Hero: split screen */}
      <section
        className="folio-hero"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        {/* Left: text */}
        <div
          className="folio-hero-text"
          style={{
            padding: '6rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: '1px solid #D8CEBC',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#B8A99A',
                marginBottom: '4rem',
              }}
            >
              Welcome
            </p>
          </div>

          <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                margin: '0 0 1.5rem',
                color: '#1C1714',
              }}
            >
              Skincare for where you are right now.
            </h1>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.8rem',
                color: '#7A6B62',
                lineHeight: 1.85,
                maxWidth: '38ch',
                marginBottom: '3rem',
                fontWeight: 300,
              }}
            >
              Another city. Another season. Your skin knows the difference — and so do we. Three sets, built for three guest moments.
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <a
                href="#sets"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sets')?.scrollIntoView({behavior: 'smooth'});
                }}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#1C1714',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{display: 'inline-block', width: '2rem', height: '1px', background: '#1C1714'}} />
                Find your set
              </a>
              <a
                href="/concierge"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#B8A99A',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{display: 'inline-block', width: '2rem', height: '1px', background: '#B8A99A'}} />
                Not sure where to start?
              </a>
            </div>
          </div>

          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              color: '#B8A99A',
              marginTop: '2rem',
            }}
          >
            Amoire
          </p>
        </div>

        {/* Right: image */}
        <div
          className="folio-hero-image"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative texture overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(160deg, rgba(244,239,232,0.08) 0%, transparent 50%, rgba(28,23,20,0.15) 100%)',
            }}
          />
          {/* Bottom brand mark */}
          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              right: '2.5rem',
              textAlign: 'right',
            }}
          >
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(28,23,20,0.5)',
              }}
            >
              Est. for every arrival
            </p>
          </div>
        </div>
      </section>

      {/* Section header */}
      <div
        style={{
          borderTop: '3px solid #1C1714',
          borderBottom: '1px solid #D8CEBC',
          padding: '1.25rem 4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.85rem',
            fontStyle: 'italic',
            color: '#1C1714',
            margin: 0,
          }}
        >
          The Sets
        </p>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#B8A99A',
            margin: 0,
          }}
        >
          Three occasions · Three sets
        </p>
      </div>

      {/* Bundles */}
      <section id="sets" style={{padding: '0 0 4rem'}}>
        {BUNDLES.map((bundle, i) => (
          <div
            key={bundle.numeral}
            className="folio-bundle-entry"
            style={{
              display: 'grid',
              gridTemplateColumns: '3rem 1fr 380px',
              borderBottom: '1px solid #D8CEBC',
            }}
          >
            {/* Numeral column */}
            <div
              style={{
                borderRight: '1px solid #D8CEBC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2.5rem 0',
              }}
            >
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  color: '#B8A99A',
                  writingMode: 'vertical-rl',
                  letterSpacing: '0.1em',
                }}
              >
                {bundle.numeral}
              </span>
            </div>

            {/* Text column */}
            <div style={{padding: '2.5rem 3rem 2.5rem 2.5rem', borderRight: '1px solid #D8CEBC'}}>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.55rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#B8A99A',
                  marginBottom: '0.75rem',
                  marginTop: 0,
                }}
              >
                {bundle.occasion}
              </p>

              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  margin: '0 0 1rem',
                  color: '#1C1714',
                }}
              >
                {bundle.name}
              </h2>

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: '#4A3F38',
                  margin: '0 0 1.5rem',
                  maxWidth: '50ch',
                }}
              >
                {bundle.copy}
              </p>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.6rem',
                  color: '#B8A99A',
                  letterSpacing: '0.1em',
                  margin: 0,
                }}
              >
                {bundle.includes}
              </p>
            </div>

            {/* Image + CTA column */}
            <div
              className="folio-bundle-img-col"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  background: '#EDE5D8',
                }}
              >
                <img
                  src={bundle.image}
                  alt={bundle.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div
                style={{
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #D8CEBC',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: '#1C1714',
                  }}
                >
                  {bundle.price}
                </span>
                <button
                  className="folio-bundle-btn"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    background: 'transparent',
                    border: '1px solid #1C1714',
                    padding: '0.6rem 1.1rem',
                    cursor: 'pointer',
                    color: '#1C1714',
                  }}
                  aria-label={`Add ${bundle.name} to bag`}
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Concierge */}
      <section
        style={{
          background: '#1C1714',
          padding: '7rem 4rem',
        }}
      >
        <div
          className="folio-concierge-inner"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <div>
            <div
              style={{
                width: '3rem',
                height: '2px',
                background: '#B8A99A',
                marginBottom: '2rem',
              }}
            />
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                color: '#F4EFE8',
                margin: '0 0 1.5rem',
              }}
            >
              A concierge for your skin, wherever you've arrived.
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.8rem',
                color: '#7A6B62',
                lineHeight: 1.85,
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              Tell us where you are — not just the city, but the state of things. We'll suggest what your skin needs tonight.
            </p>
            <a
              href="/concierge"
              className="folio-concierge-link"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#B8A99A',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <span>Start the consultation</span>
              <span style={{display: 'inline-block', width: '2rem', height: '1px', background: '#B8A99A'}} />
            </a>
          </div>

          <div
            style={{
              borderLeft: '1px solid rgba(184,169,154,0.15)',
              paddingLeft: '4rem',
            }}
          >
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#3A3530',
                marginBottom: '1.25rem',
              }}
            >
              Sample recommendation
            </p>
            <blockquote
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                lineHeight: 1.85,
                color: '#5A4E48',
                margin: 0,
                borderLeft: 'none',
                padding: 0,
              }}
            >
              "A new place always asks something of your skin before it gives anything back. The First Night Away Set. The Calm Serum first, then the Balance Lotion. Nothing more tonight."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
