import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import salesIllustration from "@/assets/contact-sales.png";
import ipIllustration from "@/assets/contact-ip.png";
import careersIllustration from "@/assets/contact-careers.png";

const Contact = () => {
  const contactCards = [
    {
      title: "SALES SUPPORT",
      phone: "+91 7972012882",
      illustration: salesIllustration,
      bgColor: "bg-card"
    },
    {
      title: "IP ENQUIRY",
      phone: "+91 9665543800",
      illustration: ipIllustration,
      bgColor: "bg-card"
    },
    {
      title: "CAREERS",
      phone: "+91 9373324191",
      illustration: careersIllustration,
      bgColor: "bg-card"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-16 text-white">
            Contact? You are at right place.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Contact cards */}
            {contactCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} border border-border rounded-3xl p-8 relative overflow-hidden hover:shadow-lg transition-shadow`}
              >
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <div className="flex items-center gap-2 text-brand-orange mb-8">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{card.phone}</span>
                </div>
                <div className="mt-8">
                  <img 
                    src={card.illustration} 
                    alt={card.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}

            {/* Schedule a call */}
            <div className="bg-brand-white border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-white">SCHEDULE A CALL</h3>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-6 py-6 rounded-full w-fit"
              >
                <a
                  href="https://wa.me/9373324191"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  15 Minutes
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email us */}
            <div className="bg-foreground text-background rounded-3xl p-12 hover:shadow-lg transition-shadow">
              <h3 className="text-3xl font-bold mb-8">EMAIL US</h3>
              <div className="border-2 border-background rounded-full px-8 py-4 inline-block">
                <span className="text-lg font-semibold">
                hello@scalexstudios.com</span>
              </div>
            </div>

            {/* Spacer for layout */}
            <div></div>
          </div>

          {/* Alternative form link */}
          <div className="flex items-center gap-4 group cursor-pointer w-fit">
            <span className="text-2xl font-semibold"></span>
            <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
