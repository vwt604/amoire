const BUNDLES = [
  {
    name: 'The First Night Away',
    occasion: 'Arrival · First night',
    tagline: 'A new environment asks something of your skin before it gives anything back.',
    price: '$195',
    includes: ['Calm Serum', 'Balance Lotion', 'Barrier Serum'],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-barrier.png?v=1777870060',
    imageAlt: 'Calm Serum bottle on stone surface',
    accent: '#C8B49A',
  },
  {
    name: 'The Long-Haul Recovery Set',
    occasion: 'Repair · After a long journey',
    tagline: 'For the nights when your skin needs more than maintenance — it needs recovery.',
    price: '$215',
    includes: ['Replenish Serum', 'Restore Oil', 'Shield Balm'],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-restore.png?v=1777611006',
    imageAlt: 'Restore Oil bottle with warm lighting',
    accent: '#A8C4B0',
  },
  {
    name: 'The Morning After',
    occasion: 'Reset · The day after',
    tagline: 'Whatever yesterday asked of you, today begins clean.',
    price: '$195',
    includes: ['Reset Cleanser', 'Clarify Gel', 'Renew Oil'],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-clarify.png?v=1777611006',
    imageAlt: 'Clarify Gel on marble surface',
    accent: '#B4A8C0',
  },
];

export function meta() {
  return [{title: 'Amoire — Night'}];
}

export function loader() {
  return {};
}

export default function Design2Night() {
  return (
    <div style={{background: '#1C1714', minHeight: '100vh', color: '#F4EFE8'}}>
      <style>{`
        .night-card:hover .night-card-inner { transform: translateY(-4px); }
        .night-card-inner { transition: transform 300ms ease; }
        .night-add-btn { transition: background 250ms ease, color 250ms ease; }
        .night-add-btn:hover { background: #F4EFE8 !important; color: #1C1714 !important; }
        .night-cta-link { transition: color 200ms ease; }
        .night-cta-link:hover { color: #F4EFE8 !important; }
        a:focus-visible, button:focus-visible { outline: 2px solid #B8A99A; outline-offset: 4px; }
        @media (max-width: 767px) {
          .night-bundles-grid { grid-template-columns: 1fr !important; }
          .night-card-img { height: 260px !important; }
        }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto !important; } }
      `}</style>

      {/* Hero */}
      <section
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '6rem 3rem 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 60% 30%, rgba(184,169,154,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: '1px',
            height: '35%',
            background: 'linear-gradient(to bottom, transparent, rgba(184,169,154,0.3), transparent)',
          }}
        />

        <div style={{position: 'relative', zIndex: 1, maxWidth: '900px'}}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#B8A99A',
              marginBottom: '2rem',
            }}
          >
            Skincare for where you are right now.
          </p>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              margin: '0 0 2rem',
              color: '#F4EFE8',
            }}
          >
            Another city.<br />
            <em style={{fontStyle: 'italic', color: '#B8A99A'}}>Another season.</em>
          </h1>

          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#7A6B62',
              lineHeight: 1.8,
              maxWidth: '44ch',
              marginBottom: '3rem',
              fontWeight: 300,
            }}
          >
            Your skin knows the difference. Three sets, each built for a guest moment. Nothing more.
          </p>

          <div style={{display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap'}}>
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
                color: '#F4EFE8',
                textDecoration: 'none',
                border: '1px solid rgba(244,239,232,0.3)',
                padding: '0.75rem 1.5rem',
              }}
            >
              Find your set
            </a>
            <a
              href="/concierge"
              className="night-cta-link"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#7A6B62',
                textDecoration: 'none',
              }}
            >
              Not sure where to start?
            </a>
          </div>
        </div>
      </section>

      {/* Thin divider */}
      <div style={{height: '1px', background: 'rgba(184,169,154,0.15)', margin: '0 3rem'}} />

      {/* Bundles */}
      <section id="sets" style={{padding: '6rem 3rem 8rem'}}>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#4A3F38',
            marginBottom: '3.5rem',
          }}
        >
          The Sets
        </p>

        <div
          className="night-bundles-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}
        >
          {BUNDLES.map((bundle) => (
            <div key={bundle.name} className="night-card" style={{cursor: 'default'}}>
              <div
                className="night-card-inner"
                style={{
                  background: '#221E1A',
                  padding: '0',
                  overflow: 'hidden',
                }}
              >
                {/* Image */}
                <div
                  className="night-card-img"
                  style={{
                    height: '320px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#2A2420',
                  }}
                >
                  <img
                    src={bundle.image}
                    alt={bundle.imageAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.75,
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, #221E1A 0%, transparent 60%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      left: '1.5rem',
                      right: '1.5rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.55rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: bundle.accent,
                        margin: 0,
                      }}
                    >
                      {bundle.occasion}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div style={{padding: '1.5rem'}}>
                  <h2
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      margin: '0 0 0.75rem',
                      color: '#F4EFE8',
                    }}
                  >
                    {bundle.name}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.95rem',
                      fontStyle: 'italic',
                      lineHeight: 1.65,
                      color: '#7A6B62',
                      marginBottom: '1.25rem',
                      marginTop: 0,
                    }}
                  >
                    {bundle.tagline}
                  </p>

                  <div
                    style={{
                      borderTop: '1px solid rgba(184,169,154,0.12)',
                      paddingTop: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      {bundle.includes.map((item) => (
                        <p
                          key={item}
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.6rem',
                            color: '#4A3F38',
                            letterSpacing: '0.08em',
                            margin: '0.15rem 0',
                          }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                    <p
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.3rem',
                        color: '#B8A99A',
                        margin: 0,
                        fontWeight: 400,
                      }}
                    >
                      {bundle.price}
                    </p>
                  </div>

                  <button
                    className="night-add-btn"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      width: '100%',
                      padding: '0.8rem',
                      marginTop: '1.25rem',
                      background: 'transparent',
                      border: '1px solid rgba(244,239,232,0.2)',
                      color: '#F4EFE8',
                      cursor: 'pointer',
                    }}
                    aria-label={`Add ${bundle.name} to bag`}
                  >
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge */}
      <section
        style={{
          padding: '7rem 3rem 8rem',
          borderTop: '1px solid rgba(184,169,154,0.1)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#4A3F38',
              marginBottom: '1.5rem',
            }}
          >
            A concierge for your skin
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#F4EFE8',
              margin: '0 0 1.5rem',
            }}
          >
            Not sure which set?
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#5A4E48',
              lineHeight: 1.8,
              maxWidth: '40ch',
              marginBottom: '2.5rem',
              fontWeight: 300,
            }}
          >
            Tell us where you are — not just the city, but the state of things. We'll suggest what your skin needs tonight.
          </p>
          <a
            href="/concierge"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B8A99A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(184,169,154,0.4)',
              paddingBottom: '3px',
            }}
          >
            Start the consultation
          </a>
        </div>

        {/* Right: decorative quote */}
        <div
          style={{
            borderLeft: '1px solid rgba(184,169,154,0.15)',
            paddingLeft: '3rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: '#4A3F38',
            }}
          >
            "After a flight like that, your barrier has taken the worst of it. The Long-Haul Recovery Set. Tonight: the Restore Oil first, pressed gently into damp skin, then the Shield Balm to seal. You'll wake up recovered."
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#2E2520',
              marginTop: '1.5rem',
            }}
          >
            — The Concierge
          </p>
        </div>
      </section>
    </div>
  );
}
