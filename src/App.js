import React from "react";

const leaders = [
  {
    name: "Geoffrey Hinton",
    title: "Pioneer of Deep Learning",
    image: "https://tse2.mm.bing.net/th?id=OIF.%2Fz3Lhy3hjoCCcM%2BdpdaUdg&pid=Api",
    quote: "There's a 10–20% chance AI could surpass humans and lead to extinction. We need safety structures urgently.",
    source: "https://timesofindia.indiatimes.com/technology/tech-news/godfather-of-ai-geoffrey-hinton-agrees-with-dangerous-label-that-elon-musk-said-for-chatgpt-maker-openai-warns-/articleshow/120722596.cms"
  },
  {
    name: "Sam Altman",
    title: "CEO of OpenAI",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg/800px-Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg",
    quote: "We know how to build AGI. It could be developed this presidential term, and safety is critical.",
    source: "https://blog.samaltman.com/reflections"
  },
  {
    name: "Demis Hassabis",
    title: "CEO of Google DeepMind",
    image: "https://tse2.mm.bing.net/th?id=OIF.4sZfCwZchGEoqWs3u%2BwlBA&pid=Api",
    quote: "AGI could be here in 5–10 years, but society is not ready for its implications.",
    source: "https://www.windowscentral.com/software-apps/google-deepmind-ceo-says-agi-is-coming-society-not-ready"
  },
  {
    name: "Sundar Pichai",
    title: "CEO of Google & Alphabet",
    image: "https://tse1.mm.bing.net/th?id=OIF.AQNm%2BnhDO1NwziEWuYHj%2Fg&pid=Api",
    quote: "The AI progress path is steeper now; real AGI needs deeper breakthroughs.",
    source: "https://www.linkedin.com/posts/srinipagidyala_google-ceo-sundar-pichai-says-the-progress-activity-7270283730651344896-6qh6"
  },
  {
    name: "Satya Nadella",
    title: "CEO of Microsoft",
    image: "https://tse2.mm.bing.net/th?id=OIP.u57ra7uGXXGGE0wgKTdKCwHaEK&pid=Api",
    quote: "AGI claims today are benchmark hacks. True AGI should boost economies significantly.",
    source: "https://www.geekwire.com/2025/microsoft-ceo-satya-nadella-has-a-formula-to-gauge-the-long-term-success-of-ai-investments/"
  }
];

export default function AIGlobalVoices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">🌍 AI Leaders on AGI</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {leaders.map((leader) => (
          <div key={leader.name} className="w-full max-w-xs bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center hover:scale-105 transform transition duration-300">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-28 h-28 object-cover rounded-full shadow-lg border-4 border-white -mt-16"
            />
            <h2 className="text-xl font-semibold text-center mt-4 text-gray-900">{leader.name}</h2>
            <p className="text-sm text-gray-500 text-center mb-3">{leader.title}</p>
            <p className="text-sm text-gray-700 italic mb-4">"{leader.quote}"</p>
            <a
              href={leader.source}
              className="text-blue-600 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
