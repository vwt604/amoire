const BUNDLES = [
  {
    ref: 'AMR-001',
    name: 'The First Night Away',
    occasion: 'Evening · Arrival · First night',
    price: '$195',
    tagline: 'A new environment asks something of your skin before it gives anything back.',
    products: [
      {name: 'Calm Serum', note: 'Water-based · Day or night'},
      {name: 'Balance Lotion', note: 'Lotion serum · Day or night'},
      {name: 'Barrier Serum', note: 'Lotion serum · Day or night'},
    ],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-barrier.png?v=1777870060',
    imageAlt: 'Calm Serum — for reactive skin, redness, and first signs of sensitivity',
  },
  {
    ref: 'AMR-002',
    name: 'The Long-Haul Recovery Set',
    occasion: 'Evening · Repair · After a long journey',
    price: '$215',
    tagline: 'For the nights when your skin needs more than maintenance — it needs recovery.',
    products: [
      {name: 'Replenish Serum', note: 'Water-based · Day or night'},
      {name: 'Restore Oil', note: 'Oil-based · Night'},
      {name: 'Shield Balm', note: 'Barrier cream · Night'},
    ],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-restore.png?v=1777611006',
    imageAlt: 'Restore Oil — for compromised barrier recovery overnight',
  },
  {
    ref: 'AMR-003',
    name: 'The Morning After',
    occasion: 'Morning · Reset · The day after',
    price: '$195',
    tagline: 'Whatever yesterday asked of you, today begins clean.',
    products: [
      {name: 'Reset Cleanser', note: 'Cleanser · Day or night'},
      {name: 'Clarify Gel', note: 'Gel moisturiser · Day or night'},
      {name: 'Renew Oil', note: 'Oil-based · Night'},
    ],
    image: 'https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-clarify.png?v=1777611006',
    imageAlt: 'Clarify Gel — lightweight hydration for morning reset',
  },
];

export function meta() {
  return [{title: 'Amoire — The Brief'}];
}

export function loader() {
  return {};
}

export default function Design5Brief() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div style={{background: '#F4EFE8', minHeight: '100vh', color: '#1C1714'}}>
      <style>{`
        .brief-add-btn {
          transition: background 220ms ease, color 220ms ease;
        }
        .brief-add-btn:hover {
          background: #1C1714 !important;
          color: #F4EFE8 !important;
        }
        .brief-concierge-btn:hover {
          background: rgba(244,239,232,0.15) !important;
        }
        .brief-product-row:not(:last-child) {
          border-bottom: 1px solid rgba(184,169,154,0.2);
        }
        a:focus-visible, button:focus-visible { outline: 2px solid #3A4A38; outline-offset: 4px; }
        @media (max-width: 767px) {
          .brief-hero-layout { grid-template-columns: 1fr !important; }
          .brief-hero-image { display: none !important; }
          .brief-bundle-layout { grid-template-columns: 1fr !important; }
          .brief-bundle-image { display: none !important; }
          .brief-container { padding: 2rem 1.5rem !important; }
        }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto !important; } }
      `}</style>

      <div
        className="brief-container"
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '4rem 2rem 6rem',
        }}
      >
        {/* Masthead */}
        <div
          style={{
            borderTop: '2px solid #1C1714',
            borderBottom: '2px solid #1C1714',
            padding: '1rem 0',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '0',
          }}
        >
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.75rem',
              fontWeight: 400,
              letterSpacing: '0.06em',
              margin: 0,
              color: '#1C1714',
            }}
          >
            Amoire
          </h1>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B8A99A',
              margin: 0,
            }}
          >
            Skincare for where you are right now.
          </p>
        </div>

        {/* Document header */}
        <div
          style={{
            borderBottom: '1px solid #D8CEBC',
            padding: '1.25rem 0',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B8A99A',
                margin: '0 0 0.25rem',
              }}
            >
              Prepared
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.7rem',
                color: '#1C1714',
                margin: 0,
                fontWeight: 300,
              }}
            >
              {today}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B8A99A',
                margin: '0 0 0.25rem',
              }}
            >
              For
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.7rem',
                color: '#1C1714',
                margin: 0,
                fontWeight: 300,
              }}
            >
              Guests arriving tonight
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#B8A99A',
                margin: '0 0 0.25rem',
              }}
            >
              Subject
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.7rem',
                color: '#1C1714',
                margin: 0,
                fontWeight: 300,
              }}
            >
              Skincare sets
            </p>
          </div>
        </div>

        {/* Hero intro */}
        <div
          className="brief-hero-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 260px',
            gap: '3rem',
            alignItems: 'end',
            marginBottom: '5rem',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#B8A99A',
                marginBottom: '1.5rem',
              }}
            >
              §1 · Overview
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                margin: '0 0 1.5rem',
                color: '#1C1714',
              }}
            >
              Another city. Another season. Your skin knows the difference — and so do we.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.8rem',
                lineHeight: 1.9,
                color: '#7A6B62',
                maxWidth: '50ch',
                fontWeight: 300,
                marginBottom: '2rem',
              }}
            >
              The following sets have been prepared for the moments when your skin is adapting to something — a new city, a long flight, the morning after. Each set is occasion-specific. Select the one that describes where you are right now.
            </p>
            <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
              <a
                href="#brief-sets"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('brief-sets')?.scrollIntoView({behavior: 'smooth'});
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
                  gap: '0.5rem',
                }}
              >
                <span>Find your set</span>
                <span style={{display: 'inline-block', width: '1.5rem', height: '1px', background: '#1C1714'}} />
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
                }}
              >
                Not sure where to start?
              </a>
            </div>
          </div>

          <div
            className="brief-hero-image"
            style={{
              background: '#E8DFD4',
              aspectRatio: '3/4',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0987/6779/8577/files/product-shield.png?v=1777611006"
              alt="Amoire product — Shield Balm barrier cream"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Section header */}
        <div
          style={{
            borderTop: '1px solid #1C1714',
            paddingTop: '1.25rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B8A99A',
              margin: 0,
            }}
          >
            §2 · The Sets
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D8CEBC',
              margin: 0,
            }}
          >
            Three occasions
          </p>
        </div>

        {/* Bundles */}
        <div id="brief-sets" style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
          {BUNDLES.map((bundle, i) => (
            <div
              key={bundle.ref}
              style={{
                borderBottom: '1px solid #D8CEBC',
                paddingBottom: '3rem',
                marginBottom: '3rem',
              }}
            >
              {/* Bundle header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
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
                  Ref: {bundle.ref}
                </p>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#B8A99A',
                    margin: 0,
                  }}
                >
                  {bundle.occasion}
                </p>
              </div>

              <div
                className="brief-bundle-layout"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 200px',
                  gap: '2.5rem',
                  alignItems: 'start',
                }}
              >
                <div>
                  <h2
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      margin: '0 0 0.85rem',
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
                      lineHeight: 1.75,
                      color: '#5A4E48',
                      maxWidth: '52ch',
                      margin: '0 0 2rem',
                    }}
                  >
                    {bundle.tagline}
                  </p>

                  {/* Products table */}
                  <div
                    style={{
                      border: '1px solid #D8CEBC',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        padding: '0.6rem 1rem',
                        background: '#EDE5D8',
                        borderBottom: '1px solid #D8CEBC',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.55rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: '#B8A99A',
                          margin: 0,
                        }}
                      >
                        Product
                      </p>
                      <p
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.55rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: '#B8A99A',
                          margin: 0,
                        }}
                      >
                        Formulation
                      </p>
                    </div>
                    {bundle.products.map((p) => (
                      <div
                        key={p.name}
                        className="brief-product-row"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          padding: '0.75rem 1rem',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.7rem',
                            color: '#1C1714',
                            margin: 0,
                            fontWeight: 400,
                          }}
                        >
                          {p.name}
                        </p>
                        <p
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.65rem',
                            color: '#7A6B62',
                            margin: 0,
                            fontWeight: 300,
                          }}
                        >
                          {p.note}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.35rem',
                        fontWeight: 400,
                        color: '#1C1714',
                      }}
                    >
                      {bundle.price}
                    </span>
                    <button
                      className="brief-add-btn"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.6rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        background: 'transparent',
                        border: '1px solid #1C1714',
                        padding: '0.65rem 1.2rem',
                        cursor: 'pointer',
                        color: '#1C1714',
                      }}
                      aria-label={`Add ${bundle.name} to bag`}
                    >
                      Add to bag
                    </button>
                  </div>
                </div>

                <div
                  className="brief-bundle-image"
                  style={{
                    background: '#EDE5D8',
                    aspectRatio: '3/4',
                    overflow: 'hidden',
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
              </div>
            </div>
          ))}
        </div>

        {/* Concierge */}
        <div
          style={{
            borderTop: '1px solid #1C1714',
            paddingTop: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B8A99A',
              margin: 0,
            }}
          >
            §3 · Concierge
          </p>
        </div>

        <div
          style={{
            background: '#1C1714',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#F4EFE8',
                margin: '0 0 0.85rem',
              }}
            >
              A concierge for your skin, wherever you've arrived.
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.75rem',
                lineHeight: 1.85,
                color: '#5A4E48',
                fontWeight: 300,
                maxWidth: '46ch',
                marginBottom: 0,
              }}
            >
              If none of the three sets describe exactly where you are, the concierge will. Tell us your situation and we'll suggest what your skin needs tonight.
            </p>
          </div>
          <div>
            <a
              href="/concierge"
              className="brief-concierge-btn"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#F4EFE8',
                textDecoration: 'none',
                border: '1px solid rgba(244,239,232,0.2)',
                padding: '0.8rem 1.4rem',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                transition: 'background 200ms ease',
              }}
            >
              Start the consultation
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid #D8CEBC',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              color: '#B8A99A',
              margin: 0,
            }}
          >
            Amoire
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D8CEBC',
              margin: 0,
            }}
          >
            Skincare for where you are right now.
          </p>
        </div>
      </div>
    </div>
  );
}
