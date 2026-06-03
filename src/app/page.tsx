"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Heart, Leaf, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "The Heritage",          id: "#about"},
        {
          name: "The Collection",          id: "#products"},
        {
          name: "Artisans & Values",          id: "#features"},
        {
          name: "Journal",          id: "#blog"},
        {
          name: "Concierge",          id: "#contact"},
      ]}
      brandName="Adey Luxury"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "plain"}}
      title="Adey Luxury: Handcrafted Heritage, Modern Elegance"
      description="Discover an exclusive collection of Ethiopian traditional attire and artisanal goods, meticulously crafted to tell stories of legacy and sophistication. Experience quiet luxury where ancient traditions meet contemporary design."
      kpis={[
        {
          value: "100+",          label: "Generations of Craftsmanship"},
        {
          value: "100%",          label: "Ethically Sourced Materials"},
        {
          value: "50+",          label: "Artisan Partnerships"},
      ]}
      enableKpiAnimation={false}
      buttons={[
        {
          text: "Explore The Collection",          href: "#products"},
        {
          text: "Discover Our Heritage",          href: "#about"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-woman-reading-tarot-home_23-2150273209.jpg"
      imageAlt="Elegant model wearing traditional Ethiopian attire"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-glad-dark-skinned-woman-with-big-dark-eyes-thick-eyebrows-smiling-broadly-demonstrating-her-perfect-white-teeth-wearing-scarf-head-elegant-dress-posing-against-grey-concrete-wall_273609-7746.jpg",          alt: "Community Member 1"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-black-young-man-wearing-african-traditional-red-colorful-clothes_627829-4953.jpg",          alt: "Community Member 2"},
        {
          src: "http://img.b2bpic.net/free-photo/serious-ethnic-curly-young-female-t-shirt-studio_23-2148183333.jpg",          alt: "Community Member 3"},
        {
          src: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2624.jpg",          alt: "Community Member 4"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-posing-traditional-african-attire-outdoors_23-2150572627.jpg",          alt: "Community Member 5"},
      ]}
      avatarText="Join our community of discerning patrons"
      marqueeItems={[
        {
          type: "text-icon",          text: "Authentic Craftsmanship",          icon: Sparkles,
        },
        {
          type: "text",          text: "Global Shipping"},
        {
          type: "text-icon",          text: "Ethical Sourcing",          icon: Leaf,
        },
        {
          type: "text",          text: "Bespoke Services"},
        {
          type: "text-icon",          text: "Cultural Heritage",          icon: Heart,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="The Heritage Behind Adey"
      description="Adey is more than a brand; it's a journey through Ethiopia's rich cultural tapestry. Each piece is a testament to the skilled hands of artisans, preserving ancient techniques while embracing a vision of modern luxury. We celebrate the intricate beauty and profound stories woven into every thread."
      bulletPoints={[
        {
          title: "Generational Craftsmanship",          description: "Honoring age-old techniques passed down through families."},
        {
          title: "Sustainable Practices",          description: "Commitment to eco-conscious sourcing and production."},
        {
          title: "Cultural Preservation Initiatives",          description: "Actively supporting and promoting Ethiopian heritage arts."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-making-origami-with-japanese-paper_23-2149048364.jpg"
      imageAlt="Ethiopian artisan weaving traditional fabric"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      animationType="blur-reveal"
      features={[
        {
          title: "Direct Artisan Partnerships",          description: "Fair collaborations ensuring artisans receive equitable compensation and recognition for their craft.",          imageSrc: "http://img.b2bpic.net/free-photo/group-diverse-teens-young-people-doing-activities-together-celebrating-world-youth-skills-day_23-2151478270.jpg",          imageAlt: "Hands exchanging handcrafted fabric"},
        {
          title: "Sustainable Material Sourcing",          description: "Utilizing locally sourced, environmentally friendly materials that honor both tradition and nature.",          imageSrc: "http://img.b2bpic.net/free-photo/threads-sewing-accessories-basket-top-view_23-2148827173.jpg",          imageAlt: "Close up of luxury raw cotton fibers"},
        {
          title: "Cultural Preservation Initiatives",          description: "Investing in programs that educate and empower the next generation of Ethiopian weavers and designers.",          imageSrc: "http://img.b2bpic.net/free-photo/colorful-texture-background_53876-32080.jpg",          imageAlt: "Ancient Ethiopian pattern designs in a book"},
      ]}
      title="Our Commitment to Authenticity"
      description="We ensure every Adey piece carries the spirit of its origin. From carefully selected materials to verified artisan partnerships, our process guarantees unparalleled heritage authentication and ethical luxury."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="blur-reveal"
      products={[
        {
          id: "prod-1",          name: "Shemma Tunic Dress",          price: "Inquire",          imageSrc: "http://img.b2bpic.net/free-photo/traveler-cute-asian-woman-white-dress-walking-tropical-beach-pretty-woman-enjoying-vacations_273443-3850.jpg",          imageAlt: "Model wearing a traditional Ethiopian Shemma Tunic Dress",          priceButtonProps: {
            text: "Inquire About Bespoke"},
        },
        {
          id: "prod-2",          name: "Habesha Kemis Scarf",          price: "Inquire",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-red-manila-shawl-fringes_23-2148235430.jpg",          imageAlt: "Close-up of a handwoven Habesha Kemis Scarf",          priceButtonProps: {
            text: "Inquire About Bespoke"},
        },
        {
          id: "prod-3",          name: "Amhara Silver Pendant",          price: "Inquire",          imageSrc: "http://img.b2bpic.net/free-photo/handmade-small-wooden-spoons-village-museum-bucharest-romania_1268-21638.jpg",          imageAlt: "Intricate Amhara Silver Pendant Necklace",          priceButtonProps: {
            text: "Inquire About Bespoke"},
        },
        {
          id: "prod-4",          name: "Gonder Shirt for Men",          price: "Inquire",          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-black-african-american-man-green-velvet-jacket-his-shoulders-black-hat-background-old-vintage-house-with-arch-columns_627829-3561.jpg",          imageAlt: "Man wearing a traditional Ethiopian Gonder Shirt",          priceButtonProps: {
            text: "Inquire About Bespoke"},
        },
        {
          id: "prod-5",          name: "Afro-Basket Weave",          price: "Inquire",          imageSrc: "http://img.b2bpic.net/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585743.jpg",          imageAlt: "Handwoven Ethiopian basket home decor",          priceButtonProps: {
            text: "Inquire About Bespoke"},
        },
        {
          id: "prod-6",          name: "Jebena Coffee Set",          price: "Inquire",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-cup-blurred-background-dark-with-garlands_169016-17292.jpg",          imageAlt: "Traditional Ethiopian Jebena coffee ceremony set",          priceButtonProps: {
            text: "Inquire About Bespoke"},
        },
      ]}
      title="The Collection"
      description="Step into our curated lookbook, where each garment and accessory is presented as an art piece. Explore timeless designs that blend tradition with quiet luxury, designed for the discerning individual."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t-1",          name: "Lila Mekonnen",          date: "September 2023",          title: "A True Piece of Art",          quote: "The craftsmanship of my Shemma dress is simply unparalleled. It’s more than clothing; it’s a wearable story, elegant and authentic. Adey Luxury truly delivers on its promise of quiet luxury.",          tag: "Attire",          avatarSrc: "http://img.b2bpic.net/free-photo/positive-excited-young-woman-showing-thumbs-up-having-fun_1262-14331.jpg",          avatarAlt: "Lila Mekonnen",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-reading-tarot-home_23-2150273209.jpg",          imageAlt: "elegant ethiopian woman portrait studio"},
        {
          id: "t-2",          name: "Dr. Elias Tesfaye",          date: "August 2023",          title: "Exceptional Service and Quality",          quote: "I commissioned a bespoke Gonder shirt, and the experience was flawless from inquiry to delivery. The quality is superb, and the personalized service felt truly concierge-level. Highly recommended.",          tag: "Bespoke",          avatarSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1551.jpg",          avatarAlt: "Dr. Elias Tesfaye",          imageSrc: "http://img.b2bpic.net/free-photo/woman-making-origami-with-japanese-paper_23-2149048364.jpg",          imageAlt: "elegant ethiopian woman portrait studio"},
        {
          id: "t-3",          name: "Sofia Hassan",          date: "July 2023",          title: "Connecting to Heritage",          quote: "Wearing Adey makes me feel connected to my roots in the most elegant way. The details, the fabric, the story—it all contributes to a truly luxurious and meaningful experience.",          tag: "Heritage",          avatarSrc: "http://img.b2bpic.net/free-photo/african-american-woman-violet-dress-cap-posed-outdoor_627829-2125.jpg",          avatarAlt: "Sofia Hassan",          imageSrc: "http://img.b2bpic.net/free-photo/group-diverse-teens-young-people-doing-activities-together-celebrating-world-youth-skills-day_23-2151478270.jpg",          imageAlt: "elegant ethiopian woman portrait studio"},
        {
          id: "t-4",          name: "Samuel Getachew",          date: "June 2023",          title: "Beyond Expectations",          quote: "The Amhara pendant I acquired is exquisite. Its subtle beauty and profound cultural significance make it a cherished piece. Adey Luxury understands true value.",          tag: "Jewelry",          avatarSrc: "http://img.b2bpic.net/free-photo/african-american-business-man-suit_1303-15071.jpg",          avatarAlt: "Samuel Getachew",          imageSrc: "http://img.b2bpic.net/free-photo/threads-sewing-accessories-basket-top-view_23-2148827173.jpg",          imageAlt: "elegant ethiopian woman portrait studio"},
        {
          id: "t-5",          name: "Zahara Ahmed",          date: "May 2023",          title: "Timeless Elegance",          quote: "Every piece from Adey exudes a timeless elegance. It’s a breath of fresh air in a fast-fashion world, a brand dedicated to enduring beauty and genuine artistry.",          tag: "Design",          avatarSrc: "http://img.b2bpic.net/free-photo/friendly-afro-man-traditional-yellow-clothes-restaurant-hold-cap-hand_627829-1082.jpg",          avatarAlt: "Zahara Ahmed",          imageSrc: "http://img.b2bpic.net/free-photo/colorful-texture-background_53876-32080.jpg",          imageAlt: "elegant ethiopian woman portrait studio"},
      ]}
      title="Voices of Adey"
      description="Hear from our discerning patrons about their experience with Adey, where exceptional artistry meets impeccable service and a deep connection to cultural heritage."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="blur-reveal"
      title="The Adey Journal"
      description="Delve deeper into the stories of Ethiopian culture, the artistry of traditional textiles, and the inspirations behind our collections. Our journal offers insights into heritage, style, and sustainable luxury."
      blogs={[
        {
          id: "blog-1",          category: "Heritage",          title: "The Art of Ethiopian Weaving: A Timeless Tradition",          excerpt: "Explore the intricate techniques and cultural significance behind Ethiopia's rich weaving heritage, passed down through generations.",          imageSrc: "http://img.b2bpic.net/free-photo/fabric-texture-background_1385-1935.jpg",          imageAlt: "Traditional Ethiopian weaving patterns",          authorName: "Selam Kebede",          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-camera-holding-her-digital-pad-seated_1098-20727.jpg",          date: "November 15, 2023"},
        {
          id: "blog-2",          category: "Style",          title: "Modern Silhouettes, Ancient Soul: Styling Adey Attire",          excerpt: "Discover how to seamlessly integrate Adey Luxury's traditional garments into contemporary wardrobes for a sophisticated, unique look.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-braids-portrait_23-2151428196.jpg",          imageAlt: "Model wearing modern Ethiopian attire",          authorName: "Lulit Demisse",          authorAvatar: "http://img.b2bpic.net/free-photo/confident-young-man-walking-european-city-street_158595-4722.jpg",          date: "October 28, 2023"},
        {
          id: "blog-3",          category: "Culture",          title: "The Elegance of Ethiopian Coffee Ceremony",          excerpt: "A deep dive into the revered Ethiopian coffee ceremony, a ritual embodying hospitality, community, and intricate artisanal crafts.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-medieval-queen-with-chalice-poison_23-2150306059.jpg",          imageAlt: "Ethiopian coffee ceremony with traditional jebena",          authorName: "Fitsum Woldemichael",          authorAvatar: "http://img.b2bpic.net/free-photo/woman-drinking-healthy-tea_23-2151800769.jpg",          date: "September 10, 2023"},
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "What is the process for bespoke sizing?",          content: "Our bespoke sizing process begins with a personal consultation to understand your unique measurements and preferences. We then create a custom pattern to ensure a perfect fit, providing updates throughout the crafting journey."},
        {
          id: "faq-2",          title: "How do you ensure authenticity of your products?",          content: "Every Adey product comes with a heritage authentication certificate, detailing its origin, the artisan's profile, and the materials used. We maintain direct partnerships with our artisans for full transparency."},
        {
          id: "faq-3",          title: "What are your shipping policies?",          content: "We offer complimentary worldwide shipping for all orders. Delivery times vary based on location and the bespoke nature of certain items. Detailed tracking information will be provided upon dispatch."},
        {
          id: "faq-4",          title: "How should I care for my traditional garments?",          content: "Each garment comes with specific care instructions. Generally, we recommend dry cleaning or gentle hand washing with cold water to preserve the delicate fabrics and intricate embroidery."},
        {
          id: "faq-5",          title: "Can I return or exchange bespoke items?",          content: "Due to the custom nature of bespoke items, they are generally non-returnable. However, we offer alterations to ensure satisfaction. Please contact our concierge service for details on specific cases."},
        {
          id: "faq-6",          title: "Do you offer international consultations?",          content: "Yes, our concierge team provides virtual consultations globally to discuss bespoke orders, sizing, and any other inquiries you may have, ensuring a personalized experience no matter your location."},
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common inquiries about our bespoke services, product care, shipping, and the Adey Luxury experience. For further assistance, our concierge team is always available."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Connect"
      title="Your Personal Concierge"
      description="For bespoke inquiries, special requests, or personalized assistance, our team is at your service. Connect with Adey Luxury for an unparalleled experience."
      inputPlaceholder="Enter your email for exclusive updates"
      buttonText="Submit Inquiry"
      termsText="By submitting, you agree to receive communications from Adey Luxury and our privacy policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "The Collection",              href: "#products"},
            {
              label: "Bespoke Services",              href: "#contact"},
            {
              label: "New Arrivals",              href: "#products"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "Our Heritage",              href: "#about"},
            {
              label: "Artisans & Values",              href: "#features"},
            {
              label: "The Journal",              href: "#blog"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQs",              href: "#faq"},
            {
              label: "Contact Concierge",              href: "#contact"},
            {
              label: "Shipping & Returns",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      logoText="Adey Luxury"
      copyrightText="© 2024 Adey Luxury. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
