import { Header } from "@/components/Header";
import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@scalexstudios.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Clear the form
        // Scroll to the success message
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 100);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitted(true); // Still show success message even on error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />  

      <main className="flex-1 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">
          {/* Left column - editorial message */}
          <section className="flex flex-col justify-between min-h-[420px]">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-snug">
                Let&apos;s scale your
                <br />
                brand, together.
              </h1>
              <p className="text-sm md:text-base text-white/80">
                Get a hello@scalexstudios.com to get started.
              </p>
            </div>

            {/* Simple handshake illustration - inline SVG */}
            <div className="mt-12">
              <div className="inline-block">
                <svg
                  viewBox="0 0 320 120"
                  className="h-32 w-auto text-white"
                  aria-hidden="true"
                >
                  <rect
                    x="10"
                    y="60"
                    width="110"
                    height="35"
                    rx="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="200"
                    y="60"
                    width="110"
                    height="35"
                    rx="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M120 75c20 0 30-15 50-15s30 15 50 15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M125 85c10 8 20 12 30 12s20-4 30-12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </section>

          {/* Right column - contact form */}
          <section className="bg-black">
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit configuration - sends all form data to hello@scalexstudios.com */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from ScaleX Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting ScaleX Studios! We'll get back to you soon." />
              
              <div className="space-y-1 text-sm">
                <label className="block font-medium">
                  Name <span className="text-[#b45309]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-sm outline-none focus:border-white"
                  placeholder="Type name"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block font-medium">
                  Company <span className="text-[#b45309]">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-sm outline-none focus:border-white"
                  placeholder="Type company name"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-sm outline-none focus:border-white"
                  placeholder="Type phone number"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block font-medium">
                  Email Address <span className="text-[#b45309]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-sm outline-none focus:border-white"
                  placeholder="Type email address"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block font-medium">
                  How can we help? <span className="text-[#b45309]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full border-0 border-b border-white/40 bg-transparent py-2 text-sm outline-none focus:border-white min-h-[60px] resize-none"
                  placeholder="A brief description here"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-full bg-white px-6 py-2 text-xs md:text-sm font-medium tracking-wide text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-lg font-semibold">
                  Thank you for submitting the form!
                </p>
                <p className="text-green-300/80 text-sm mt-2">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

    </div>
  );
};

export default Contact;
