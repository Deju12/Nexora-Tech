"use client";

import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="At Nexora Tech, our expert team is poised to assist you with all your digital and IT transformation needs. From designing your first website to implementing enterprise-grade solutions, we provide responsive support, tailored guidance, and cutting-edge technology. Reach out today to discuss your project and start your journey toward innovation and growth."
          center
          mb="80px"
        />

        <div className="flex justify-center">
          <div className="aspect-video w-full max-w-3xl">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/NlOor5FX8oI"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
