"use client";
import { motion } from "framer-motion";
import { Briefcase, Key, Gift } from "lucide-react";
import trainingImg from "../assets/ai-training-session-with-diverse-professionals-lea.jpg"; 

export default function AITalentProgramSection() {
  const features = [
    {
      icon: Gift,
      title: "Hands-on Project Experience",
      description: "Real-world projects in LifeScience and AI/IT consulting",
    },
    {
      icon: Key,
      title: "Cutting-edge Tools",
      description: "Access to Generative AI and LLMs",
    },
    {
      icon: Briefcase,
      title: "Placement Support",
      description:
        "Job placement with leading healthcare and tech companies",
    },
  ];

  const technologies = [
    "AWS", "Docker", "Kubernetes", "Terraform", "Apache Airflow", "TensorFlow", "PyTorch", "JAX",
    "Transformers", "Scikit-learn", "OpenAI", "Anthropic Claude", "Mistral AI", "Hugging Face", "Ollama",
    "LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Instructor", "Pinecone", "Weaviate", "ChromaDB",
    "Qdrant", "Milvus", "Weights & Biases", "MLflow", "DVC", "ClearML", "Neptune", "Python", "JavaScript",
    "TypeScript", "SQL", "R", "React", "Next.js", "FastAPI", "Streamlit", "Gradio", "Apache Spark", "Kafka",
    "Snowflake", "dbt", "Databricks", "Vercel", "Supabase", "Prisma", "GraphQL", "Redis",
  ];

  return (
    <section className="py-24 px-6 lg:px-16 bg-gradient-to-br from-[#0B0D24] to-[#121633] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Building the Next <br />
            Generation of{" "}
            <span className="text-yellow-400">AI Leaders</span>
          </h2>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl">
            Our AI Talent Development Programs bridge the gap between theory and real-world
            application. Whether you're an aspiring AI professional or a corporate team, our courses provide:
          </p>

          {/* Features */}
          <div className="space-y-5 mb-10">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-400/10 border border-yellow-500/40 text-yellow-400 rounded-lg">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <h4 className="font-semibold text-lg mb-3 text-white">
            Technologies We Teach:
          </h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-[12px] rounded-full bg-yellow-500/10 border border-yellow-400/20 text-yellow-400 hover:bg-yellow-500/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all">
              Join Our Training Program
            </button>
            <button className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-white transition-all">
              Sign Up for Waitlist
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={trainingImg}
              alt="AI Talent Development Program"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
