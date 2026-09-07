import Image from 'next/image';
import Link from 'next/link';

const products = {
  'smart-switches': {
    name: 'Smart switches',
    image: '/images/products/climate-panel.png',
    alt: 'Black wall-mounted climate control panel',
    description: 'Refined control points for lighting, scenes and everyday routines.',
  },
  'control-panels': {
    name: 'Climate control panels',
    image: '/images/products/climate-panel.png',
    alt: 'Black air-conditioning control panel on a white wall',
    description: 'Quiet, precise control for air-conditioning and whole-home comfort.',
  },
  'smart-door-locks': {
    name: 'Smart door locks',
    image: '/images/products/smart-lock.png',
    alt: 'Premium black smart door lock with fingerprint reader',
    description: 'Keyless access with fingerprint, PIN, card and remote entry.',
  },
  'voice-assistant': {
    name: 'Voice assistant pods',
    image: '/images/products/voice-pod.png',
    alt: 'White voice assistant pod with a soft cyan light ring',
    description: 'Natural voice control for scenes, music, climate and daily routines.',
  },
  'video-doorbells': {
    name: 'Video doorbells',
    image: '/images/products/video-doorbell.png',
    alt: 'Matte black video doorbell beside a timber front door',
    description: 'See, speak to and secure your entrance from wherever you are.',
  },
} as const;

export function generateStaticParams(){return Object.keys(products).map(slug=>({slug}))}

export default async function Product({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=products[slug as keyof typeof products] ?? products['smart-switches'];
  return <main>
    <section className="detail-hero"><div className="container"><span className="eyebrow">PRODUCT · REQUEST INSTALLATION</span><h1 className="font-display">{product.name}</h1><p className="detail-hero-intro">{product.description}</p></div></section>
    <section className="detail-body"><div className="container product-detail-layout">
      <div className="product-detail-media"><Image src={product.image} alt={product.alt} width={1200} height={1500} priority /></div>
      <div className="product-detail-copy"><p>A considered component for a connected Zenith environment. Compatibility, installation and final specification are confirmed during consultation.</p><div className="cards"><div className="card"><h3>Key features</h3><p>Reliable control, clean installation and room to scale.</p></div><div className="card"><h3>Compatibility</h3><p>Selected to work with your wider home automation architecture.</p></div><div className="card"><h3>Installation</h3><p>Request a professional site assessment and installation plan.</p></div></div><div style={{marginTop:50,display:'flex',gap:12,flexWrap:'wrap'}}><Link className="button primary" href="/contact">Request installation →</Link><Link className="button" href="/products">All products</Link></div></div>
    </div></section>
  </main>
}
