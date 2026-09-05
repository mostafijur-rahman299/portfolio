import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { myProducts } from '@/lib/projects'

export function generateStaticParams() {
  return myProducts.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }))
}

function getProduct(slug: string) {
  return myProducts.find((p) => p.slug === slug && p.caseStudy)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}

  return {
    title: `${product.title} — Case Study`,
    description: product.description,
  }
}

export default async function ProductCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product || !product.caseStudy) notFound()

  const { caseStudy } = product

  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All projects
          </Link>

          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight">
              {product.title}
            </h1>
            <span className="tag-green shrink-0 mt-2">{product.status}</span>
          </div>

          <p className="text-base sm:text-lg text-secondary leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-14">
            <div className="flex flex-wrap gap-1.5">
              {product.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow ml-auto"
              >
                {product.linkLabel || 'Visit site'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="section-label !mb-3">
                <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
                The Problem
              </h2>
              <p className="text-base text-secondary leading-relaxed whitespace-pre-line">
                {caseStudy.problem}
              </p>
            </section>

            <section>
              <h2 className="section-label !mb-3">
                <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
                The Approach
              </h2>
              <p className="text-base text-secondary leading-relaxed whitespace-pre-line">
                {caseStudy.approach}
              </p>
            </section>

            <section>
              <h2 className="section-label !mb-3">
                <span className="w-4 h-px bg-muted-foreground/60 inline-block" />
                The Outcome
              </h2>
              <p className="text-base text-secondary leading-relaxed whitespace-pre-line">
                {caseStudy.outcome}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
