'use client'

import { FormEvent, useState } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function NewsletterForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Validate inputs are filled
    if (!nameValue.trim() || !emailValue.trim()) {
      setFormStatus('submitting')
      await new Promise((resolve) => setTimeout(resolve, 400))
      setFormStatus('error')
      return
    }

    setFormStatus('submitting')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate success/error (random for demo, in production this would be based on actual API response)
    const success = Math.random() > 0.3 // 70% success rate for demo

    if (success) {
      setFormStatus('success')
      setNameValue('')
      setEmailValue('')
    } else {
      setFormStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start max-lg:gap-2">
      <span className="block">newsletter</span>

      {(formStatus === 'idle' || formStatus === 'error' || formStatus === 'submitting') && (
        <>
          <div className="flex items-center gap-1">
            {nameValue && <span>[ x ]</span>}

            <input
              id="newsletter-name"
              type="text"
              name="name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="full name"
              className="bg-transparent focus:outline-none placeholder:text-main/70"
              disabled={formStatus === 'submitting'}
            />
          </div>

          <div className="flex items-center gap-1">
            {emailValue && <span>[ x ]</span>}

            <input
              id="newsletter-email"
              type="email"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="email address"
              className="bg-transparent focus:outline-none placeholder:text-main/70"
              disabled={formStatus === 'submitting'}
            />
          </div>

          <button type="submit" className="text-main/70 hover:text-text cursor-pointer" disabled={formStatus === 'submitting'}>
            {formStatus === 'submitting' ? 'Please wait...' : '[ subscribe ]'}
          </button>
        </>
      )}

      {formStatus === 'success' && (
        <div className="max-w-33">
          <span>Thank you! Your submission has been received!</span>
        </div>
      )}

      {formStatus === 'error' && (
        <span className="bottom-full absolute max-w-33 text-red-500 text-balance">Oops! Something went wrong while submitting the form.</span>
      )}
    </form>
  )
}
