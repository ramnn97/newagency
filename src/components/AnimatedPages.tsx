import sxsLogo from '../assets/sxs-logo.jpeg';

const AnimatedPages = () => {
  return (
    <div className="w-full bg-[#f5f5f7] text-slate-900">
      {/* Section 1: This is how we work */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl">
          {/* Big heading */}
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-black leading-tight mb-10 md:mb-16">
            This is how
            <br />
            we work
          </h2>

          {/* Three-column content */}
          <div className="grid gap-10 md:gap-16 md:grid-cols-3 text-sm md:text-base leading-relaxed text-slate-600">
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-bold text-slate-900">
                Background
              </h3>
              <p>
                Our team of creative experts specializes in delivering comprehensive branding
                solutions, from eye-catching logos and cohesive visual identities to cutting-edge
                websites, mobile apps, and engaging multimedia content
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-bold text-slate-900">
                What we do
              </h3>
              <p>
                We are a concept driven brand design agency that helps companies build, communicate
                and strengthen their brand identities and ideas.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-bold text-slate-900">
                Philosophy
              </h3>
              <p>
                We always work in regards to the final output, be it an application, website,
                product etc. Since final output is where the identity should thrive and not in an
                impressive design presentation or PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Collaboration / Not just a Brand */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid gap-8 lg:gap-10 lg:grid-cols-2">
          {/* Left card */}
          <article className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="https://ik.imagekit.io/99y1fc9mh/TIC_Globe/images/about/handshake%201.png"
                alt="Collaboration handshake"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Bottom-left text block */}
            <div className="p-7 md:p-9 space-y-4 md:space-y-5 mt-auto">
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Collaboration is Key
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                ScaleX is built on the belief that successful branding comes from a collaborative
                process. We work closely with our clients, ensuring they feel confident and
                supported at every stage of building their brand.
              </p>
            </div>
          </article>

          {/* Right card */}
          <article className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col">
            {/* Top-right text block */}
            <div className="flex-1 flex flex-col items-end text-right p-9 md:p-12 space-y-4 md:space-y-6">
              <div className="max-w-lg">
                <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
                  Not just a Brand
                </h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                  While logo, colours, and fonts are the entirety of their brand in some instances,
                  it&apos;s often just a small part of what the audience experiences.
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                  In fact, a well‑designed landing page can communicate much more than a logo alone.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-white">
              <img
                src="https://i.pinimg.com/736x/55/39/ca/5539ca8c75a79cdddc9353cd22c8772f.jpg"
                alt="Product detail watch"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Section 3: ScaleX Studios wordmark */}

    </div>
  );
};

export default AnimatedPages;