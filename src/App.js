import React from "react";
import "./index.css";

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
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Sam_Altman_cropped.jpg",
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

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {leaders.map((leader) => (
        <div key={leader.name} className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <img src={leader.image} alt={leader.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-1">{leader.name}</h2>
            <h3 className="text-gray-500 text-sm mb-3">{leader.title}</h3>
            <p className="mb-3 text-gray-700">"{leader.quote}"</p>
            <a href={leader.source} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
