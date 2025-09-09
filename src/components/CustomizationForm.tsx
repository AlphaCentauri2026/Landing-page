'use client'

import { useState } from 'react'

interface FormData {
  package: string
  templates: string[]
  primaryColors: string[]
  businessName: string
  industry: string
  name: string
  email: string
  requirements: string
}

export default function CustomizationForm() {
  const [formData, setFormData] = useState<FormData>({
    package: '',
    templates: [],
    primaryColors: [],
    businessName: '',
    industry: '',
    name: '',
    email: '',
    requirements: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (name === 'templates') {
        setFormData(prev => ({
          ...prev,
          templates: checked 
            ? [...prev.templates, value]
            : prev.templates.filter(t => t !== value)
        }))
      } else if (name === 'primaryColors') {
        if (checked) {
          // Allow up to 3 colors
          setFormData(prev => {
            if (prev.primaryColors.length < 3) {
              return {
                ...prev,
                primaryColors: [...prev.primaryColors, value]
              }
            }
            return prev
          })
        } else {
          setFormData(prev => ({
            ...prev,
            primaryColors: prev.primaryColors.filter(c => c !== value)
          }))
        }
      }
    } else if (type === 'radio') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
    setFormData(prev => ({
      ...prev,
      templates: selectedOptions
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.package) {
      alert('Please select a package')
      return false
    }
    if (formData.templates.length === 0) {
      alert('Please select at least one template')
      return false
    }
    if (formData.primaryColors.length === 0) {
      alert('Please select at least one primary color')
      return false
    }
    if (!formData.businessName.trim()) {
      alert('Please enter your business name')
      return false
    }
    if (!formData.name.trim()) {
      alert('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      alert('Please enter your email address')
      return false
    }
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create email content
      const emailContent = `
New Template Customization Request

Package: ${formData.package}
Templates Selected: ${formData.templates.join(', ')}
Primary Colors: ${formData.primaryColors.join(', ')}
Business Name: ${formData.businessName}
Industry: ${formData.industry}
Contact Name: ${formData.name}
Email: ${formData.email}

Additional Requirements:
${formData.requirements || 'None specified'}

---
Submitted on: ${new Date().toLocaleString()}
      `.trim()

      // Create mailto link
      const subject = `Template Customization Request - ${formData.businessName}`
      const body = encodeURIComponent(emailContent)
      const mailtoLink = `mailto:CoreyHamiltondev@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          package: '',
          templates: [],
          primaryColors: [],
          businessName: '',
          industry: '',
          name: '',
          email: '',
          requirements: ''
        })
        setSubmitStatus('idle')
      }, 3000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mb-12 relative z-10">
      <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-2 text-center">Customize Your Template</h3>
        <p className="text-gray-300 mb-8 text-center">
          Choose your package and provide customization details. We&apos;ll send you a personalized quote and next steps.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Package Selection */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">Select Package *</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="relative cursor-pointer">
                <input 
                  type="radio" 
                  name="package" 
                  value="single" 
                  checked={formData.package === 'single'}
                  onChange={handleInputChange}
                  className="sr-only peer" 
                />
                <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-4 rounded-lg border border-white/10 peer-checked:border-blue-500 peer-checked:bg-blue-500/20 transition-all duration-300">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white">Single Template</h4>
                    <p className="text-2xl font-bold text-blue-400">$395</p>
                    <p className="text-sm text-gray-300">One template</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="radio" 
                  name="package" 
                  value="bundle" 
                  checked={formData.package === 'bundle'}
                  onChange={handleInputChange}
                  className="sr-only peer" 
                />
                <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-4 rounded-lg border border-white/10 peer-checked:border-purple-500 peer-checked:bg-purple-500/20 transition-all duration-300">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white">Template Bundle</h4>
                    <p className="text-2xl font-bold text-purple-400">$995</p>
                    <p className="text-sm text-gray-300">Five templates</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="radio" 
                  name="package" 
                  value="full-access" 
                  checked={formData.package === 'full-access'}
                  onChange={handleInputChange}
                  className="sr-only peer" 
                />
                <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-4 rounded-lg border border-white/10 peer-checked:border-green-500 peer-checked:bg-green-500/20 transition-all duration-300">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white">Full Access Pass</h4>
                    <p className="text-2xl font-bold text-green-400">$1,995</p>
                    <p className="text-sm text-gray-300">All templates</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Template Selection */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">Template Selection *</label>
            <select 
              name="templates" 
              multiple 
              value={formData.templates}
              onChange={handleTemplateChange}
              className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
            >
              <option value="abc-plumbing" className="bg-slate-700 text-white">ABC Plumbing</option>
              <option value="all-around-construction" className="bg-slate-700 text-white">All Around Construction</option>
              <option value="auto-repair" className="bg-slate-700 text-white">Auto Repair</option>
              <option value="dental-clinic" className="bg-slate-700 text-white">Dental Clinic</option>
              <option value="fitness-studio" className="bg-slate-700 text-white">Fitness Studio</option>
              <option value="fresh-clean" className="bg-slate-700 text-white">Fresh Clean Cleaning Service</option>
              <option value="le-cafe" className="bg-slate-700 text-white">Le Café</option>
              <option value="pet-clinic" className="bg-slate-700 text-white">Pet Clinic</option>
              <option value="stoneway-landscaping" className="bg-slate-700 text-white">Stoneway Landscaping</option>
              <option value="sweet-delites" className="bg-slate-700 text-white">Sweet Delites</option>
            </select>
            <p className="text-xs text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple templates</p>
            {formData.templates.length > 0 && (
              <p className="text-sm text-blue-400 mt-2">
                Selected: {formData.templates.length} template(s)
              </p>
            )}
          </div>

          {/* Primary Colors Selection */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-white">Select Primary Colors * (Choose up to 3)</label>
              {formData.primaryColors.length > 0 && (
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, primaryColors: [] }))}
                  className="text-sm text-red-400 hover:text-red-300 underline transition-colors duration-200"
                >
                  Clear All
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="relative cursor-pointer">
                <input 
                  type="checkbox" 
                  name="primaryColors" 
                  value="Red" 
                  checked={formData.primaryColors.includes('Red')}
                  onChange={handleInputChange}
                  disabled={!formData.primaryColors.includes('Red') && formData.primaryColors.length >= 3}
                  className="sr-only peer" 
                />
                <div className={`bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-lg border border-white/10 transition-all duration-300 ${
                  formData.primaryColors.includes('Red') 
                    ? 'border-red-400 ring-2 ring-red-400/20' 
                    : formData.primaryColors.length >= 3 && !formData.primaryColors.includes('Red')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-red-400/50'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-white font-medium">Red</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="checkbox" 
                  name="primaryColors" 
                  value="Blue" 
                  checked={formData.primaryColors.includes('Blue')}
                  onChange={handleInputChange}
                  disabled={!formData.primaryColors.includes('Blue') && formData.primaryColors.length >= 3}
                  className="sr-only peer" 
                />
                <div className={`bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-lg border border-white/10 transition-all duration-300 ${
                  formData.primaryColors.includes('Blue') 
                    ? 'border-blue-400 ring-2 ring-blue-400/20' 
                    : formData.primaryColors.length >= 3 && !formData.primaryColors.includes('Blue')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-blue-400/50'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-white font-medium">Blue</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="checkbox" 
                  name="primaryColors" 
                  value="Green" 
                  checked={formData.primaryColors.includes('Green')}
                  onChange={handleInputChange}
                  disabled={!formData.primaryColors.includes('Green') && formData.primaryColors.length >= 3}
                  className="sr-only peer" 
                />
                <div className={`bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-lg border border-white/10 transition-all duration-300 ${
                  formData.primaryColors.includes('Green') 
                    ? 'border-green-400 ring-2 ring-green-400/20' 
                    : formData.primaryColors.length >= 3 && !formData.primaryColors.includes('Green')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-green-400/50'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-white font-medium">Green</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="checkbox" 
                  name="primaryColors" 
                  value="Yellow" 
                  checked={formData.primaryColors.includes('Yellow')}
                  onChange={handleInputChange}
                  disabled={!formData.primaryColors.includes('Yellow') && formData.primaryColors.length >= 3}
                  className="sr-only peer" 
                />
                <div className={`bg-gradient-to-br from-yellow-500 to-yellow-700 p-4 rounded-lg border border-white/10 transition-all duration-300 ${
                  formData.primaryColors.includes('Yellow') 
                    ? 'border-yellow-400 ring-2 ring-yellow-400/20' 
                    : formData.primaryColors.length >= 3 && !formData.primaryColors.includes('Yellow')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-yellow-400/50'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-white font-medium">Yellow</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="checkbox" 
                  name="primaryColors" 
                  value="Orange" 
                  checked={formData.primaryColors.includes('Orange')}
                  onChange={handleInputChange}
                  disabled={!formData.primaryColors.includes('Orange') && formData.primaryColors.length >= 3}
                  className="sr-only peer" 
                />
                <div className={`bg-gradient-to-br from-orange-500 to-orange-700 p-4 rounded-lg border border-white/10 transition-all duration-300 ${
                  formData.primaryColors.includes('Orange') 
                    ? 'border-orange-400 ring-2 ring-orange-400/20' 
                    : formData.primaryColors.length >= 3 && !formData.primaryColors.includes('Orange')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-orange-400/50'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-white font-medium">Orange</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="checkbox" 
                  name="primaryColors" 
                  value="Purple" 
                  checked={formData.primaryColors.includes('Purple')}
                  onChange={handleInputChange}
                  disabled={!formData.primaryColors.includes('Purple') && formData.primaryColors.length >= 3}
                  className="sr-only peer" 
                />
                <div className={`bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-lg border border-white/10 transition-all duration-300 ${
                  formData.primaryColors.includes('Purple') 
                    ? 'border-purple-400 ring-2 ring-purple-400/20' 
                    : formData.primaryColors.length >= 3 && !formData.primaryColors.includes('Purple')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-purple-400/50'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-white font-medium">Purple</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="checkbox" 
                  name="primaryColors" 
                  value="Pink" 
                  checked={formData.primaryColors.includes('Pink')}
                  onChange={handleInputChange}
                  disabled={!formData.primaryColors.includes('Pink') && formData.primaryColors.length >= 3}
                  className="sr-only peer" 
                />
                <div className={`bg-gradient-to-br from-pink-500 to-pink-700 p-4 rounded-lg border border-white/10 transition-all duration-300 ${
                  formData.primaryColors.includes('Pink') 
                    ? 'border-pink-400 ring-2 ring-pink-400/20' 
                    : formData.primaryColors.length >= 3 && !formData.primaryColors.includes('Pink')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-pink-400/50'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-pink-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-white font-medium">Pink</p>
                  </div>
                </div>
              </label>
              
              <label className="relative cursor-pointer">
                <input 
                  type="checkbox" 
                  name="primaryColors" 
                  value="Cyan" 
                  checked={formData.primaryColors.includes('Cyan')}
                  onChange={handleInputChange}
                  disabled={!formData.primaryColors.includes('Cyan') && formData.primaryColors.length >= 3}
                  className="sr-only peer" 
                />
                <div className={`bg-gradient-to-br from-cyan-500 to-cyan-700 p-4 rounded-lg border border-white/10 transition-all duration-300 ${
                  formData.primaryColors.includes('Cyan') 
                    ? 'border-cyan-400 ring-2 ring-cyan-400/20' 
                    : formData.primaryColors.length >= 3 && !formData.primaryColors.includes('Cyan')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:border-cyan-400/50'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-white font-medium">Cyan</p>
                  </div>
                </div>
              </label>
            </div>
            {formData.primaryColors.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-blue-400 mb-2">
                  Selected Colors ({formData.primaryColors.length}/3):
                </p>
                <div className="flex flex-wrap gap-2">
                  {formData.primaryColors.map((color) => (
                    <div
                      key={color}
                      className="flex items-center gap-2 bg-slate-700/50 px-3 py-2 rounded-lg border border-white/10"
                    >
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: color === 'Red' ? '#ef4444' :
                                         color === 'Blue' ? '#3b82f6' :
                                         color === 'Green' ? '#22c55e' :
                                         color === 'Yellow' ? '#eab308' :
                                         color === 'Orange' ? '#f97316' :
                                         color === 'Purple' ? '#a855f7' :
                                         color === 'Pink' ? '#ec4899' :
                                         color === 'Cyan' ? '#06b6d4' : '#6b7280'
                        }}
                      ></div>
                      <span className="text-sm text-white">{color}</span>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          primaryColors: prev.primaryColors.filter(c => c !== color)
                        }))}
                        className="text-red-400 hover:text-red-300 transition-colors duration-200 ml-1"
                        title={`Remove ${color}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Business Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Business Name *</label>
              <input 
                type="text" 
                name="businessName" 
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Your business name"
                className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Industry</label>
              <input 
                type="text" 
                name="industry" 
                value={formData.industry}
                onChange={handleInputChange}
                placeholder="e.g., Healthcare, Construction, Restaurant"
                className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Your Name *</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Additional Requirements</label>
            <textarea 
              name="requirements" 
              value={formData.requirements}
              onChange={handleInputChange}
              rows={4}
              placeholder="Any specific customization requests, branding guidelines, or special features needed..."
              className="w-full bg-slate-700/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Processing...' : 'Get Customized Quote'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-400 mt-3 text-sm">
                ✓ Form submitted successfully! Your email client should open with the details.
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-red-400 mt-3 text-sm">
                ✗ There was an error submitting the form. Please try again.
              </p>
            )}
            
            <p className="text-sm text-gray-400 mt-3">
              We&apos;ll send your customization details and next steps to your email
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
