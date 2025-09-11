'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Hamilton
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/templates"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <Link
              href="/templates"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25"
            >
              Browse Templates
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-sm border-t border-white/10">
              <Link
                href="/templates"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Templates
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/customization"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Customization
              </Link>
              <div className="pt-2">
                <Link
                  href="/customization"
                  className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

