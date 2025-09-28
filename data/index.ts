export const DATA = {
  home: {
    hero: {
      name: "Wayland Branson",
      title: "Digital Marketer",
      subtitle:
        "Stacking skills, building momentum, and staying dangerous.",
    },
    skills: {
      sectionTitle: "Skills",
      sectionDescription:
        " Working across content, audio, search, and web tools to support clients and marketing teams.",
      overview: [
        {
          name: "Content Strategy",
          level: 85,
          icon: "lucide:layout-dashboard",
          color: "primary",
        },
        {
          name: "SEO & Metadata Optimization",
          level: 90,
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Audio & Video Production",
          level: 90,
          icon: "lucide:video",
          color: "success",
        },
        {
          name: "Site & Platform Management",
          level: 65,
          icon: "lucide:smartphone",
          color: "warning",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Testimonials",
      sectionDescription: "What employers and coworkers say about working together",
      items: [
        {
          id: 1,
          name: "MacKenzie Staples, MBA",
          role: "Catalog Manager & Artist Relations Coordinator at Atrium Music",
          content:
            "Wayland was an incredible asset to my team at Atrium! He easily adapted to ever-changing business needs and continually produced top-tier work throughout his internship.",
          avatar: "https://www.dropbox.com/scl/fi/viheo5nquaifd6ggq6r2u/MacKenzieStaples_Headshot.jpg?rlkey=nr54kb2q259x5zpnvf5b0rbae&st=szbd7jop&raw=1",
        },
        {
          id: 2,
          name: "Zac Babb",
          role: "Sports Director at North Texas Streaming Network",
          content:
            "Wayland is a professional in every sense of the word. His commitment to his craft, work ethic, and ability to collaborate with others make him a valuable asset in whatever project or profession he’s a part of.",
          avatar: "https://zacbabb.com/wp-content/uploads/2025/03/IMG_0074-1024x978.jpeg",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Wayland Branson",
      title: "Digital Marketer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQH_V1Lm-YSC3w/profile-displayphoto-scale_400_400/B56Zl5qVjtHAAo-/0/1758682766122?e=1761782400&v=beta&t=bxBDbfA0K_1xRbNiG81m52NM-G4gy9leOG3ElV68TmI",
      description: [
        "Marketing is a continuously evolving artform. It shifts with platforms, trends, and attention spans. I stay curious, keep learning, and adapt fast so I can create work that grabs attention.",
        "My work covers content strategy, SEO, writing, audio & visual production, and platform management. I’ve contributed to blogs, social content, web develpoment, and campaign launches.",
        "Right now, I’m focused on learning by doing, staying consistent, and building work I’m not embarrassed to show. That’s the bar.",
      ],
    },
    education: [
      {
        title: "The University of North Texas",
        date: "2021 - 2026",
        icon: "mdi:palette",
        description:
          "Studying Marketing with minors in Music and Entrepreneurship, and a concentration in classical guitar. This mix gives me a grounded understanding of how creative thinking and business strategy support each other. Through music I discovered my interest in promotion and audience connection, which now shapes the way I approach marketing as both an art and a discipline.",
      },
    ],
    experience: [
      {
        title: "Marketing Intern",
        date: "2025 - Present",
        icon: "mdi:briefcase",
        description:
          "At KazSource and Quiet Loud Studios, Wayland supports podcast production, digital marketing, and outreach strategy across multiple in-house and client-facing brands. His role blends creative execution with research and analytics to help grow visibility, streamline workflows, and improve content performance.",
      },
      {
        title: "Administrative Assitant",
        date: "2024 - 2025",
        icon: "mdi:monitor-dashboard",
        description:
          "At The Reecer Law Firm, Wayland supported legal operations and administrative workflow in a fast-paced estate planning and probate environment. His attention to detail and organizational skills helped maintain compliance and improve overall efficiency.",
      },
      {
        title: "Station Programmer & Director",
        date: "2023 - 2024",
        icon: "mdi:code-tags",
        description:
          "At 88.1 KNTU, Wayland led content programming, event planning, and digital strategy for one of North Texas’s most active college radio stations. His work combined audience analysis, creative production, and operations management to grow engagement and streamline internal systems.",
      },
      {
        title: "Business Development Specialist",
        date: "2022 - 2023",
        icon: "mdi:code-tags",
        description:
          "At Ruffalo Noel Levitz, Wayland was responsible for fundraising through direct outreach to alumni, parents, and university supporters. His communication skills and strategic approach helped drive measurable support for university initiatives.",
      },
    ],
    technologies: {
      "Content Creation and Design": {
        description:
          "I create compelling visual and written content that aligns with brand identity and resonates with target audiences.",
        tools: [
          { name: "Photoshop", icon: "devicon:photoshop" },
          { name: "Canva", icon: "simple-icons:canva" },
          { name: "Adobe Express", icon: "arcticons:adobe-express" },
          { name: "InDesign", icon: "iconoir:adobe-indesign" },
          { name: "Descript", icon: "logos:descript-icon" },
        ],
      },
      "Video & Audio Production": {
        description:
          "I produce and edit video and audio content for social media, podcasts, radio, and promotional campaigns.",
        tools: [
          { name: "Premier", icon: "skill-icons:premiere" },
          { name: "Ableton", icon: "skill-icons:ableton-dark" },
          { name: "Adobe Express", icon: "arcticons:adobe-express" },
          { name: "ProTools", icon: "simple-icons:protools" },
          { name: "Audacity", icon: "file-icons:audacity" },
        ],
      },
      "Social Media Marketing": {
        description:
          "I manage multi-platform campaigns, from short-form video to long-form storytelling, to grow brand presence.",
        tools: [
          { name: "TikTok", icon: "ic:baseline-tiktok" },
          { name: "Instagram", icon: "skill-icons:instagram"},
          { name: "YouTube", icon: "logos:youtube-icon" },
          { name: "LinkedIn", icon: "skill-icons:linkedin" },
          { name: "X", icon: "pajamas:twitter" }, 
          { name: "WordPress", icon: "skill-icons:wordpress" },
        ],
      },
      "Analytics & Optimization": {
        description:
          "I track, analyze, and optimize campaigns using data-driven insights to improve reach, engagement, and conversions.",
        tools: [
          { name: "Google Analytics", icon: "devicon:google" },
          { name: "Google Search Console", icon: "logos:google-search-console" },
          { name: "Meta Business Suite", icon: "logos:meta-icon" },
          { name: "TikTok Analytics", icon: "logos:tiktok-icon" },
          { name: "YouTube Studio Analytics", icon: "simple-icons:youtubestudio" },
        ],
      },
      "Web & Digital Platforms": {
        description:
          "I work within modern web environments to update, maintain, and tailor marketing websites using contemporary tools and frameworks.",
        tools: [
          { name: "Next.js", icon: "nonicons:next-16" },
          { name: "GitHub", icon: "skill-icons:github-dark" },
          { name: "Vercel", icon: "skill-icons:vercel-dark" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Portfolio Features",
    sectionDescription:
      "Descriptions of Some of my Recent Projects",
    work: [
      {
        id: 1,
        title: "Entrepreneur Perspectives",
        description:
          "Entrepreneur Perspectives is a podcast for and about entrepreneurs. I run content and distribution across TikTok, YouTube, Instagram, and web. I've generated steady gains on TikTok across views, followers, and likes.",
        image: "https://www.dropbox.com/scl/fi/x7uvli0uwxm4t61w0twxt/EP-logo.png?rlkey=i55yqimk7dq8dsbv5bcjah8wj&raw=1",
        gallery: [
          "https://www.dropbox.com/scl/fi/0byndxfu5bu5xxz5cn0aj/EP-views-Wayland-Branson.png?rlkey=w1hxpq4o7map2nftsrlmwnfp8&raw=1",
          "https://www.dropbox.com/scl/fi/pt8cgwb4mhz7yidwoqbdf/EP-Followers-Wayland-Branson.png?rlkey=q23ecg0cvbr6lv1uxptf09fyx&raw=1",
          { type: "video", url: "https://www.tiktok.com/@entrepreneurperspectives/video/7546739462814829854?is_from_webapp=1&sender_device=pc&web_id=7551471361529660958" },
        ],
        category: "Campaigns",
        details:
          "I help manage Entrepreneur Perspectives from production to publishing. I publish episodes, cut short-form clips, write titles and descriptions, design graphics and thumbnails, schedule posts, and maintain the weekly calendar. I tune strategy per platform across TikTok, YouTube Shorts, Instagram, and the website, and I track results to guide what we make next. My biggest win is turning TikTok into a steady driver of views, followers, and likes. All materials shown are the property of QuietLoud Studios and used with permission.",
        github: "https://kazsource.com",
        live: "https://www.tiktok.com/@entrepreneurperspectives",
        tech: [
          { name: "Photoshop", icon: "devicon:photoshop" },
          { name: "WordPress", icon: "skill-icons:wordpress" },
          { name: "Descript", icon: "logos:descript-icon" },
          { name: "Perplexity", icon: "logos:perplexity-icon" },
        ],
      },
      {
        id: 2,
        title: "SportsE Media",
        description:
          "SportsE Media is a sports news and production brand. I create short videos and graphics, engage the community, and use topical TikToks targeted to specific fan groups that consistently outperform baseline content.",
        image: "https://www.dropbox.com/scl/fi/wpjyx832ktiyywh7lqix9/SE-Logo.png?rlkey=6pd1g73egjoh4nqhh81150pr9&st=r57kvivd&raw=1",
        gallery: [
          "https://www.dropbox.com/scl/fi/glqqo09wliiidlvlpl2fw/SE-Likes-Wayland-Branson.png?rlkey=52aj217o126tke7ni0cwvpqzn&raw=1",
          "https://www.dropbox.com/scl/fi/12uqxgzw9lkb147xk7iit/SE-Views-Wayland-Branson.png?rlkey=xuht7el4g29r8r4ozfridee76&raw=1",
          "https://www.dropbox.com/scl/fi/a9r87srhq3ufxs35gptq3/SE-LinkedIn-Wayland-Branson.png?rlkey=wjpv7naolq44nzlkjcj3aeh82&raw=1",
          { type: "video", url: "https://www.tiktok.com/@sportsemedia/video/7547790995916623134" },
        ],
        category: "Campaigns",
        details:
          "I plan, produce, and publish across TikTok, YouTube, LinkedIn, and web. I edit clips, create graphics and thumbnails, write titles and captions, schedule posts, interact in comments, test topic, hook, and timing, time posts to real-world sports moments, repurpose blog posts for LinkedIn, and keep the site updated with publishing and SEO. The result is steady TikTok growth from topical, targeted posts and rising LinkedIn reach, engagement, and followers. All materials shown are the property of QuietLoud Studios and used with permission.",
        github: "https://sportsepreneur.com",
        live: "https://www.tiktok.com/@sportsemedia?lang=en",
        tech: [
          { name: "Photoshop", icon: "devicon:photoshop" },
          { name: "WordPress", icon: "skill-icons:wordpress" },
          { name: "Descript", icon: "logos:descript-icon" },
          { name: "Perplexity", icon: "logos:perplexity-icon" },
        ],
      },
      {
        id: 3,
        title: "88.1 KNTU",
        description:
          "Station Programmer at KNTU I organized promotions, led digital strategy, helped build a new website, interviewed artists, programmed the weekly playlist, and grew weekly listeners.",
        image: "https://www.dropbox.com/scl/fi/jcj3kbjetwbc5gz5nb4zo/kntu-4.png?rlkey=6yh6sadptx2br7sxntpp8upog&st=db4uh5ep&raw=1",
        gallery: [
          "https://www.dropbox.com/scl/fi/ok4a3v3vg4qt95nuva6i1/KNTU-Listners-Wayland-Branson.png?rlkey=s9dqrpnmjd3lbuk3uggwe2zgb&raw=1",
          "https://www.dropbox.com/scl/fi/yckqv9p4gax5u9iuxg0bs/kntu-5.png?rlkey=v1q6l1adb2vk5trwyr6kyiq7e&st=my9u4cji&raw=1",
          "https://www.dropbox.com/scl/fi/rdanuvkoh28e40l97q28m/3.-kntu.png?rlkey=syh782s5p9kqj8h8x3fn31jd4&st=n3episjy&raw=1",
          "https://www.dropbox.com/scl/fi/z4j42m50wdmuvsdsdrwbh/1-KNTU.png?rlkey=bhvmizywh9bn4bg6mpgjut5k3&st=91gy9r5y&raw=1",
        ],
        category: "Campaigns",
        details:
          "As Station Programmer at KNTU I planned and ran promotional events, managed digital channels and content, collaborated to design and launch a new website, booked and interviewed artists, designed and scheduled the weekly playlist, acted as the point person for underwriting requests, record labels, artists, and promoters, tracked results and refined programming and posts to lift weekly listeners.",
        github: "https://kntu.com",
        tech: [
          { name: "Adobe Photoshop", icon: "devicon:photoshop" },
          { name: "Adobe Premier", icon: "skill-icons:premiere" },
          { name: "HubSpot", icon: "simple-icons:hubspot" },
          { name: "Microsoft Excel", icon: "vscode-icons:file-type-excel" }, 
          { name: "ProTools", icon: "simple-icons:protools" },          
        ],
      },
      {
        id: 4,
        title: "Marketing Stories",
        description:
          "Blog essay on content marketing lessons from podcast production at QuietLoud Studios and KazSource showing how long form interviews become a supply chain of clips posts and campaigns and how consistency and listening drive results.",
        image: "https://quietloudstudios.com/wp-content/uploads/2025/08/What-I-Learned-from-Podcast-Content-Marketing.png",
        gallery: [
          "https://www.dropbox.com/scl/fi/tawd4ajmmub7svdbcw3fn/e-1.png?rlkey=ywhq6b3pu1l79exck35dles9y&st=xux24kqp&raw=1",
        ],
        category: "Blog",
        details:
          "Blog post covering clip production show notes distribution and multi platform promotion turning one conversation into TikTok YouTube Shorts LinkedIn X and website content learning to read tone and structure to find human moments testing hooks and timing engaging communities and focusing on earning trust before attention with steady craft growth even without a viral hit.",
        github: "https://quietloudstudios.com/podcast-content-marketing-lessons/",
        tech: [
          { name: "WordPress", icon: "ic:baseline-wordpress" },
          { name: "Microsoft Word", icon: "file-icons:microsoft-word" },
        ],
      },
      {
         id: 5,
        title: "TikTok Growth Strategy Case Study: Daily Posting vs Topical Content",
        description:
          "Blog case study on TikTok growth comparing daily posting with topical content across two KazSource channels and showing that timely audience targeted posts outperform baseline",
        image: "https://www.dropbox.com/scl/fi/piz9au4evxo8x7gw90uc2/TikTok-Growth-Strategy-Wayland-Branson.png?rlkey=ok5tqv5csz13bvvb63zzodi0y&raw=1",
        gallery: [
          "https://www.dropbox.com/scl/fi/uxduligyc09a5vjrzy6vb/SS-of-TikTok-Growth-Strategy-Wayland-Branson.png?rlkey=zfbwnodkp6hd14h38r0zdz8h7&raw=1",
        ],
        category: "Blog",
        details:
          "Blog post covering Aug 21 to Sep 17 2025 managing Entrepreneur Perspectives and SportsE Media with daily posting feed training clip editing titles tags and analytics including a Bills Ravens reaction that hit 918 views and the takeaway to anchor consistency and add topical moments for surges.",
        github: "https://quietloudstudios.com/tiktok-growth-strategy/",
        tech: [
          { name: "WordPress", icon: "ic:baseline-wordpress" },
          { name: "Microsoft Word", icon: "file-icons:microsoft-word" },
        ],
      },     
    ],
  },
  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134976.48178104624!2d-96.87198084999999!3d32.8203525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77f4f2a27%3A0x18d8f5b9b3a6f0e1!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1715709876543!5m2!1sen!2sus",
      address: "Dallas, TX",
    },
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Curious"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Wayland Branson",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "wayland@waylandbranson.com",
      phone: "+1 (469) 408-7059",
      location: "Dallas / Austin, TX",
    },
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/wayland-branson",
        icon: "mdi:linkedin",
      },
    ],
    services: ["Content Strategy", "SEO & Metadata Optimization", "Audio & Video Production", "Site & Platform Management"],
  },
} as const;
